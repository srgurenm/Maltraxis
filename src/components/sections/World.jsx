import React from 'react';

const World = ({ t, resonance }) => {
  return (
      <section id="mundo" className={`py-24 relative overflow-hidden ${resonance === 'luminoso' ? 'bg-white' : ''}`}>
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover"
            >
                <source src="/mvideo.mp4" type="video/mp4" />
            </video>
            <div className={`absolute inset-0 ${resonance === 'umbrío' ? 'bg-black/50' : 'bg-white/70'}`}></div>
          </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-serif font-bold mb-4 tracking-widest uppercase ${resonance === 'umbrío' ? 'text-white' : 'text-amber-900'}`}>{t.mundo_titulo}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`group rounded-2xl overflow-hidden border transition-all shadow-xl ${resonance === 'umbrío' ? 'bg-black/40 border-white/5 hover:border-purple-500/30' : 'bg-white/80 border-slate-200 hover:border-amber-500/30'}`}>
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={`${import.meta.env.BASE_URL}calles.png`} alt="Calles" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 font-serif ${resonance === 'umbrío' ? 'text-white' : 'text-amber-900'}`}>{t.mundo_1_titulo}</h3>
                <p className={`text-sm leading-relaxed ${resonance === 'umbrío' ? 'text-slate-400' : 'text-slate-700'}`}>{t.mundo_1_desc}</p>
              </div>
            </div>

            <div className={`group rounded-2xl overflow-hidden border transition-all shadow-xl ${resonance === 'umbrío' ? 'bg-black/40 border-white/5 hover:border-amber-500/30' : 'bg-white/80 border-slate-200 hover:border-amber-500/30'}`}>
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={`${import.meta.env.BASE_URL}jardines.png`} alt="Cielo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 font-serif ${resonance === 'umbrío' ? 'text-white' : 'text-amber-900'}`}>{t.mundo_2_titulo}</h3>
                <p className={`text-sm leading-relaxed ${resonance === 'umbrío' ? 'text-slate-400' : 'text-slate-700'}`}>{t.mundo_2_desc}</p>
              </div>
            </div>

            <div className={`group rounded-2xl overflow-hidden border transition-all shadow-xl ${resonance === 'umbrío' ? 'bg-black/40 border-white/5 hover:border-cyan-500/30' : 'bg-white/80 border-slate-200 hover:border-amber-500/30'}`}>
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={`${import.meta.env.BASE_URL}lab.png`} alt="Lab" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 font-serif ${resonance === 'umbrío' ? 'text-white' : 'text-amber-900'}`}>{t.mundo_3_titulo}</h3>
                <p className={`text-sm leading-relaxed ${resonance === 'umbrío' ? 'text-slate-400' : 'text-slate-700'}`}>{t.mundo_3_desc}</p>
              </div>
            </div>

            <div className={`group rounded-2xl overflow-hidden border transition-all shadow-xl ${resonance === 'umbrío' ? 'bg-black/40 border-white/5 hover:border-indigo-500/30' : 'bg-white/80 border-slate-200 hover:border-amber-500/30'}`}>
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src="/azhar.jpeg" alt="Azhar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 font-serif ${resonance === 'umbrío' ? 'text-white' : 'text-amber-900'}`}>{t.mundo_4_titulo}</h3>
                <p className={`text-sm leading-relaxed ${resonance === 'umbrío' ? 'text-slate-400' : 'text-slate-700'}`}>{t.mundo_4_desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default World;

