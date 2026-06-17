import React from 'react';
import { Sparkles, Globe, Menu, X } from 'lucide-react';

const Navbar = ({ resonance, t, language, toggleLanguage, isMenuOpen, setIsMenuOpen, toggleMenu }) => {
  return (
    <nav className={`fixed w-full z-50 ${resonance === 'umbrío' ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-md border-b ${resonance === 'umbrío' ? 'border-white/5' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Sparkles className={`w-6 h-6 transition-colors duration-1000 ${resonance === 'umbrío' ? 'text-red-700' : 'text-red-900'}`} />
              <span className={`text-2xl font-serif font-bold ${resonance === 'umbrío' ? 'text-white' : 'text-slate-900'} tracking-wider uppercase`}>MALTRAXIS</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-6">
                <div className="flex items-baseline space-x-8">
                  <a href="#inicio" className={`hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${resonance === 'umbrío' ? 'text-slate-200' : 'text-slate-900'}`}>{t.inicio}</a>
                  <a href="#sinopsis" className={`hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${resonance === 'umbrío' ? 'text-slate-200' : 'text-slate-900'}`}>{t.historia}</a>
                  <a href="#mundo" className={`hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${resonance === 'umbrío' ? 'text-slate-200' : 'text-slate-900'}`}>{t.mundo}</a>
                  <a href="#magia" className={`hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${resonance === 'umbrío' ? 'text-slate-200' : 'text-slate-900'}`}>{t.magia}</a>
                  <button onClick={() => {}} className={`hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${resonance === 'umbrío' ? 'text-slate-200' : 'text-slate-900'}`}>{t.codice}</button>
                  <button onClick={() => {}} className={`hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${resonance === 'umbrío' ? 'text-slate-200' : 'text-slate-900'}`}>{t.galeria}</button>
                  <a href="#libros" className={`hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${resonance === 'umbrío' ? 'text-slate-200' : 'text-slate-900'}`}>{t.saga}</a>
                  <a href="#autor" className={`hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${resonance === 'umbrío' ? 'text-slate-200' : 'text-slate-900'}`}>{t.autor}</a>
                </div>
              </div>

              <a
                href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-red-900 hover:bg-red-800 text-white text-xs sm:text-sm font-bold transition-all shadow-[0_0_10px_rgba(153,27,27,0.3)]"
              >
                {t.comprar}
              </a>

              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 transition-all"
              >
                <Globe className="w-5 h-5" />
                <span className="ml-2 text-xs font-bold uppercase">{language}</span>
              </button>

              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-400 hover:text-white p-2">
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
