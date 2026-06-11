import React from 'react';

const MailerLiteForm = () => {
  return (
    <div className="w-full flex justify-center py-4">
      <a 
        href="https://preview.mailerlite.io/forms/2426215/189993732728161656/share" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-lg font-bold text-white bg-red-900 hover:bg-red-800 transition-all duration-300 shadow-[0_0_15px_rgba(153,27,27,0.4)]"
      >
        Suscribirse para recibir capítulos gratis
      </a>
    </div>
  );
};

export default MailerLiteForm;