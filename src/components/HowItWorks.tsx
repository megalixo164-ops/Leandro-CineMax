// src/components/HowItWorks.tsx

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Clique em assinar",
      text: "Toque no botão e solicite seu acesso."
    },
    {
      num: "02",
      title: "Receba as instruções",
      text: "Nossa equipe orienta você com as informações necessárias."
    },
    {
      num: "03",
      title: "Aproveite",
      text: "Escolha seu conteúdo e curta sua experiência CineMax."
    }
  ];

  return (
    <section className="py-16 md:py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Como <span className="text-gradient">começar a assistir</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-30"></div>

          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 relative mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-graphite rounded-full border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]"></div>
                <div className={`absolute inset-2 rounded-full border border-transparent bg-clip-padding ${
                  idx === 0 ? 'bg-gradient-to-b from-neon-blue/20 to-transparent' :
                  idx === 1 ? 'bg-gradient-to-b from-neon-purple/20 to-transparent' :
                  'bg-gradient-to-b from-neon-pink/20 to-transparent'
                }`}></div>
                <span className="text-4xl font-display font-bold text-white text-glow relative z-10">{step.num}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <a href="https://wa.me/554792733349?text=Gostaria%20de%20realizar%20meu%20teste%20gratis%2C%20no%20Leandro%20CineMax!" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors font-medium text-white shadow-xl">
            Solicitar meu teste grátis
          </a>
        </div>
      </div>
    </section>
  );
}
