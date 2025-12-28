import React from 'react';

const GithubIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.5 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5.7 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-.7zm-4.1-10.3c-.6 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7z"></path>
  </svg>
);

const ExternalIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const projects = [
  {
    title: "EasyCityConquer",
    type: "Web Application",
    desc: "City management platform with real-time conquering mechanics and territory building.",
    tags: ["React", "Firebase"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section className="pt-10 bg-white dark:bg-gray-950 transition-colors duration-300" id='projects'>
      <div className="max-w-5xl mx-auto px-6">

        {/* Header - Compact & Clean */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 border-b border-gray-100 dark:border-gray-900 pb-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Selected Projects
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Building efficient digital solutions with modern technologies.
            </p>
          </div>
          <a href="#" className="text-xs font-medium text-blue-600 hover:underline flex items-center gap-1">
            Browse all repositories <ExternalIcon />
          </a>
        </div>

        {/* Project List - Professional Standard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {projects.map((p, i) => (
            <div key={i} className="group flex flex-col space-y-4">
              {/* Thumbnail - Simplified */}
              <div className="relative aspect-video bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200/50 dark:border-gray-800/50 transition-all group-hover:border-blue-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
                {/* Image Placeholder effect */}
                <div className="flex items-center justify-center h-full opacity-20 group-hover:opacity-40 transition-opacity">
                   <GithubIcon />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">
                    {p.type}
                  </span>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={p.link} className="text-gray-400 hover:text-gray-900 dark:hover:text-white"><GithubIcon /></a>
                    <a href={p.link} className="text-gray-400 hover:text-blue-600"><ExternalIcon /></a>
                  </div>
                </div>

                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 leading-tight">
                  {p.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                  {p.desc}
                </p>

                {/* Tech Tags - Minimalist */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.tags.map(t => (
                    <span key={t} className="text-[11px] text-gray-400 dark:text-gray-600">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Footer CTA */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-400">
            Interested in collaboration?
            <a href="mailto:mehadi.hasan.engr@gmail.com" className="ml-2 text-gray-900 dark:text-white font-medium hover:text-blue-600 underline underline-offset-4 decoration-gray-200 dark:decoration-gray-800 transition-colors">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
