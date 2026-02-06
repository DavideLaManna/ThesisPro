
import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getThesisAdvice } from '../services/gemini';

const MAX_QUESTIONS = 3;

const AIConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [questionsUsed, setQuestionsUsed] = useState(0);

  const handleConsult = async () => {
    if (!input.trim() || questionsUsed >= MAX_QUESTIONS) return;
    setLoading(true);
    const advice = await getThesisAdvice(input);
    setResult(advice);
    setQuestionsUsed(prev => prev + 1);
    setLoading(false);
  };

  const remaining = MAX_QUESTIONS - questionsUsed;
  const limitReached = remaining <= 0;

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

      {limitReached ? (
        <div className="text-center py-8 text-slate-500">
          <p className="font-semibold text-slate-700 mb-2">Hai esaurito le domande gratuite.</p>
          <p>Per ulteriore assistenza, <a href="#/contatto" className="text-blue-700 underline font-medium">contattaci direttamente</a>.</p>
        </div>
      ) : (
        <div className="flex flex-col space-y-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Inserisci il tuo argomento o area di interesse (es. Intelligenza Artificiale e Diritto)..."
            className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-32 outline-none"
          />
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">
              {remaining} domand{remaining === 1 ? 'a' : 'e'} rimanent{remaining === 1 ? 'e' : 'i'}
            </span>
            <button
              onClick={handleConsult}
              disabled={loading}
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-xl flex items-center transition-colors disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : <Send className="mr-2 h-5 w-5" />}
              Genera Suggerimenti
            </button>
          </div>
        </div>
      )}

      {result && (
        <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-100 whitespace-pre-wrap text-slate-700 leading-relaxed">
          {result}
        </div>
      )}
    </div>
  );
};

export default AIConsultant;
