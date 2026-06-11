import React, { useEffect } from 'react';

const MailerLiteForm = () => {
  useEffect(() => {
    // Cargamos el script de forma segura fuera de React
    const script = document.createElement('script');
    script.src = 'https://groot.mailerlite.com/js/w/webforms.min.js?v83147fa8ce2d95cb73ece7f28b469519';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpiamos al desmontar
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: `
      <style type="text/css">@import url("https://assets.mlcdn.com/fonts.css?version=1781173");</style>
      <style type="text/css">
        .ml-form-embedSubmitLoad { display: inline-block; width: 20px; height: 20px; }
        .g-recaptcha { transform: scale(1); -webkit-transform: scale(1); transform-origin: 0 0; -webkit-transform-origin: 0 0; height: auto; }
        .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }
        .ml-form-embedSubmitLoad:after { content: " "; display: block; width: 11px; height: 11px; margin: 1px; border-radius: 50%; border: 4px solid #fff; border-color: #ffffff #ffffff #ffffff transparent; animation: ml-form-embedSubmitLoad 1.2s linear infinite; }
        @keyframes ml-form-embedSubmitLoad { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        #mlb2-42494069.ml-form-embedContainer { box-sizing: border-box; display: table; margin: 0 auto; position: static; width: 100% !important; }
        #mlb2-42494069.ml-form-embedContainer h4, #mlb2-42494069.ml-form-embedContainer p, #mlb2-42494069.ml-form-embedContainer span, #mlb2-42494069.ml-form-embedContainer button { text-transform: none !important; letter-spacing: normal !important; }
        #mlb2-42494069.ml-form-embedContainer .ml-form-embedWrapper { background-color: #5f1313; border-width: 0px; border-color: transparent; border-radius: 4px; border-style: solid; box-sizing: border-box; display: inline-block !important; margin: 0; padding: 0; position: relative; }
        #mlb2-42494069.ml-form-embedContainer .ml-form-embedWrapper.embedForm { max-width: 400px; width: 100%; }
        #mlb2-42494069.ml-form-embedContainer .ml-form-embedBody .ml-form-embedContent { text-align: left; margin: 0 0 20px 0; }
        #mlb2-42494069.ml-form-embedContainer .ml-form-embedBody .ml-form-embedContent h4 { color: #ffffff; font-family: 'Open Sans', Arial, Helvetica, sans-serif; font-size: 30px; font-weight: 400; margin: 0 0 10px 0; text-align: left; }
        #mlb2-42494069.ml-form-embedContainer .ml-form-embedBody .ml-form-embedContent p { color: #f5f5f5; font-family: 'Open Sans', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; margin: 0 0 10px 0; text-align: left; }
        #mlb2-42494069.ml-form-embedContainer .ml-form-fieldRow input { background-color: #ffffff !important; color: #333333 !important; border-radius: 4px !important; padding: 10px !important; width: 100% !important; box-sizing: border-box !important; }
        #mlb2-42494069.ml-form-embedContainer .ml-form-embedSubmit button { background-color: #000000 !important; border: none !important; border-radius: 4px !important; color: #ffffff !important; padding: 10px !important; width: 100% !important; box-sizing: border-box !important; font-weight: bold; cursor: pointer; }
        #mlb2-42494069.ml-form-embedContainer .ml-form-embedSubmit button:hover { background-color: #333333 !important; }
      </style>
      <div id="mlb2-42494069" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-42494069">
        <div class="ml-form-align-center">
          <div class="ml-form-embedWrapper embedForm">
            <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
              <div class="ml-form-embedContent">
                <h4>Suscríbete</h4>
                <p>Recibe contenido exclusivo gratis.</p>
              </div>
              <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/2426215/forms/189993732728161656/subscribe" method="post" target="_blank">
                <div class="ml-form-formContent">
                  <div class="ml-form-fieldRow ml-last-item">
                    <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                      <label>Email</label>
                      <input aria-label="email" aria-required="true" type="email" class="form-control" name="fields[email]" placeholder="" autocomplete="email" required>
                    </div>
                  </div>
                </div>
                <input type="hidden" name="ml-submit" value="1">
                <div class="ml-form-embedSubmit">
                  <button type="submit" class="primary">Suscribirse</button>
                </div>
                <input type="hidden" name="anticsrf" value="true">
              </form>
            </div>
            <div class="ml-form-successBody row-success" style="display: none">
              <div class="ml-form-successContent">
                <h4>¡Gracias!</h4>
                <p>Te has suscrito correctamente.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ` }} />
  );
};

export default MailerLiteForm;