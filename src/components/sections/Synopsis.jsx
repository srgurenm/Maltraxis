import React from 'react';
import { Feather } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

const Synopsis = ({ t, resonance }) => {
  const revealRef = useScrollReveal();

  return (
    <section id="sinopsis" ref={revealRef} className={`py-20 border-y relative reveal-hidden ${resonance === 'umbrío' ? 'bg-black/90 border-white/5' : 'bg-white border-slate-200'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Feather className={`w-12 h-12 mx-auto mb-6 transition-colors duration-1000 ${resonance === 'umbrío' ? 'text-red-700' : 'text-amber-500'}`} />
          <h2 className={`text-3xl lg:text-4xl font-serif font-bold mb-8 tracking-wider ${resonance === 'umbrío' ? 'text-white' : 'text-amber-900'}`}>{t.sinopsis_titulo}</h2>
          <div className={`space-y-6 leading-relaxed text-left lg:text-center text-lg ${resonance === 'umbrío' ? 'text-slate-300' : 'text-slate-700'}`}>
            <p>{t.sinopsis_p1}</p>
            <p>{t.sinopsis_p2}</p>
          </div>
        </div>
      </section>
  );
};

export default Synopsis;
