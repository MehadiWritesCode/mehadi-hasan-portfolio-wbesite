"use client";

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative w-full flex items-center justify-center bg-white dark:bg-[#050505] transition-colors duration-500 overflow-hidden font-sans pt-10 lg:pt-32">

      {/* Ultra Subtle Radial Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
           style={{ backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`, backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">

        {/* Text Content */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-2.5">
            <p className="text-blue-600 dark:text-blue-400 font-medium tracking-[0.3em] uppercase text-[9px]">
              Software Engineer / Web Architect
            </p>
            <h1 className="text-5xl lg:text-6xl font-extralight tracking-tight text-gray-900 dark:text-white leading-tight">
              Mehadi <span className="font-normal">Hasan</span>
            </h1>
          </div>

          <p className="text-[15px] text-gray-400 dark:text-gray-500 max-w-sm font-light leading-relaxed border-l border-gray-100 dark:border-gray-900 pl-5">
            Developing high-performance digital environments where structural integrity meets refined minimalist aesthetics.
          </p>

          <div className="flex items-center gap-6 pt-1">
            <button className="group flex items-center gap-2 text-gray-900 dark:text-white text-xs font-medium transition-all hover:opacity-60">
              View Work
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <div className="h-4 w-[1px] bg-gray-100 dark:bg-gray-800" />
            <div className="flex items-center gap-5">
              <a href="#" className="text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Visual Content */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full aspect-[4/5] max-w-[320px] overflow-hidden rounded-sm bg-gray-50 dark:bg-gray-900 transition-all duration-700 hover:shadow-xl">
            <Image
                width={320}
                height={400}
              src="/image/myimage.jpeg"
              alt="Mehadi Hasan"
              className="object-cover brightness-105 contrast-[1.05] transition-all duration-1000 ease-in-out scale-105 hover:scale-100"
            />
          </div>

          {/* Subtle Location Indicator */}
          <div className="absolute bottom-6 -left-4 lg:-left-6 bg-white dark:bg-[#050505] py-1.5 px-3 border-y border-gray-100 dark:border-gray-900">
            <p className="text-[8px] font-medium tracking-[0.2em] text-gray-400 uppercase">
              Based in Bangladesh
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
