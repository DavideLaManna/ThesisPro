
import React from 'react';
import { FileText } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center space-x-3 mb-8">
          <FileText className="h-8 w-8 text-blue-700" />
          <h1 className="text-4xl font-bold text-slate-900">Termini e Condizioni</h1>
        </div>
        <p className="text-sm text-slate-400 mb-12">Ultimo aggiornamento: Febbraio 2025</p>

        <div className="space-y-10 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Descrizione del Servizio</h2>
            <p>
              ThesisPro (P.IVA 02152530859) offre servizi di consulenza e supporto accademico, inclusi ma non limitati a: coaching per la stesura di tesi, revisione stilistica, controllo antiplagio, impaginazione, preparazione alla discussione e supporto per esami.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Natura del Servizio</h2>
            <p>
              I servizi offerti hanno natura esclusivamente di <strong>consulenza e supporto didattico</strong>. Il materiale prodotto è inteso come strumento di studio, approfondimento e riferimento metodologico. L'utilizzo finale del materiale è sotto la piena responsabilità del cliente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Preventivi e Pagamenti</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>I preventivi sono gratuiti e senza impegno.</li>
              <li>Il prezzo finale è concordato per iscritto prima dell'inizio del lavoro.</li>
              <li>Il pagamento avviene secondo le modalità e le tempistiche indicate nel preventivo accettato.</li>
              <li>In caso di progetti complessi, può essere richiesto un acconto.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Tempi di Consegna</h2>
            <p>
              Le tempistiche di consegna vengono concordate al momento dell'accettazione del preventivo. ThesisPro si impegna a rispettare le scadenze pattuite. Eventuali ritardi dovuti a cause di forza maggiore saranno comunicati tempestivamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Revisioni</h2>
            <p>
              Il servizio include revisioni del materiale consegnato, nei limiti e secondo le modalità specificate nel preventivo. Modifiche sostanziali rispetto al brief iniziale potranno comportare costi aggiuntivi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Proprietà Intellettuale</h2>
            <p>
              Una volta completato il pagamento, il materiale prodotto viene ceduto al cliente per uso personale. ThesisPro non conserva copie del materiale consegnato né lo riutilizza per altri clienti. È vietata la rivendita o redistribuzione del materiale a terzi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Diritto di Recesso</h2>
            <p>
              Il cliente può recedere dal servizio in qualsiasi momento prima dell'inizio della lavorazione, ottenendo il rimborso completo di eventuali somme versate. Una volta avviato il lavoro, il rimborso sarà proporzionale alla parte non ancora eseguita.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Limitazione di Responsabilità</h2>
            <p>
              ThesisPro non è responsabile dell'uso improprio del materiale fornito. Il servizio è offerto "così com'è" e ThesisPro non garantisce risultati accademici specifici, pur impegnandosi a fornire materiale di alta qualità.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Foro Competente</h2>
            <p>
              Per qualsiasi controversia relativa all'interpretazione o all'esecuzione dei presenti Termini e Condizioni, sarà competente il Foro del luogo di residenza o domicilio del consumatore, ai sensi dell'art. 66-bis del Codice del Consumo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contatti</h2>
            <p>
              Per qualsiasi domanda relativa ai presenti termini, contattare: <a href="mailto:info@thesispro.it" className="text-blue-700 underline">info@thesispro.it</a> | +39 333 146 9458.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
