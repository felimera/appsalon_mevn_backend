import {createTransport}from '../config/nodemailer.js'

export async function sendEmailVerification()
{
    const transporter=createTransport(
        'sandbox.smtp.mailtrap.io',
        2525,
        'd05bbbbd01027b',
        '10f366483fcbc6'
    );

    // Enviar el email
    const info=await transporter.sendMail({
        from:'AppSalon',
        to:'correo@correo.com',
        subject:'AppSalon - Confirma tu cuenta',
        text:'AppSalon - Confirma tu cuenta',
        html:'Probando email'
    });

    console.log('Mensaje enviado',info.messageId);
}

/* var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d05bbbbd01027b",
      pass: "10f366483fcbc6"
    }
  }); */