// src/components/SeriesSection.tsx
import { Layers, Clock, Grid3X3, Smile, Play } from 'lucide-react';

export default function SeriesSection() {
  const features = [
    { text: "Temporadas completas", icon: Layers },
    { text: "Novidades frequentes", icon: Clock },
    { text: "Categorias organizadas", icon: Grid3X3 },
    { text: "Experiência simples e intuitiva", icon: Smile },
  ];

  return (
    <section className="py-16 md:py-24 relative bg-black-deep/50 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-netflix-dark/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content */}
          <div className="flex-1 lg:pr-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Maratone suas <span className="text-gradient">séries favoritas</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl">
              Temporadas, episódios e novidades organizados para você aproveitar sem complicação.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-graphite/40 border border-white/5 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-lg bg-netflix-dark/10 flex items-center justify-center border border-netflix-dark/20">
                    <feature.icon className="w-5 h-5 text-netflix-dark" />
                  </div>
                  <span className="font-medium text-white">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <a href="https://wa.me/554792733349?text=Gostaria%20de%20realizar%20meu%20teste%20gratis%2C%20no%20Leandro%20CineMax!" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-action-green/20 text-action-green hover:bg-action-green/30 border border-action-green/30 transition-all font-medium">
              Solicitar meu teste grátis <Play className="w-4 h-4 fill-action-green" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
