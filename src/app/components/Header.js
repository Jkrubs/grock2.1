"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const applyTheme = (theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.classList.toggle("light", theme === "light");
  document.documentElement.dataset.theme = theme;
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("greenrock-theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const nextTheme = savedTheme || preferredTheme;

    setTheme(nextTheme);
    applyTheme(nextTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem("greenrock-theme", nextTheme);
  };

  const isLightHeader = theme === "light" && isScrolled;
  const navTextClass = isLightHeader ? "text-[#102016]" : "text-white";
  const subTextClass = isLightHeader ? "text-[#31533e]" : "text-white/70";

  const ThemeToggle = ({ className = "" }) => (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white transition-colors hover:border-[#FFDF1B] hover:text-[#FFDF1B] focus:outline-none ${isLightHeader ? "border-[#102016]/20 bg-white text-[#102016]" : ""} ${className}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36-1.42 1.42M7.06 16.94l-1.42 1.42m12.72 0-1.42-1.42M7.06 7.06 5.64 5.64" />
          <circle cx="12" cy="12" r="4" strokeWidth="2" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.5 6.5 0 0 0 21 12.8Z" />
        </svg>
      )}
    </button>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? `${isLightHeader ? "bg-[#f7f5ee]/95" : "bg-[#0b0b0b]/95"} backdrop-blur-md border-b-2 border-[#FFDF1B] py-3 shadow-xl`
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3 group">
          <Image
            src="/GreenRock Logo.webp"
            alt="GreenRock logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover border border-[#FFDF1B] shadow-md transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className={`font-bold text-sm tracking-widest uppercase leading-none transition-colors ${navTextClass}`}>
              GREENROCK
            </span>
            <span className={`text-[10px] tracking-wider font-light uppercase leading-none mt-1 transition-colors ${subTextClass}`}>
              SOLUTIONS
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {[['Home', '/'], ['Services', '/services'], ['Projects', '/projects'], ['Sectors', '/#sectors'], ['About Us', '/about'], ['Contact', '/contact']].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`text-xs font-semibold uppercase tracking-widest hover:text-[#FFDF1B] transition-colors py-2 ${navTextClass}`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <ThemeToggle />
          <a
            href="/contact"
            className="bg-[#006330] hover:bg-[#004d26] text-white border border-[#FFDF1B] px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-[1px]"
          >
            Build With Us
          </a>
        </div>

        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle className="h-9 w-9" />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${navTextClass} hover:text-[#FFDF1B] focus:outline-none transition-colors`}
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

      {isMobileMenuOpen && (
        <div className={`md:hidden border-t px-6 py-4 space-y-3 absolute top-full left-0 w-full shadow-2xl animate-fadeIn ${theme === "light" ? "bg-[#f7f5ee] border-[#102016]/10" : "bg-[#0d0d0d] border-white/10"}`}>
          {[['Home', '/'], ['Services', '/services'], ['Projects', '/projects'], ['Sectors', '/#sectors'], ['About Us', '/about'], ['Contact', '/contact']].map(([label, href], index, links) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-sm uppercase tracking-wider hover:text-[#FFDF1B] transition-colors py-2 ${theme === "light" ? "text-[#102016]" : "text-gray-300"} ${index < links.length - 1 ? theme === "light" ? "border-b border-[#102016]/10" : "border-b border-white/5" : ""}`}
            >
              {label}
            </a>
          ))}
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


