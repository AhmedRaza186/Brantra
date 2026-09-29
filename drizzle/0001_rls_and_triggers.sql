-- Migration 0001: Triggers, RLS, Grants, and Auth Provisioning

-- 1. Shared updated_at trigger
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER 
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER trigger_workspaces_updated_at BEFORE UPDATE ON public.workspaces FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER trigger_brands_updated_at BEFORE UPDATE ON public.brands FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER trigger_deals_updated_at BEFORE UPDATE ON public.deals FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER trigger_deliverables_updated_at BEFORE UPDATE ON public.deliverables FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 2. FK to auth.users (Profiles)
ALTER TABLE public.profiles 
  ADD CONSTRAINT profiles_id_fkey 
  FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- 3. Atomic Auth Provisioning Trigger (SECURITY DEFINER)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER 
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_workspace_id uuid;
  v_full_name text;
BEGIN
  -- Handle missing full_name gracefully
  v_full_name := COALESCE(NULLIF(BTRIM(NEW.raw_user_meta_data ->> 'full_name'), ''), 'Creator');
  
  -- Create the profile
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (NEW.id, v_full_name, NEW.raw_user_meta_data->>'avatar_url');
  
  -- Create the personal workspace
  INSERT INTO public.workspaces (name, timezone)
  VALUES (v_full_name || '''s Workspace', 'UTC')
  RETURNING id INTO v_workspace_id;
  
  -- Create the owner membership
  INSERT INTO public.workspace_members (workspace_id, user_id, role)
  VALUES (v_workspace_id, NEW.id, 'owner');
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 4. Workspace Membership Helper (SECURITY DEFINER to avoid recursion)
CREATE OR REPLACE FUNCTION public.user_has_workspace_access(v_workspace_id uuid)
RETURNS BOOLEAN
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.workspace_members 
    WHERE workspace_id = v_workspace_id 
    AND user_id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql;

-- Restrict execution of the helper
REVOKE EXECUTE ON FUNCTION public.user_has_workspace_access(uuid) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.user_has_workspace_access(uuid) FROM anon;
GRANT EXECUTE ON FUNCTION public.user_has_workspace_access(uuid) TO authenticated;

-- 5. Row Level Security & Grants

-- Revoke unnecessary grants before adding minimum required grants
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM PUBLIC;
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM anon;
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM authenticated;

-- Minimum Grants for Data API (Schema access)
GRANT USAGE ON SCHEMA public TO anon, authenticated;

-- Explicit Table Grants for Authenticated Users Only
GRANT SELECT, UPDATE ON public.profiles TO authenticated;
GRANT SELECT ON public.workspaces TO authenticated;
GRANT SELECT ON public.workspace_members TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.brands TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.deals TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.deliverables TO authenticated;

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workspaces ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workspace_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deliverables ENABLE ROW LEVEL SECURITY;

-- Policies for Profiles
CREATE POLICY "Profiles are viewable by owner" 
  ON public.profiles FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Profiles can be updated by owner" 
  ON public.profiles FOR UPDATE 
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Policies for Workspaces
CREATE POLICY "Users can access their workspaces" 
  ON public.workspaces FOR SELECT
  USING (public.user_has_workspace_access(id));

-- Policies for Workspace Members
CREATE POLICY "Users can see workspace members" 
  ON public.workspace_members FOR SELECT
  USING (public.user_has_workspace_access(workspace_id));

-- Policies for Brands
CREATE POLICY "Users can access brands in their workspace" 
  ON public.brands FOR SELECT
  USING (public.user_has_workspace_access(workspace_id));

CREATE POLICY "Users can insert brands in their workspace" 
  ON public.brands FOR INSERT
  WITH CHECK (public.user_has_workspace_access(workspace_id));

CREATE POLICY "Users can update brands in their workspace" 
  ON public.brands FOR UPDATE
  USING (public.user_has_workspace_access(workspace_id))
  WITH CHECK (public.user_has_workspace_access(workspace_id));

CREATE POLICY "Users can delete brands in their workspace" 
  ON public.brands FOR DELETE
  USING (public.user_has_workspace_access(workspace_id));

-- Policies for Deals
CREATE POLICY "Users can access deals in their workspace" 
  ON public.deals FOR SELECT
  USING (public.user_has_workspace_access(workspace_id));

CREATE POLICY "Users can insert deals in their workspace" 
  ON public.deals FOR INSERT
  WITH CHECK (public.user_has_workspace_access(workspace_id));

CREATE POLICY "Users can update deals in their workspace" 
  ON public.deals FOR UPDATE
  USING (public.user_has_workspace_access(workspace_id))
  WITH CHECK (public.user_has_workspace_access(workspace_id));

CREATE POLICY "Users can delete deals in their workspace" 
  ON public.deals FOR DELETE
  USING (public.user_has_workspace_access(workspace_id));

-- Policies for Deliverables
CREATE POLICY "Users can access deliverables in their workspace" 
  ON public.deliverables FOR SELECT
  USING (public.user_has_workspace_access(workspace_id));

CREATE POLICY "Users can insert deliverables in their workspace" 
  ON public.deliverables FOR INSERT
  WITH CHECK (public.user_has_workspace_access(workspace_id));

CREATE POLICY "Users can update deliverables in their workspace" 
  ON public.deliverables FOR UPDATE
  USING (public.user_has_workspace_access(workspace_id))
  WITH CHECK (public.user_has_workspace_access(workspace_id));

CREATE POLICY "Users can delete deliverables in their workspace" 
  ON public.deliverables FOR DELETE
  USING (public.user_has_workspace_access(workspace_id));
