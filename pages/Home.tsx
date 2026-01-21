
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Search, PenTool, Layout, FileSearch, Presentation, ArrowRight } from 'lucide-react';
import AIConsultant from '../components/AIConsultant';

const Home: React.FC = () => {
  const steps = [
    { icon: Search, title: '1. Reperimento fonti', desc: 'Ricerca bibliografica accurata e selezione argomenti di tendenza.' },
    { icon: PenTool, title: '2. Aiuto stesura', desc: 'Supporto metodologico e affiancamento nella scrittura dei capitoli.' },
    { icon: Layout, title: '3. Impaginazione', desc: 'Formattazione professionale secondo le linee guida del tuo ateneo.' },
    { icon: FileSearch, title: '4. Antiplagio e Revisione', desc: 'Controllo rigoroso e garanzia di originalità al 100%.' },
    { icon: Presentation, title: '5. Discorso e PPT', desc: 'Preparazione per la discussione finale e slide professionali.' },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-8 font-medium text-sm">
            <ShieldCheck className="h-4 w-4" />
            <span>Garanzia 100% Antiplagio su ogni elaborato</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
            La Tua Laurea, <br />
            <span className="text-blue-700">Il Nostro Impegno.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Supporto professionale per tesi di laurea triennali e magistrali. Dalla ricerca delle fonti alla revisione finale, ti accompagniamo verso il traguardo accademico con eccellenza.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/servizi" className="bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-800 transition-all flex items-center shadow-lg hover:shadow-xl w-full sm:w-auto">
              Esplora i Servizi <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contatto" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all w-full sm:w-auto">
              Contattaci Ora
            </Link>
          </div>
        </div>
      </section>

      {/* Main Service Process */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Il Percorso per una Tesi Eccellente</h2>
          <p className="text-slate-600">Un supporto completo, passo dopo passo, per ogni esigenza accademica.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center">
              <div className="bg-blue-50 text-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Consultant Feature */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Hai bisogno di idee?</h2>
          <p className="text-slate-600">Prova il nostro consulente basato su intelligenza artificiale per un brainstorming immediato.</p>
        </div>
        <AIConsultant />
      </section>

      {/* Antiplagio Banner */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <ShieldCheck className="h-16 w-16 text-blue-400 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trasparenza e Originalità Garantite</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Ogni materiale fornito dai nostri consulenti passa attraverso i più rigorosi sistemi di controllo anti-plagio utilizzati dalle università italiane. Riceverai un elaborato unico, originale e citato correttamente.
          </p>
          <div className="flex justify-center space-x-8">
             <div className="text-center">
               <span className="block text-4xl font-bold text-blue-400 mb-1">100%</span>
               <span className="text-sm uppercase tracking-wider text-slate-400 font-semibold">Originale</span>
             </div>
             <div className="text-center">
               <span className="block text-4xl font-bold text-blue-400 mb-1">Top</span>
               <span className="text-sm uppercase tracking-wider text-slate-400 font-semibold">Qualità</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
