import React, { useState } from 'react';
import { Book, ChevronRight, Menu, X, BookOpen, Feather, Sparkles, User, Mail, Star, Flame, Droplet, Eye } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [resonance, setResonance] = useState('umbrío');
  const [activeRune, setActiveRune] = useState(null);

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
    <div className={`min-h-screen transition-all duration-1000 font-sans selection:bg-purple-500 selection:text-white ${resonance === 'umbrío'
      ? 'bg-[#030206] text-purple-100'
      : 'bg-[#060402] text-amber-100'
      }`}>

      {/* RAIN EFFECT */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.05)_50%,rgba(255,255,255,0)_100%)] bg-[size:100px_400px] animate-[pulse_3s_infinite]"></div>
        <div className="rain-container absolute inset-0">
          <div className="absolute w-[1px] h-20 bg-gradient-to-b from-transparent to-purple-500/30 left-[12%] top-[-10%] animate-rain-3"></div>
          <div className="absolute w-[1px] h-24 bg-gradient-to-b from-transparent to-amber-500/20 left-[35%] top-[-20%] animate-rain-2"></div>
          <div className="absolute w-[1px] h-16 bg-gradient-to-b from-transparent to-cyan-500/25 left-[67%] top-[-5%] animate-rain-1"></div>
          <div className="absolute w-[1px] h-28 bg-gradient-to-b from-transparent to-purple-500/30 left-[85%] top-[-15%] animate-rain-4"></div>
        </div>
      </div>

      {/* RESONANCE SELECTOR */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <span className="text-[10px] tracking-widest uppercase text-slate-500 font-bold">Resonancia Telúrica</span>
        <div className="flex gap-1 p-1 bg-black/80 border border-white/10 rounded-full backdrop-blur-md shadow-2xl">
          <button
            onClick={() => setResonance('umbrío')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${resonance === 'umbrío'
              ? 'bg-purple-900/60 text-purple-200 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
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
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Sparkles className={`w-6 h-6 transition-colors duration-1000 ${resonance === 'umbrío' ? 'text-purple-500' : 'text-amber-500'}`} />
              <span className="text-2xl font-serif font-bold text-white tracking-wider uppercase">MALTRAXIS</span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-baseline space-x-8">
                <a href="#inicio" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Inicio</a>
                <a href="#sinopsis" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">La Historia</a>
                <a href="#mundo" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">El Mundo</a>
                <a href="#magia" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Magia</a>
                <a href="#libros" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Saga</a>
                <a href="#autor" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Autor</a>
              </div>
              <a
                href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold transition-all shadow-[0_0_10px_rgba(147,51,234,0.3)]"
              >
                Comprar Libro
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-400 hover:text-white p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
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
            <a href="#libros" onClick={() => setIsMenuOpen(false)} className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition-colors">Saga</a>
            <a href="#autor" onClick={() => setIsMenuOpen(false)} className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition-colors">Autor</a>
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-400 text-sm font-medium mb-6">
                <Star className="w-4 h-4 text-purple-500" /> Nueve luces para nueve sombras
              </div>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 tracking-wide">
                Bienvenido a <span className={`transition-colors duration-1000 text-transparent bg-clip-text bg-gradient-to-r ${resonance === 'umbrío' ? 'from-purple-300 via-purple-500 to-indigo-600' : 'from-amber-200 via-amber-400 to-yellow-600'}`}>Maltraxis</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-justify">
                Bajo el asfalto mojado del planeta Noctara, el destino de la humanidad se forja con runas, gemas y sangre.
                Bienvenido a Maltraxis, una megalópolis gótico-industrial donde los rascacielos de acero y cristal arcano perforan un cielo de nubes ácidas.
                En este mundo nacido de la fragmentación divina, la Luz no es la salvación; es una tiranía dogmática que exige sumisión absoluta.
                Acompaña a Gur, un detective cínico con un pasado doloroso, y a Rabe, una joven que representa una paradoja viviente entre la luz y la sombra, en una huida desesperada por los Jardines del Cielo y los callejones del Desagüe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#libros" className={`inline-flex justify-center items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all duration-500 ${resonance === 'umbrío' ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_25px_rgba(147,51,234,0.4)]' : 'bg-amber-600 hover:bg-amber-500 text-slate-950 shadow-[0_0_25px_rgba(217,119,6,0.4)]'}`}>
                  <BookOpen className="w-5 h-5" />
                  Descubrir la Saga
                </a>
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
          <Feather className={`w-12 h-12 mx-auto mb-6 transition-colors duration-1000 ${resonance === 'umbrío' ? 'text-purple-500' : 'text-amber-500'}`} />
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-8 tracking-wider">La Ciudad de las Sombras</h2>
          <div className="space-y-6 text-slate-300 leading-relaxed text-justify lg:text-center text-lg">
            <p>
              Maltraxis no es una simple ciudad de fantasía medieval; es un monstruo tecnológico-gótico de acero, cristal arcano y vapor. En sus niveles más profundos, la humanidad se desangra de deudas, consumiendo escoria de cristales mágicos en callejones húmedos bajo una lluvia constante.
            </p>
            <p>
              <strong>Gur</strong>, un ex-detective que arrastra la culpa de una muerte del pasado, debe infiltrarse en la Torre Anael para extraer a una criatura peligrosa. Al llegar a la cima descubre a <strong>Rabe</strong>, una joven confinada que desconoce su herencia híbrida de luz y oscuridad. Su escape desatará la furia de los Nueve Ángeles, decididos a purgar la inmundicia mortal e imponer una simetría blanca y silenciosa sobre Noctara.
            </p>
          </div>
        </div>
      </section>

      {/* SCENARIO DETAILS WITH TEMPORARY IMAGES */}
      <section id="mundo" className="py-24 relative bg-gradient-to-b from-transparent to-black/85">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4 tracking-widest uppercase">El Escenario de Noctara</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group rounded-2xl overflow-hidden bg-black/40 border border-white/5 hover:border-purple-500/30 transition-all shadow-xl">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={`${import.meta.env.BASE_URL}calles.png`} alt="Calles" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white font-serif">Distrito Inferior</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Calles empedradas marcadas por la humedad y el goteo de aceite de las calderas de vapor. El aire pesado transporta la desesperación de la clase obrera y la presencia de demonios menores refugiados en tabernas lúgubres.
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
                  <h3 className="text-xl font-bold text-white font-serif">Jardines del Cielo</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Los Jardines del Cielo de Maltraxis son exuberantes oasis de naturaleza artificial que se extienden entre los pisos 100 y 125 de los rascacielos colosales de la ciudad, funcionando como un segundo nivel urbano suspendido en las alturas. Estas islas celestiales están interconectadas por puentes y plataformas grabados con runas de estabilización azules que brillan suavemente.
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
                  <h3 className="text-xl font-bold text-white font-serif">Las Forjas de Nixael</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Talleres de experimentación donde se tallan runas en engranajes masivos y se destilan gemas para bombear energía a la metrópolis. Ciencia, vacío y transmutación conviven en un peligroso balance.
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
                  <h3 className="text-xl font-bold text-white font-serif">Azhar: La Ciudad de la Luz</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Contrapunto luminoso a Maltraxis. Azhar se erige como un faro de luz  y esperanza, donde la luz no solo ilumina, sino que dicta el orden y la justicia sobre los dominios telúricos.
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
            <h2 className="text-4xl font-serif font-bold text-white mb-4 tracking-widest uppercase">El Ecosistema Mágico de Noctara</h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-justify">
              Toda la magia en Noctara emana del Flujo Telúrico, la energía natural del núcleo del planeta. Los magos actúan como conductos biológicos; realizar magia sin anclarse al flujo o sin el combustible de una gema agota la vitalidad del usuario, pudiendo causar la muerte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Elemental */}
            <div className="bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 font-serif">Magia Elemental</h3>
              <p className="text-sm text-slate-400 leading-relaxed text-justify">
                Manipulación física del entorno (Fuego, Tierra, Agua, Viento, Electricidad). Requiere concentración constante y, a menudo, elementos preexistentes. La electricidad es base de la tecno-magia.
              </p>
            </div>
            
            {/* Luz */}
            <div className="bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-all">
              <h3 className="text-xl font-bold text-amber-400 mb-4 font-serif">Magia de Luz</h3>
              <p className="text-sm text-slate-400 leading-relaxed text-justify">
                Energía de pureza y orden. Permite crear constructos sólidos, acelerar objetos, ralentizar la percepción y el "Cántico", una frecuencia telepática de sumisión dogmática.
              </p>
            </div>

            {/* Oscuridad */}
            <div className="bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all">
              <h3 className="text-xl font-bold text-purple-400 mb-4 font-serif">Magia de Oscuridad</h3>
              <p className="text-sm text-slate-400 leading-relaxed text-justify">
                Energía caótica del vacío. Incluye alteración gravitatoria, teletransportación mediante fracturas espaciales, y proyección de ilusiones basadas en traumas.
              </p>
            </div>

            {/* Infraestructura */}
            <div className="bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
              <h3 className="text-xl font-bold text-white mb-4 font-serif">Infraestructura</h3>
              <p className="text-sm text-slate-400 leading-relaxed text-justify">
                Gemas y Runas: Las gemas actúan como baterías de energía telúrica y las runas como el código sintáctico que permite automatizar y hacer permanentes los efectos mágicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOVELS SAGA SECTION */}
      <section id="libros" className="py-24 relative bg-[#060402]/90 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4 tracking-widest uppercase">La Saga Maltraxis</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Sumérgete en la crónica de Abyloria a través de las novelas de la saga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Book 1 */}
            <div className="bg-black/60 rounded-2xl p-6 border border-white/5 hover:border-purple-500/20 transition-all flex flex-col sm:flex-row gap-6">
              <a href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6" target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/3 aspect-[2/3] overflow-hidden rounded-lg relative block">
                <img src="/portada.jpg" alt="Libro 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </a>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-purple-400 font-bold">Volumen I</span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1 mb-3">La Ciudad de las Sombras</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    La introducción al mundo de Noctara. Acompaña a Gur en su misión suicida para liberar a Rabe de la Torre Anael y desatar una verdad que cambiará el destino de los mortales.
                  </p>
                </div>
                <a
                  href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg font-bold uppercase tracking-wider bg-purple-600 hover:bg-purple-500 text-white transition-all duration-300 shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                >
                  <BookOpen className="w-4 h-4" />
                  Comprar en Amazon
                </a>
              </div>
            </div>

            {/* Book 2 */}
            <div className="bg-black/60 rounded-2xl p-6 border border-white/5 hover:border-amber-500/20 transition-all flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-1/3 aspect-[2/3] overflow-hidden rounded-lg relative">
                <img src="./public/El Juicio del Alba.jpg" alt="Libro 2" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">Volumen II</span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1 mb-3">El Juicio del Alba</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    La rebelión de los Nueve Ángeles ha comenzado. El aire se llena de vapor y el cielo arde con fuego de runas artificiales. Gur y Rabe deben buscar aliados en las forjas olvidadas.
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
              <span className="text-xs uppercase tracking-widest text-purple-400 font-bold">El Creador</span>
              <h2 className="text-4xl font-serif font-bold text-white mt-1 mb-4">Jose C. Sierra</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Jose C. Sierra es un apasionado escritor de fantasía oscura y steampunk. Inspirado por la mitología clásica, la tecnología retrofuturista y la narrativa noir, ha construido el universo de Maltraxis como un reflejo de las luchas internas del ser humano bajo la opresión de sistemas implacables.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="mailto:jose.sierra@example.com" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" /> Contacto
                </a>
              </div>
            </div>
          </div>
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
