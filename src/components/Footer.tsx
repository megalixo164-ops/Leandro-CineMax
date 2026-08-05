// src/components/Footer.tsx
import { Play } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-16 pb-8 border-t border-white/5 relative z-10 text-center md:text-left">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          
          <div className="flex flex-col items-center md:items-start">
            <a href="#" aria-label="Voltar para o início" className="flex items-center gap-2 group mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-netflix-red via-netflix-dark to-netflix-dark p-[1px]">
                <div className="bg-black-deep rounded-full w-full h-full flex items-center justify-center">
                  <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                </div>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">Leandro CineMax</span>
            </a>
            <p className="text-gray-400 font-medium">Seu cinema em casa</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-netflix-red transition-colors">Termos de uso</a>
            <a href="#" className="hover:text-netflix-dark transition-colors">Política de privacidade</a>
            <a href="#" className="hover:text-netflix-red transition-colors">Suporte</a>
          </div>
          
        </div>

        <div className="border-t border-white/5 pt-8">
          <p className="text-xs text-gray-500 leading-relaxed text-left md:text-justify max-w-5xl mx-auto md:mx-0">
            Leandro CineMax é uma marca de entretenimento digital. A disponibilidade de conteúdos, qualidade de imagem e funcionamento podem variar conforme conexão, dispositivo, região e condições técnicas. Marcas, títulos, canais e obras pertencem aos seus respectivos proprietários quando aplicável. Este site não promete acesso ilegal.
          </p>
        </div>
      </div>
    </footer>
  );
}
