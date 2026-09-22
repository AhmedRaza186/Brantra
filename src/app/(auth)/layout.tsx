import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/config/brand";
import "@/app/globals.css";

export const metadata = {
  title: `Authentication | ${BRAND.name}`,
  description: "Access your Brantra workspace",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-canvas">
      
      {/* Left side: Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:w-[600px] xl:w-[700px] bg-white border-r-4 border-ink relative z-10">
        <div className="absolute top-8 left-8">
          <Link href="/" className="inline-block focus-visible rounded-none outline-none focus-visible:ring-2 focus-visible:ring-ink">
            <div className="bg-canvas border-2 border-ink shadow-[2px_2px_0px_0px_rgba(30,26,29,1)] px-3 py-2 hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-[0px_0px_0px_0px_rgba(30,26,29,1)] transition-all">
              <Image
                src={BRAND.logoWordmarkPath}
                alt={BRAND.name}
                width={100}
                height={26}
                className="object-contain"
              />
            </div>
          </Link>
        </div>
        
        <div className="w-full max-w-md mx-auto pt-24 pb-12">
          {children}
        </div>
      </div>

      {/* Right side: Brutalist Graphic (hidden on mobile) */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden bg-accent flex-col justify-between p-12">
        {/* Background Grid */}
        <div 
          className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#1E1A1D 2px, transparent 2px)', backgroundSize: '32px 32px' }}
        ></div>
        
        <div className="relative z-10 mt-20">
          <h2 className="font-editorial text-[64px] xl:text-[80px] leading-[0.9] text-white tracking-tight drop-shadow-[4px_4px_0px_rgba(30,26,29,1)]">
            OPERATIONS.
            <br />
            EXECUTED.
          </h2>
          <div className="mt-8 bg-ink border-2 border-white px-4 py-2 text-white font-mono font-bold uppercase tracking-widest text-[12px] inline-block shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] rotate-2">
            No spreadsheets required.
          </div>
        </div>

        <div className="relative z-10 text-[12px] font-mono font-bold uppercase text-ink tracking-widest bg-white border-2 border-ink px-4 py-2 w-max shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] -rotate-1">
          System Status: Online
        </div>
      </div>

    </div>
  );
}
