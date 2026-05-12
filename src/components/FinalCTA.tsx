// src/components/FinalCTA.tsx
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 relative bg-black-deep overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 blur-[120px] opacity-60"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-graphite/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-16 text-center shadow-[0_0_50px_rgba(123,44,255,0.15)] relative overflow-hidden group"
        >
          {/* Animated glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/0 via-neon-purple/10 to-neon-pink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-neon-blue to-neon-purple p-[2px] rounded-full mb-8 shadow-lg shadow-neon-purple/50">
             <div className="w-full h-full bg-black-deep rounded-full flex items-center justify-center">
               <Play className="w-6 h-6 text-white ml-1 fill-white" />
             </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
            Pronto para transformar sua casa em cinema?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Assine agora a Leandro CineMax e aproveite filmes, séries e entretenimento com uma experiência premium.
          </p>

          <a href="https://wa.me/554792733349?text=Gostaria%20de%20realizar%20meu%20teste%20gratis%2C%20no%20Leandro%20CineMax!" target="_blank" rel="noopener noreferrer" className="inline-block relative p-[2px] rounded-full overflow-hidden group/btn hover:scale-105 transition-transform duration-300">
            <span className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-[spin_3s_linear_infinite] group-hover/btn:opacity-100 opacity-80"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-80 blur-md group-hover/btn:opacity-100 transition-opacity"></span>
            <div className="relative bg-black-deep px-8 py-5 md:px-12 md:py-6 rounded-full flex items-center justify-center gap-3 transition-colors group-hover/btn:bg-transparent">
              <span className="relative z-10 font-bold text-lg md:text-xl text-white">Assinar agora por R$29,90/mês</span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
