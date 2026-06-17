import React from 'react';
import { BookOpen, ChevronRight, ShoppingCart, Zap, Star } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import useScrollReveal from '../../hooks/useScrollReveal';

const Saga = ({ t, resonance }) => {
  const revealRef = useScrollReveal();

  return (
      <section id="libros" ref={revealRef} className={`py-24 relative reveal-hidden border-t ${resonance === 'umbrío' ? 'bg-[#060402]/90 border-white/5' : 'bg-white border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-serif font-bold mb-4 tracking-widest uppercase ${resonance === 'umbrío' ? 'text-white' : 'text-amber-900'}`}>{t.saga_titulo}</h2>
            <p className={`${resonance === 'umbrío' ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto`}>
              {t.saga_desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Book 1 — Disponible */}
            <div className={`rounded-2xl p-6 border transition-all flex flex-col sm:flex-row gap-6 relative ${resonance === 'umbrío' ? 'bg-black/60 border-red-900/30 hover:border-red-700/50 shadow-[0_0_30px_rgba(153,27,27,0.15)]' : 'bg-white/80 border-amber-500/30 hover:border-amber-500/60'}`}>
              {/* Badge DISPONIBLE */}
              <div className="absolute -top-3 left-6 px-3 py-1 bg-red-800 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                {t.disponible}
              </div>

              <Tilt glareEnable={true} glareMaxOpacity={0.3} glareColor="#ffffff" glarePosition="all" transitionSpeed={1500} scale={1.02} className="w-full sm:w-1/3 aspect-[2/3] rounded-lg shadow-2xl">
                <a href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6" target="_blank" rel="noopener noreferrer" className="w-full h-full overflow-hidden rounded-lg relative block group/cover">
                  <img src={`${import.meta.env.BASE_URL}portada.jpg`} alt="Libro 1 — Maltraxis: La Ciudad de las Sombras" className="w-full h-full object-contain bg-black group-hover/cover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover/cover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs font-bold flex items-center gap-1"><ShoppingCart className="w-3.5 h-3.5" /> Ver en Amazon</span>
                  </div>
                </a>
              </Tilt>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-red-700 font-bold">Libro I</span>
                  <h3 className={`text-2xl font-serif font-bold mt-1 mb-2 ${resonance === 'umbrío' ? 'text-white' : 'text-amber-900'}`}>{t.libro_1_titulo}</h3>

                  {/* Estrellas */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className={`text-xs ml-1 ${resonance === 'umbrío' ? 'text-slate-400' : 'text-slate-600'}`}>{t.libro_1_rating}</span>
                  </div>

                  <p className={`text-sm leading-relaxed ${resonance === 'umbrío' ? 'text-slate-400' : 'text-slate-700'}`}>
                    {t.libro_1_desc}
                  </p>

                  {/* Precio + Kindle Unlimited */}
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className={`text-lg font-bold ${resonance === 'umbrío' ? 'text-white' : 'text-amber-900'}`}>{t.libro_1_precio}</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-500/20 border border-amber-500/30 rounded-full text-[10px] font-bold text-amber-400 uppercase tracking-wide">
                      <Zap className="w-2.5 h-2.5" /> Kindle Unlimited
                    </span>
                  </div>
                </div>

                <a
                  href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg font-bold uppercase tracking-wider bg-red-900 hover:bg-red-800 text-white transition-all duration-300 shadow-[0_0_15px_rgba(153,27,27,0.3)] hover:shadow-[0_0_25px_rgba(153,27,27,0.5)]"
                >
                  <BookOpen className="w-4 h-4" />
                  {t.comprar}
                </a>
              </div>
            </div>

            {/* Book 2 — Próximamente */}
            <div className={`rounded-2xl p-6 border transition-all flex flex-col sm:flex-row gap-6 relative opacity-80 ${resonance === 'umbrío' ? 'bg-black/60 border-white/5 hover:border-amber-500/20' : 'bg-white/80 border-slate-200 hover:border-amber-500/20'}`}>
              {/* Badge PRÓXIMAMENTE */}
              <div className={`absolute -top-3 left-6 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg ${resonance === 'umbrío' ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-600'}`}>
                {t.proximamente}
              </div>

              <Tilt glareEnable={true} glareMaxOpacity={0.2} glarePosition="all" transitionSpeed={1500} className="w-full sm:w-1/3 aspect-[2/3] rounded-lg shadow-xl">
                <div className="w-full h-full overflow-hidden rounded-lg relative">
                  <img src={`${import.meta.env.BASE_URL}portada2.png`} alt="Libro 2 — Maltraxis: El Juicio del Alba" className="w-full h-full object-contain bg-black" />
                  {/* Overlay "Próximamente" */}
                  <div className="absolute inset-0 bg-black/40 flex items-end justify-center pb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider ${resonance === 'umbrío' ? 'text-amber-400' : 'text-amber-600'}`}>{t.proximamente}</span>
                  </div>
                </div>
              </Tilt>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">Libro II</span>
                  <h3 className={`text-2xl font-serif font-bold mt-1 mb-3 ${resonance === 'umbrío' ? 'text-white' : 'text-amber-900'}`}>{t.libro_2_titulo}</h3>
                  <p className={`text-sm leading-relaxed ${resonance === 'umbrío' ? 'text-slate-400' : 'text-slate-700'}`}>
                    {t.libro_2_desc}
                  </p>
                </div>
                <button className={`mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${resonance === 'umbrío' ? 'text-amber-400 hover:text-amber-300' : 'text-amber-700 hover:text-amber-900'}`}>
                  {t.proximamente} <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Saga;
