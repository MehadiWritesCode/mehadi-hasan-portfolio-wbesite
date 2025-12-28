"use client"
import React, { useState } from 'react';
import {
  LayoutDashboard,
  FolderPlus,
  Image as ImageIcon,
  Tag,
  Link as LinkIcon,
  LogOut,
  Send,
  CheckCircle2,
  Zap,
  Globe,
  Settings,
  HelpCircle,
  User,
  Bell,
  Lock,
  Menu,
  X,
  Camera,
  ChevronRight
} from 'lucide-react';

/**
 * PRO TIPS FOR IMPORTING:
 * 1. Ensure 'lucide-react' is installed.
 * 2. This component uses Tailwind CSS for styling.
 * 3. You can import this as: import Dashboard from './Dashboard';
 */

// Supabase client placeholder logic
const supabaseStub = {
  from: (table: string) => ({
    insert: (data: any) => Promise.resolve({ data, error: null })
  })
} as any;

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'settings'>('projects');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Project Form State
  const [formData, setFormData] = useState({
    title: "",
    type: "Web Application",
    desc: "",
    tags: "",
    link: "#",
    image: ""
  });

  // Settings State
  const [settingsData, setSettingsData] = useState({
    adminName: "Mehadi Hasan",
    adminEmail: "contact@mehadi.dev",
    portfolioTitle: "Mehadi's Dev Portfolio",
    bio: "Full Stack Developer specializing in React & Node.js",
    emailNotifications: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== "");

    try {
      // Replace with actual supabase import if used
      const { error } = await supabaseStub
        .from('projects')
        .insert([{
            title: formData.title,
            type: formData.type,
            description: formData.desc,
            tags: tagsArray,
            link: formData.link,
            image_url: formData.image
        }]);

      if (error) throw error;

      setIsSuccess(true);
      setFormData({ title: "", type: "Web Application", desc: "", tags: "", link: "#", image: "" });
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error: any) {
      console.error("Error saving project:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#09090b] flex font-sans text-zinc-900 dark:text-zinc-100 transition-colors duration-300 overflow-x-hidden">

      {/* Mobile Header Overlay Control */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 z-40 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>
           <span className="font-bold text-sm italic">Mehadi.OS</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar - Fully Responsive */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex lg:flex-col
        ${isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
      `}>
        <div className="p-6 hidden lg:block">
          <div className="flex items-center gap-2 px-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>
            <span className="font-bold text-sm tracking-tight italic">Mehadi.OS</span>
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-1 mt-20 lg:mt-0 overflow-y-auto">
          <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-4 py-4">Main Menu</div>
          <NavItem
            icon={<LayoutDashboard size={18} />}
            label="Overview"
            onClick={closeMobileMenu}
          />
          <NavItem
            icon={<FolderPlus size={18} />}
            label="Add Project"
            active={activeTab === 'projects'}
            onClick={() => { setActiveTab('projects'); closeMobileMenu(); }}
          />
          <NavItem icon={<Globe size={18} />} label="Live Site" onClick={closeMobileMenu} />

          <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-4 py-4 mt-4">Security & System</div>
          <NavItem
            icon={<Settings size={18} />}
            label="Settings"
            active={activeTab === 'settings'}
            onClick={() => { setActiveTab('settings'); closeMobileMenu(); }}
          />
          <NavItem icon={<HelpCircle size={18} />} label="Support" onClick={closeMobileMenu} />
        </nav>

        {/* User Quick Profile & Logout */}
        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-3 p-3 mb-2 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
             <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 font-bold text-xs overflow-hidden">
                {settingsData.adminName.charAt(0)}
             </div>
             <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                <p className="text-xs font-bold truncate">{settingsData.adminName}</p>
                <p className="text-[10px] text-zinc-400 truncate tracking-tight">{settingsData.adminEmail}</p>
             </div>
          </div>
          <button className="w-full flex items-center gap-2 px-4 py-2 text-zinc-500 hover:text-red-500 transition-colors text-xs font-bold">
            <LogOut size={14} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 lg:p-12 mt-16 lg:mt-0 w-full overflow-y-auto">

        {/* Animated Success Toast */}
        {isSuccess && (
          <div className="fixed bottom-8 right-4 md:right-8 z-50 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 animate-in slide-in-from-bottom-4">
            <CheckCircle2 size={18} />
            <span className="font-bold text-sm">Action Completed Successfully!</span>
          </div>
        )}

        {activeTab === 'projects' ? (
          <div className="max-w-4xl mx-auto">
            <header className="mb-10">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Project Creation</h1>
              <p className="text-zinc-500 text-sm mt-1">Easily add new artifacts to your portfolio database.</p>
            </header>

            <section className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-10 shadow-sm transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-8">

                <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">Project Name</label>
                    <input name="title" value={formData.title} onChange={handleChange} required placeholder="e.g. Finance Dashboard" className="w-full bg-transparent border-b-2 border-zinc-100 dark:border-zinc-800 py-2 outline-none focus:border-indigo-600 transition-all text-lg font-medium" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">Category</label>
                    <select name="type" value={formData.type} onChange={handleChange} className="w-full bg-transparent border-b-2 border-zinc-100 dark:border-zinc-800 py-2 outline-none focus:border-indigo-600 transition-all text-lg font-medium">
                      <option>Web Application</option>
                      <option>Mobile App</option>
                      <option>Blockchain Dev</option>
                      <option>UI/UX Case Study</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">Project Summary</label>
                  <textarea name="desc" value={formData.desc} onChange={handleChange} rows={2} placeholder="Explain the project value..." className="w-full bg-transparent border-b-2 border-zinc-100 dark:border-zinc-800 py-2 outline-none focus:border-indigo-600 transition-all text-lg font-medium resize-none" />
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                      <Tag size={12} /> Tech Stack (Comma separated)
                    </label>
                    <input name="tags" value={formData.tags} onChange={handleChange} placeholder="React, NextJS, Supabase" className="w-full bg-transparent border-b-2 border-zinc-100 dark:border-zinc-800 py-2 outline-none focus:border-indigo-600 transition-all text-lg font-medium" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                      <LinkIcon size={12} /> Live Preview URL
                    </label>
                    <input name="link" value={formData.link} onChange={handleChange} placeholder="https://project.live" className="w-full bg-transparent border-b-2 border-zinc-100 dark:border-zinc-800 py-2 outline-none focus:border-indigo-600 transition-all text-lg font-medium" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                    <ImageIcon size={12} /> Banner Image Link
                  </label>
                  <input name="image" value={formData.image} onChange={handleChange} placeholder="https://images.unsplash.com/..." className="w-full bg-transparent border-b-2 border-zinc-100 dark:border-zinc-800 py-2 outline-none focus:border-indigo-600 transition-all text-lg font-medium" />
                </div>

                <div className="pt-6 flex justify-end">
                  <button type="submit" disabled={isLoading || !formData.title} className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-12 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-indigo-600/20 disabled:grayscale">
                    {isLoading ? "Saving..." : "Deploy to Portfolio"} <Send size={18} />
                  </button>
                </div>
              </form>
            </section>
          </div>
        ) : (
          /* SETTINGS VIEW */
          <div className="max-w-4xl mx-auto">
            <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-indigo-600">Account Settings</h1>
                <p className="text-zinc-500 text-sm mt-1">Manage your identity and profile preferences.</p>
              </div>
              <button className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform active:scale-95">Save Changes</button>
            </header>

            <div className="grid lg:grid-cols-12 gap-8 items-start">

              {/* Profile Overview Card */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 text-center shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-10"></div>
                  <div className="relative inline-block mt-4 mb-4">
                    <div className="w-24 h-24 rounded-full bg-zinc-100 dark:bg-zinc-800 border-4 border-white dark:border-zinc-950 overflow-hidden mx-auto flex items-center justify-center text-zinc-400">
                      <User size={40} />
                    </div>
                    <button className="absolute bottom-0 right-0 p-2 bg-indigo-600 text-white rounded-full shadow-lg border-2 border-white dark:border-zinc-950 hover:bg-indigo-700 transition-colors">
                      <Camera size={12} />
                    </button>
                  </div>
                  <h3 className="font-bold text-lg">{settingsData.adminName}</h3>
                  <p className="text-xs text-zinc-500 mb-6">{settingsData.adminEmail}</p>
                  <div className="flex justify-center gap-2">
                    <div className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">System Administrator</div>
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-3xl p-6 text-white shadow-xl shadow-zinc-900/20">
                   <p className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-widest">Current Plan</p>
                   <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-xl italic tracking-tight">Enterprise Pro</h4>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <Zap size={14} className="text-amber-400" />
                      </div>
                   </div>
                   <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl text-[10px] font-bold uppercase transition-colors tracking-widest">Upgrade Settings</button>
                </div>
              </div>

              {/* Editable Fields */}
              <div className="lg:col-span-8 space-y-8">
                <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm">
                  <h3 className="font-bold text-sm mb-8 flex items-center gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-4">
                    <User size={16} className="text-indigo-600" /> Personal Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Legal Name</label>
                      <input
                        value={settingsData.adminName}
                        onChange={(e) => setSettingsData({...settingsData, adminName: e.target.value})}
                        className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl outline-none focus:border-indigo-600 text-sm font-semibold transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Support Email</label>
                      <input
                        value={settingsData.adminEmail}
                        onChange={(e) => setSettingsData({...settingsData, adminEmail: e.target.value})}
                        className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl outline-none focus:border-indigo-600 text-sm font-semibold transition-all"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">About Bio</label>
                      <textarea
                        value={settingsData.bio}
                        onChange={(e) => setSettingsData({...settingsData, bio: e.target.value})}
                        rows={3}
                        className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl outline-none focus:border-indigo-600 text-sm font-semibold resize-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Privacy & Security Section */}
                <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm">
                  <h3 className="font-bold text-sm mb-8 flex items-center gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-4">
                    <Lock size={16} className="text-red-500" /> Advanced Security
                  </h3>
                  <div className="space-y-4">
                    <button className="w-full flex items-center justify-between p-5 bg-zinc-50 dark:bg-zinc-900 rounded-2xl hover:border-indigo-300 transition-all border border-transparent group">
                       <div className="flex items-center gap-4">
                          <div className="p-2.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-xl"><Bell size={18} /></div>
                          <div className="text-left">
                            <p className="text-sm font-bold">Two-Factor Auth</p>
                            <p className="text-[10px] text-zinc-400 font-medium">Extra layer of protection for login.</p>
                          </div>
                       </div>
                       <div className="w-10 h-6 bg-zinc-300 dark:bg-zinc-800 rounded-full relative transition-colors group-hover:bg-indigo-200">
                          <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                       </div>
                    </button>
                    <button className="w-full flex items-center justify-between p-5 bg-zinc-50 dark:bg-zinc-900 rounded-2xl hover:border-red-300 transition-all border border-transparent">
                       <div className="flex items-center gap-4">
                          <div className="p-2.5 bg-red-100 dark:bg-red-900/30 text-red-500 rounded-xl"><Lock size={18} /></div>
                          <div className="text-left">
                            <p className="text-sm font-bold">Master Password</p>
                            <p className="text-[10px] text-zinc-400 font-medium">Last updated 12 days ago.</p>
                          </div>
                       </div>
                       <ChevronRight size={16} className="text-zinc-400" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </main>

      {/* Mobile Sidebar Back-drop Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[45] lg:hidden transition-opacity"
          onClick={closeMobileMenu}
        />
      )}
    </div>
  );
};

// Reusable Navigation Link Component
const NavItem = ({ icon, label, active = false, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[13px] font-bold tracking-tight transition-all duration-300 group ${
    active
    ? "bg-indigo-600 text-white shadow-xl shadow-indigo-600/30 scale-[1.03]"
    : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 hover:text-zinc-900 dark:hover:text-zinc-100"
  }`}>
    <span className={`${active ? 'text-white' : 'text-zinc-400 group-hover:text-indigo-600'} transition-colors duration-300`}>{icon}</span>
    {label}
    {active && <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>}
  </button>
);

export default Dashboard;
