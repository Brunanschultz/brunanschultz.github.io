
import React from 'react';

const Hero: React.FC = () => {
  const companies = [
    { name: 'Itaú', color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
    { name: 'Vivo', color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
    { name: 'Raízen', color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20' }
  ];

  const specializations = ['Área Financeira', 'Sistemas de Crédito', 'Ecossistema de Cartões'];

  return (
    <section id="home" className="pt-40 pb-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 text-left">
        {/* Foto de Perfil à Esquerda */}
        <div className="relative shrink-0">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-cyan-500/20 p-2 bg-gradient-to-tr from-cyan-500/10 to-transparent backdrop-blur-sm shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
              alt="Bruna Schultz"
              className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
          <div className="absolute -bottom-2 right-4 bg-slate-900/90 border border-slate-700 px-4 py-1.5 rounded-full shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-400 mono uppercase tracking-tighter">System Status: Online</span>
            </div>
          </div>
        </div>

        {/* Nome e Resumo à Direita */}
        <div className="flex-grow">
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
            Bruna Schultz
          </h1>
          
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl text-cyan-400 mb-6 font-medium tracking-tight italic">
              Engenheira de Dados
            </p>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Especialista em Engenharia de Dados com foco intensivo em <span className="text-white font-semibold">Finanças, Crédito e Cartões</span>. 
              Transformo ecossistemas financeiros complexos em pipelines de alta performance, garantindo integridade e escalabilidade para decisões em tempo real.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {specializations.map(spec => (
                <span key={spec} className="px-3 py-1 bg-cyan-950/30 text-cyan-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-cyan-500/10">
                  {spec}
                </span>
              ))}
            </div>

            <div className="mb-10">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Trajetória em grandes players:</p>
              <div className="flex flex-wrap gap-3">
                {companies.map(company => (
                  <div key={company.name} className={`px-4 py-2 rounded-lg border ${company.bg} ${company.border} flex items-center gap-2 transition-transform hover:-translate-y-1`}>
                    <span className={`font-bold ${company.color}`}>{company.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-cyan-600/20">
                Ver Projetos
              </a>
              <a href="#skills" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl border border-slate-800 transition-all">
                Stack Técnica
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
