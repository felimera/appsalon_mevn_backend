import { createTransport } from "../config/nodemailer.js";

export async function sendEmailNewAppointment({ date, time }) {
    const transporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS
    );

    // Enviar el email
    const info = await transporter.sendMail({
        from: "AppSalon <citas@appsalon.com>",
        to: 'admin@appsalon.com',
        subject: "AppSalon - Nueva Cita",
        text: "AppSalon - Nueva Cita",
        html: `<p>Hola: Admin, tienes una nueva cita</p>
        <p>La Cita será el dia : ${date} a las ${time} horas.</p>`
    });

    console.log("Mensaje enviado", info.messageId);
}
export async function sendEmailUpdateAppointment({ date, time }) {
    const transporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS
    );

    // Enviar el email
    const info = await transporter.sendMail({
        from: "AppSalon <citas@appsalon.com>",
        to: 'admin@appsalon.com',
        subject: "AppSalon - Cita Actualizada",
        text: "AppSalon - Cita Actualizada",
        html: `<p>Hola: Admin, un usuario a modificado una cita.</p>
        <p>La nueva cita será el dia : ${date} a las ${time} horas.</p>`
    });

    console.log("Mensaje enviado", info.messageId);
}
export async function sendEmailDeleteAppointment({ date, time }) {
    const transporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS
    );

    // Enviar el email
    const info = await transporter.sendMail({
        from: "AppSalon <citas@appsalon.com>",
        to: 'admin@appsalon.com',
        subject: "AppSalon - Cita Elimnada",
        text: "AppSalon - Cita Elimnada",
        html: `<p>Hola: Admin, un usuario a eliminada una cita.</p>
        <p>La cita elimnada era el dia : ${date} a las ${time} horas.</p>`
    });

    console.log("Mensaje enviado", info.messageId);
}