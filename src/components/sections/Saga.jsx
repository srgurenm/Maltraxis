import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';

const Saga = ({ t, resonance }) => {
  return (
      <section id="libros" className={`py-24 relative border-t ${resonance === 'umbrío' ? 'bg-[#060402]/90 border-white/5' : 'bg-white border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-serif font-bold mb-4 tracking-widest uppercase ${resonance === 'umbrío' ? 'text-white' : 'text-amber-900'}`}>{t.saga_titulo}</h2>
            <p className={`${resonance === 'umbrío' ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto`}>
              {t.saga_desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Book 1 */}
            <div className={`rounded-2xl p-6 border transition-all flex flex-col sm:flex-row gap-6 ${resonance === 'umbrío' ? 'bg-black/60 border-white/5 hover:border-red-900/20' : 'bg-white/80 border-slate-200 hover:border-amber-500/20'}`}>
              <a href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6" target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/3 aspect-[2/3] overflow-hidden rounded-lg relative block">
                <img src="/portada.jpg" alt="Libro 1" className="w-full h-full object-contain bg-black hover:scale-105 transition-transform duration-500" />
              </a>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-red-700 font-bold">Libro I</span>
                  <h3 className={`text-2xl font-serif font-bold mt-1 mb-3 ${resonance === 'umbrío' ? 'text-white' : 'text-amber-900'}`}>{t.libro_1_titulo}</h3>
                  <p className={`text-sm leading-relaxed ${resonance === 'umbrío' ? 'text-slate-400' : 'text-slate-700'}`}>
                    {t.libro_1_desc}
                  </p>
                </div>
                <a
                  href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg font-bold uppercase tracking-wider bg-red-900 hover:bg-red-800 text-white transition-all duration-300 shadow-[0_0_15px_rgba(153,27,27,0.3)]"
                >
                  <BookOpen className="w-4 h-4" />
                  {t.comprar}
                </a>
              </div>
            </div>

            {/* Book 2 */}
            <div className={`rounded-2xl p-6 border transition-all flex flex-col sm:flex-row gap-6 ${resonance === 'umbrío' ? 'bg-black/60 border-white/5 hover:border-amber-500/20' : 'bg-white/80 border-slate-200 hover:border-amber-500/20'}`}>
              <div className="w-full sm:w-1/3 aspect-[2/3] overflow-hidden rounded-lg relative">
                <img src="/portada2.png" alt="Libro 2" className="w-full h-full object-contain bg-black" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">Libro II</span>
                  <h3 className={`text-2xl font-serif font-bold mt-1 mb-3 ${resonance === 'umbrío' ? 'text-white' : 'text-amber-900'}`}>{t.libro_2_titulo}</h3>
                  <p className={`text-sm leading-relaxed ${resonance === 'umbrío' ? 'text-slate-400' : 'text-slate-700'}`}>
                    {t.libro_2_desc}
                  </p>
                </div>
                <button className={`mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${resonance === 'umbrío' ? 'text-amber-400 hover:text-amber-300' : 'text-amber-700 hover:text-amber-900'}`}>
                  Próximamente <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Saga;
