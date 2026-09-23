'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_ITEMS } from '../../../config/navigation.ts';

export function MobileNavigation() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const pathname = usePathname();

  const primaryItems = NAVIGATION_ITEMS.filter(item => item.isMobilePrimary);
  const moreItems = NAVIGATION_ITEMS.filter(item => item.isMobileMore);

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <nav 
        className="lg:hidden fixed bottom-6 left-4 right-4 z-50 flex items-center justify-around bg-navigation/95 backdrop-blur-md rounded-[28px] shadow-premium px-2 py-3.5 border border-white/5" 
        style={{ paddingBottom: 'calc(0.875rem + env(safe-area-inset-bottom)/2)' }}
        aria-label="Mobile Navigation"
      >
        {primaryItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          const content = (
            <>
              <Icon className="h-[22px] w-[22px]" aria-hidden="true" />
              <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
            </>
          );
          
          const baseClass = `flex flex-col items-center justify-center gap-1.5 w-full transition-nav focus-visible ${
            isActive ? 'text-accent scale-105' : 'text-surface-secondary/60 hover:text-white'
          } ${!item.available ? 'opacity-50 cursor-not-allowed' : ''}`;

          if (!item.available) {
            return (
              <button type="button"
                key={item.label}
                className={baseClass}
                title={`${item.label} (Coming soon)`}
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
              aria-current={isActive ? 'page' : undefined}
            >
              {content}
            </Link>
          );
        })}
        
        {/* More Button */}
        <button type="button"
          onClick={() => setIsMoreOpen(true)}
          className="flex flex-col items-center justify-center gap-1.5 w-full transition-nav text-surface-secondary/60 hover:text-white focus-visible"
          aria-expanded={isMoreOpen}
          aria-haspopup="true"
        >
          <Menu className="h-[22px] w-[22px]" aria-hidden="true" />
          <span className="text-[10px] font-medium tracking-wide">More</span>
        </button>
      </nav>

      {/* More Menu Modal */}
      {isMoreOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden flex flex-col justify-end">
          <div 
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMoreOpen(false)}
            aria-hidden="true"
          />
          <div 
            className="relative bg-surface rounded-t-2xl px-4 pt-4 pb-8 flex flex-col animate-reveal"
            style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}
            role="dialog"
            aria-modal="true"
            aria-label="More navigation options"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-section-heading text-ink">More</h2>
              <button type="button" 
                onClick={() => setIsMoreOpen(false)}
                className="p-2 rounded-full hover:bg-canvas text-text-secondary focus-visible"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-2">
              {moreItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                const baseClass = `flex items-center gap-3 p-3 rounded-lg hover:bg-canvas text-ink font-medium focus-visible ${isActive ? 'bg-canvas' : ''} ${!item.available ? 'opacity-50 cursor-not-allowed' : ''}`;
                
                const content = (
                  <>
                    <Icon className="h-5 w-5 text-text-secondary" /> {item.label}
                  </>
                );

                if (!item.available) {
                  return (
                    <button type="button" key={item.label} aria-disabled="true" className={baseClass} title={`${item.label} (Coming soon)`}>
                      {content}
                    </button>
                  );
                }

                return (
                  <Link key={item.label} href={item.href} className={baseClass} onClick={() => setIsMoreOpen(false)}>
                    {content}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
