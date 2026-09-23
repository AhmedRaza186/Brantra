import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Brantra — Brand deal operations for creators",
  description:
    "Capture brand deals, manage deliverables and revisions, track approvals, usage rights and payments—all in one focused creator workspace.",
};

import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { SmoothScroll } from "@/components/marketing/SmoothScroll";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroll>
      <div className={`${instrumentSerif.variable} flex flex-col min-h-screen relative overflow-x-hidden bg-canvas`}>
        <MarketingHeader />
        <main className="flex-1 w-full pt-[80px]">
          {children}
        </main>
        <MarketingFooter />
      </div>
    </SmoothScroll>
  );
}
