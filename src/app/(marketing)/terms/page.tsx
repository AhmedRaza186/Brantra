import Link from 'next/link';

export const metadata = { title: 'Terms | Brantra' };

export default function TermsPage() {
  return (
    <div className="min-h-[70vh] px-4 py-20">
      <article className="mx-auto max-w-3xl bg-white border-2 border-ink p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(30,26,29,1)]">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-accent">Beta terms</p>
        <h1 className="font-editorial text-[48px] md:text-[64px] leading-none mt-4">A clear demo agreement.</h1>
        <div className="mt-8 space-y-6 text-[15px] leading-7 text-ink">
          <p>Brantra is presented as a product preview. Dashboard records, notifications, deal actions, and payment figures are sample data and do not create binding transactions.</p>
          <h2 className="text-[20px] font-bold">No financial processing</h2>
          <p>The current frontend does not issue invoices, process payments, execute agreements, or store uploaded media.</p>
          <h2 className="text-[20px] font-bold">Product changes</h2>
          <p>Features and workflows may change during private beta. Production terms will be published before live accounts and paid plans are introduced.</p>
        </div>
        <Link href="/" className="mt-10 inline-flex bg-ink text-white px-5 py-3 font-mono text-[12px] font-bold uppercase">Return home</Link>
      </article>
    </div>
  );
}
