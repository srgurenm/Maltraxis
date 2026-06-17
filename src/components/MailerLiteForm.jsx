import React, { useEffect } from 'react';

const MailerLiteForm = () => {
  useEffect(() => {
    // Carga el script universal de MailerLite
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
      .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
      n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
      (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
      ml('account', '2426215');
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full flex justify-center py-4">
      {/* MailerLite Form Embed */}
      <div className="ml-embedded" data-form="olRIIV"></div>
    </div>
  );
};

export default MailerLiteForm;
