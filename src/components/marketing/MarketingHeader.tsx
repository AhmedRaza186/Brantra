"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/config/brand";

export function MarketingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-canvas/90 backdrop-blur-md shadow-[0px_4px_0px_0px_rgba(30,26,29,1)] border-b-2 border-ink"
            : "py-5 lg:py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible rounded-none outline-none focus-visible:ring-2 focus-visible:ring-ink"
            aria-label="Brantra Home"
          >
            <Image
              src={BRAND.logoWordmarkPath}
              alt={BRAND.name}
              width={104}
              height={27}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#product"
              className="text-[14px] font-bold font-mono uppercase tracking-widest text-ink hover:bg-accent hover:text-white px-2 py-1 border-2 border-transparent hover:border-ink hover:shadow-[2px_2px_0px_0px_rgba(30,26,29,1)] transition-all focus-visible outline-none"
            >
              Product
            </Link>
            <Link
              href="#how-it-works"
              className="text-[14px] font-bold font-mono uppercase tracking-widest text-ink hover:bg-accent hover:text-white px-2 py-1 border-2 border-transparent hover:border-ink hover:shadow-[2px_2px_0px_0px_rgba(30,26,29,1)] transition-all focus-visible outline-none"
            >
              How it works
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-[14px] font-bold font-mono uppercase tracking-widest text-ink hover:underline underline-offset-4 focus-visible outline-none"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="flex h-10 items-center justify-center bg-accent px-5 text-[14px] font-bold font-mono uppercase tracking-widest text-white border-2 border-ink shadow-[4px_4px_0px_0px_rgba(30,26,29,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(30,26,29,1)] transition-all focus-visible outline-none"
            >
              Join early access
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center h-10 w-10 text-ink bg-canvas border-2 border-ink shadow-[2px_2px_0px_0px_rgba(30,26,29,1)] rounded-none focus-visible outline-none focus-visible:ring-2 focus-visible:ring-ink"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-canvas pt-24 px-6 md:hidden overflow-y-auto border-x-8 border-ink">
          <nav className="flex flex-col gap-6">
            <Link
              href="#product"
              onClick={closeMobileMenu}
              className="text-[24px] font-bold font-mono uppercase text-ink border-b-2 border-ink pb-2"
            >
              Product
            </Link>
            <Link
              href="#how-it-works"
              onClick={closeMobileMenu}
              className="text-[24px] font-bold font-mono uppercase text-ink border-b-2 border-ink pb-2"
            >
              How it works
            </Link>
            <Link
              href="/login"
              onClick={closeMobileMenu}
              className="text-[20px] font-bold font-mono uppercase text-ink mt-8"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={closeMobileMenu}
              className="mt-4 flex h-14 items-center justify-center bg-accent border-2 border-ink shadow-[6px_6px_0px_0px_rgba(30,26,29,1)] px-6 text-[16px] font-bold font-mono uppercase text-white"
            >
              Join early access
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
