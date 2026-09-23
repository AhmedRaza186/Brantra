import Image from 'next/image';
import { Search, Bell, Plus } from 'lucide-react';
import { BRAND } from '../../../config/brand';

export function AppHeader() {
  return (
    <div className="px-4 lg:px-8 pt-4 lg:pt-6 w-full shrink-0 relative z-20">
      <header className="flex flex-col lg:flex-row lg:h-[80px] lg:items-center justify-between bg-canvas px-4 lg:px-8 py-4 lg:py-0 rounded-3xl shadow-premium">
      
      {/* Left Context */}
      <div className="flex flex-col">
        {/* Desktop: Full Wordmark */}
        <div className="hidden lg:flex items-center mt-1">
          <Image 
            src={BRAND.logoWordmarkPath} 
            alt={BRAND.name} 
            width={104} 
            height={27} 
            className="object-contain" 
            priority
          />
        </div>

        {/* Mobile: Symbol + Today's Desk */}
        <div className="flex lg:hidden items-center gap-3">
          <Image 
            src={BRAND.logoMarkPath} 
            alt="" 
            width={28} 
            height={28} 
            className="object-contain" 
            priority
          />
          <h1 className="text-[22px] font-bold text-ink tracking-tight">Today&apos;s Desk</h1>
        </div>
        
        <p className="text-[13px] text-text-secondary mt-1 font-medium lg:hidden flex items-center gap-2">
          <span className="text-urgent font-bold bg-urgent/10 px-2 py-0.5 rounded-md">2 actions</span> need your attention today.
        </p>
      </div>

      {/* Center Search & Right Actions */}
      <div className="flex items-center justify-between lg:justify-end flex-1 lg:max-w-2xl gap-4">
        
        {/* Search Input (Desktop Only) */}
        <div className="hidden lg:block relative flex-1 max-w-[320px]">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Search className="h-[16px] w-[16px] text-text-secondary" aria-hidden="true" />
          </div>
          <input
            type="text"
            className="block w-full rounded-full border border-transparent bg-surface py-2.5 pl-11 pr-4 text-[13px] text-ink placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all shadow-sm hover:shadow-md"
            placeholder="Search deals or brands..."
          />
        </div>

        <div className="flex items-center gap-3 shrink-0 ml-auto lg:ml-0">
          
          {/* Mobile Search Icon */}
          <button type="button" 
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full bg-surface text-text-secondary shadow-sm hover:shadow-md transition-all focus-visible"
            aria-label="Search"
          >
            <Search className="h-[18px] w-[18px]" aria-hidden="true" />
          </button>

          {/* Notifications */}
          <button type="button" 
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-surface text-ink hover:text-accent shadow-sm hover:shadow-md transition-all focus-visible"
            aria-label="Notifications"
          >
            <Bell className="h-[18px] w-[18px]" aria-hidden="true" />
            <span className="absolute top-[8px] right-[10px] h-2 w-2 rounded-full bg-urgent border-2 border-surface animate-pulse-twice"></span>
          </button>

          {/* New Deal Button */}
          <button type="button" 
            className="flex h-10 items-center gap-1.5 rounded-full bg-accent px-5 text-[13px] font-bold text-white hover:bg-accent-hover shadow-sm hover:shadow-md transition-all focus-visible ml-1"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">New Deal</span>
          </button>

          {/* Profile Avatar */}
          <div className="h-10 w-10 rounded-full border border-transparent overflow-hidden shrink-0 cursor-pointer hover:scale-105 shadow-sm transition-transform ml-1">
            <Image 
              src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=F4E7EA" 
              alt="Profile"
              width={40}
              height={40}
              className="w-full h-full object-cover bg-surface-secondary"
              unoptimized
            />
          </div>
        </div>
      </div>
      </header>
    </div>
  );
}
