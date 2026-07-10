import React from 'react';
import { Sparkles, Globe, Menu, X } from 'lucide-react';

const Navbar = ({
  resonance,
  t,
  language,
  toggleLanguage,
  isMenuOpen,
  setIsMenuOpen,
  toggleMenu,
  setSelectedGallery,
  setShowCodex,
  bannerVisible,
}) => {
  const navLinks = [
    { label: t.inicio, href: '#inicio', type: 'link' },
    { label: t.historia, href: '#sinopsis', type: 'link' },
    { label: t.mundo, href: '#mundo', type: 'link' },
    { label: t.magia, href: '#magia', type: 'link' },
    { label: t.codice, href: null, type: 'button', onClick: () => { setShowCodex(true); setIsMenuOpen(false); } },
    { label: t.galeria, href: null, type: 'button', onClick: () => { setSelectedGallery(true); setIsMenuOpen(false); } },
    { label: t.saga, href: '#libros', type: 'link' },
    { label: t.autor, href: '#autor', type: 'link' },
  ];

  const linkClass = `hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    resonance === 'umbrío' ? 'text-slate-200' : 'text-amber-900'
  }`;

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        bannerVisible ? 'top-9' : 'top-0'
      } ${
        resonance === 'umbrío' ? 'bg-black/90' : 'bg-white/90'
      } backdrop-blur-md border-b ${
        resonance === 'umbrío' ? 'border-white/5' : 'border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <Sparkles
              className={`w-6 h-6 transition-colors duration-1000 ${
                resonance === 'umbrío' ? 'text-red-700' : 'text-red-900'
              }`}
            />
            <span
              className={`text-2xl font-serif font-bold ${
                resonance === 'umbrío' ? 'text-white' : 'text-slate-900'
              } tracking-wider uppercase`}
            >
              MALTRAXIS
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-baseline space-x-1">
              {navLinks.map((item) =>
                item.type === 'link' ? (
                  <a key={item.label} href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                ) : (
                  <button key={item.label} onClick={item.onClick} className={linkClass}>
                    {item.label}
                  </button>
                )
              )}
            </div>

            <a
              href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              <div className="blob1"></div>
              <div className="inner">{t.comprar}</div>
            </a>

            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 p-2 rounded-lg border transition-all ${
                resonance === 'umbrío'
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300'
                  : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-700'
              }`}
              aria-label="Cambiar idioma"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">{language}</span>
            </button>
          </div>

          {/* Mobile: botones compactos */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 p-1.5 rounded-lg border text-xs font-bold uppercase transition-all ${
                resonance === 'umbrío'
                  ? 'bg-white/5 border-white/10 text-slate-300'
                  : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              {language}
            </button>
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? t.cerrar_menu : 'Abrir menú'}
              className={`p-2 rounded-lg transition-colors ${
                resonance === 'umbrío' ? 'text-gray-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div
          className={`md:hidden border-t ${
            resonance === 'umbrío'
              ? 'bg-black/95 border-white/5'
              : 'bg-white/95 border-slate-200'
          } backdrop-blur-md`}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((item) =>
              item.type === 'link' ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    resonance === 'umbrío'
                      ? 'text-slate-200 hover:bg-white/5 hover:text-red-400'
                      : 'text-amber-900 hover:bg-amber-50'
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    resonance === 'umbrío'
                      ? 'text-slate-200 hover:bg-white/5 hover:text-red-400'
                      : 'text-amber-900 hover:bg-amber-50'
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
            <div className="pt-3 border-t border-white/5 mt-1">
              <a
                href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="button"
              >
                <div className="blob1"></div>
                <div className="inner">{t.comprar}</div>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
