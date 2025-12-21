"use client";
import React, { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Laptop,
  Github,
  Linkedin,
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Trophy,
  Heart,
  Sparkles,
  Camera,
  Plane,
  Gamepad2,
  Ghost,
  Zap,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { useTheme } from "next-themes";

/**
 * Enhanced Interfaces
 */
interface EducationItem {
  title: string;
  place: string;
  date: string;
  desc: string;
  grade?: string;
}

interface AchievementItem {
  title: string;
  place: string;
  date: string;
  desc: string;
  icon: React.ReactNode;
}

interface HobbyItem {
  name: string;
  icon: React.ReactNode;
  bg: string;
}

interface FunFactItem {
  title: string;
  icon: string;
  desc: string;
  color: string;
}

interface AboutData {
  education: EducationItem[];
  achievements: AchievementItem[];
  hobbies: HobbyItem[];
  funFacts: FunFactItem[];
}

const aboutData: AboutData = {
  education: [
    {
      title: "B.Sc in Computer Science & Engineering",
      place: "Green University of Bangladesh",
      date: "2023 — Present",
      grade: "CGPA 3.53",
      desc: "Focusing on core computing principles, high-level algorithms, and scalable web architecture.",
    },
    {
      title: "Higher Secondary Certificate",
      place: "Jessore Cantonment College",
      date: "2021 — 2022",
      grade: "GPA 4.92",
      desc: "Major in Science with advanced mathematics and analytical physics.",
    },
    {
      title: "Secondary School Certificate",
      place: "Chandipur Secondary School",
      date: "2020",
      grade: "GPA 5.00",
      desc: "Core science foundations with a perfect academic record.",
    },
  ],
  achievements: [
    {
      title: "Dean's Honor Award",
      place: "Academic Excellence",
      date: "2024",
      icon: <Trophy className="w-5 h-5" />,
      desc: "Awarded for consistent academic performance and research initiatives.",
    },
    {
      title: "VC Recognition",
      place: "University Impact",
      date: "2023",
      icon: <Sparkles className="w-5 h-5" />,
      desc: "Special recognition from the Vice-Chancellor for community leadership.",
    },
  ],
  hobbies: [
    {
      name: "Photography",
      icon: <Camera />,
      bg: "bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400",
    },
    {
      name: "Travelling",
      icon: <Plane />,
      bg: "bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400"
    },
    {
      name: "Gaming",
      icon: <Gamepad2 />,
      bg: "bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400"
    },
    {
      name: "Horror Enthusiast",
      icon: <Ghost />,
      bg: "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100",
    },
  ],
  funFacts: [
    {
      title: "Psychology Nerd",
      icon: "🧠",
      desc: "I spend free time decoding human behavior and UX psychology.",
      color: "border-pink-100 dark:border-pink-900/50",
    },
    {
      title: "Cosmic Explorer",
      icon: "🌌",
      desc: "Amateur stargazer fascinated by quantum mechanics and space-time.",
      color: "border-indigo-100 dark:border-indigo-900/50",
    },
    {
      title: "Night Coder",
      icon: "🦉",
      desc: "My best lines of code are usually written between 2 AM and 5 AM.",
      color: "border-amber-100 dark:border-amber-900/50",
    },
  ],
};

type TabId = keyof AboutData;

// Note: Navbar logic maintained for consistency
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md py-2 shadow-lg border-b border-zinc-100 dark:border-zinc-800" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative w-10 h-10 rounded-full border-2 border-white dark:border-zinc-800 overflow-hidden">
               <img src="/image/myimage.jpeg" alt="Mehadi Hasan" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Mehadi+Hasan&background=0D8ABC&color=fff"; }} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white leading-none">Mehadi Hasan</span>
            <span className="text-[10px] font-medium text-blue-600 dark:text-blue-400 uppercase tracking-widest mt-1">Full-Stack Dev</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/50 dark:bg-zinc-800/50 p-1 rounded-full border border-zinc-200/50 dark:border-zinc-700/50">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="px-5 py-2 rounded-full text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-700 transition-all duration-200">{link.name}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 mr-2 border-r border-zinc-200 dark:border-zinc-800 pr-4">
            <a href="#" className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"><Github size={20} /></a>
            <a href="#" className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-blue-600"><Linkedin size={20} /></a>
          </div>
          <div className="relative">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="rounded-full w-10 h-10 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
              <Sun className="h-[1.2rem] w-[1.2rem] dark:hidden" />
              <Moon className="hidden h-[1.2rem] w-[1.2rem] dark:block" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl p-1 z-[60]">
                {['light', 'dark', 'system'].map((m) => (
                  <button key={m} onClick={() => { setTheme(m); setIsDropdownOpen(false); }} className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 capitalize">
                    {m === 'light' ? <Sun size={16} /> : m === 'dark' ? <Moon size={16} /> : <Laptop size={16} />} {m}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

const AboutMyself: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>("education");

  const tabs = [
    { id: "education" as TabId, label: "Academics", icon: GraduationCap },
    { id: "achievements" as TabId, label: "Milestones", icon: Trophy },
    { id: "hobbies" as TabId, label: "Lifestyle", icon: Heart },
    { id: "funFacts" as TabId, label: "Trivia", icon: Sparkles },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-zinc-950 overflow-hidden font-sans transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Layout: Intro & Image */}
        <div className="flex flex-col lg:flex-row items-start gap-16 mb-24">
          <div className="relative group shrink-0 self-center lg:self-start">
            <div className="absolute -inset-4 bg-zinc-50 dark:bg-zinc-900 rounded-[3.5rem] -z-10 group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/10 transition-colors duration-500"></div>
            <div className="w-64 h-80 rounded-[3rem] overflow-hidden border-[8px] border-white dark:border-zinc-900 shadow-2xl transition-transform duration-700">
              <img
                src="/image/myimage.jpeg"
                alt="Profile"
                className="w-full h-full object-cover transition-all duration-700 scale-110 hover:scale-100"
                onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Mehadi+Hasan"; }}
              />
            </div>

            {/* Status Badge */}
            <div className="absolute bottom-6 -right-4 bg-white dark:bg-zinc-900 px-4 py-3 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 flex items-center gap-3 animate-bounce-slow">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-tighter">
                  Status
                </span>
                <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest">
                  Available for Hire
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left pt-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400 mb-4 italic">
              The Developer Behind the Code
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif italic text-zinc-900 dark:text-zinc-100 mb-6 leading-tight">
              Crafting robust{" "}
              <span className="text-zinc-400 dark:text-zinc-500 not-italic font-sans font-light underline decoration-blue-100 dark:decoration-blue-900/30 decoration-4 underline-offset-8">
                Full-Stack
              </span>{" "}
              <br />
              experiences with precision.
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed max-w-2xl mb-8">
              I am a passionate Full Stack Web Developer and a CSE scholar at
              Green University of Bangladesh. My primary focus is to create
              seamless digital architectures by combining complex backend logic
              with interactive frontend experiences.
            </p>

            {/* Career Goals / Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left border-t border-zinc-100 dark:border-zinc-800 pt-8 mt-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-200 font-semibold text-sm italic">
                  <Layers className="w-4 h-4 text-blue-500" /> Full-Stack Mastery
                </div>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-normal">
                  Frontend aesthetics paired with powerful server-side logic.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-200 font-semibold text-sm italic">
                  <Zap className="w-4 h-4 text-blue-500" /> Optimized Perf
                </div>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-normal">
                  Focusing on high-speed response times and light architectures.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-200 font-semibold text-sm italic">
                  <ShieldCheck className="w-4 h-4 text-blue-500" /> Secure Coding
                </div>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-normal">
                  Prioritizing data integrity and secure user authentication.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab System */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Vertical Navigation */}
          <div className="flex flex-row md:flex-col gap-2 shrink-0 overflow-x-auto no-scrollbar md:w-48">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold tracking-wide transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-zinc-900 dark:bg-zinc-800 text-white shadow-lg"
                    : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Content Display */}
          <div className="flex-1 min-h-[450px]">
            {activeTab === "education" && (
              <div className="grid gap-8 animate-in fade-in slide-in-from-right-8 duration-700">
                {aboutData.education.map((item, i) => (
                  <div key={i} className="relative pl-10 group">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-100 dark:bg-zinc-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors"></div>
                    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-700 group-hover:bg-blue-600 transition-all group-hover:scale-150"></div>

                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                      <h4 className="text-xl font-serif italic text-zinc-900 dark:text-zinc-100">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase">
                        {item.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
                        {item.place}
                      </span>
                      {item.grade && (
                        <span className="bg-zinc-50 dark:bg-zinc-900 px-2 py-0.5 rounded text-[10px] font-bold text-zinc-500 dark:text-zinc-400 border border-zinc-100 dark:border-zinc-800">
                          {item.grade}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "achievements" && (
              <div className="grid sm:grid-cols-2 gap-6 animate-in fade-in zoom-in-95 duration-700">
                {aboutData.achievements.map((item, i) => (
                  <div
                    key={i}
                    className="p-8 border border-zinc-100 dark:border-zinc-800 rounded-3xl hover:border-blue-500/20 dark:hover:border-blue-400/20 transition-all hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-400/5 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2">
                      {item.date}
                    </div>
                    <h4 className="text-xl font-serif italic mb-2 text-zinc-900 dark:text-zinc-100">
                      {item.title}
                    </h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "hobbies" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in duration-700">
                {aboutData.hobbies.map((hobby, i) => (
                  <div
                    key={i}
                    className="group relative aspect-square rounded-3xl overflow-hidden border border-zinc-100 dark:border-zinc-800 p-6 flex flex-col items-center justify-center text-center hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all"
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl ${hobby.bg} flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform`}
                    >
                      {React.cloneElement(hobby.icon as React.ReactElement, {
                        size: 24,
                      })}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100">
                      {hobby.name}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "funFacts" && (
              <div className="grid gap-4 animate-in slide-in-from-bottom-8 duration-700">
                {aboutData.funFacts.map((fact, i) => (
                  <div
                    key={i}
                    className={`p-6 border-l-4 ${fact.color} bg-zinc-50/50 dark:bg-zinc-900/50 rounded-r-2xl flex items-start gap-6 group hover:bg-white dark:hover:bg-zinc-900 hover:shadow-lg transition-all`}
                  >
                    <span className="text-4xl transition-all">
                      {fact.icon}
                    </span>
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                        {fact.title}
                      </h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{fact.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5px); }
          50% { transform: translateY(5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default AboutMyself;
