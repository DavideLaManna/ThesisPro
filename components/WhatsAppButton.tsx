
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/393331469458?text=Salve,%20vorrei%20informazioni%20sui%20vostri%20servizi%20tesi.', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 z-50 flex items-center justify-center animate-bounce"
      aria-label="Contattaci su WhatsApp"
    >
      <MessageCircle className="h-8 w-8 fill-current" />
    </button>
  );
};

export default WhatsAppButton;
