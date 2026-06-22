import React from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';
import { HelpCircle } from 'lucide-react';

const FAQ = ({ t, resonance }) => {
  const revealRef = useScrollReveal();

  const faqs = [
    {
      q: t.faq_1_q,
      a: t.faq_1_a
    },
    {
      q: t.faq_2_q,
      a: t.faq_2_a
    },
    {
      q: t.faq_3_q,
      a: t.faq_3_a
    }
  ];

  return (
    <section 
      id="faq" 
      ref={revealRef}
      className={`py-20 relative reveal-hidden ${
        resonance === 'umbrío' ? 'bg-[#030206]' : 'bg-white'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 mb-4 border border-white/10">
            <HelpCircle className={`w-6 h-6 ${resonance === 'umbrío' ? 'text-red-500' : 'text-amber-600'}`} />
          </div>
          <h2 className={`text-3xl font-serif font-bold tracking-widest uppercase ${
            resonance === 'umbrío' ? 'text-white' : 'text-slate-900'
          }`}>
            {t.faq_title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-2xl border ${
                resonance === 'umbrío'
                  ? 'bg-white/5 border-white/10'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <h3 className={`font-bold mb-3 ${resonance === 'umbrío' ? 'text-white' : 'text-slate-900'}`}>
                {faq.q}
              </h3>
              <p className={`text-sm leading-relaxed ${resonance === 'umbrío' ? 'text-slate-400' : 'text-slate-600'}`}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
