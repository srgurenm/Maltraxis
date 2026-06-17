import React from 'react';
import { Book, Star, ShoppingCart } from 'lucide-react';

const Hero = ({ resonance, t, setShowChapters }) => {
  return (
    <section id="inicio" className="relative pt-36 pb-20 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className={`absolute inset-0 transition-opacity duration-1000 ${resonance === 'umbrío' ? 'opacity-100' : 'opacity-0'} bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950/30 via-[#030206] to-black -z-10`}></div>
        <div className={`absolute inset-0 transition-opacity duration-1000 ${resonance === 'luminoso' ? 'opacity-100' : 'opacity-0'} bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/20 via-[#060402] to-black -z-10`}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-red-500 text-sm font-medium mb-6">
                <Star className="w-4 h-4 text-red-700" /> {t.hero_star}
              </div>
              <h1 className={`text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6 tracking-wide ${resonance === 'umbrío' ? 'text-white' : 'text-amber-900'}`}>
                {t.hero_title} <span className={`transition-colors duration-1000 text-transparent bg-clip-text bg-gradient-to-r ${resonance === 'umbrío' ? 'from-red-200 via-red-500 to-red-800' : 'from-amber-200 via-amber-400 to-yellow-600'}`}>Maltraxis</span>
              </h1>
              <p className={`text-xl mb-8 font-serif italic ${resonance === 'umbrío' ? 'text-slate-300' : 'text-slate-700'}`}>{t.hero_subtitle}</p>
              <p className={`text-lg lg:text-xl mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-center lg:text-left ${resonance === 'umbrío' ? 'text-slate-400' : 'text-slate-600'}`}>
                {t.hero_desc}
              </p>

              {/* CTAs — dos botones */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* Comprar — CTA primario */}
                <a
                  href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex justify-center items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all duration-300 active:scale-95 hover:scale-105 ${
                    resonance === 'umbrío'
                      ? 'bg-red-900 hover:bg-red-800 text-white shadow-[0_0_25px_rgba(153,27,27,0.5)] hover:shadow-[0_0_40px_rgba(153,27,27,0.7)]'
                      : 'bg-amber-600 hover:bg-amber-500 text-slate-950 shadow-[0_0_25px_rgba(217,119,6,0.4)]'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {t.comprar}
                </a>

                {/* Leer capítulos gratis — CTA secundario */}
                <button
                  onClick={() => setShowChapters(true)}
                  className={`inline-flex justify-center items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all duration-300 active:scale-95 border ${
                    resonance === 'umbrío'
                      ? 'border-white/20 text-slate-300 hover:bg-white/5 hover:text-white'
                      : 'border-amber-700/40 text-amber-800 hover:bg-amber-50'
                  }`}
                >
                  <Book className="w-5 h-5" />
                  {t.leer_ahora}
                </button>
              </div>

              {/* Microcopy de credibilidad bajo los botones */}
              <p className={`mt-4 text-xs ${resonance === 'umbrío' ? 'text-slate-600' : 'text-slate-400'}`}>
                ✓ Disponible en Kindle &amp; Kindle Unlimited &nbsp;·&nbsp; ✓ Capítulos gratis sin registro
              </p>
            </div>

            {/* NOVEL COVER MOCKUP */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg aspect-[2/3] group">
              <div className={`absolute inset-0 rounded-2xl transform rotate-3 scale-105 opacity-65 duration-1000 transition-all blur-xl ${resonance === 'umbrío' ? 'bg-gradient-to-tr from-purple-600/30 to-indigo-500/25' : 'bg-gradient-to-tr from-amber-600/30 to-yellow-500/25'}`}></div>
              <a
                href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver Maltraxis en Amazon"
              >
                <img
                  src={`${import.meta.env.BASE_URL}${resonance === 'luminoso' ? 'portada2.png' : 'portada.jpg'}`}
                  alt="Portada del libro Maltraxis: La Ciudad de las Sombras"
                  className="relative z-10 w-full h-full object-cover rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_70px_rgba(153,27,27,0.3)]"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
