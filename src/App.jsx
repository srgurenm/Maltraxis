import React, { useState } from 'react';
import { Book, ChevronRight, Menu, X, BookOpen, Feather, Sparkles, User, Mail, Star, Flame, Droplet, Eye, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import MailerLiteForm from './components/MailerLiteForm';

export default function App() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [resonance, setResonance] = useState('umbrío');
  const [activeRune, setActiveRune] = useState(null);

  const [selectedMagic, setSelectedMagic] = useState(null);
  const [selectedLore, setSelectedLore] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [showChapters, setShowChapters] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const galleryImages = [
    { src: '/Paladin.png', alt: 'Paladín' },
    { src: '/Dualidad.png', alt: 'Dualidad' },
    { src: '/ecuacion.png', alt: 'Ecuación' }
  ];

  const nextImage = () => setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const magicLore = [
    {
      id: 'elemental',
      title: 'Magia Elemental',
      shortDesc: 'Manipulación física del entorno mediante el Flujo Telúrico.',
      fullDesc: 'A diferencia de la Luz o la Oscuridad, la magia elemental no crea materia desde el vacío, sino que manipula el entorno. Requiere concentración constante. Incluye Fuego (requiere combustible), Tierra (manipulación de materiales existentes), Agua/Hielo (depende de la humedad), Viento (efecto de presión) y Electricidad (requiere conductores o runas). Los rangos de élite pueden invocar rayos directamente de las nubes.',
      color: 'border-cyan-500/30'
    },
    {
      id: 'luz',
      title: 'Magia de Luz',
      shortDesc: 'Energía de pureza, orden y constructos sólidos.',
      fullDesc: 'Vinculada a la pureza y vida. Permite solidificar energía para armas o barreras (drenaje agresivo), ralentizar la percepción, acelerar objetos, y el "Cántico", una frecuencia telepática que fuerza la sumisión dogmática absoluta.',
      color: 'border-amber-500/30'
    },
    {
      id: 'oscuridad',
      title: 'Magia de Oscuridad',
      shortDesc: 'Energía caótica del vacío y emociones primarias.',
      fullDesc: 'Caos ligado al vacío. Permite alterar la gravedad (aumentar masa), crear fracturas espaciales (teletransportación peligrosa), proyectar ilusiones basadas en traumas (con "rebote" físico al mago), y manipular fuego negro o electricidad púrpura.',
      color: 'border-red-900/50'
    },
    {
      id: 'infraestructura',
      title: 'Infraestructura',
      shortDesc: 'Gemas como baterías y Runas como código.',
      fullDesc: 'Las gemas actúan como baterías de energía telúrica (según pureza). Las runas son la sintaxis grabada que permite automatizar efectos mágicos de forma permanente (iluminación, transporte), siempre que cuenten con suministro energético.',
      color: 'border-white/20'
    }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const runesLore = [
    {
      id: 'luz',
      title: 'Runa del Flujo Luminoso',
      desc: 'Vinculada a la energía telúrica del planeta. Los constructos de luz sólida exigen precisión mental y consumen energía constante si no se enlazan al flujo natural de Noctara.',
      color: 'text-amber-400 border-amber-500/30 bg-amber-950/20'
    },
    {
      id: 'vacio',
      title: 'Runa del Vórtice Umbrío',
      desc: 'Energía caótica ligada al vacío y las emociones primarias. Permite doblar el espacio y manipular la gravedad, pero su uso prolongado induce desorientación permanente.',
      color: 'text-purple-400 border-purple-500/30 bg-purple-950/20'
    },
    {
      id: 'elemental',
      title: 'Runas de Anclaje',
      desc: 'A diferencia de la Luz o la Oscuridad, la magia elemental requiere el entorno físico. Las runas actúan como baterías que automatizan y sostienen los hechizos continuamente.',
      color: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20'
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-1000 font-sans selection:bg-red-900 selection:text-white ${resonance === 'umbrío'
      ? 'bg-[#030206] text-slate-200'
      : 'bg-white text-slate-900'
      }`}>

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

      {/* RESONANCE SELECTOR */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <span className="text-[10px] tracking-widest uppercase text-slate-500 font-bold">Resonancia Telúrica</span>
        <div className="flex gap-1 p-1 bg-black/80 border border-white/10 rounded-full backdrop-blur-md shadow-2xl">
          <button
            onClick={() => setResonance('umbrío')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${resonance === 'umbrío'
              ? 'bg-red-950/60 text-red-200 border border-red-900/50 shadow-[0_0_15px_rgba(153,27,27,0.4)]'
              : 'text-slate-400 hover:text-white'
              }`}
          >
            <Droplet className="w-3.5 h-3.5" /> Vórtice Umbrío
          </button>
          <button
            onClick={() => setResonance('luminoso')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${resonance === 'luminoso'
              ? 'bg-amber-950/60 text-amber-200 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
              : 'text-slate-400 hover:text-white'
              }`}
          >
            <Flame className="w-3.5 h-3.5" /> Flujo Luminoso
          </button>
        </div>
      </div>

      {/* NAVIGATION */}
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
                  <button onClick={() => setSelectedLore(true)} className={`hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${resonance === 'umbrío' ? 'text-slate-200' : 'text-slate-900'}`}>{t.codice}</button>
                  <button onClick={() => setSelectedGallery(true)} className={`hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${resonance === 'umbrío' ? 'text-slate-200' : 'text-slate-900'}`}>{t.galeria}</button>
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

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-b border-white/5 px-4 pt-2 pb-4 space-y-1">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition-colors">Inicio</a>
            <a href="#sinopsis" onClick={() => setIsMenuOpen(false)} className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition-colors">La Historia</a>
            <a href="#mundo" onClick={() => setIsMenuOpen(false)} className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition-colors">El Mundo</a>
            <a href="#magia" onClick={() => setIsMenuOpen(false)} className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition-colors">Magia</a>
            <button onClick={() => { setSelectedLore(true); setIsMenuOpen(false); }} className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition-colors">Códice</button>
            <button onClick={() => { setSelectedGallery(true); setIsMenuOpen(false); }} className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition-colors">Galería</button>
            <a href="#libros" onClick={() => setIsMenuOpen(false)} className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition-colors">Saga</a>
            <a href="#autor" onClick={() => setIsMenuOpen(false)} className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition-colors">Autor</a>
            <a
                href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-lg bg-red-900 hover:bg-red-800 text-white text-base font-bold transition-all shadow-[0_0_10px_rgba(153,27,27,0.3)] mt-2"
              >
                {t.comprar}
              </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className={`absolute inset-0 transition-opacity duration-1000 ${resonance === 'umbrío' ? 'opacity-100' : 'opacity-0'} bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950/30 via-[#030206] to-black -z-10`}></div>
        <div className={`absolute inset-0 transition-opacity duration-1000 ${resonance === 'luminoso' ? 'opacity-100' : 'opacity-0'} bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/20 via-[#060402] to-black -z-10`}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-red-500 text-sm font-medium mb-6">
                <Star className="w-4 h-4 text-red-700" /> Nueve luces para nueve sombras
              </div>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 tracking-wide">
                {t.hero_title} <span className={`transition-colors duration-1000 text-transparent bg-clip-text bg-gradient-to-r ${resonance === 'umbrío' ? 'from-red-300 via-red-800 to-red-950' : 'from-amber-200 via-amber-400 to-yellow-600'}`}>Maltraxis</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 font-serif italic">{t.hero_subtitle}</p>
              <p className="text-lg lg:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-justify">
                {t.hero_description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={() => setShowChapters(true)} className={`inline-flex justify-center items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all duration-500 ${resonance === 'umbrío' ? 'bg-red-900 hover:bg-red-800 text-white shadow-[0_0_25px_rgba(153,27,27,0.4)]' : 'bg-amber-600 hover:bg-amber-500 text-slate-950 shadow-[0_0_25px_rgba(217,119,6,0.4)]'}`}>
                  <Book className="w-5 h-5" />
                  {t.leer_ahora}
                </button>
              </div>
            </div>

            {/* NOVEL COVER MOCKUP */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg aspect-[2/3] group">
              <div className={`absolute inset-0 rounded-2xl transform rotate-3 scale-105 opacity-65 duration-1000 transition-all blur-xl ${resonance === 'umbrío' ? 'bg-gradient-to-tr from-purple-600/30 to-indigo-500/25' : 'bg-gradient-to-tr from-amber-600/30 to-yellow-500/25'}`}></div>
              <img
                src={`${import.meta.env.BASE_URL}portada.jpg`}
                alt="Portada Temporal"
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 transition-transform duration-500 group-hover:-translate-y-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SYNOPSIS */}
      <section id="sinopsis" className="py-20 bg-black/90 border-y border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Feather className={`w-12 h-12 mx-auto mb-6 transition-colors duration-1000 ${resonance === 'umbrío' ? 'text-red-700' : 'text-amber-500'}`} />
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-8 tracking-wider">{t.sinopsis_titulo}</h2>
          <div className="space-y-6 text-slate-300 leading-relaxed text-justify lg:text-center text-lg">
            <p>
              {t.sinopsis_p1}
            </p>
            <p>
              {t.sinopsis_p2}
            </p>
          </div>
        </div>
      </section>

      {/* SCENARIO DETAILS WITH TEMPORARY IMAGES */}
      <section id="mundo" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover"
            >
                <source src="/mvideo.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4 tracking-widest uppercase">{t.mundo_titulo}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group rounded-2xl overflow-hidden bg-black/40 border border-white/5 hover:border-purple-500/30 transition-all shadow-xl">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={`${import.meta.env.BASE_URL}calles.png`} alt="Calles" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white font-serif">{t.mundo_1_titulo}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {t.mundo_1_desc}
                </p>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden bg-black/40 border border-white/5 hover:border-amber-500/30 transition-all shadow-xl">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={`${import.meta.env.BASE_URL}jardines.png`} alt="Cielo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white font-serif">{t.mundo_2_titulo}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {t.mundo_2_desc}
                </p>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden bg-black/40 border border-white/5 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={`${import.meta.env.BASE_URL}lab.png`} alt="Lab" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white font-serif">{t.mundo_3_titulo}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {t.mundo_3_desc}
                </p>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden bg-black/40 border border-white/5 hover:border-indigo-500/30 transition-all shadow-xl">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src="/azhar.jpeg" alt="Azhar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white font-serif">{t.mundo_4_titulo}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {t.mundo_4_desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAGIC SYSTEM */}
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

      {/* MAGIC MODAL */}
      {selectedMagic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedMagic(null)}>
          <div className="bg-[#0c0a09] border border-white/10 p-8 rounded-2xl max-w-2xl w-full shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedMagic(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white">
              <X />
            </button>
            <h3 className="text-3xl font-bold text-white mb-4 font-serif">{selectedMagic.title}</h3>
            <p className="text-slate-300 leading-relaxed text-justify text-lg">
              {selectedMagic.fullDesc}
            </p>
          </div>
        </div>
      )}

      {/* GALLERY MODAL */}
      {selectedGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedGallery(false)}>
          <div className="bg-[#0c0a09] border border-white/10 p-4 sm:p-8 rounded-2xl max-w-3xl w-full shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedGallery(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white z-10">
              <X />
            </button>
            <h3 className="text-2xl font-bold text-white mb-6 font-serif text-center">Galería Conceptual</h3>

            <div className="relative flex items-center justify-center">
              <button onClick={prevImage} className="absolute left-0 bg-black/50 p-2 rounded-full text-white hover:bg-red-900 transition-colors">
                <ChevronRight className="w-6 h-6 rotate-180" />
              </button>

              <div className="w-full h-auto overflow-hidden rounded-lg border border-white/10">
                <img src={galleryImages[currentGalleryIndex].src} alt={galleryImages[currentGalleryIndex].alt} className="w-full h-auto" />
              </div>

              <button onClick={nextImage} className="absolute right-0 bg-black/50 p-2 rounded-full text-white hover:bg-red-900 transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            <p className="text-center text-slate-400 mt-4 font-serif">{galleryImages[currentGalleryIndex].alt}</p>
          </div>
        </div>
      )}

      {/* NOVELS SAGA SECTION */}
      <section id="libros" className="py-24 relative bg-[#060402]/90 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4 tracking-widest uppercase">{t.saga_titulo}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {t.saga_desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Book 1 */}
            <div className="bg-black/60 rounded-2xl p-6 border border-white/5 hover:border-red-900/20 transition-all flex flex-col sm:flex-row gap-6">
              <a href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6" target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/3 aspect-[2/3] overflow-hidden rounded-lg relative block">
                <img src="/portada.jpg" alt="Libro 1" className="w-full h-full object-contain bg-black hover:scale-105 transition-transform duration-500" />
              </a>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-red-700 font-bold">Libro I</span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1 mb-3">{t.libro_1_titulo}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {t.libro_1_desc}
                  </p>
                </div>
                <a
                  href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg font-bold uppercase tracking-wider bg-red-900 hover:bg-red-800 text-white transition-all duration-300 shadow-[0_0_15px_rgba(153,27,27,0.3)]"
                >
                  <BookOpen className="w-4 h-4" />
                  Comprar en Amazon
                </a>
              </div>
            </div>

            {/* Book 2 */}
            <div className="bg-black/60 rounded-2xl p-6 border border-white/5 hover:border-amber-500/20 transition-all flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-1/3 aspect-[2/3] overflow-hidden rounded-lg relative">
                <img src="/portada2.png" alt="Libro 2" className="w-full h-full object-contain bg-black" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">Libro II</span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1 mb-3">{t.libro_2_titulo}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {t.libro_2_desc}
                  </p>
                </div>
                <button className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors">
                  Próximamente <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHOR SECTION */}
      <section id="autor" className="py-24 relative bg-black/90 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-white/10 relative shadow-2xl shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-amber-500/20 mix-blend-overlay"></div>
              <img src="/yo.jpg" alt="Jose C. Sierra" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-red-700 font-bold">{t.autor_titulo}</span>
              <h2 className="text-4xl font-serif font-bold text-white mt-1 mb-4">Jose C. Sierra</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                {t.autor_desc}
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="mailto:jcsierrah77@gmail.com" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" /> {t.contacto}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* CAPÍTULOS MODAL */}
      {showChapters && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowChapters(false)}>
          <div className="bg-[#0c0a09] border border-white/10 p-8 rounded-2xl max-w-2xl w-full shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowChapters(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">
              <X />
            </button>
            <h3 className="text-3xl font-bold text-white mb-4 font-serif">{t.capitulos_titulo}</h3>
            <p className="text-slate-300 leading-relaxed text-justify text-lg">
              (Aquí se mostraría el contenido de los capítulos gratis)
            </p>
          </div>
        </div>
      )}

      {/* FORM SECTION */}
      <section className="py-24 bg-red-950/10 border-t border-white/5">
        <div className="max-w-xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">{t.form_titulo}</h2>
            <p className="text-slate-400 mb-6">{t.form_desc}</p>
            <MailerLiteForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 border-t border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Jose C. Sierra. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
