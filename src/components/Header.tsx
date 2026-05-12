// src/components/Header.tsx
import { Play } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Benefícios', href: '#benefits' },
    { name: 'Catálogo', href: '#catalog' },
    { name: 'Dispositivos', href: '#devices' },
    { name: 'Plano', href: '#pricing' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black-deep/90 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-neon-blue via-neon-purple to-neon-orange p-[2px] shadow-[0_0_15px_rgba(123,44,255,0.5)] group-hover:shadow-[0_0_25px_rgba(0,207,255,0.6)] transition-all">
            <div className="bg-black-deep rounded-full w-full h-full flex items-center justify-center">
              <Play className="w-4 h-4 text-white fill-white ml-0.5" />
            </div>
          </div>
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-white">Leandro <span className="text-gradient">CineMax</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white hover:text-glow transition-all">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center">
          <a href="https://wa.me/554792733349?text=Gostaria%20de%20realizar%20meu%20teste%20gratis%2C%20no%20Leandro%20CineMax!" target="_blank" rel="noopener noreferrer" className="hidden sm:flex relative p-[1px] rounded-full overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-70 group-hover:opacity-100 transition-opacity blur-sm"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-100"></span>
            <div className="relative bg-black-deep px-6 py-2.5 rounded-full transition-all group-hover:bg-opacity-0">
              <span className="relative z-10 font-bold text-sm tracking-wide text-white group-hover:text-white">Assinar agora</span>
            </div>
          </a>
          
          
        </div>
      </div>
    </header>
  );
}
