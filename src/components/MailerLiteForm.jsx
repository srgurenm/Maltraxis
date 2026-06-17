import React, { useEffect } from 'react';

const MailerLiteForm = ({ t }) => {
  useEffect(() => {
    // Carga el script de MailerLite dinámicamente
    const script = document.createElement('script');
    script.src = "https://groot.mailerlite.com/js/w/webforms.min.js?v83147fa8ce2d95cb73ece7f28b469519";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpieza si el componente se desmonta
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="mlb2-42494069" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-42494069">
      <div className="ml-form-align-center">
        <div className="ml-form-embedWrapper embedForm" style={{ maxWidth: '400px', width: '100%' }}>
          <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
            <div className="ml-form-embedContent" style={{ textAlign: 'left', marginBottom: '20px' }}>
              <h4 style={{ color: '#ffffff', fontSize: '30px', fontWeight: '400', marginBottom: '10px' }}>{t.form_titulo}</h4>
              <p style={{ color: '#f5f5f5', fontSize: '14px' }}>{t.form_desc}</p>
            </div>

            <form className="ml-block-form" action="https://assets.mailerlite.com/jsonp/2426215/forms/189993732728161656/subscribe" data-code="" method="post" target="_blank">
              <div className="ml-form-formContent">
                <div className="ml-form-fieldRow ml-last-item">
                  <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                    <label style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Email</label>
                    <input aria-label="email" aria-required="true" type="email" className="form-control" name="fields[email]" placeholder={t.form_email} autocomplete="email" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                  </div>
                </div>
              </div>
              <input type="hidden" name="ml-submit" value="1" />
              <div className="ml-form-embedSubmit">
                <button type="submit" className="w-full bg-red-900 hover:bg-red-800 text-white py-3 rounded font-bold">{t.form_enviar}</button>
              </div>
              <input type="hidden" name="anticsrf" value="true" />
            </form>
          </div>
          <div className="ml-form-successBody row-success" style={{ display: 'none', padding: '20px' }}>
            <div className="ml-form-successContent" style={{ textAlign: 'left' }}>
              <h4 style={{ color: '#ffffff', fontSize: '30px' }}>Thank you!</h4>
              <p style={{ color: '#f5f5f5' }}>You have successfully joined our subscriber list.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailerLiteForm;
