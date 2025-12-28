"use client"
//import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  Zap
} from 'lucide-react';

import { supabase } from '../../lib/supabase';
const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
 // const router = useRouter();
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const { data: adminData, error } = await supabase
      .from('admin')
      .select('*')
      .eq('email', formData.email)
      .single();

    if (error || !adminData) {
      console.error('Error or Admin not found:', error?.message);
      alert('Access Denied. Invalid credentials.');
    } else {
      // Password check
      if (adminData.password === formData.password) {
        alert('Access Granted. Welcome to your admin dashboard!');
        console.log('Admin authenticated:', adminData);
      //  router.push('/components/dashboard');
      } else {
        alert('Access Denied. Invalid credentials.');
      }
    }
  } catch (err) {
    console.error('Unexpected error:', err);
    alert('An unexpected error occurred.');
  } finally {
    // Jetai hok, loading bondho hobe
    setIsLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center p-6 font-sans transition-colors duration-300">
      {/* Background Decorative Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[30%] h-[30%] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-zinc-50 dark:bg-zinc-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-md relative">
        {/* Logo / Branding */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-zinc-900 dark:bg-zinc-800 mb-6 shadow-xl shadow-zinc-200 dark:shadow-none relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <ShieldCheck className="text-white relative z-10" size={32} />
          </div>
          <h1 className="text-3xl font-serif italic text-zinc-900 dark:text-zinc-100">Welcome Back, Mehadi</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm tracking-wide">Enter credentials to access your workspace</p>
        </div>

        {/* Login Card */}
        <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-100 dark:border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl shadow-zinc-200/50 dark:shadow-none">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 ml-1">Admin Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-blue-600 transition-colors">
                  <Mail size={16} />
                </div>
                <input
                  type="email"
                  required
                  className="w-full bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-700/50 text-zinc-900 dark:text-zinc-100 py-3.5 pl-11 pr-4 rounded-2xl focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 outline-none transition-all text-sm"
                  placeholder="hello@mehadi.com"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Security Key</label>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-blue-600 transition-colors">
                  <Lock size={16} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-700/50 text-zinc-900 dark:text-zinc-100 py-3.5 pl-11 pr-12 rounded-2xl focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 outline-none transition-all text-sm"
                  placeholder="••••••••"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-zinc-900 dark:bg-blue-600 hover:bg-zinc-800 dark:hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70 mt-4 shadow-lg shadow-zinc-200 dark:shadow-blue-900/20"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <UserCheck size={18} />
                  Authorize Access
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer Info */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            <Zap size={12} className="text-blue-500" />
            Protected by Portfolio Security
          </div>
          <p className="text-zinc-400 dark:text-zinc-600 text-xs text-center leading-relaxed">
            Authorized access only. All activities are logged for security purposes.
            <br />
            <span className="text-zinc-300 dark:text-zinc-800 mt-2 block italic">Nexus OS v2.4.0</span>
          </p>
        </div>
      </div>

      {/* Background Subtle Grid */}
      <div className="absolute inset-0 z-[-2] opacity-[0.03] dark:opacity-[0.02]"
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>
    </div>
  );
};

export default AdminLogin;
