# Portfólio Lettícia Sabino

Portfólio profissional moderno e dinâmico, reescrito com as melhores tecnologias do mercado para garantir alta performance, manutenção simplificada e uma experiência de usuário imersiva. Desenvolvido com **React, TypeScript, Tailwind CSS e Node.js**.

## 🎨 Design & Estética

- **Estilização:** Tailwind CSS para um design system consistente e moderno.
- **Ícones:** Lucide React & React Icons para uma iconografia elegante.
- **Animações:** Framer Motion para transições suaves e micro-interações que enriquecem a experiência.
- **Responsividade:** 100% responsivo, adaptando-se perfeitamente a dispositivos mobile, tablets e desktops.

## 📁 Estrutura de Arquivos

O projeto é fullstack:

```text
portifolio/
├── frontend/       # Interface do usuário (React, Vite, TypeScript, Tailwind)
├── backend/        # API do servidor para envio de emails (Node.js, Express, Nodemailer)
└── README.md       # Este arquivo
```

## 🚀 Tecnologias Utilizadas

### Frontend
- **Framework/Build Tool:** React 19 com Vite
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Roteamento:** React Router DOM
- **Animações:** Framer Motion

### Backend
- **Ambiente:** Node.js
- **Framework:** Express
- **Envio de Emails:** Nodemailer (recebe os contatos do frontend)
- **Segurança e Configuração:** CORS, dotenv

## ⚙️ Como Executar Localmente

### Pré-requisitos
- Node.js instalado
- npm ou yarn

### 1. Configurando o Backend (API de Emails)

Abra um terminal e acesse a pasta do backend:
```bash
cd backend
npm install
```

Crie um arquivo `.env` na pasta `backend` utilizando o `.env.example` como base e preencha com suas credenciais de email (Senha de App do Gmail) para permitir o envio das mensagens do formulário.

Para iniciar o servidor:
```bash
node server.js
```

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

## ✨ Principais Funcionalidades

- **Navegação Dinâmica:** Roteamento de páginas instantâneo e suave no lado do cliente com React Router.
- **Contato Direto & Formulário:** Informações de e-mail e redes sociais, além de um formulário que envia emails reais pelo backend.
- **Apresentação de Projetos e Skills:** Componentização moderna que facilita a adição contínua de novos trabalhos e habilidades.
- **Experiência Fluida:** Animações orquestradas via Framer Motion, elevando a qualidade percebida (feel) do portfólio.

## 📄 Licença

Este projeto é de uso pessoal e exibe o portfólio de Lettícia Sabino. Sinta-se à vontade para se inspirar na arquitetura e design para criar o seu próprio.

---

**Desenvolvido com ❤️ por Lettícia Sabino**
