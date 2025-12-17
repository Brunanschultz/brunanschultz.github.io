
import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">Projetos em Destaque</h2>
          <div className="w-24 h-1.5 bg-cyan-500 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 cursor-pointer"
              onClick={() => onSelectProject(project)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              </div>
              
              <div className="p-8 relative">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-cyan-500/20">
                    {project.architectureType}
                  </span>
                </div>
                
                <p className="text-slate-400 leading-relaxed mb-8 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-950 text-slate-400 text-[10px] font-bold uppercase rounded-lg border border-slate-800">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-3 py-1 text-slate-600 text-[10px] font-bold">+{project.techStack.length - 4} more</span>
                  )}
                </div>

                <div className="flex items-center text-cyan-400 font-bold text-sm gap-2 group-hover:gap-4 transition-all">
                  Explorar Projeto
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
