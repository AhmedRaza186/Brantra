'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Bell, Check, LogOut, Plus, Search, Settings, User, X } from 'lucide-react';
import { BRAND } from '../../../config/brand';
import { campaigns } from '../../../data/mock-dashboard';

type Panel = 'search' | 'notifications' | 'new-deal' | 'profile' | null;

const notifications = [
  { id: 1, title: 'Aster Skin left feedback', detail: 'Revised cut requested 18 minutes ago', urgent: true },
  { id: 2, title: 'Morrow Coffee approval is pending', detail: 'A friendly follow-up is ready to send', urgent: false },
];

export function AppHeader() {
  const [panel, setPanel] = useState<Panel>(null);
  const [query, setQuery] = useState('');
  const [created, setCreated] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return campaigns;
    return campaigns.filter((campaign) =>
      `${campaign.brandName} ${campaign.deliverableFormat} ${campaign.stage}`.toLowerCase().includes(normalized)
    );
  }, [query]);

  useEffect(() => {
    if (!panel) {
      if (triggerRef.current) {
        triggerRef.current.focus();
        triggerRef.current = null;
      }
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPanel(null);
      
      // Focus trapping
      if (event.key === 'Tab' && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>;
        
        if (focusableElements.length === 0) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };
    
    globalThis.addEventListener('keydown', handleKeyDown);
    if (panel === 'search') {
      requestAnimationFrame(() => searchRef.current?.focus());
    } else {
      requestAnimationFrame(() => {
        if (dialogRef.current) {
          const firstFocusable = dialogRef.current.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') as HTMLElement;
          firstFocusable?.focus();
        }
      });
    }
    
    return () => {
      document.body.style.overflow = previousOverflow;
      globalThis.removeEventListener('keydown', handleKeyDown);
    };
  }, [panel]);

  useEffect(() => {
    const openSearchShortcut = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping = target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA' || target?.isContentEditable;
      if (event.key === '/' && !isTyping) {
        event.preventDefault();
        setPanel('search');
      }
    };
    globalThis.addEventListener('keydown', openSearchShortcut);
    return () => globalThis.removeEventListener('keydown', openSearchShortcut);
  }, []);

  const openPanel = (nextPanel: Panel, event?: React.MouseEvent<HTMLElement>) => {
    if (event?.currentTarget) {
      triggerRef.current = event.currentTarget;
    }
    setCreated(false);
    setPanel(nextPanel);
  };

  const createDeal = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCreated(true);
  };

  const closePanel = () => {
    setPanel(null);
  };

  return (
    <div className="px-4 lg:px-8 pt-4 lg:pt-6 w-full shrink-0 relative z-20">
      <header className="flex lg:h-[80px] lg:items-center justify-between bg-canvas px-4 lg:px-8 py-4 lg:py-0 rounded-3xl shadow-premium">
        <div className="flex flex-col">
          <Image src={BRAND.logoWordmarkPath} alt={BRAND.name} width={104} height={27} className="hidden lg:block object-contain" priority />
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <Image src={BRAND.logoMarkPath} alt="" width={24} height={24} className="object-contain shrink-0" priority />
            <div>
              <h1 className="text-[16px] sm:text-[18px] font-bold text-ink leading-tight whitespace-nowrap">Today&apos;s Desk</h1>
              <p className="text-[10px] text-text-secondary font-medium max-[420px]:hidden"><span className="text-urgent font-bold">2 actions</span> need attention</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end flex-1 lg:max-w-2xl gap-3">
          <button type="button" onClick={(e) => openPanel('search', e)} className="hidden lg:flex flex-1 max-w-[320px] items-center gap-3 rounded-full bg-surface py-2.5 px-4 text-[13px] text-text-secondary shadow-sm hover:shadow-md transition-all focus-visible">
            <Search className="h-4 w-4" aria-hidden="true" /><span>Search deals or brands...</span><kbd className="ml-auto text-[10px] border border-border rounded px-1.5 py-0.5 bg-canvas">/</kbd>
          </button>
          <button type="button" onClick={(e) => openPanel('search', e)} className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full bg-surface text-text-secondary shadow-sm focus-visible" aria-label="Search"><Search className="h-[18px] w-[18px]" aria-hidden="true" /></button>
          <button type="button" onClick={(e) => openPanel('notifications', e)} className="relative flex h-10 w-10 items-center justify-center rounded-full bg-surface text-ink hover:text-accent shadow-sm focus-visible" aria-label="Open notifications">
            <Bell className="h-[18px] w-[18px]" aria-hidden="true" /><span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-urgent border-2 border-surface"><span className="sr-only">2 unread notifications</span></span>
          </button>
          <button type="button" onClick={(e) => openPanel('new-deal', e)} className="flex h-10 items-center gap-1.5 rounded-full bg-accent px-4 sm:px-5 text-[13px] font-bold text-white hover:bg-accent-hover shadow-sm focus-visible">
            <Plus className="h-4 w-4" aria-hidden="true" /><span className="hidden sm:inline">New Deal</span>
          </button>
          <button type="button" onClick={(e) => openPanel('profile', e)} className="h-10 w-10 rounded-full bg-ink text-white text-[12px] font-bold shadow-sm hover:bg-accent transition-colors focus-visible" aria-label="Open profile menu">FM</button>
        </div>
      </header>

      {panel && (
        <div className="fixed inset-0 z-[90] flex items-start justify-center p-4 pt-[10vh]" role="dialog" aria-modal="true" aria-label={`${panel.replace('-', ' ')} panel`}>
          <div className="absolute inset-0 bg-ink/45 backdrop-blur-sm cursor-default" onClick={closePanel} aria-hidden="true" />
          <div ref={dialogRef} className="relative w-full max-w-xl rounded-2xl bg-surface border border-border shadow-2xl overflow-hidden animate-reveal">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border/70">
              <h2 className="text-[15px] font-bold text-ink">
                {panel === 'search' && 'Search workspace'}
                {panel === 'notifications' && 'Notifications'}
                {panel === 'new-deal' && 'Capture a new deal'}
                {panel === 'profile' && 'Felix Morgan'}
              </h2>
              <button type="button" onClick={closePanel} className="p-2 rounded-full hover:bg-canvas text-text-secondary focus-visible" aria-label="Close panel"><X className="w-4 h-4" /></button>
            </div>

            {panel === 'search' && (
              <div>
                <label className="flex items-center gap-3 px-5 border-b border-border/70">
                  <Search className="w-5 h-5 text-text-secondary" /><span className="sr-only">Search deals or brands</span>
                  <input ref={searchRef} value={query} onChange={(event) => setQuery(event.target.value)} className="w-full py-4 bg-transparent text-[15px] outline-none placeholder:text-text-secondary" placeholder="Try “Aster” or “approval”" />
                </label>
                <div className="p-3 max-h-[50vh] overflow-y-auto">
                  {results.length > 0 ? results.map((campaign) => (
                    <button key={campaign.id} type="button" onClick={closePanel} className="w-full flex items-center justify-between gap-4 p-3 rounded-xl text-left hover:bg-canvas focus-visible">
                      <span><span className="block text-[14px] font-semibold text-ink">{campaign.brandName}</span><span className="block text-[12px] text-text-secondary mt-0.5">{campaign.deliverableFormat}</span></span>
                      <span className="text-[11px] font-semibold text-accent capitalize">{campaign.stage.replace('-', ' ')}</span>
                    </button>
                  )) : <p className="p-8 text-center text-[13px] text-text-secondary">No deals match “{query}”.</p>}
                </div>
              </div>
            )}

            {panel === 'notifications' && (
              <div className="p-3">
                {notifications.map((notification) => (
                  <button key={notification.id} type="button" onClick={closePanel} className="w-full flex gap-3 p-3 rounded-xl text-left hover:bg-canvas focus-visible">
                    <span className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${notification.urgent ? 'bg-urgent' : 'bg-waiting'}`} />
                    <span><span className="block text-[14px] font-semibold text-ink">{notification.title}</span><span className="block text-[12px] text-text-secondary mt-1">{notification.detail}</span></span>
                  </button>
                ))}
                <p className="px-3 pt-3 pb-2 text-[11px] text-text-secondary border-t border-border/60">You&apos;re all caught up beyond these two items.</p>
              </div>
            )}

            {panel === 'new-deal' && !created && (
              <form onSubmit={createDeal} className="p-5 grid sm:grid-cols-2 gap-4">
                <label className="sm:col-span-2 text-[12px] font-semibold text-ink">Brand name<input name="brand" required className="mt-1.5 w-full h-11 rounded-lg border border-border bg-canvas px-3 outline-none focus:border-accent" placeholder="e.g. Aster Skin" /></label>
                <label className="text-[12px] font-semibold text-ink">Deal value<input name="value" type="number" min="0" required className="mt-1.5 w-full h-11 rounded-lg border border-border bg-canvas px-3 outline-none focus:border-accent" placeholder="$0" /></label>
                <label className="text-[12px] font-semibold text-ink">Deadline<input name="deadline" type="date" required className="mt-1.5 w-full h-11 rounded-lg border border-border bg-canvas px-3 outline-none focus:border-accent" /></label>
                <label className="sm:col-span-2 text-[12px] font-semibold text-ink">Deliverables<textarea name="deliverables" required className="mt-1.5 w-full min-h-24 rounded-lg border border-border bg-canvas p-3 outline-none focus:border-accent resize-y" placeholder="1x Instagram Reel, 3 months paid usage..." /></label>
                <button type="submit" className="sm:col-span-2 h-11 rounded-lg bg-accent text-white font-bold text-[13px] hover:bg-accent-hover focus-visible">Create draft deal</button>
              </form>
            )}

            {panel === 'new-deal' && created && (
              <div className="p-8 text-center" aria-live="polite">
                <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-completed/10 text-completed"><Check className="w-6 h-6" /></span>
                <h3 className="text-[18px] font-bold text-ink">Draft deal created</h3>
                <p className="text-[13px] text-text-secondary mt-2">The prototype has captured the flow. Backend persistence can plug into this submit action later.</p>
                <button type="button" onClick={closePanel} className="mt-6 inline-flex h-10 items-center gap-2 rounded-lg bg-ink px-5 text-[13px] font-bold text-white focus-visible">Done <ArrowRight className="w-4 h-4" /></button>
              </div>
            )}

            {panel === 'profile' && (
              <div className="p-3">
                <div className="p-3 mb-2 rounded-xl bg-canvas"><p className="text-[13px] font-semibold text-ink">felix@studio.co</p><p className="text-[11px] text-text-secondary mt-1">Independent creator workspace</p></div>
                <button type="button" disabled className="w-full flex items-center gap-3 p-3 rounded-xl text-[13px] font-medium text-text-secondary"><User className="w-4 h-4" /> Profile <span className="ml-auto text-[10px] uppercase">Soon</span></button>
                <button type="button" disabled className="w-full flex items-center gap-3 p-3 rounded-xl text-[13px] font-medium text-text-secondary"><Settings className="w-4 h-4" /> Settings <span className="ml-auto text-[10px] uppercase">Soon</span></button>
                <Link href="/" className="w-full flex items-center gap-3 p-3 rounded-xl text-[13px] font-medium text-urgent hover:bg-urgent/5 focus-visible"><LogOut className="w-4 h-4" /> Exit demo</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
