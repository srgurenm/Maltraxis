import React, { useState, useEffect } from 'react';
import { BookOpen } from 'lucide-react';

const FloatingCTA = ({ t }) => {
  const [visible, setVisible] = useState(false);

  // Mostrar el botón solo después de hacer scroll un poco
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <a
        href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-3 rounded-full bg-red-900 hover:bg-red-800 text-white font-bold shadow-2xl transition-all hover:scale-105 animate-pulse-glow"
      >
        <BookOpen className="w-5 h-5 flex-shrink-0" />
        <span className="text-sm">{t.comprar}</span>
      </a>
    </div>
  );
};

export default FloatingCTA;
