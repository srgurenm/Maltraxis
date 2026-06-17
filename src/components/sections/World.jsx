import React from 'react';

const World = ({ t }) => {
  return (
      <section id="mundo" className="py-24 relative overflow-hidden">
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
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4 tracking-widest uppercase">{t.mundo_titulo}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group rounded-2xl overflow-hidden bg-black/40 border border-white/5 hover:border-purple-500/30 transition-all shadow-xl">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={`${import.meta.env.BASE_URL}calles.png`} alt="Calles" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-serif">{t.mundo_1_titulo}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{t.mundo_1_desc}</p>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden bg-black/40 border border-white/5 hover:border-amber-500/30 transition-all shadow-xl">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={`${import.meta.env.BASE_URL}jardines.png`} alt="Cielo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-serif">{t.mundo_2_titulo}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{t.mundo_2_desc}</p>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden bg-black/40 border border-white/5 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={`${import.meta.env.BASE_URL}lab.png`} alt="Lab" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-serif">{t.mundo_3_titulo}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{t.mundo_3_desc}</p>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden bg-black/40 border border-white/5 hover:border-indigo-500/30 transition-all shadow-xl">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src="/azhar.jpeg" alt="Azhar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-serif">{t.mundo_4_titulo}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{t.mundo_4_desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default World;
