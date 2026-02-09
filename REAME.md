# Portfólio Lettícia Sabino - HTML, CSS e JavaScript Puro

Portfólio profissional moderno com estética futurista (preto e roxo neon), desenvolvido em **HTML, CSS e JavaScript puro** com integração em tempo real com a API do GitHub.

## 🎨 Design & Estética

- **Tema:** Futurismo Neon Minimalista
- **Paleta de cores:** Preto profundo (`#0a0a0a`) + Roxo Neon (`#a855f7`)
- **Tipografia:** IBM Plex Mono (headlines) + Inter (body text)
- **Efeitos:** Glow neon, animações elegantes, transições suaves
- **Responsividade:** 100% responsivo (mobile, tablet, desktop)

## 📁 Estrutura de Arquivos

```
portfolio-letticia/
├── index.html      # Estrutura HTML semântica
├── styles.css      # Estilização com CSS puro
├── script.js       # Interatividade e integração GitHub API
└── README.md       # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir localmente no navegador
Simplesmente abra o arquivo `index.html` no seu navegador:
```bash
# No Linux/Mac
open index.html

# No Windows
start index.html
```

### Opção 2: Usar um servidor HTTP local

**Com Python 3:**
```bash
cd portfolio-letticia
python3 -m http.server 8000
# Acesse: http://localhost:8000
```

**Com Node.js (http-server):**
```bash
npm install -g http-server
cd portfolio-letticia
http-server
# Acesse: http://localhost:8080
```

## ✨ Funcionalidades

### 1. Navegação Responsiva
- Menu fixo no topo com "logo"
- Menu mobile com toggle button
- Links suaves para cada seção
- Scroll to top button no footer

### 2. Hero Section
- Headline impactante com gradiente neon
- Subtítulo profissional
- CTAs (Ver Projetos, Solicitar Serviço)
- Links sociais (GitHub, LinkedIn)
- Elemento visual abstrato
- Scroll indicator animado

### 3. Projetos (Integração GitHub)
- Busca automática de repositórios via GitHub API
- Exibição de nome, descrição, linguagem e stars
- Links diretos para GitHub
- Animações ao scroll
- Separação entre projetos destacados e outros

### 4. Tecnologias
- Categorias: Frontend, Backend, Banco de Dados, DevOps
- Lista de tecnologias com hover effects
- Métricas profissionais (experiência, projetos, linguagens)

### 5. Sobre
- Apresentação profissional
- Destaques com checkmarks
- Link para LinkedIn

### 6. Contato
- Formulário com validação
- Campos: Nome, Email, Tipo de Serviço, Descrição, Orçamento, Prazo
- Integração com mailto (abre cliente de email)
- Informações de contato e tempo de resposta

### 7. Footer
- Links rápidos
- Links sociais
- Copyright dinâmico
- Scroll to top button

## 🔧 Personalização

### Alterar dados do GitHub
Abra `script.js` e modifique:
```javascript
const GITHUB_USERNAME = 'seu-username-aqui';
```

### Alterar email de contato
Abra `index.html` e procure por:
```html
<a href="mailto:seu-email@exemplo.com">seu-email@exemplo.com</a>
```

E em `script.js`:
```javascript
window.location.href = `mailto:seu-email@exemplo.com?subject=...`;
```

### Alterar cores
Abra `styles.css` e modifique as variáveis CSS:
```css
:root {
    --color-purple: #a855f7;  /* Cor principal */
    --color-black: #0a0a0a;   /* Fundo */
    /* ... outras cores ... */
}
```

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints em:
- **Desktop:** 1024px+
- **Tablet:** 768px - 1023px
- **Mobile:** até 767px

## 🎯 Recursos Técnicos

### HTML
- Semântica correta com tags `<section>`, `<nav>`, `<footer>`
- Meta tags para SEO
- Acessibilidade com `aria-label`
- Estrutura limpa e bem organizada

### CSS
- CSS Grid e Flexbox para layouts
- Variáveis CSS para temas
- Animações keyframes
- Media queries para responsividade
- Efeitos neon com `box-shadow` e `text-shadow`

### JavaScript
- Fetch API para integração GitHub
- Event listeners para interatividade
- Intersection Observer para animações ao scroll
- Validação de formulário
- Manipulação do DOM

## 🔐 Segurança

- Escapamento de HTML para prevenir XSS
- Validação de email no cliente
- Sem dependências externas (exceto Google Fonts)
- API do GitHub é pública (sem token necessário)

## ⚡ Performance

- Sem frameworks pesados (React, Vue, etc.)
- Carregamento rápido de assets
- Preload de imagens
- CSS otimizado
- JavaScript minificável

## 🌐 Compatibilidade

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notas

- O formulário de contato usa `mailto:` para abrir o cliente de email padrão
- Para enviar emails automaticamente, você precisará de um backend (Node.js, PHP, etc.)
- A API do GitHub tem limite de 60 requisições por hora sem autenticação
- Imagens são carregadas de CDN externo


## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para customizar e usar como base para seu próprio portfólio.

---

**Desenvolvido com ❤️ em HTML, CSS e JavaScript puro por Lettícia Sabino**
