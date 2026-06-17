import React from 'react';
import { BookOpen, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Columna 1 — Marca */}
          <div>
            <p className="text-2xl font-serif font-bold text-white tracking-wider uppercase mb-3">MALTRAXIS</p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Una saga de fantasía oscura y contemporánea por Jose C. Sierra. Noctara te espera.
            </p>
          </div>

          {/* Columna 2 — Links rápidos */}
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">Navegación</p>
            <ul className="space-y-2">
              {[
                { label: 'Inicio', href: '#inicio' },
                { label: 'Sinopsis', href: '#sinopsis' },
                { label: 'El Mundo', href: '#mundo' },
                { label: 'La Saga', href: '#libros' },
                { label: 'Autor', href: '#autor' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-slate-400 hover:text-red-400 transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — CTA y contacto */}
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">Consigue el Libro</p>
            <a
              href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-900 hover:bg-red-800 text-white text-sm font-bold transition-all mb-6 shadow-[0_0_15px_rgba(153,27,27,0.3)]"
            >
              <BookOpen className="w-4 h-4" />
              Comprar en Amazon
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
            <div>
              <a
                href="mailto:jcsierrah77@gmail.com"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                jcsierrah77@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria + copyright */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {currentYear} Jose C. Sierra. Todos los derechos reservados.
          </p>
          <p className="text-slate-700 text-xs">
            Maltraxis · Fantasía Oscura Contemporánea
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
