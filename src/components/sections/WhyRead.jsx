import React from 'react';
import { Flame, ShieldAlert, Sparkles, Search, BookOpen, Skull, CheckCircle2 } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

const WhyRead = ({ t, resonance }) => {
  const revealRef = useScrollReveal();

  const reasons = [
    {
      id: 1,
      icon: <Flame className="w-6 h-6" />,
      title: t.why_1_title,
      desc: t.why_1_desc,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10'
    },
    {
      id: 2,
      icon: <Skull className="w-6 h-6" />,
      title: t.why_2_title,
      desc: t.why_2_desc,
      color: 'text-purple-500',
      bg: 'bg-purple-500/10'
    },
    {
      id: 3,
      icon: <ShieldAlert className="w-6 h-6" />,
      title: t.why_3_title,
      desc: t.why_3_desc,
      color: 'text-red-500',
      bg: 'bg-red-500/10'
    },
    {
      id: 4,
      icon: <Search className="w-6 h-6" />,
      title: t.why_4_title,
      desc: t.why_4_desc,
      color: 'text-cyan-500',
      bg: 'bg-cyan-500/10'
    }
  ];

  return (
    <section 
      id="por-que-leer" 
      ref={revealRef}
      className={`py-24 relative border-t reveal-hidden ${
        resonance === 'umbrío' ? 'bg-[#080509] border-white/5' : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-serif font-bold mb-4 tracking-tight ${
            resonance === 'umbrío' ? 'text-white' : 'text-slate-900'
          }`}>
            {t.why_title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason) => (
            <div 
              key={reason.id}
              className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                resonance === 'umbrío' 
                  ? 'bg-white/5 border-white/10 hover:border-white/20' 
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${reason.bg} ${reason.color}`}>
                {reason.icon}
              </div>
              <h3 className={`text-xl font-bold font-serif mb-4 leading-tight ${
                resonance === 'umbrío' ? 'text-white' : 'text-slate-900'
              }`}>
                {reason.title}
              </h3>
              <p className={`leading-relaxed ${
                resonance === 'umbrío' ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Summary Box */}
        <div className={`p-8 md:p-12 rounded-3xl border text-center ${
          resonance === 'umbrío'
            ? 'bg-gradient-to-b from-red-950/40 to-[#030206] border-red-900/30'
            : 'bg-gradient-to-b from-amber-50 to-white border-amber-200/50'
        }`}>
          <h3 className={`text-2xl font-serif font-bold mb-8 ${
            resonance === 'umbrío' ? 'text-red-300' : 'text-amber-800'
          }`}>
            {t.why_summary_title}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
            <div className="flex flex-col gap-2 items-center text-center">
              <CheckCircle2 className={`w-8 h-8 ${resonance === 'umbrío' ? 'text-red-500' : 'text-amber-500'}`} />
              <h4 className={`font-bold ${resonance === 'umbrío' ? 'text-white' : 'text-slate-900'}`}>{t.why_summary_1_title}</h4>
              <p className={`text-sm ${resonance === 'umbrío' ? 'text-slate-400' : 'text-slate-600'}`}>{t.why_summary_1_desc}</p>
            </div>
            <div className="flex flex-col gap-2 items-center text-center">
              <CheckCircle2 className={`w-8 h-8 ${resonance === 'umbrío' ? 'text-red-500' : 'text-amber-500'}`} />
              <h4 className={`font-bold ${resonance === 'umbrío' ? 'text-white' : 'text-slate-900'}`}>{t.why_summary_2_title}</h4>
              <p className={`text-sm ${resonance === 'umbrío' ? 'text-slate-400' : 'text-slate-600'}`}>{t.why_summary_2_desc}</p>
            </div>
            <div className="flex flex-col gap-2 items-center text-center">
              <CheckCircle2 className={`w-8 h-8 ${resonance === 'umbrío' ? 'text-red-500' : 'text-amber-500'}`} />
              <h4 className={`font-bold ${resonance === 'umbrío' ? 'text-white' : 'text-slate-900'}`}>{t.why_summary_3_title}</h4>
              <p className={`text-sm ${resonance === 'umbrío' ? 'text-slate-400' : 'text-slate-600'}`}>{t.why_summary_3_desc}</p>
            </div>
          </div>

          <a
            href="https://srgurem.gumroad.com/l/maltraxis"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold transition-all duration-300 active:scale-95 hover:scale-105 w-full md:w-auto ${
              resonance === 'umbrío'
                ? 'bg-red-900 hover:bg-red-800 text-white shadow-[0_0_30px_rgba(153,27,27,0.4)]'
                : 'bg-amber-600 hover:bg-amber-500 text-white shadow-[0_0_30px_rgba(217,119,6,0.4)]'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            {t.why_cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyRead;
