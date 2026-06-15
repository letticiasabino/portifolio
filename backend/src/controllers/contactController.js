import { sendEmail } from '../services/emailService.js';

export const handleContactForm = async (req, res) => {
  const { name, email, serviceType, description } = req.body;

  if (!name || !email || !serviceType || !description) {
    return res.status(400).json({ error: 'Todos os campos obrigatórios devem ser preenchidos.' });
  }

  try {
    await sendEmail({ name, email, serviceType, description });
    return res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Erro ao processar formulário de contato:', error);
    return res.status(500).json({ error: 'Erro ao enviar mensagem. Tente novamente mais tarde.' });
  }
};
