import React from 'react';

const Magic = ({ t, magicLore, setSelectedMagic }) => {
  return (
      <section id="magia" className="py-24 relative bg-black/80 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4 tracking-widest uppercase">{t.magia_titulo}</h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-justify">
              {t.magia_desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {magicLore.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedMagic(item)}
                className={`bg-black/40 p-6 rounded-2xl border ${item.color} cursor-pointer hover:bg-black/60 transition-all transform hover:-translate-y-1`}
              >
                <h3 className="text-xl font-bold text-white mb-4 font-serif">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed text-justify">
                  {item.shortDesc}
                </p>
                <span className="text-xs text-red-700 mt-4 inline-block font-bold">{t.leer_mas}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Magic;
