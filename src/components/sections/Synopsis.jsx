import React from 'react';
import { Feather } from 'lucide-react';

const Synopsis = ({ t, resonance }) => {
  return (
    <section id="sinopsis" className="py-20 bg-black/90 border-y border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Feather className={`w-12 h-12 mx-auto mb-6 transition-colors duration-1000 ${resonance === 'umbrío' ? 'text-red-700' : 'text-amber-500'}`} />
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-8 tracking-wider">{t.sinopsis_titulo}</h2>
          <div className="space-y-6 text-slate-300 leading-relaxed text-justify lg:text-center text-lg">
            <p>{t.sinopsis_p1}</p>
            <p>{t.sinopsis_p2}</p>
          </div>
        </div>
      </section>
  );
};

export default Synopsis;
