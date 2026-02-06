
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import SecondaryServices from './pages/SecondaryServices';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import AntiplagioPolicy from './pages/AntiplagioPolicy';
import WhatsAppButton from './components/WhatsAppButton';
import { GraduationCap } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 text-white mb-6">
            <GraduationCap className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold">ThesisPro</span>
          </div>
          <p className="max-w-sm leading-relaxed">
            Esperti in consulenza accademica. Aiutiamo studenti di ogni facoltà a raggiungere il successo con serietà, professionalità e originalità garantita.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Link Rapidi</h4>
          <ul className="space-y-4">
            <li><a href="#/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#/servizi" className="hover:text-white transition-colors">Servizi Tesi</a></li>
            <li><a href="#/altri-servizi" className="hover:text-white transition-colors">Altri Servizi</a></li>
            <li><a href="#/contatto" className="hover:text-white transition-colors">Contattaci</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Legale</h4>
          <ul className="space-y-4">
            <li><a href="#/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#/termini" className="hover:text-white transition-colors">Termini e Condizioni</a></li>
            <li><a href="#/antiplagio" className="hover:text-white transition-colors">Policy Antiplagio</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} ThesisPro - P.IVA 02152530859. Tutti i diritti riservati.</p>
        <p className="mt-4 md:mt-0 italic">Eccellenza Accademica al tuo servizio.</p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servizi" element={<Services />} />
          <Route path="/altri-servizi" element={<SecondaryServices />} />
          <Route path="/contatto" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/termini" element={<Terms />} />
          <Route path="/antiplagio" element={<AntiplagioPolicy />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
