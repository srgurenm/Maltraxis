import React from 'react';
import { X, ShoppingCart } from 'lucide-react';

const PromoBanner = ({ t, visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="hidden md:flex fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-red-950 via-red-900 to-red-950 border-b border-red-800/60 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-3 flex-wrap">
          <p className="text-sm text-red-100 font-medium text-center">
            {t.banner_texto}
          </p>
          <a
            href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-red-900 text-xs font-bold hover:bg-red-50 transition-colors whitespace-nowrap"
          >
            <ShoppingCart className="w-3 h-3" />
            {t.banner_cta}
          </a>
        </div>
        <button
          onClick={onClose}
          aria-label={t.cerrar_menu}
          className="text-red-300 hover:text-white transition-colors flex-shrink-0 p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
