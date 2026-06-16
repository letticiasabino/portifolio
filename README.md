# Portfólio Lettícia Sabino

Portfólio profissional moderno e dinâmico, projetado com as melhores tecnologias do mercado para garantir alta performance, manutenção simplificada e uma experiência de usuário imersiva. Desenvolvido com **React, TypeScript, Tailwind CSS e Node.js**.

## 🎨 Design & Estética

- **Multi-Temas:** O projeto conta com dois layouts completamente diferentes que o usuário pode alternar a qualquer momento:
  - **Glass Layout (Padrão):** Design limpo e elegante inspirado em *Glassmorphism*, com efeitos de vidro translúcido, gradientes vibrantes e partículas de luz.
  - **Cyber/Hacker Layout:** Tema inspirado em terminais antigos, focado em desenvolvedores (Dark mode profundo, texto verde, scanlines e blocos estilo terminal).
- **Estilização:** Tailwind CSS (v4) para um design system consistente e moderno.
- **Animações:** Transições fluidas e micro-interações que enriquecem a experiência, além de um botão flutuante inteligente de "Voltar ao Topo".
- **Responsividade:** Layouts 100% responsivos, garantindo legibilidade e menus adaptáveis para dispositivos móveis, tablets e desktops.

## ⚙️ Principais Funcionalidades

- **Integração com API do GitHub:** Os projetos na seção de portfólio são puxados dinamicamente diretamente do GitHub em tempo real!
- **Navegação Dinâmica:** Roteamento de páginas instantâneo e suave no lado do cliente com React Router.
- **Contato Avançado:** Formulário de contato ligado a um servidor Backend próprio, que realiza o disparo real de e-mails via API HTTP (Resend). Inclui suporte para preenchimento de WhatsApp, gerando um link direto para chat no e-mail recebido.
- **Currículo Embutido:** Página dedicada e customizada para visualização e leitura do currículo profissional.

## 📁 Estrutura de Arquivos

O projeto é fullstack:

```text
portifolio/
├── frontend/       # Interface (React, Vite, TypeScript, Tailwind, Context API)
├── backend/        # API do servidor (Node.js, Express, Nodemailer)
└── README.md       # Este arquivo
```

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19 com Vite**
- **TypeScript**
- **Tailwind CSS v4**
- **React Router DOM**
- **Framer Motion** & Ícones (`lucide-react`, `react-icons`)

### Backend
- **Node.js & Express**
- **Resend SDK** (para gerenciar o envio de e-mails)
- **CORS & Dotenv**

## 💻 Como Executar Localmente

### Pré-requisitos
- Node.js instalado
- npm ou yarn

### 1. Configurando o Backend (API de Emails)

Abra um terminal e acesse a pasta do backend:
```bash
cd backend
npm install
```

Crie um arquivo `.env` na pasta `backend` utilizando o `.env.example` como base e preencha com sua `RESEND_API_KEY` (chave de API gratuita gerada no site do Resend) e o `RECEIVER_EMAIL` (seu email) para permitir o envio das mensagens do formulário.

Para iniciar o servidor backend (escutará na porta 3000):
```bash
npm start
```
*(ou rode `node server.js`)*

### 2. Configurando o Frontend

Em um novo terminal, acesse a pasta do frontend:
```bash
cd frontend
npm install
```

Para iniciar o servidor de desenvolvimento:
```bash
npm run dev
```
O portfólio estará acessível no seu navegador (geralmente em `http://localhost:5173`).

## ☁️ Deploy (Produção)

- **Frontend (Vercel):** Basta importar a pasta do GitHub na Vercel e configurar o *Root Directory* como `frontend`. Lembre-se de adicionar a variável de ambiente `VITE_API_URL` apontando para o seu link do backend em Produção.
- **Backend (Render):** Importe na plataforma Render, utilizando o Root Directory `backend`. Adicione as variáveis `RESEND_API_KEY` e `RECEIVER_EMAIL` nas configurações de *Environment*.

---

**Desenvolvido com ❤️ por Lettícia Sabino**
