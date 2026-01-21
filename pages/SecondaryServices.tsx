
import React from 'react';
import { HelpCircle, UserCheck, Mail, Briefcase, GraduationCap, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const SecondaryServices: React.FC = () => {
  const others = [
    {
      title: "Aiuto Esami",
      icon: GraduationCap,
      desc: "Preparazione mirata per esami universitari scogli. Tutoraggio su materie umanistiche, scientifiche e giuridiche.",
      points: ["Schemi e mappe concettuali", "Simulazione d'esame", "Risoluzione esercizi"]
    },
    {
      title: "CV & Cover Letter",
      icon: Briefcase,
      desc: "Inizia la tua carriera con il piede giusto. Creiamo il tuo curriculum in formato Europass o grafico moderno.",
      points: ["Ottimizzazione ATS", "Lettera di motivazione personalizzata", "Revisione profilo LinkedIn"]
    }
  ];

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Oltre la Tesi: Supporto alla Carriera e allo Studio</h1>
          <p className="text-lg text-slate-600">
            Ti supportiamo in ogni fase del tuo percorso universitario e nel delicato passaggio verso il mondo del lavoro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {others.map((service, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <div className="bg-slate-50 w-20 h-20 rounded-2xl flex items-center justify-center text-blue-700 mb-8">
                <service.icon className="h-10 w-10" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">{service.desc}</p>
              
              <ul className="space-y-4 mb-10">
                {service.points.map((p, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <CheckSquare className="h-5 w-5 text-blue-600 mr-3" />
                    {p}
                  </li>
                ))}
              </ul>

              <Link to="/contatto" className="inline-block w-full text-center py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">
                Chiedi Informazioni
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondaryServices;
