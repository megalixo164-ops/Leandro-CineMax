// src/components/Benefits.tsx
import { Film, RefreshCw, MonitorPlay, Zap, MonitorSmartphone, CreditCard } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      id: 1,
      title: "Filmes e séries",
      description: "Conteúdos variados para você aproveitar seus momentos de entretenimento.",
      icon: Film,
      color: "from-netflix-red to-netflix-dark"
    },
    {
      id: 2,
      title: "Catálogo atualizado",
      description: "Novidades, temporadas e opções para diferentes estilos de público.",
      icon: RefreshCw,
      color: "from-netflix-dark to-netflix-red"
    },
    {
      id: 3,
      title: "Qualidade HD e 4K",
      description: "Imagem de alta qualidade conforme sua conexão e dispositivo.",
      icon: MonitorPlay,
      color: "from-netflix-red to-netflix-light"
    },
    {
      id: 4,
      title: "Acesso rápido",
      description: "Receba as instruções de acesso e comece a assistir com praticidade.",
      icon: Zap,
      color: "from-netflix-dark to-netflix-red"
    },
    {
      id: 5,
      title: "Compatível com vários dispositivos",
      description: "Use em Smart TV, TV Box, celular, tablet ou computador compatível.",
      icon: MonitorSmartphone,
      color: "from-netflix-red to-netflix-dark"
    },
    {
      id: 6,
      title: "Plano acessível",
      description: "Experiência premium de entretenimento por apenas R$29,90 ao mês.",
      icon: CreditCard,
      color: "from-green-400 to-emerald-600"
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 relative bg-black-deep overflow-hidden">
      {/* Abstract background lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Tudo para transformar sua casa em uma <span className="text-gradient">sala de cinema</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Combinamos tecnologia e flexibilidade para entregar a melhor experiência visual diretamente no seu sofá.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-glass rounded-2xl p-6 lg:p-8 hover:bg-white/[0.03] transition-all duration-300 border border-white/[0.05] hover:border-white/10 group relative overflow-hidden"
            >
              {/* Card Hover Glow effect */}
              <div className={`absolute -inset-2 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-full`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${benefit.color} p-[1px] shadow-lg`}>
                  <div className="w-full h-full bg-graphite rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-glow transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
