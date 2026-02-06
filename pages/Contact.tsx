
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    request: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const response = await fetch('https://formsubmit.co/ajax/info@thesispro.it', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nome: formData.name,
          Cognome: formData.surname,
          Telefono: formData.phone,
          Email: formData.email,
          Richiesta: formData.request,
          _subject: 'Nuova richiesta da ThesisPro',
        })
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="py-32 max-w-3xl mx-auto px-4 text-center">
        <div className="bg-green-100 text-green-700 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Richiesta Inviata!</h1>
        <p className="text-xl text-slate-600 mb-8">
          Abbiamo ricevuto la tua richiesta. Un nostro esperto ti contatterà telefonicamente o via email entro le prossime 24 ore.
        </p>
        <button onClick={() => setSubmitted(false)} className="bg-blue-700 text-white px-8 py-3 rounded-xl font-bold">
          Invia un'altra richiesta
        </button>
      </div>
    );
  }

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Contattaci per una consulenza gratuita</h1>
            <p className="text-lg text-slate-600 mb-12">
              Analizzeremo il tuo caso, l'argomento della tua tesi e le scadenze per fornirti un preventivo personalizzato e senza impegno.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-4 rounded-full text-blue-700">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Telefono</h3>
                  <p className="text-slate-600">+39 333 146 9458</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-4 rounded-full text-blue-700">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email</h3>
                  <p className="text-slate-600">info@thesispro.it</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-4 rounded-full text-blue-700">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Sede Operativa</h3>
                  <p className="text-slate-600">Milano / Roma - Servizi disponibili in tutta Italia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Nome</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Cognome</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    value={formData.surname}
                    onChange={(e) => setFormData({...formData, surname: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Numero di Telefono</label>
                <input
                  required
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                <input
                  required
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">La tua richiesta</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  placeholder="Descrivi brevemente l'argomento della tesi o il servizio di cui hai bisogno..."
                  value={formData.request}
                  onChange={(e) => setFormData({...formData, request: e.target.value})}
                />
              </div>

              {error && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <p className="text-sm">Si è verificato un errore. Riprova o contattaci via WhatsApp.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center disabled:opacity-50"
              >
                {loading ? (
                  <><Loader2 className="animate-spin mr-2 h-5 w-5" /> Invio in corso...</>
                ) : (
                  <>Invia Messaggio <Send className="ml-2 h-5 w-5" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
