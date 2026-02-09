# Portfólio — Lettícia Sabino

> Portfólio estático desenvolvido com HTML, CSS e JavaScript puro. Layout responsivo com estética neon, seção de projetos integrada à API pública do GitHub e formulário de contato via `mailto:`.

## Estrutura do projeto

```
portifolio/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Como abrir (rápido)

- Abra `index.html` diretamente no navegador.
- Ou rode um servidor local (recomendado):

Com Python 3:

```bash
cd portifolio
python -m http.server 8000
# Acesse: http://localhost:8000
```

Com Node.js (http-server):

```bash
npm install -g http-server
http-server
# Acesse: http://localhost:8080
```

## Personalização rápida

- Alterar usuário do GitHub: edite `script.js` e atualize a constante do usuário.
- Alterar cores e tema: edite `style.css` (variáveis :root).
- Alterar email de contato: atualize o `mailto:` em `index.html` e em `script.js` se houver redirecionamento.

## Notas úteis

- A integração com a API do GitHub usa chamadas públicas — limite de 60 requisições por hora sem autenticação.
- O formulário usa `mailto:` (abre o e-mail do cliente). Para envio automático é necessário um backend.

## Contato

- GitHub: https://github.com/letticiasabino
- LinkedIn: https://linkedin.com/in/letticiasabino
- Email: letticiasabinoc@gmail.com

---

Projeto criado com HTML, CSS e JavaScript — sinta-se à vontade para adaptar.
