// src/components/Hero.tsx
import { Monitor, Zap, Tv, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-neon-blue/15 rounded-full blur-[150px] mix-blend-screen opacity-40"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-neon-pink/10 rounded-full blur-[150px] mix-blend-screen"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black-deep/50 to-black-deep"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col items-center gap-12 lg:gap-8">
          
          {/* Text Content */}
          <div className="w-full text-center max-w-4xl pt-4 animate-fade-up opacity-0">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-4 md:mb-6 mt-2 md:mt-12">
              Viva o cinema<br />
              <span className="text-gradient">sem sair de casa</span>
            </h1>
            
            <p className="text-base md:text-xl text-gray-400 mb-4 max-w-2xl mx-auto px-2">
              Filmes, séries, temporadas e entretenimento em uma experiência premium para assistir quando quiser.
            </p>
            
            <p className="text-sm md:text-base text-gray-500 mb-8 max-w-2xl mx-auto px-2">
              Qualidade HD e 4K, acesso rápido, catálogo atualizado e compatibilidade com seus dispositivos favoritos.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
              <a href="https://wa.me/554792733349?text=Gostaria%20de%20realizar%20meu%20teste%20gratis%2C%20no%20Leandro%20CineMax!" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-block relative p-[2px] rounded-full overflow-hidden group/btn hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(123,44,255,0.3)]">
                <span className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-[spin_3s_linear_infinite] group-hover/btn:opacity-100 opacity-80"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-80 blur-md group-hover/btn:opacity-100 transition-opacity"></span>
                <div className="relative bg-black-deep px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-colors group-hover/btn:bg-transparent">
                  <span className="relative z-10 font-bold text-lg text-white">Assinar agora</span>
                  <span className="relative z-10 font-display text-xl md:text-2xl font-bold text-white tracking-tight">R$29,90<span className="text-sm md:text-base font-medium opacity-80">/mês</span></span>
                </div>
              </a>
              
              <a href="https://wa.me/554792733349?text=Gostaria%20de%20realizar%20meu%20teste%20gratis%2C%20no%20Leandro%20CineMax!" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white font-medium text-center backdrop-blur-sm flex items-center justify-center gap-2">
                Solicitar meu teste grátis
              </a>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm font-medium text-gray-300 max-w-xl mx-auto">
              <div className="flex items-center gap-2 bg-graphite/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/5 shadow-inner">
                <Monitor className="w-5 h-5 text-neon-blue" />
                <span>Qualidade HD e 4K</span>
              </div>
              <div className="flex items-center gap-2 bg-graphite/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/5 shadow-inner">
                <Zap className="w-5 h-5 text-neon-orange" />
                <span>Acesso rápido</span>
              </div>
              <div className="flex items-center gap-2 bg-graphite/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/5 shadow-inner">
                <Tv className="w-5 h-5 text-neon-pink" />
                <span>Catálogo atualizado</span>
              </div>
              <div className="flex items-center gap-2 bg-graphite/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/5 shadow-inner">
                <Smartphone className="w-5 h-5 text-neon-purple" />
                <span>Smart TV, Box e Celular</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
