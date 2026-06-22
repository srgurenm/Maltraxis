import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { ChevronRight, X, Loader2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import MailerLiteForm from './components/MailerLiteForm';
import Navbar from './components/layout/Navbar';
import FloatingCTA from './components/layout/FloatingCTA';
import Footer from './components/layout/Footer';
import PromoBanner from './components/layout/PromoBanner';
import Hero from './components/sections/Hero';

// Componentes "Below the fold" cargados de forma diferida
const Synopsis = lazy(() => import('./components/sections/Synopsis'));
const WhyRead = lazy(() => import('./components/sections/WhyRead'));
const World = lazy(() => import('./components/sections/World'));
const Magic = lazy(() => import('./components/sections/Magic'));
const Saga = lazy(() => import('./components/sections/Saga'));
const Author = lazy(() => import('./components/sections/Author'));
const Reviews = lazy(() => import('./components/sections/Reviews'));
const FAQ = lazy(() => import('./components/sections/FAQ'));

import { magicLore, codexLore } from './data/lore';

export default function App() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [resonance, setResonance] = useState('umbrío');
  const [bannerVisible, setBannerVisible] = useState(true);

  const [selectedMagic, setSelectedMagic] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [showChapters, setShowChapters] = useState(false);
  const [showCodex, setShowCodex] = useState(false);

  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--x', `${e.clientX}px`);
        spotlightRef.current.style.setProperty('--y', `${e.clientY}px`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const galleryImages = [
    { src: `${import.meta.env.BASE_URL}Paladin.png`, alt: 'Paladín' },
    { src: `${import.meta.env.BASE_URL}Dualidad.png`, alt: 'Dualidad' },
    { src: `${import.meta.env.BASE_URL}ecuacion.png`, alt: 'Ecuación' },
  ];

  const nextImage = () => setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      className={`min-h-screen transition-all duration-1000 font-sans selection:bg-red-900 selection:text-white ${
        resonance === 'umbrío' ? 'bg-[#030206] text-slate-200' : 'bg-white text-slate-900'
      }`}
    >
      {/* PROMO BANNER */}
      <PromoBanner t={t} visible={bannerVisible} onClose={() => setBannerVisible(false)} />

      {/* RAIN EFFECT */}
      <div className={`fixed inset-0 pointer-events-none z-10 overflow-hidden ${resonance === 'umbrío' ? 'opacity-30' : 'opacity-10'}`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.05)_50%,rgba(255,255,255,0)_100%)] bg-[size:100px_400px] animate-[pulse_3s_infinite]"></div>
        <div className="rain-container absolute inset-0">
          <div className={`absolute w-[1px] h-20 bg-gradient-to-b from-transparent ${resonance === 'umbrío' ? 'to-red-900/30' : 'to-slate-400/30'} left-[12%] top-[-10%] animate-rain-3`}></div>
          <div className={`absolute w-[1px] h-24 bg-gradient-to-b from-transparent ${resonance === 'umbrío' ? 'to-amber-500/20' : 'to-slate-400/20'} left-[35%] top-[-20%] animate-rain-2`}></div>
          <div className={`absolute w-[1px] h-16 bg-gradient-to-b from-transparent ${resonance === 'umbrío' ? 'to-cyan-500/25' : 'to-slate-400/25'} left-[67%] top-[-5%] animate-rain-1`}></div>
          <div className={`absolute w-[1px] h-28 bg-gradient-to-b from-transparent ${resonance === 'umbrío' ? 'to-red-900/30' : 'to-slate-400/30'} left-[85%] top-[-15%] animate-rain-4`}></div>
        </div>
      </div>

      {/* FILM GRAIN & SPOTLIGHT */}
      <div className="noise-overlay"></div>
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-300 hidden sm:block"
        style={{
          background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), ${resonance === 'umbrío' ? 'rgba(220, 38, 38, 0.05)' : 'rgba(245, 158, 11, 0.05)'}, transparent 80%)`
        }}
      />

      {/* RESONANCE SELECTOR */}
      <div className="fixed bottom-20 sm:bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <span className="hidden sm:block text-[10px] tracking-widest uppercase text-slate-500 font-bold">Resonancia Telúrica</span>
        <div className="flex gap-1 p-1 bg-black/80 border border-white/10 rounded-full backdrop-blur-md shadow-2xl scale-90 sm:scale-100">
          <button
            onClick={() => setResonance('umbrío')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95 ${
              resonance === 'umbrío'
                ? 'bg-red-950/60 text-red-200 border border-red-900/50 shadow-[0_0_15px_rgba(153,27,27,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🌒 Sombras
          </button>
          <button
            onClick={() => setResonance('luminoso')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95 ${
              resonance === 'luminoso'
                ? 'bg-amber-950/60 text-amber-200 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ☀️ Luces
          </button>
        </div>
      </div>

      <Navbar
        resonance={resonance}
        t={t}
        language={language}
        toggleLanguage={toggleLanguage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        toggleMenu={toggleMenu}
        setSelectedGallery={setSelectedGallery}
        setShowCodex={setShowCodex}
        bannerVisible={bannerVisible}
      />

      <Hero resonance={resonance} t={t} setShowChapters={setShowChapters} />
      
      <Suspense fallback={<div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-red-900" /></div>}>
        <Synopsis t={t} resonance={resonance} />
        <WhyRead t={t} resonance={resonance} />
        <World t={t} resonance={resonance} />
        <Magic t={t} magicLore={magicLore} setSelectedMagic={setSelectedMagic} resonance={resonance} />
        <Saga t={t} resonance={resonance} />
        <Author t={t} resonance={resonance} />
        <Reviews t={t} resonance={resonance} />
        <FAQ t={t} resonance={resonance} />
      </Suspense>

      {/* FORM SECTION */}
      <section className="py-24 bg-red-950/10 border-t border-white/5">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">{t.form_titulo}</h2>
          <p className="text-slate-400 mb-6">{t.form_desc}</p>
          <MailerLiteForm />
        </div>
      </section>

      <Footer />
      <FloatingCTA t={t} />

      {/* ─── MODALS ─── */}

      {/* MAGIC MODAL */}
      {selectedMagic && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedMagic(null)}
        >
          <div
            className="bg-[#0c0a09] border border-white/10 p-8 rounded-2xl max-w-2xl w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMagic(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
              aria-label="Cerrar"
            >
              <X />
            </button>
            <h3 className="text-3xl font-bold text-white mb-4 font-serif">{selectedMagic.title}</h3>
            <p className="text-slate-300 leading-relaxed text-left text-lg">{selectedMagic.fullDesc}</p>
          </div>
        </div>
      )}

      {/* GALLERY MODAL */}
      {selectedGallery && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedGallery(false)}
        >
          <div
            className="bg-[#0c0a09] border border-white/10 p-4 sm:p-8 rounded-2xl max-w-3xl w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedGallery(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white z-10"
              aria-label="Cerrar galería"
            >
              <X />
            </button>
            <h3 className="text-2xl font-bold text-white mb-6 font-serif text-center">Galería Conceptual</h3>
            <div className="relative flex items-center justify-center">
              <button
                onClick={prevImage}
                className="absolute left-0 bg-black/50 p-2 rounded-full text-white hover:bg-red-900 transition-colors z-10"
                aria-label="Imagen anterior"
              >
                <ChevronRight className="w-6 h-6 rotate-180" />
              </button>
              <div className="w-full h-auto overflow-hidden rounded-lg border border-white/10">
                <img
                  src={galleryImages[currentGalleryIndex].src}
                  alt={galleryImages[currentGalleryIndex].alt}
                  className="w-full h-auto"
                />
              </div>
              <button
                onClick={nextImage}
                className="absolute right-0 bg-black/50 p-2 rounded-full text-white hover:bg-red-900 transition-colors z-10"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            <p className="text-center text-slate-400 mt-4 font-serif">{galleryImages[currentGalleryIndex].alt}</p>
          </div>
        </div>
      )}

      {/* CODEX / RUNAS MODAL */}
      {showCodex && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowCodex(false)}
        >
          <div
            className="bg-[#0c0a09] border border-white/10 p-8 rounded-2xl max-w-2xl w-full shadow-2xl relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCodex(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
              aria-label="Cerrar códice"
            >
              <X />
            </button>
            <h3 className="text-3xl font-bold text-white mb-6 font-serif">{t.codice} — Códice Prohibido de Noctara</h3>
            <div className="space-y-6">
              {codexLore.map((item) => (
                <div key={item.id} className="p-4 rounded-xl border border-white/10 bg-white/5">
                  <h4 className="font-bold mb-2 font-serif text-lg text-amber-500">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CAPÍTULOS MODAL */}
      {showChapters && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowChapters(false)}
        >
          <div
            className="bg-[#0c0a09] border border-white/10 p-8 rounded-2xl max-w-2xl w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowChapters(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
              aria-label="Cerrar capítulos"
            >
              <X />
            </button>
            <h3 className="text-3xl font-bold text-white mb-4 font-serif">{t.capitulos_titulo}</h3>
            <div className="w-full h-[60vh] bg-white rounded-lg overflow-hidden">
              <iframe src={`${import.meta.env.BASE_URL}capitulos_gratis.pdf`} className="w-full h-full" title="Capítulos Gratis" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
