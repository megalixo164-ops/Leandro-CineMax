// src/components/Comparison.tsx
import { X, Check } from 'lucide-react';

export default function Comparison() {
  const features = [
    { name: "Organização do catálogo", common: "Confusa e espalhada", cinemax: "Intuitiva e categorizada" },
    { name: "Qualidade visual", common: "Baixa / Travamentos", cinemax: "HD e 4K (conforme conexão)" },
    { name: "Facilidade de acesso", common: "Processos complexos", cinemax: "Simples e direto" },
    { name: "Compatibilidade", common: "Restrita a poucos aparelhos", cinemax: "Diversos dispositivos" },
    { name: "Suporte", common: "Inexistente", cinemax: "Atendimento dedicado" },
    { name: "Custo mensal", common: "Múltiplas assinaturas caras", cinemax: "Único e acessível (R$29,90)" },
    { name: "Experiência em casa", common: "Frustrante", cinemax: "Premium e imersiva" },
  ];

  return (
    <section className="py-24 relative bg-black-deep">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Por que escolher a <span className="text-gradient">Leandro CineMax?</span>
          </h2>
        </div>

        <div 
          className="bg-graphite/40 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr>
                  <th className="p-6 text-gray-400 font-medium text-sm lg:text-base border-b border-white/5 w-1/3">
                    Recurso
                  </th>
                  <th className="p-6 text-gray-400 font-medium text-sm lg:text-base border-b border-white/5 text-center w-1/3">
                    Experiência comum
                  </th>
                  <th className="p-6 border-b border-white/5 text-center w-1/3 bg-white/[0.02]">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple font-bold text-lg">Leandro CineMax</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white/[0.01]' : 'bg-transparent'}>
                    <td className="p-6 border-b border-white/5 font-medium text-gray-200">
                      {item.name}
                    </td>
                    <td className="p-6 border-b border-white/5 text-center text-gray-500">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-4 h-4 text-red-500/70" />
                        <span>{item.common}</span>
                      </div>
                    </td>
                    <td className="p-6 border-b border-white/5 text-center bg-white/[0.02]">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-neon-blue drop-shadow-[0_0_8px_rgba(0,207,255,0.5)]" />
                        <span className="text-gray-100 font-medium">{item.cinemax}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
