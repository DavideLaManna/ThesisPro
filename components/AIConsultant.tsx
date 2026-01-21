
import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getThesisAdvice } from '../services/gemini';

const AIConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConsult = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const advice = await getThesisAdvice(input);
    setResult(advice);
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100 max-w-2xl mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-blue-100 p-2 rounded-lg text-blue-700">
          <Sparkles className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Consulente AI Tesi</h3>
          <p className="text-sm text-slate-500">Ottieni suggerimenti immediati su titoli e strutture.</p>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Inserisci il tuo argomento o area di interesse (es. Intelligenza Artificiale e Diritto)..."
          className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-32 outline-none"
        />
        <button
          onClick={handleConsult}
          disabled={loading}
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center transition-colors disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin mr-2" /> : <Send className="mr-2 h-5 w-5" />}
          Genera Suggerimenti
        </button>
      </div>

      {result && (
        <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-100 whitespace-pre-wrap text-slate-700 leading-relaxed">
          {result}
        </div>
      )}
    </div>
  );
};

export default AIConsultant;
