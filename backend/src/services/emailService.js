import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail', // ou o serviço que você utilizar
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async ({ name, email, serviceType, description }) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER, // Para onde o e-mail será enviado
    subject: `[Portfólio] Novo Contato de ${name} - ${serviceType}`,
    html: `
      <h2>Novo Briefing do Portfólio</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Tipo de Serviço:</strong> ${serviceType}</p>
      <p><strong>Descrição:</strong></p>
      <p>${description.replace(/\n/g, '<br>')}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
};
