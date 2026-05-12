// src/components/Pricing.tsx
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const features = [
    "Filmes e séries",
    "Catálogo atualizado",
    "Qualidade HD e 4K conforme disponibilidade",
    "Acesso rápido",
    "Suporte para configuração",
    "Compatível com diferentes dispositivos",
    "Experiência premium de entretenimento"
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 relative bg-black-deep">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Plano simples, direto e <span className="text-gradient">acessível</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Sem burocracia, apenas o melhor do entretenimento.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          <div className="relative rounded-3xl p-[2px] overflow-hidden group">
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,#00CFFF,#7B2CFF,#FF2BD6)] group-hover:bg-[conic-gradient(from_0deg,#00CFFF,#7B2CFF,#FF2BD6,#00CFFF)] animate-[spin_4s_linear_infinite]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink opacity-50 blur-xl"></div>
            
            {/* Card Content */}
            <div className="relative bg-black-deep/90 backdrop-blur-xl rounded-[22px] p-8 md:p-10 flex flex-col h-full border border-white/5">
              
              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-neon-purple/20 text-neon-purple border border-neon-purple/30 text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                  Recomendado
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">CineMax Premium</h3>
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-5xl font-display font-bold tracking-tighter">R$29,90</span>
                  <span className="text-gray-400 font-medium">/mês</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-neon-blue" strokeWidth={3} />
                    </div>
                    <span className="text-gray-300 text-sm md:text-base leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/554792733349?text=Gostaria%20de%20realizar%20meu%20teste%20gratis%2C%20no%20Leandro%20CineMax!" target="_blank" rel="noopener noreferrer" className="w-full relative p-[2px] rounded-xl overflow-hidden group/btn text-center block">
                <span className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-80 group-hover/btn:opacity-100 transition-opacity"></span>
                <div className="relative bg-transparent px-6 py-4 rounded-xl transition-all flex items-center justify-center">
                  <span className="relative z-10 font-bold text-lg tracking-wide text-white drop-shadow-md">Assinar agora</span>
                </div>
              </a>
              
              <p className="text-center text-[10px] text-gray-500 mt-4 leading-relaxed">
                A qualidade, disponibilidade e funcionamento podem variar conforme conexão, dispositivo e condições técnicas.
              </p>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
