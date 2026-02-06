
import React from 'react';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

const AntiplagioPolicy: React.FC = () => {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center space-x-3 mb-8">
          <ShieldAlert className="h-8 w-8 text-blue-700" />
          <h1 className="text-4xl font-bold text-slate-900">Policy Antiplagio</h1>
        </div>
        <p className="text-sm text-slate-400 mb-12">Ultimo aggiornamento: Febbraio 2025</p>

        <div className="space-y-10 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Il Nostro Impegno</h2>
            <p>
              L'originalità è il principio fondante del nostro lavoro. ThesisPro si impegna a consegnare esclusivamente materiale originale, redatto su misura per ogni singolo cliente. Non utilizziamo testi preconfezionati, template riciclati o contenuti generati automaticamente senza supervisione.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Processo di Verifica</h2>
            <p className="mb-4">Ogni elaborato passa attraverso un rigoroso processo di controllo qualità:</p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900">Redazione originale</h3>
                  <p>Ogni testo viene scritto ex novo da consulenti qualificati, seguendo le indicazioni specifiche del cliente.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900">Scansione antiplagio professionale</h3>
                  <p>Utilizziamo software antiplagio di livello universitario per verificare l'unicità di ogni paragrafo prima della consegna.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900">Report di originalità</h3>
                  <p>Su richiesta, forniamo al cliente il report completo della scansione antiplagio eseguita sull'elaborato.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900">Citazioni e bibliografia</h3>
                  <p>Tutte le fonti utilizzate vengono citate correttamente secondo gli standard accademici (APA, Chicago, Vancouver o altri su richiesta).</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">La Nostra Garanzia</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
              <p className="text-lg font-semibold text-blue-900 mb-3">
                Garantiamo che ogni materiale consegnato è originale al 100%.
              </p>
              <p className="text-blue-800">
                Qualora il cliente riscontrasse percentuali di similarità superiori alle soglie accettate dal proprio ateneo, ci impegniamo a rielaborare gratuitamente le sezioni interessate fino al raggiungimento dello standard richiesto.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contattaci</h2>
            <p>
              Per domande sulla nostra policy antiplagio o per richiedere un report di originalità, scrivere a: <a href="mailto:info@thesispro.it" className="text-blue-700 underline">info@thesispro.it</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AntiplagioPolicy;
