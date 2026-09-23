import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Join Early Access | Brantra",
};

export default function SignupPage() {
  return (
    <div className="w-full">
      <div className="mb-8 relative">
        <div className="bg-accent text-white font-mono text-[12px] font-bold tracking-widest uppercase border-2 border-ink px-3 py-1 shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] inline-block mb-4 -rotate-2">
          BETA PROGRAM
        </div>
        <h1 className="font-editorial text-[40px] md:text-[48px] leading-[1] text-ink mb-3">
          Join early access.
        </h1>
        <p className="text-ink font-medium text-[16px]">
          Secure your spot and start managing your brand deals like a pro.
        </p>
      </div>

      <form className="space-y-5" action="/dashboard">
        
        <div className="space-y-2">
          <label htmlFor="signup-name" className="block text-[12px] font-bold font-mono text-ink uppercase tracking-widest">
            Full Name
          </label>
          <input
            type="text"
            id="signup-name"
            name="name"
            autoComplete="name"
            required
            className="w-full h-14 bg-canvas border-2 border-ink px-4 text-[16px] font-medium text-ink focus:outline-none focus:ring-0 focus:border-accent focus:shadow-[4px_4px_0px_0px_rgba(216,81,112,1)] shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] transition-all placeholder:text-ink/30"
            placeholder="Creator Name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="signup-email" className="block text-[12px] font-bold font-mono text-ink uppercase tracking-widest">
            Email Address
          </label>
          <input
            type="email"
            id="signup-email"
            name="email"
            autoComplete="email"
            required
            className="w-full h-14 bg-canvas border-2 border-ink px-4 text-[16px] font-medium text-ink focus:outline-none focus:ring-0 focus:border-accent focus:shadow-[4px_4px_0px_0px_rgba(216,81,112,1)] shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] transition-all placeholder:text-ink/30"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="signup-password" className="block text-[12px] font-bold font-mono text-ink uppercase tracking-widest">
            Password
          </label>
          <input
            type="password"
            id="signup-password"
            name="password"
            autoComplete="new-password"
            minLength={8}
            required
            className="w-full h-14 bg-canvas border-2 border-ink px-4 text-[16px] font-medium text-ink focus:outline-none focus:ring-0 focus:border-accent focus:shadow-[4px_4px_0px_0px_rgba(216,81,112,1)] shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] transition-all placeholder:text-ink/30"
            placeholder="••••••••"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full h-14 flex items-center justify-center gap-2 bg-accent text-white font-bold font-mono text-[16px] uppercase tracking-widest border-2 border-ink shadow-[6px_6px_0px_0px_rgba(30,26,29,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(30,26,29,1)] transition-all focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
          >
            Create Account <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </form>

      <div className="mt-8 text-center border-t-2 border-ink pt-6">
        <p className="text-[14px] font-medium text-ink">
          Already have an account?{" "}
          <Link href="/login" className="font-bold font-mono uppercase underline underline-offset-4 hover:text-accent ml-1">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}
