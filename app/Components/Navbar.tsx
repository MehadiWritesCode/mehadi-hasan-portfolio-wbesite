"use client";
import * as React from "react";
import {
  Moon,
  Sun,
  Laptop,
  Github,
  Linkedin,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setTheme} = useTheme();

  // Scroll hole glassmorphism effect hobe
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md py-2 shadow-lg border-b border-zinc-100 dark:border-zinc-800"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative w-10 h-10 rounded-full border-2 border-white dark:border-zinc-800 overflow-hidden">
               {/* Image component-er bodole standard img use kora hoyeche error erate */}
               <img
                src="/image/myimage.jpeg"
                alt="Mehadi Hasan"
                className="w-full h-full object-cover shadow-sm"
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=Mehadi+Hasan&background=0D8ABC&color=fff";
                }}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white leading-none">
              Mehadi Hasan
            </span>
            <span className="text-[10px] font-medium text-blue-600 dark:text-blue-400 uppercase tracking-widest mt-1">
              Full-Stack Dev
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/50 dark:bg-zinc-800/50 p-1 rounded-full border border-zinc-200/50 dark:border-zinc-700/50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-5 py-2 rounded-full text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-700 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions & Socials */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 mr-2 border-r border-zinc-200 dark:border-zinc-800 pr-4">
            <a
              href="https://github.com"
              target="_blank"
              className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Custom Theme Toggle (Radix UI chhara standard implementation) */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="rounded-full w-10 h-10 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] dark:hidden" />
              <Moon className="hidden h-[1.2rem] w-[1.2rem] dark:block" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl p-1 z-[60] animate-in fade-in zoom-in-95 duration-200">
                <button
                  onClick={() => { setTheme("light"); setIsDropdownOpen(false); }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                >
                  <Sun size={16} /> Light
                </button>
                <button
                  onClick={() => { setTheme("dark"); setIsDropdownOpen(false); }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                >
                  <Moon size={16} /> Dark
                </button>
                <button
                  onClick={() => { setTheme("system"); setIsDropdownOpen(false); }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                >
                  <Laptop size={16} /> System
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-full text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[-1] transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed right-0 top-0 h-screen w-[280px] bg-white dark:bg-zinc-950 shadow-2xl z-50 p-6 transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-10">
          <span className="font-bold text-zinc-900 dark:text-white italic tracking-tight">Mehadi.dev</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-full bg-zinc-50 dark:bg-zinc-900 text-zinc-500"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium py-3 px-4 rounded-2xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-blue-600 dark:hover:text-white transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="absolute bottom-10 left-6 right-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">Let`s Connect</p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition-colors shadow-sm">
              <Github size={22} />
            </a>
            <a href="#" className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition-colors shadow-sm">
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
