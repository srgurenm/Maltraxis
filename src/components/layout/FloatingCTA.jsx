import React from 'react';
import { BookOpen } from 'lucide-react';

const FloatingCTA = ({ t }) => {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a
        href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-red-900 hover:bg-red-800 text-white font-bold shadow-2xl transition-all hover:scale-105"
      >
        <BookOpen className="w-5 h-5" />
        {t.comprar}
      </a>
    </div>
  );
};

export default FloatingCTA;
