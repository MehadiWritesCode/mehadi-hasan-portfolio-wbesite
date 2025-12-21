"use client"
import React from "react";
import {
  Layout,
  Database,
  Settings2,
  Terminal,
  Cpu
} from "lucide-react";

/**
 * TypeScript Interfaces
 */
interface Skill {
  name: string;
  icon: React.ReactNode;
  color?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Terminal className="w-5 h-5 text-blue-500" />,
    skills: [
      { name: "C", icon: <span className="font-bold text-blue-600">C</span> },
      { name: "C++", icon: <span className="font-bold text-blue-500">C++</span> },
      { name: "Java", icon: <span className="font-bold text-red-500">Java</span> },
      { name: "JavaScript", icon: <span className="font-bold text-yellow-500">JS</span> },
      { name: "Assembly", icon: <Cpu className="w-5 h-5 text-gray-400" /> },
    ],
  },
  {
    title: "Frontend / UI",
    icon: <Layout className="w-5 h-5 text-cyan-500" />,
    skills: [
      { name: "React", icon: <span className="text-cyan-400 font-bold">React</span> },
      { name: "Next.js", icon: <span className="font-bold">Next.js</span> },
      { name: "Tailwind", icon: <span className="text-sky-400 font-bold">CSS</span> },
      { name: "TypeScript", icon: <span className="text-blue-500 font-bold">TS</span> },
    ],
  },
  {
    title: "Backend & Databases",
    icon: <Database className="w-5 h-5 text-green-500" />,
    skills: [
      { name: "Node.js", icon: <span className="text-green-500 font-bold">Node</span> },
      { name: "Express", icon: <span className="text-gray-400 font-bold">Ex</span> },
      { name: "MongoDB", icon: <span className="text-green-600 font-bold">MDB</span> },
      { name: "MySQL", icon: <span className="text-blue-500 font-bold">SQL</span> },
      { name: "PostgreSQL", icon: <span className="text-blue-600 font-bold">PSQL</span> },
    ],
  },
  {
    title: "Tools & Version Control",
    icon: <Settings2 className="w-5 h-5 text-red-500" />,
    skills: [
      { name: "Git", icon: <span className="text-red-500 font-bold">Git</span> },
      { name: "GitHub", icon: <span className="font-bold">GH</span> },
    ],
  },
];

const TechnicalSkills: React.FC = () => {
  return (
    <div id="skills" className="py-20 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-serif italic mb-4 text-gray-900 dark:text-gray-100">
            Technical <span className="text-gray-400 not-italic font-sans font-light">Proficiency</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xl leading-relaxed">
            A comprehensive list of technologies I use to build robust, scalable,
            and user-centric digital solutions.
          </p>
        </div>

        <div className="grid gap-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="group">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-sm font-bold tracking-widest text-gray-800 dark:text-zinc-200 uppercase">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-blue-200 dark:hover:border-blue-900/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group/item"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-zinc-800 text-[10px] border border-gray-100 dark:border-zinc-700 group-hover/item:text-blue-500 transition-colors shrink-0">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-bold text-gray-500 dark:text-zinc-400 group-hover/item:text-gray-900 dark:group-hover/item:text-zinc-100 truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
