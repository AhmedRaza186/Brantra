import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/config/brand";

export function MarketingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-ink bg-surface py-16 md:py-20 relative overflow-hidden">
      
      {/* Background Dots */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#1E1A1D 2px, transparent 2px)', backgroundSize: '24px 24px' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16 border-b-4 border-ink pb-12">
          
          {/* Logo Area */}
          <div>
            <Link href="/" className="inline-block focus-visible rounded-none outline-none focus-visible:ring-2 focus-visible:ring-ink" aria-label="Brantra Home">
              <div className="bg-canvas border-4 border-ink shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] p-4 hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_0px_rgba(30,26,29,1)] transition-all">
                <Image
                  src={BRAND.logoWordmarkPath}
                  alt={BRAND.name}
                  width={140}
                  height={38}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-ink font-bold font-mono uppercase text-[12px] mt-6 max-w-sm leading-relaxed border-l-4 border-accent pl-4">
              Brand deal operations for creators. Capture briefs, manage revisions, and track payments in one workspace.
            </p>
          </div>

          {/* Links Area */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="text-[16px] font-bold font-editorial text-ink mb-2 bg-accent text-white px-2 py-1 inline-block rotate-1 shadow-[2px_2px_0px_0px_rgba(30,26,29,1)]">PLATFORM</h4>
              <Link href="#product" className="text-[13px] font-mono font-bold uppercase text-ink hover:text-accent hover:underline underline-offset-4 focus-visible outline-none">Product</Link>
              <Link href="#how-it-works" className="text-[13px] font-mono font-bold uppercase text-ink hover:text-accent hover:underline underline-offset-4 focus-visible outline-none">How it works</Link>
              <Link href="#why-brantra" className="text-[13px] font-mono font-bold uppercase text-ink hover:text-accent hover:underline underline-offset-4 focus-visible outline-none">Why Brantra</Link>
              <Link href="/dashboard" className="text-[13px] font-mono font-bold uppercase text-ink hover:text-accent hover:underline underline-offset-4 focus-visible outline-none">View dashboard</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-[16px] font-bold font-editorial text-ink mb-2 bg-canvas border-2 border-ink px-2 py-1 inline-block -rotate-2 shadow-[2px_2px_0px_0px_rgba(30,26,29,1)]">LEGAL</h4>
              <button disabled className="text-[13px] font-mono font-bold uppercase text-ink/50 text-left cursor-not-allowed" aria-label="Privacy Policy (Coming Soon)">Privacy [TBD]</button>
              <button disabled className="text-[13px] font-mono font-bold uppercase text-ink/50 text-left cursor-not-allowed" aria-label="Terms of Service (Coming Soon)">Terms [TBD]</button>
            </div>
          </div>

        </div>

        {/* Copyright Area */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[12px] font-bold font-mono text-ink gap-4 uppercase tracking-widest">
          <p className="bg-canvas border-2 border-ink px-3 py-1 shadow-[2px_2px_0px_0px_rgba(30,26,29,1)]">© {currentYear} {BRAND.name}. All rights reserved.</p>
          <p className="flex gap-2 items-center">
            The operating desk for independent creators.
          </p>
        </div>
      </div>
    </footer>
  );
}
