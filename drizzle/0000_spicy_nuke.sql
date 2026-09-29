CREATE TYPE "public"."deal_stage" AS ENUM('inquiry', 'negotiating', 'brief', 'creating', 'review', 'approved', 'published', 'invoiced', 'paid', 'lost');--> statement-breakpoint
CREATE TYPE "public"."deliverable_status" AS ENUM('not_started', 'drafting', 'review', 'approved', 'published');--> statement-breakpoint
CREATE TYPE "public"."workspace_role" AS ENUM('owner', 'admin', 'member');--> statement-breakpoint
CREATE TABLE "brands" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"workspace_id" uuid NOT NULL,
	"name" text NOT NULL,
	"industry" text,
	"website" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"archived_at" timestamp with time zone,
	CONSTRAINT "brands_id_workspace_id_unique" UNIQUE("id","workspace_id")
);
--> statement-breakpoint
CREATE TABLE "deals" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"workspace_id" uuid NOT NULL,
	"brand_id" uuid NOT NULL,
	"title" text NOT NULL,
	"stage" "deal_stage" DEFAULT 'inquiry' NOT NULL,
	"deal_value_minor" integer,
	"currency" text DEFAULT 'USD' NOT NULL,
	"inquiry_source" text,
	"start_date" timestamp with time zone,
	"deadline" timestamp with time zone,
	"revision_allowance" integer,
	"usage_rights_scope" text,
	"usage_rights_duration_days" integer,
	"usage_rights_starts_at" timestamp with time zone,
	"usage_rights_ends_at" timestamp with time zone,
	"usage_rights_notes" text,
	"payment_terms_days" integer,
	"payment_terms_notes" text,
	"internal_notes" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"archived_at" timestamp with time zone,
	CONSTRAINT "deals_id_workspace_id_unique" UNIQUE("id","workspace_id"),
	CONSTRAINT "deals_deal_value_minor_check" CHECK ("deals"."deal_value_minor" >= 0),
	CONSTRAINT "deals_currency_check" CHECK ("deals"."currency" ~ '^[A-Z]{3}$'),
	CONSTRAINT "deals_revision_allowance_check" CHECK ("deals"."revision_allowance" >= 0),
	CONSTRAINT "deals_usage_rights_duration_days_check" CHECK ("deals"."usage_rights_duration_days" >= 0),
	CONSTRAINT "deals_payment_terms_days_check" CHECK ("deals"."payment_terms_days" >= 0),
	CONSTRAINT "deals_usage_rights_dates_check" CHECK ("deals"."usage_rights_ends_at" >= "deals"."usage_rights_starts_at")
);
--> statement-breakpoint
CREATE TABLE "deliverables" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"workspace_id" uuid NOT NULL,
	"deal_id" uuid NOT NULL,
	"title" text NOT NULL,
	"content_format" text NOT NULL,
	"status" "deliverable_status" DEFAULT 'not_started' NOT NULL,
	"due_at" timestamp with time zone,
	"publish_url" text,
	"revision_count" integer DEFAULT 0 NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "deliverables_revision_count_check" CHECK ("deliverables"."revision_count" >= 0),
	CONSTRAINT "deliverables_sort_order_check" CHECK ("deliverables"."sort_order" >= 0)
);
--> statement-breakpoint
CREATE TABLE "profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"full_name" text NOT NULL,
	"avatar_url" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "workspace_members" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"workspace_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"role" "workspace_role" NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "workspace_members_workspace_user_unique" UNIQUE("workspace_id","user_id")
);
--> statement-breakpoint
CREATE TABLE "workspaces" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"timezone" text DEFAULT 'UTC' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "brands" ADD CONSTRAINT "brands_workspace_id_workspaces_id_fk" FOREIGN KEY ("workspace_id") REFERENCES "public"."workspaces"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "deals" ADD CONSTRAINT "deals_brand_workspace_fk" FOREIGN KEY ("brand_id","workspace_id") REFERENCES "public"."brands"("id","workspace_id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "deliverables" ADD CONSTRAINT "deliverables_deal_workspace_fk" FOREIGN KEY ("deal_id","workspace_id") REFERENCES "public"."deals"("id","workspace_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "workspace_members" ADD CONSTRAINT "workspace_members_workspace_id_workspaces_id_fk" FOREIGN KEY ("workspace_id") REFERENCES "public"."workspaces"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "workspace_members" ADD CONSTRAINT "workspace_members_user_id_profiles_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "brands_workspace_id_name_idx" ON "brands" USING btree ("workspace_id","name");--> statement-breakpoint
CREATE INDEX "deals_workspace_id_stage_idx" ON "deals" USING btree ("workspace_id","stage");--> statement-breakpoint
CREATE INDEX "deals_workspace_id_deadline_idx" ON "deals" USING btree ("workspace_id","deadline");--> statement-breakpoint
CREATE INDEX "deals_workspace_id_brand_id_idx" ON "deals" USING btree ("workspace_id","brand_id");--> statement-breakpoint
CREATE INDEX "deliverables_workspace_id_deal_id_idx" ON "deliverables" USING btree ("workspace_id","deal_id");--> statement-breakpoint
CREATE INDEX "deliverables_workspace_id_status_due_at_idx" ON "deliverables" USING btree ("workspace_id","status","due_at");--> statement-breakpoint
CREATE INDEX "workspace_members_user_id_idx" ON "workspace_members" USING btree ("user_id");