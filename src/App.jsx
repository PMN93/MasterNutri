import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";

const App = () => {

  const initMail = () => {
    emailjs.init({
      publicKey: 'cHdWlvjPky319zK0P',
    })
  }

  const sendEmail = () => {

    const parametros = {
      email_to:"pedro_mora_neto@hotmail.com"
    }

    emailjs.send("service_r32wq0g", "template_70kx7dq", parametros)
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
    })
    .catch((err) => {
      console.log("FAILED...", err);
    });
  };

  useEffect(() => {
    initMail();
  }, [])
  
  

  return (
    <div>
      <h1 onClick={sendEmail} style={{cursor:"pointer"}}>Send</h1>
    </div>
  );
};

export default App;
