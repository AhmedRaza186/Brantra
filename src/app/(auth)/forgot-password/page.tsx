'use client';

import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full text-center" aria-live="polite">
        <CheckCircle2 className="w-14 h-14 text-accent mx-auto mb-5" />
        <h1 className="font-editorial text-[40px] md:text-[48px] leading-none text-ink">Check your inbox.</h1>
        <p className="text-ink font-medium text-[16px] mt-4">The reset flow is ready on the frontend. Email delivery will activate with authentication.</p>
        <Link href="/login" className="mt-8 inline-flex h-12 items-center justify-center gap-2 bg-ink px-6 text-white font-bold font-mono uppercase border-2 border-ink shadow-[4px_4px_0px_0px_rgba(216,81,112,1)]"><ArrowLeft className="w-4 h-4" /> Back to login</Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Link href="/login" className="inline-flex items-center gap-2 text-[12px] font-bold font-mono uppercase text-ink hover:text-accent mb-8"><ArrowLeft className="w-4 h-4" /> Back to login</Link>
      <h1 className="font-editorial text-[40px] md:text-[48px] leading-none text-ink mb-3">Reset your password.</h1>
      <p className="text-ink font-medium text-[16px] mb-8">Enter your workspace email and we&apos;ll prepare a reset link.</p>
      <form onSubmit={submit} className="space-y-6">
        <div className="space-y-2"><label htmlFor="reset-email" className="block text-[12px] font-bold font-mono text-ink uppercase tracking-widest">Email Address</label><input id="reset-email" name="email" type="email" autoComplete="email" required autoFocus className="w-full h-14 bg-canvas border-2 border-ink px-4 text-[16px] font-medium text-ink focus:outline-none focus:border-accent focus:shadow-[4px_4px_0px_0px_rgba(216,81,112,1)] shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] transition-all" placeholder="you@example.com" /></div>
        <button type="submit" className="w-full h-14 flex items-center justify-center gap-2 bg-accent text-white font-bold font-mono text-[15px] uppercase tracking-widest border-2 border-ink shadow-[6px_6px_0px_0px_rgba(30,26,29,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(30,26,29,1)] transition-all focus-visible"><Send className="w-4 h-4" /> Send reset link</button>
      </form>
    </div>
  );
}
