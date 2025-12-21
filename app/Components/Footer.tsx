"use client"
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('00:00');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="bg-[#111827] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Subtle Elements */}
      <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
        <Leaf size={150} className="rotate-45 text-gray-400" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif italic mb-6 leading-tight">
              Building the future <br /> of the web.
            </h2>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Full Stack Developer & CSE Student focused on high-performance architecture and scalability.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                 className="w-11 h-11 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="w-11 h-11 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hello@yourdomain.com"
                 className="w-11 h-11 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">Start a Conversation</h4>
            <form className="flex border-b border-gray-700 pb-2 group focus-within:border-white transition-colors">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent border-none w-full text-sm focus:outline-none py-2 placeholder:text-gray-600"
              />
              <button type="submit" className="text-[10px] font-bold uppercase tracking-widest hover:text-gray-400 transition flex items-center gap-2">
                Get Started <ArrowUpRight size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          <FooterColumn
            title="Navigation"
            links={[
              { label: 'Home', href: '/' },
              { label: 'About Me', href: '#about' },
              { label: 'Projects', href: '#projects' }
            ]}
          />
          <FooterColumn
            title="Expertise"
            links={[
              { label: 'Frontend Dev', href: '#' },
              { label: 'Backend Architecture', href: '#' },
              { label: 'Cloud Integration', href: '#' }
            ]}
          />
          <FooterColumn
            title="Resources"
            links={[
              { label: 'Resume PDF', href: '#' },
              { label: 'Knowledge Base', href: '#' },
              { label: 'Tech Stack', href: '#' }
            ]}
          />
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600 mb-8">Location</h4>
            <p className="text-gray-400 text-sm mb-2">Dhaka, Bangladesh</p>
            <p className="text-gray-400 text-sm">UTC +06:00</p>
          </div>
        </div>

        {/* Divider with Subtle Icon */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111827] px-4">
            <Leaf size={14} className="text-gray-600" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase">
          <div className="mb-6 md:mb-0">
            &copy; {new Date().getFullYear()} Full Stack Portfolio — CSE Student
          </div>
          <div className="flex space-x-8">
            <span className="text-gray-400">Local Time: <span className="text-white tabular-nums">{time}</span></span>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Component for Footer Columns
const FooterColumn = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <div>
    <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600 mb-8">{title}</h4>
    <ul className="space-y-4 text-sm">
      {links.map((link, idx) => (
        <li key={idx}>
          <a href={link.href} className="text-gray-500 hover:text-white hover:translate-x-1 transition-all inline-block">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
