import { AppSidebar } from './AppSidebar.tsx';
import { MobileNavigation } from './MobileNavigation.tsx';
import { AppHeader } from './AppHeader.tsx';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-canvas relative z-0">
      {/* Global Ambient Glows for Depth */}
      <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" aria-hidden="true"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-surface-secondary/40 rounded-full blur-[150px] pointer-events-none -z-10" aria-hidden="true"></div>

      {/* Desktop Sidebar (hidden < lg) */}
      <AppSidebar />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden relative z-10">
        <MobileNavigation />
        <AppHeader />

        <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-10 pb-32 lg:pb-12 scroll-smooth">
          {children}
        </main>
      </div>
    </div>
  );
}
