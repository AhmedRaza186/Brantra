'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Play, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export function VideoTourSection() {
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    if (!previewOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPreviewOpen(false);
    };
    globalThis.addEventListener('keydown', closeOnEscape);
    return () => globalThis.removeEventListener('keydown', closeOnEscape);
  }, [previewOpen]);

  return (
    <section id="video-tour" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-ink border-b-2 border-ink relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F8F5F2 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="bg-accent text-white font-mono text-[12px] font-bold tracking-widest uppercase border-2 border-white px-4 py-1.5 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rotate-1 mb-6">Interactive Product Preview</div>
          <h2 className="font-editorial text-[40px] md:text-[64px] leading-[1] text-white">See how Brantra brings <br className="hidden md:block" /> order to chaos.</h2>
        </div>

        <button type="button" onClick={() => setPreviewOpen(true)} className="relative w-full aspect-video bg-canvas border-2 border-canvas shadow-[12px_12px_0px_0px_rgba(210,50,80,1)] group overflow-hidden focus-visible" aria-label="Open interactive dashboard preview">
          <div className="absolute top-0 left-0 right-0 h-8 bg-surface-secondary border-b-2 border-ink flex items-center px-4 gap-2 z-20">
            <span className="w-3 h-3 bg-canvas border-2 border-ink rounded-full" /><span className="w-3 h-3 bg-canvas border-2 border-ink rounded-full" /><span className="w-3 h-3 bg-accent border-2 border-ink rounded-full" />
            <span className="mx-auto text-[10px] font-mono font-bold text-ink/50 tracking-widest">BRANTRA_WORKSPACE.APP</span>
          </div>
          <iframe src="/dashboard?intro=0" title="Brantra dashboard preview" tabIndex={-1} className="absolute inset-x-0 bottom-0 top-8 w-full h-[calc(100%-2rem)] border-0 pointer-events-none bg-canvas opacity-85 group-hover:opacity-100 transition-opacity" />
          <span className="absolute inset-0 pt-8 bg-ink/30 flex items-center justify-center z-30">
            <span className="w-20 h-20 md:w-24 md:h-24 bg-accent flex items-center justify-center border-4 border-ink shadow-[8px_8px_0px_0px_rgba(30,26,29,1)] transition-transform group-hover:scale-105 group-hover:rotate-3"><Play className="h-9 w-9 text-white ml-1 fill-white" /></span>
          </span>
        </button>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-3 text-[12px] md:text-[14px] font-bold font-mono" aria-label="Brantra workflow">
          {['CAPTURE', 'CREATE', 'APPROVE', 'PUBLISH'].map((step) => <span key={step} className="bg-canvas text-ink px-3 py-1 border-2 border-ink shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">{step}</span>)}
          <span className="bg-accent text-white px-3 py-1 border-2 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] rotate-2">GET PAID</span>
        </div>
      </div>

      {previewOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8" role="dialog" aria-modal="true" aria-labelledby="preview-title">
          <button type="button" className="absolute inset-0 bg-ink/80 backdrop-blur-md cursor-default" onClick={() => setPreviewOpen(false)} aria-label="Close preview" />
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-canvas border-2 border-white shadow-[12px_12px_0px_0px_rgba(216,81,112,1)]">
            <div className="sticky top-0 z-20 flex items-center justify-between gap-4 bg-surface-secondary border-b-2 border-ink px-4 py-3">
              <div><p className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent">Guided preview</p><h3 id="preview-title" className="text-[16px] font-bold text-ink">Your entire deal cycle, at a glance</h3></div>
              <button type="button" onClick={() => setPreviewOpen(false)} className="w-10 h-10 flex items-center justify-center border-2 border-ink bg-canvas hover:bg-accent hover:text-white focus-visible" aria-label="Close preview"><X className="w-5 h-5" /></button>
            </div>
            <div className="grid lg:grid-cols-[1fr_300px]">
              <div className="relative bg-canvas" style={{ minHeight: '360px', height: '60vh' }}><iframe src="/dashboard?intro=0" title="Interactive Brantra workspace" className="absolute inset-0 w-full h-full border-0 bg-canvas" /></div>
              <div className="bg-white border-t-2 lg:border-t-0 lg:border-l-2 border-ink p-6 flex flex-col">
                <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-text-secondary mb-5">What you can do</p>
                <ul className="space-y-4">
                  {['See today’s priorities instantly', 'Keep feedback tied to each draft', 'Track approvals, rights, and payments'].map((item) => <li key={item} className="flex gap-3 text-[13px] font-semibold text-ink"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />{item}</li>)}
                </ul>
                <Link href="/dashboard?intro=0" className="mt-8 lg:mt-auto h-12 flex items-center justify-center gap-2 bg-accent text-white border-2 border-ink font-bold text-[13px] hover:bg-accent-hover focus-visible">Explore the live demo <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
