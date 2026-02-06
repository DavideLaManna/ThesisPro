
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center space-x-3 mb-8">
          <ShieldCheck className="h-8 w-8 text-blue-700" />
          <h1 className="text-4xl font-bold text-slate-900">Informativa sulla Privacy</h1>
        </div>
        <p className="text-sm text-slate-400 mb-12">Ultimo aggiornamento: Febbraio 2025</p>

        <div className="space-y-10 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Titolare del Trattamento</h2>
            <p>
              Il Titolare del trattamento dei dati personali è <strong>ThesisPro</strong>, P.IVA 02152530859.
            </p>
            <p className="mt-2">
              Email: <a href="mailto:info@thesispro.it" className="text-blue-700 underline">info@thesispro.it</a> | Telefono: +39 333 146 9458
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Dati Raccolti</h2>
            <p>Raccogliamo le seguenti categorie di dati personali:</p>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li><strong>Dati identificativi:</strong> nome, cognome, indirizzo email, numero di telefono, forniti volontariamente tramite il modulo di contatto.</li>
              <li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, sistema operativo, pagine visitate, orario di accesso, raccolti automaticamente durante la navigazione.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Finalità del Trattamento</h2>
            <p>I dati personali sono trattati per le seguenti finalità:</p>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li>Rispondere alle richieste di contatto e fornire preventivi.</li>
              <li>Erogare i servizi di consulenza accademica richiesti.</li>
              <li>Adempiere ad obblighi di legge, fiscali e contabili.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Base Giuridica</h2>
            <p>
              Il trattamento dei dati è fondato sul consenso dell'interessato (art. 6, par. 1, lett. a del GDPR),
              sull'esecuzione di misure precontrattuali o contrattuali (art. 6, par. 1, lett. b) e su obblighi legali (art. 6, par. 1, lett. c).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Conservazione dei Dati</h2>
            <p>
              I dati personali saranno conservati per il tempo necessario al raggiungimento delle finalità per cui sono raccolti e comunque non oltre i termini previsti dalla normativa vigente. I dati relativi ai contatti commerciali sono conservati per un massimo di 24 mesi dall'ultimo contatto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Comunicazione dei Dati</h2>
            <p>
              I dati personali non saranno diffusi né ceduti a terzi, fatta eccezione per i soggetti incaricati del trattamento (es. fornitori di servizi tecnici) e per le autorità competenti nei casi previsti dalla legge.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Diritti dell'Interessato</h2>
            <p>Ai sensi degli artt. 15-22 del Regolamento UE 2016/679 (GDPR), l'interessato ha diritto di:</p>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li>Accedere ai propri dati personali.</li>
              <li>Ottenerne la rettifica o la cancellazione.</li>
              <li>Limitare il trattamento o opporsi allo stesso.</li>
              <li>Richiedere la portabilità dei dati.</li>
              <li>Revocare il consenso in qualsiasi momento.</li>
              <li>Proporre reclamo al Garante per la Protezione dei Dati Personali.</li>
            </ul>
            <p className="mt-3">
              Per esercitare i propri diritti, scrivere a: <a href="mailto:info@thesispro.it" className="text-blue-700 underline">info@thesispro.it</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Cookie</h2>
            <p>
              Questo sito utilizza esclusivamente cookie tecnici necessari al corretto funzionamento della piattaforma. Non vengono utilizzati cookie di profilazione o di terze parti a fini pubblicitari.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Modifiche alla presente Informativa</h2>
            <p>
              Il Titolare si riserva il diritto di apportare modifiche alla presente informativa in qualsiasi momento, dandone comunicazione tramite pubblicazione sul sito.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
