import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './src/routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Backend está rodando' });
});

app.listen(PORT, () => {
  console.log(`Backend rodando na porta: ${PORT}`);
});
