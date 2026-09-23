import Link from 'next/link';

export const metadata = { title: 'Privacy | Brantra' };

export default function PrivacyPage() {
  return (
    <div className="min-h-[70vh] px-4 py-20">
      <article className="mx-auto max-w-3xl bg-white border-2 border-ink p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(30,26,29,1)]">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-accent">Last updated September 23, 2026</p>
        <h1 className="font-editorial text-[48px] md:text-[64px] leading-none mt-4">Privacy, in plain language.</h1>
        <div className="mt-8 space-y-6 text-[15px] leading-7 text-ink">
          <p>Brantra is currently a frontend beta. This demo does not send form entries, uploaded files, or workspace actions to a server.</p>
          <h2 className="text-[20px] font-bold">When accounts go live</h2>
          <p>We will document what information is collected, why it is needed, how long it is retained, and how creators can access or delete it before enabling production accounts.</p>
          <h2 className="text-[20px] font-bold">Local demo data</h2>
          <p>The dashboard uses sample campaign data. The intro may store a session-only flag in your browser so it does not replay on every visit.</p>
        </div>
        <Link href="/" className="mt-10 inline-flex bg-ink text-white px-5 py-3 font-mono text-[12px] font-bold uppercase">Return home</Link>
      </article>
    </div>
  );
}
