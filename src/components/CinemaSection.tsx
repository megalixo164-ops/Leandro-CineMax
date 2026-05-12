// src/components/CinemaSection.tsx

export default function CinemaSection() {
  return (
    <section className="py-24 relative bg-black-deep flex items-center justify-center overflow-hidden min-h-[500px] border-t border-white/5">
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-neon-blue/10 rounded-[100%] blur-[120px]"></div>
         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black-deep to-transparent z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20 text-center">
        <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-neon-pink animate-pulse"></span>
            Cinema em Casa
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 drop-shadow-lg">
            Uma experiência feita para assistir no <span className="text-gradient">conforto do seu sofá</span>
          </h2>
          <p className="text-xl text-gray-300 drop-shadow-md">
            Prepare a pipoca, escolha seu conteúdo e aproveite uma experiência visual moderna, estável e prática.
          </p>
        </div>
      </div>
    </section>
  );
}
