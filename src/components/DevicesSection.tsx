// src/components/DevicesSection.tsx
import { Tv, Monitor, Smartphone, Tablet, LaptopMinimal } from 'lucide-react';

export default function DevicesSection() {
  const devices = [
    { name: "Smart TV", icon: Tv },
    { name: "TV Box", icon: Monitor },
    { name: "Celular", icon: Smartphone },
    { name: "Tablet", icon: Tablet },
    { name: "Computador", icon: LaptopMinimal },
  ];

  return (
    <section id="devices" className="py-16 md:py-24 relative bg-graphite border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Assista onde for <span className="text-gradient">mais confortável</span>
          </h2>
          <p className="text-gray-400 text-lg">
            O acesso pode funcionar em diferentes dispositivos compatíveis. A equipe informa as opções disponíveis no atendimento.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16">
          {devices.map((dev, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-black-deep border border-white/10 flex items-center justify-center shadow-lg group-hover:border-neon-blue/50 group-hover:shadow-[0_0_20px_rgba(0,207,255,0.2)] transition-all">
                <dev.icon className="w-10 h-10 md:w-12 md:h-12 text-gray-400 group-hover:text-neon-blue transition-colors" strokeWidth={1.5} />
              </div>
              <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{dev.name}</span>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <a href="https://wa.me/554792733349?text=Gostaria%20de%20realizar%20meu%20teste%20gratis%2C%20no%20Leandro%20CineMax!" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors font-medium text-white shadow-xl">
            Solicitar meu teste grátis
          </a>
        </div>
      </div>
    </section>
  );
}
