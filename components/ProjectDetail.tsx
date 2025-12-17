
import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 overflow-y-auto">
      <div className="min-h-screen flex flex-col">
        {/* Header/Hero do Projeto */}
        <div className="relative h-[40vh] md:h-[60vh] w-full">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-8 left-8 p-3 bg-slate-900/50 backdrop-blur-md rounded-full text-white hover:bg-slate-800 transition-all border border-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
        </div>

        {/* Conteúdo */}
        <div className="max-w-4xl mx-auto px-6 pb-32 -mt-32 relative z-10">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
            <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-bold rounded-full mb-6 border border-cyan-500/20 uppercase tracking-widest">
              {project.architectureType} Architecture
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight">
              {project.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="text-xl font-bold text-white mb-4">Sobre o Projeto</h2>
                <p className="text-slate-400 leading-relaxed text-lg mb-8">
                  {project.longDescription}
                </p>

                <div className="mt-12">
                  <h2 className="text-xl font-bold text-white mb-6">Stack Tecnológica</h2>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-4 py-2 bg-slate-800 text-slate-200 rounded-xl text-sm font-medium border border-slate-700 shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-6 bg-slate-950/50 rounded-2xl border border-white/5">
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Ação</h3>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-white text-slate-950 font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-cyan-50 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Ver Repositório
                  </a>
                </div>

                <div className="p-6 bg-cyan-600/5 rounded-2xl border border-cyan-500/10">
                  <h3 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-4">Destaques Técnicos</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-slate-300 text-sm italic">
                      <span className="text-cyan-500 mt-1">•</span>
                      Escalabilidade horizontal massiva
                    </li>
                    <li className="flex items-start gap-2 text-slate-300 text-sm italic">
                      <span className="text-cyan-500 mt-1">•</span>
                      Processamento Near Real-Time
                    </li>
                    <li className="flex items-start gap-2 text-slate-300 text-sm italic">
                      <span className="text-cyan-500 mt-1">•</span>
                      Arquitetura desacoplada
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
