"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "ML", href: "#ml" },
  { label: "Journey", href: "#journey" },
  { label: "Systems", href: "#systems" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <nav
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleClick(e, "#hero")}
            className="font-black text-white tracking-tighter transition-all duration-300"
            style={{ fontSize: scrolled ? "1.25rem" : "1.5rem" }}
          >
            MO
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`px-4 py-2 text-zinc-400 hover:text-white transition-all duration-300 ${
                  scrolled ? "text-xs" : "text-sm"
                } uppercase tracking-wider`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className={`hidden sm:inline-flex items-center justify-center font-bold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-all duration-300 ${
              scrolled ? "px-4 py-2 text-xs" : "px-5 py-2.5 text-sm"
            }`}
          >
            Let&apos;s Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
