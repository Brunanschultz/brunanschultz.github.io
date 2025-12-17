
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-cyan-500 font-bold text-xl mono tracking-tight group cursor-default">
              BS<span className="text-slate-500">.</span>DATA
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              <a href="#home" className="text-slate-400 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Início</a>
              <a href="#projects" className="text-slate-400 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Projetos</a>
              <a href="#skills" className="text-slate-400 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Stack Técnica</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:brunanschultz@gmail.com" className="text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors border-r border-slate-800 pr-4 hidden sm:block">
              brunanschultz@gmail.com
            </a>
            <a href="#" className="p-2 text-slate-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
