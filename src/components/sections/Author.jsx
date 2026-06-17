import React from 'react';
import { Mail } from 'lucide-react';

const Author = ({ t, resonance }) => {
  return (
      <section id="autor" className={`py-24 relative border-t ${resonance === 'umbrío' ? 'bg-black/90 border-white/5' : 'bg-white border-slate-200'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-white/10 relative shadow-2xl shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-amber-500/20 mix-blend-overlay"></div>
              <img src="/yo.jpg" alt="Jose C. Sierra" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-red-700 font-bold">{t.autor_titulo}</span>
              <h2 className={`text-4xl font-serif font-bold mt-1 mb-4 ${resonance === 'umbrío' ? 'text-white' : 'text-amber-900'}`}>Jose C. Sierra</h2>
              <p className={`leading-relaxed mb-6 ${resonance === 'umbrío' ? 'text-slate-300' : 'text-slate-700'}`}>
                {t.autor_desc}
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="mailto:jcsierrah77@gmail.com" className={`inline-flex items-center gap-2 text-sm transition-colors ${resonance === 'umbrío' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-amber-900'}`}>
                  <Mail className="w-4 h-4" /> {t.contacto}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Author;
