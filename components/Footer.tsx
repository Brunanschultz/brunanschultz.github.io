
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-slate-500 hover:text-white transition-colors">GitHub</a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors">Medium (Blog)</a>
          <a href="mailto:data@example.com" className="text-slate-500 hover:text-white transition-colors">Email</a>
        </div>
        <p className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Data Engineering Portfolio. Built with React, Tailwind & Gemini API.
        </p>
        <div className="mt-4 text-[10px] text-slate-800 font-mono">
          SYSTEM_VERSION: 1.2.0-STABLE | PIPELINE_STATUS: ACTIVE
        </div>
      </div>
    </footer>
  );
};

export default Footer;
