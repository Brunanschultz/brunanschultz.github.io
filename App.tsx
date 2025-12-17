
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200 text-slate-100">
      {/* Background Gradients */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.08),transparent_40%)] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(79,70,229,0.08),transparent_40%)] pointer-events-none"></div>
      
      <Navbar />
      
      <main>
        {/* Renderiza a página principal se nenhum projeto estiver selecionado */}
        <div className={selectedProject ? 'hidden' : 'block'}>
          <Hero />
          
          <div id="projects">
            <Projects onSelectProject={(project) => setSelectedProject(project)} />
          </div>
          
          <div id="skills">
            <Skills />
          </div>
          
          <div className="py-40 px-4 text-center">
            <div className="max-w-3xl mx-auto bg-slate-900/40 border border-slate-800 rounded-3xl p-16 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <h2 className="text-4xl font-bold mb-6 text-white relative z-10 tracking-tight">Vamos construir algo sólido?</h2>
              <p className="text-slate-400 mb-10 relative z-10 text-xl font-light">
                Seja para discutir arquiteturas distribuídas ou otimização de custos em nuvem, estou sempre aberta a novos desafios.
              </p>
              <a href="mailto:bruna.schultz@example.com" className="relative z-10 inline-block px-12 py-5 bg-white text-slate-950 font-black rounded-2xl transition-all shadow-2xl hover:-translate-y-1 active:scale-95">
                INICIAR CONVERSA
              </a>
            </div>
          </div>
        </div>

        {/* Modal de Detalhe do Projeto (Simula Página) */}
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </main>
      
      {!selectedProject && <Footer />}
    </div>
  );
};

export default App;
