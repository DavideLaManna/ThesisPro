
import React from 'react';
import { BookOpen, CheckCircle2, FileText, Monitor, ShieldAlert, Edit3 } from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Coaching e Stesura",
      icon: BookOpen,
      items: [
        { title: "Coaching Word & LaTeX", desc: "Lezioni individuali per padroneggiare gli strumenti di scrittura accademica più diffusi." },
        { title: "Sviluppo Capitoli", desc: "Assistenza nella stesura del piano di lavoro, introduzione, core e conclusioni." },
        { title: "Analisi Dati", desc: "Supporto per la parte empirica e l'elaborazione di dati statistici." }
      ]
    },
    {
      title: "Revisione e Controllo",
      icon: Edit3,
      items: [
        { title: "Revisione Stilistica", desc: "Correzione bozze, miglioramento della sintassi e del tono accademico." },
        { title: "Rimozione Plagio", desc: "Rielaborazione di testi per garantire il superamento del controllo Turnitin." },
        { title: "Controllo Formale", desc: "Verifica coerenza delle citazioni e della bibliografia." }
      ]
    },
    {
      title: "Presentazione Finale",
      icon: Monitor,
      items: [
        { title: "Slides Professionali", desc: "Realizzazione di presentazioni PowerPoint o Canva d'impatto." },
        { title: "Discorso Tesi", desc: "Redazione di un discorso bilanciato per i 10-15 minuti di discussione." },
        { title: "Public Speaking Tips", desc: "Suggerimenti per gestire l'ansia e rispondere alle domande della commissione." }
      ]
    }
  ];

  return (
    <div className="py-16 space-y-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Servizi Specializzati per la Tesi</h1>
        <p className="text-lg text-slate-600 max-w-2xl mb-12 leading-relaxed">
          Offriamo un supporto modulare: puoi scegliere un pacchetto completo "chiavi in mano" o singoli interventi mirati per migliorare il tuo lavoro.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {serviceCategories.map((cat, idx) => (
            <div key={idx} className="space-y-8">
              <div className="flex items-center space-x-3 text-blue-700">
                <cat.icon className="h-8 w-8" />
                <h2 className="text-2xl font-bold">{cat.title}</h2>
              </div>
              <div className="space-y-6">
                {cat.items.map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all">
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-blue-700 py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <ShieldAlert className="h-12 w-12 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl font-bold mb-4">Nota Importante sull'Antiplagio</h2>
          <p className="text-lg text-blue-100">
            Utilizziamo software di livello professionale per scansionare ogni singolo paragrafo prima della consegna. 
            <strong> Garantiamo che ogni materiale fornito è originale al 100%.</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
