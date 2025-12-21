"use client";

import React, { useState } from "react";

// --- Minimalist Icons (Lucide-style) ---
const MailIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const SendIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const MapPinIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Professional Form Data:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header Section */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-[0.2em] uppercase mb-4">
            Say Hello !
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
            Have a project in mind? <br />
            <span className="text-gray-500">Let`s build something together.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Side: Contact Information */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-gray-400 dark:text-gray-500">
                  <MailIcon />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-200 mb-1">Email</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    your.email@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-gray-400 dark:text-gray-500">
                  <PhoneIcon />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-200 mb-1">Phone</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    +880 1XXX-XXXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-gray-400 dark:text-gray-500">
                  <MapPinIcon />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-200 mb-1">Location</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
              <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
                Social Presence
              </p>
              <div className="flex gap-6">
                {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                  <a key={social} href="#" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Professional Form */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative">
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-800 py-3 outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-colors text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600"
                  />
                </div>
                <div className="group relative">
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-800 py-3 outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-colors text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="group relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full bg-transparent border-b border-gray-300 dark:border-gray-800 py-3 outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-colors text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600"
                />
              </div>

              <div className="group relative">
                <textarea
                  required
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project"
                  className="w-full bg-transparent border-b border-gray-300 dark:border-gray-800 py-3 outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-colors text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-medium hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Send Message
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <SendIcon />
                </span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactMe;
