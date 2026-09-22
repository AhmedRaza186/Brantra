'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_ITEMS } from '@/config/navigation';
import { BRAND } from '@/config/brand';
import { Settings } from 'lucide-react';

export function AppSidebar() {
  const pathname = usePathname();
  // Main nav items (excluding Settings & Profile which might go at the bottom)
  const mainItems = NAVIGATION_ITEMS.filter(item => item.label !== 'Settings' && item.label !== 'Profile');
  const settingsItem = NAVIGATION_ITEMS.find(item => item.label === 'Settings');

  return (
    <aside className="hidden lg:flex w-[110px] shrink-0 h-screen p-6 z-10 flex-col justify-center">
      <nav 
        className="w-[80px] h-full max-h-[900px] mx-auto flex-col flex items-center py-8 bg-canvas rounded-3xl shadow-premium border border-transparent" 
        aria-label="Desktop Navigation"
      >
        {/* Logo */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center mb-8 text-ink hover:scale-105 transition-transform cursor-pointer">
          <Image 
            src={BRAND.logoMarkPath}
            alt={`${BRAND.name} workspace`} 
            width={34} 
            height={34} 
            className="object-contain" 
          />
        </div>
        
        {/* Nav Items */}
        <div className="flex-1 flex flex-col items-center gap-4 w-full overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {mainItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            // Reusable class and content
            const content = (
              <>
                <Icon className={`h-6 w-6 stroke-[1.5] ${isActive ? '' : 'group-hover:scale-110 transition-transform'}`} aria-hidden="true" />
              </>
            );
            
            const baseClass = `group flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all focus-visible ${
              isActive 
                ? 'bg-ink text-white shadow-md hover:bg-ink/90' 
                : 'text-text-secondary hover:text-ink hover:bg-canvas hover:shadow-sm'
            } ${!item.available ? 'opacity-50 cursor-not-allowed' : ''}`;

            if (!item.available) {
              return (
                <button
                  key={item.label}
                  className={baseClass}
                  title={`${item.label} (Coming soon)`}
                  aria-label={`${item.label} (Coming soon)`}
                  aria-disabled="true"
                >
                  {content}
                </button>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={baseClass}
                title={item.label}
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
              >
                {content}
              </Link>
            );
          })}
        </div>

        {/* Footer Items */}
        <div className="mt-auto w-full flex flex-col items-center pt-8 relative gap-4">
          {/* Separator line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 border-t border-border/40"></div>
          
          {settingsItem && (
            settingsItem.available ? (
              <Link href={settingsItem.href} className="group flex h-12 w-12 items-center justify-center rounded-2xl transition-all text-text-secondary hover:text-ink hover:bg-canvas hover:shadow-sm focus-visible" title="Settings">
                <Settings className="h-6 w-6 stroke-[1.5] group-hover:scale-110 transition-transform" aria-label="Settings" />
              </Link>
            ) : (
              <button aria-disabled="true" className="group flex h-12 w-12 items-center justify-center rounded-2xl transition-all text-text-secondary hover:text-ink hover:bg-canvas hover:shadow-sm focus-visible opacity-50 cursor-not-allowed" title="Settings (Coming soon)">
                <Settings className="h-6 w-6 stroke-[1.5]" aria-label="Settings" />
              </button>
            )
          )}
        </div>
      </nav>
    </aside>
  );
}
