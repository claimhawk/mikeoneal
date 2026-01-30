"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Approach", href: "#philosophy" },
  { label: "AI Depth", href: "#ml" },
  { label: "Full Stack", href: "#journey" },
  { label: "100x Output", href: "#systems" },
  { label: "Book Call", href: "#contact" },
  { label: "Engagement", href: "#work" },
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
          className={`flex items-center transition-all duration-500 ${
            scrolled ? "h-12 justify-between" : "h-20 justify-end"
          }`}
        >
          {/* Logo - shows "Michael ONeal" when scrolled */}
          <a
            href="#hero"
            onClick={(e) => handleClick(e, "#hero")}
            className={`font-black text-white tracking-tighter transition-all duration-500 ${
              scrolled ? "opacity-100 text-sm" : "opacity-0 absolute pointer-events-none"
            }`}
          >
            Michael ONeal
          </a>

          {/* Nav Links */}
          <div className={`hidden md:flex items-center transition-all duration-500 ${
            scrolled ? "gap-4" : "gap-1"
          }`}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-zinc-400 hover:text-white transition-all duration-300 uppercase tracking-wider ${
                  scrolled ? "text-xs px-2 py-1" : "text-sm px-4 py-2"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

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
