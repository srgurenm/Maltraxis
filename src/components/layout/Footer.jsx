import React from 'react';

const Footer = () => {
  return (
      <footer className="bg-black py-12 border-t border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Jose C. Sierra. Todos los derechos reservados.
        </div>
      </footer>
  );
};

export default Footer;
