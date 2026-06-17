"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  // State to track scroll position for header styling
  const [isScrolled, setIsScrolled] = useState(false);
  // State for mobile drawer menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky style when user scrolls past 20px
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0b0b]/95 backdrop-blur-md border-b-2 border-[#FFDF1B] py-3 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* GreenRock logo image from public assets. */}
        <a href="/" className="flex items-center space-x-3 group">
          <Image
            src="/GreenRock Logo.webp"
            alt="GreenRock logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover border border-[#FFDF1B] shadow-md transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-widest text-white uppercase leading-none">
              GREENROCK
            </span>
            <span className="text-[10px] text-white-400 tracking-wider font-light uppercase leading-none mt-1">
              SOLUTIONS
            </span>
          </div>
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a
            href="/"
            className="text-xs font-semibold uppercase tracking-widest text-white-300 hover:text-[#FFDF1B] transition-colors py-2"
          >
            Home
          </a>
          <a
            href="/services"
            className="text-xs font-semibold uppercase tracking-widest text-white-300 hover:text-[#FFDF1B] transition-colors py-2"
          >
            Services
          </a>
          <a
            href="/projects"
            className="text-xs font-semibold uppercase tracking-widest text-white-300 hover:text-[#FFDF1B] transition-colors py-2"
          >
            Projects
          </a>
          <a
            href="/#sectors"
            className="text-xs font-semibold uppercase tracking-widest text-white-300 hover:text-[#FFDF1B] transition-colors py-2"
          >
            Sectors
          </a>
          <a
            href="/#about"
            className="text-xs font-semibold uppercase tracking-widest text-white-300 hover:text-[#FFDF1B] transition-colors py-2"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="text-xs font-semibold uppercase tracking-widest text-white-300 hover:text-[#FFDF1B] transition-colors py-2"
          >
            Contact
          </a>
        </nav>

        {/* Search Icon & Call To Action (CTA) Button */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-gray-400 hover:text-white transition-colors focus:outline-none" aria-label="Search">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          <a
            href="/contact"
            className="bg-[#006330] hover:bg-[#004d26] text-white border border-[#FFDF1B] px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-[1px]"
          >
            Build With Us
          </a>
        </div>

        {/* Mobile menu controls */}
        <div className="flex items-center space-x-4 md:hidden">
          <button className="text-gray-400 hover:text-white transition-colors focus:outline-none" aria-label="Search">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-[#FFDF1B] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Overlays */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-white/10 px-6 py-4 space-y-3 absolute top-full left-0 w-full shadow-2xl animate-fadeIn">
          <a
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm uppercase tracking-wider text-gray-300 hover:text-[#FFDF1B] transition-colors py-2 border-b border-white/5"
          >
            Home
          </a>
          <a
            href="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm uppercase tracking-wider text-gray-300 hover:text-[#FFDF1B] transition-colors py-2 border-b border-white/5"
          >
            Services
          </a>
          <a
            href="/projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm uppercase tracking-wider text-gray-300 hover:text-[#FFDF1B] transition-colors py-2 border-b border-white/5"
          >
            Projects
          </a>
          <a
            href="/#sectors"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm uppercase tracking-wider text-gray-300 hover:text-[#FFDF1B] transition-colors py-2 border-b border-white/5"
          >
            Sectors
          </a>
          <a
            href="/#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm uppercase tracking-wider text-gray-300 hover:text-[#FFDF1B] transition-colors py-2 border-b border-white/5"
          >
            About Us
          </a>
          <a
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm uppercase tracking-wider text-gray-300 hover:text-[#FFDF1B] transition-colors py-2"
          >
            Contact
          </a>
          <div className="pt-2">
            <a
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-[#006330] hover:bg-[#004d26] text-white border border-[#FFDF1B] text-center py-2.5 text-xs font-bold uppercase tracking-widest transition-colors shadow-md"
            >
              Build With Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
