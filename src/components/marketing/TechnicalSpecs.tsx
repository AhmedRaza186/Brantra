export function TechnicalSpecs() {
  return (
    <section className="py-16 bg-canvas border-t border-border/50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-[20px] font-bold text-ink mb-4">Technical Specifications</h2>
        <p className="text-[14px] text-text-secondary leading-relaxed mb-4">
          Brantra is a cloud-based SaaS platform built on Next.js, designed specifically for content creators.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-wider text-ink mb-2">System Requirements</h3>
            <ul className="text-[14px] text-text-secondary space-y-2">
              <li>Modern web browser (Chrome, Safari, Firefox, Edge)</li>
              <li>Broadband internet connection</li>
              <li>No installation required</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-wider text-ink mb-2">Platform Compatibility</h3>
            <ul className="text-[14px] text-text-secondary space-y-2">
              <li>Optimized for Instagram deals</li>
              <li>Optimized for TikTok partnerships</li>
              <li>Optimized for YouTube sponsorships</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
