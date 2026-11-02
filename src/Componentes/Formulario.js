import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Formulario () {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1lt83l2', 'template_qwcoojb', form.current, {
        publicKey: 'uQRcj_aEp1p0VWRLd',
      })
      .then(
        () => {
          form.current.reset(); // Limpia el formulario tras enviar
          alert('¡El mensaje se ha enviado con éxito!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        });
  };

  return (
    <>
    <form ref={form} onSubmit={sendEmail}>
      <label>Nombre</label>
      <input type="text" name="nombre" required />

      <label>Correo electrónico</label>
      <input type="email" name="email" required />

      <label>Mensaje</label>
      <textarea name="message" required />

      <button type="submit">Enviar</button>
    </form>
   </>
  );
}

export default Formulario;