import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ name, email, whatsapp, serviceType, description }) => {
  const cleanWhatsapp = whatsapp ? whatsapp.replace(/\D/g, '') : '';
  const whatsappLink = cleanWhatsapp ? `https://wa.me/${cleanWhatsapp.length <= 11 ? '55' + cleanWhatsapp : cleanWhatsapp}` : '';

  // Resend exige um domínio verificado ou o email de teste onboarding@resend.dev para enviar.
  // O email será enviado PARA o seu email cadastrado no Resend (RECEIVER_EMAIL).
  const mailOptions = {
    from: 'Acme <onboarding@resend.dev>',
    to: process.env.RECEIVER_EMAIL, 
    subject: `[Portfólio] Novo Contato de ${name} - ${serviceType}`,
    html: `
      <h2>Novo Briefing do Portfólio</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>WhatsApp:</strong> ${whatsapp ? `<a href="${whatsappLink}" target="_blank">${whatsapp}</a>` : 'Não informado'}</p>
      <p><strong>Tipo de Serviço:</strong> ${serviceType}</p>
      <p><strong>Descrição:</strong></p>
      <p>${description.replace(/\n/g, '<br>')}</p>
    `,
  };

  const { data, error } = await resend.emails.send(mailOptions);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
