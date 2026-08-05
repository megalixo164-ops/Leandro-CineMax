// src/components/FAQ.tsx
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "O valor é mensal?",
      a: "Sim. O plano CineMax Premium custa R$29,90 por mês."
    },
    {
      q: "Funciona em Smart TV?",
      a: "O acesso pode funcionar em Smart TVs compatíveis. Nossa equipe informa as opções disponíveis."
    },
    {
      q: "Também funciona no celular?",
      a: "Sim, pode funcionar em dispositivos compatíveis como celular, tablet, TV Box e computador."
    },
    {
      q: "A qualidade é sempre 4K?",
      a: "A qualidade pode variar conforme o conteúdo, dispositivo e velocidade da sua internet."
    },
    {
      q: "Tem suporte?",
      a: "Sim. Nossa equipe orienta você nas principais etapas de configuração."
    },
    {
      q: "Preciso de internet boa?",
      a: "Sim. Recomendamos uma conexão estável para melhor experiência."
    },
    {
      q: "Tem fidelidade?",
      a: "Não trabalhamos com fidelidade obrigatória. Nosso plano é simples e mensal, você decide o tempo que quer ficar conosco."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Dúvidas <span className="text-gradient">Frequentes</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              <div 
                key={idx}
                className="border border-white/10 rounded-xl overflow-hidden bg-graphite/30"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-medium text-lg text-gray-200">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-netflix-dark/20 rotate-180 border-netflix-dark/30' : ''}`}>
                    <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-netflix-dark' : 'text-gray-400'}`} />
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-gray-400 border-t border-white/5">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
