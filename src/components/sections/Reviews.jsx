import React from 'react';
import { Star, BookOpen } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

// Reseñas de muestra — reemplazar con reseñas reales de Amazon/lectores
const reviewsData = [
  {
    id: 1,
    name: 'María G.',
    initials: 'MG',
    rating: 5,
    text: '\"La atmósfera de Maltraxis es absolutamente inmersiva. Desde las primeras páginas, la ciudad cobra vida con una intensidad que pocas novelas logran. Gur es un protagonista que te atrapa sin remedio.\"',
    platform: 'Amazon',
    color: 'from-red-900/40 to-purple-900/20',
  },
  {
    id: 2,
    name: 'Carlos R.',
    initials: 'CR',
    rating: 5,
    text: '\"Si te gusta la fantasía oscura con toques de noir y una construcción de mundo excepcional, Maltraxis es una lectura obligatoria. No pude dejarlo hasta terminar el último capítulo.\"',
    platform: 'Lector Beta',
    color: 'from-amber-900/30 to-red-900/20',
  },
  {
    id: 3,
    name: 'Laura M.',
    initials: 'LM',
    rating: 5,
    text: '\"El sistema de magia es de los más originales que he leído. Las runas, las gemas, el Flujo Telúrico... todo tiene una coherencia interna perfecta. ¡Quiero más!\"',
    platform: 'Goodreads',
    color: 'from-cyan-900/30 to-indigo-900/20',
  },
];

const Reviews = ({ t, resonance }) => {
  const revealRef = useScrollReveal();

  return (
    <section
      id="resenas"
      ref={revealRef}
      className={`py-24 relative border-t reveal-hidden ${
        resonance === 'umbrío'
          ? 'bg-[#04030a]/90 border-white/5'
          : 'bg-slate-50 border-slate-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2
            className={`text-4xl font-serif font-bold mb-3 tracking-widest uppercase ${
              resonance === 'umbrío' ? 'text-white' : 'text-amber-900'
            }`}
          >
            {t.resenas_titulo}
          </h2>
          <p className={`text-lg ${resonance === 'umbrío' ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.resenas_subtitulo}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className={`relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                resonance === 'umbrío'
                  ? `bg-gradient-to-br ${review.color} border-white/10 hover:border-white/20`
                  : 'bg-white border-slate-200 hover:border-amber-300 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Comillas decorativas */}
              <span
                className={`absolute top-4 right-5 text-6xl font-serif leading-none select-none ${
                  resonance === 'umbrío' ? 'text-white/10' : 'text-slate-100'
                }`}
              >
                "
              </span>

              {/* Estrellas */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Texto */}
              <p
                className={`text-sm leading-relaxed italic mb-6 relative z-10 ${
                  resonance === 'umbrío' ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {review.text}
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${
                    resonance === 'umbrío'
                      ? 'bg-red-900/60 text-red-200 border border-red-800/40'
                      : 'bg-amber-100 text-amber-800 border border-amber-200'
                  }`}
                >
                  {review.initials}
                </div>
                <div>
                  <p
                    className={`text-sm font-semibold ${
                      resonance === 'umbrío' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {review.name}
                  </p>
                  <p className={`text-xs ${resonance === 'umbrío' ? 'text-slate-500' : 'text-slate-400'}`}>
                    {review.platform}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final bajo las reseñas */}
        <div className="mt-14 text-center">
          <a
            href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold bg-red-900 hover:bg-red-800 text-white transition-all duration-300 shadow-[0_0_25px_rgba(153,27,27,0.4)] hover:shadow-[0_0_40px_rgba(153,27,27,0.6)] hover:scale-105"
          >
            <BookOpen className="w-5 h-5" />
            {t.comprar}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
