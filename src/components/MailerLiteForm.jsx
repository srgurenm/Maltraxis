import React from 'react';

const MailerLiteForm = () => {
  return (
    <div className="w-full flex justify-center">
      <iframe 
        src="https://preview.mailerlite.io/forms/2426215/189993732728161656/share" 
        width="100%" 
        height="400" 
        frameBorder="0" 
        scrolling="no" 
        title="Formulario de suscripción"
        className="max-w-md rounded-lg overflow-hidden"
      ></iframe>
    </div>
  );
};

export default MailerLiteForm;