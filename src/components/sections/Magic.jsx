import React from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';

const Magic = ({ t, magicLore, setSelectedMagic, resonance }) => {
  const revealRef = useScrollReveal();

  return (
      <section id="magia" ref={revealRef} className={`py-24 relative reveal-hidden border-t ${resonance === 'umbrío' ? 'bg-black/80 border-white/5' : 'bg-white border-slate-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-serif font-bold mb-4 tracking-widest uppercase ${resonance === 'umbrío' ? 'text-white' : 'text-amber-900'}`}>{t.magia_titulo}</h2>
            <p className={`max-w-3xl mx-auto text-center ${resonance === 'umbrío' ? 'text-slate-400' : 'text-slate-600'}`}>
              {t.magia_desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {magicLore.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedMagic(item)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all transform hover:-translate-y-1 active:scale-95 ${resonance === 'umbrío' ? `bg-black/40 ${item.color} hover:bg-black/60` : 'bg-white/80 border-amber-500/30 hover:bg-white'}`}
              >
                <h3 className={`text-xl font-bold mb-4 font-serif ${resonance === 'umbrío' ? 'text-white' : 'text-amber-900'}`}>{item.title}</h3>
                <p className={`text-sm leading-relaxed ${resonance === 'umbrío' ? 'text-slate-400' : 'text-slate-700'}`}>
                  {item.shortDesc}
                </p>
                <span className={`text-xs mt-4 inline-block font-bold ${resonance === 'umbrío' ? 'text-red-700' : 'text-amber-700'}`}>{t.leer_mas}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Magic;
