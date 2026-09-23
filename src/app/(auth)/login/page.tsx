import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Login | Brantra",
};

export default function LoginPage() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="font-editorial text-[40px] md:text-[48px] leading-[1] text-ink mb-3">
          Welcome back.
        </h1>
        <p className="text-ink font-medium text-[16px]">
          Enter your credentials to access your workspace.
        </p>
      </div>

      <form className="space-y-6" action="/dashboard">
        
        <div className="space-y-2">
          <label className="block text-[12px] font-bold font-mono text-ink uppercase tracking-widest">
            Email Address
          </label>
          <input
            type="email"
            required
            className="w-full h-14 bg-canvas border-2 border-ink px-4 text-[16px] font-medium text-ink focus:outline-none focus:ring-0 focus:border-accent focus:shadow-[4px_4px_0px_0px_rgba(216,81,112,1)] shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] transition-all placeholder:text-ink/30"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="block text-[12px] font-bold font-mono text-ink uppercase tracking-widest">
              Password
            </label>
            <Link href="#" className="text-[12px] font-bold font-mono text-ink uppercase tracking-widest underline underline-offset-4 hover:text-accent">
              Forgot?
            </Link>
          </div>
          <input
            type="password"
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
            Access Workspace <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </form>

      <div className="mt-8 text-center border-t-2 border-ink pt-6">
        <p className="text-[14px] font-medium text-ink">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-bold font-mono uppercase underline underline-offset-4 hover:text-accent ml-1">
            Join Early Access
          </Link>
        </p>
      </div>
    </div>
  );
}
