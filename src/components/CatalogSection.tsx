// src/components/CatalogSection.tsx

export default function CatalogSection() {
  const categories = [
    "Filmes", "Séries", "Lançamentos", "Ação", "Suspense", "Romance", "Comédia", "Infantil", "Documentários"
  ];

  return (
    <section id="catalog" className="py-16 md:py-24 relative bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-end justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Filmes, séries e lançamentos em uma <span className="text-gradient">experiência completa</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Encontre opções para todos os momentos: maratonas de séries, noites de filme, conteúdos para a família e histórias que prendem do começo ao fim.
            </p>
          </div>
          
          <div className="w-full lg:w-auto flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 5).map(cat => (
                <span key={cat} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer text-gray-300 hover:text-white">
                  {cat}
                </span>
              ))}
            </div>
            <a href="https://wa.me/554792733349?text=Gostaria%20de%20realizar%20meu%20teste%20gratis%2C%20no%20Leandro%20CineMax!" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neon-blue/20 text-neon-blue hover:bg-neon-blue/30 border border-neon-blue/30 transition-all font-medium self-start lg:self-end">
              Solicitar meu teste grátis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

