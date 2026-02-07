// ============================================
// CONFIGURAÇÕES GLOBAIS
// ============================================

const GITHUB_USERNAME = 'letticiasabino';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeScrollAnimations();
    initializeFormHandling();
    fetchGitHubProjects();
    setCurrentYear();
});

// ============================================
// NAVEGAÇÃO
// ============================================

function initializeNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu mobile
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Scroll to top button
    const scrollTopBtn = document.getElementById('scrollTop');
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// ANIMAÇÕES AO SCROLL
// ============================================

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fade-in-up 0.6s ease-out forwards`;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos animáveis
    document.querySelectorAll('.project-card, .tech-category, .highlight-item').forEach(el => {
        observer.observe(el);
    });

    // Navbar background ao scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.borderBottomColor = 'rgba(168, 85, 247, 0.2)';
        } else {
            navbar.style.borderBottomColor = 'rgba(168, 85, 247, 0.1)';
        }
    });
}

// ============================================
// GITHUB API INTEGRATION
// ============================================

async function fetchGitHubProjects() {
    const container = document.getElementById('projectsContainer');

    try {
        const response = await fetch(GITHUB_API_URL);

        if (!response.ok) {
            throw new Error('Falha ao buscar repositórios do GitHub');
        }

        const repos = await response.json();

        // Filtrar repositórios públicos e não-forks
        const projects = repos
            .filter(repo => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 12); // Limitar a 12 projetos

        if (projects.length === 0) {
            container.innerHTML = '<p class="loading">Nenhum projeto encontrado</p>';
            return;
        }

        // Separar projetos destacados (com stars) dos outros
        const featured = projects.filter(p => p.stargazers_count > 0).slice(0, 2);
        const others = projects.filter(p => p.stargazers_count === 0 || featured.indexOf(p) === -1);

        let html = '';

        // Seção de projetos destacados
        if (featured.length > 0) {
            html += '<h3 style="grid-column: 1 / -1; font-size: 1.5rem; margin-bottom: 1.5rem; margin-top: 2rem;">Projetos Principais</h3>';
            featured.forEach((project, index) => {
                html += createProjectCard(project, index);
            });
        }

        // Seção de outros projetos
        if (others.length > 0) {
            html += '<h3 style="grid-column: 1 / -1; font-size: 1.5rem; margin-bottom: 1.5rem; margin-top: 3rem;">Outros Projetos</h3>';
            others.forEach((project, index) => {
                html += createProjectCard(project, index + featured.length);
            });
        }

        container.innerHTML = html;

        // Adicionar animações aos cards
        document.querySelectorAll('.project-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 50}ms`;
        });

    } catch (error) {
        console.error('Erro ao buscar projetos:', error);
        container.innerHTML = `
            <div class="loading" style="grid-column: 1 / -1;">
                <p>Erro ao carregar projetos. Tente novamente mais tarde.</p>
            </div>
        `;
    }
}

function createProjectCard(project, index) {
    const languageColor = getLanguageColor(project.language);
    const stars = project.stargazers_count > 0 ? `
        <div class="project-stars">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 10.26 24 10.35 17.77 16.01 19.91 24.29 12 18.76 4.09 24.29 6.23 16.01 0 10.35 8.91 10.26 12 2"></polygon>
            </svg>
            <span>${project.stargazers_count}</span>
        </div>
    ` : '';

    return `
        <div class="project-card" style="animation-delay: ${index * 50}ms">
            <div class="project-header">
                <div>
                    <h3 class="project-title">${escapeHtml(project.name)}</h3>
                    ${project.language ? `<span class="project-language">${escapeHtml(project.language)}</span>` : ''}
                </div>
                ${stars}
            </div>
            <p class="project-description">${escapeHtml(project.description || 'Sem descrição')}</p>
            <div class="project-footer">
                <a href="${project.html_url}" target="_blank" rel="noopener noreferrer" class="project-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Ver no GitHub
                </a>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--color-gray-600);">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </div>
        </div>
    `;
}

function getLanguageColor(language) {
    const colors = {
        'JavaScript': 'rgb(240, 219, 79)',
        'Python': 'rgb(53, 114, 165)',
        'HTML': 'rgb(240, 112, 56)',
        'CSS': 'rgb(86, 61, 124)',
    };
    return colors[language] || 'rgb(168, 85, 247)';
}

// ============================================
// FORM HANDLING
// ============================================

function initializeFormHandling() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const serviceType = document.getElementById('serviceType').value;
        const description = document.getElementById('description').value.trim();
        const budget = document.getElementById('budget').value;
        const deadline = document.getElementById('deadline').value;

        // Validação básica
        if (!name || !email || !serviceType || !description) {
            showNotification('Por favor, preencha todos os campos obrigatórios', 'error');
            return;
        }

        // Validar email
        if (!isValidEmail(email)) {
            showNotification('Por favor, insira um email válido', 'error');
            return;
        }

        // Criar mailto link
        const subject = `Novo Briefing: ${serviceType}`;
        const body = `
Nome: ${name}
Email: ${email}
Serviço: ${serviceType}
Orçamento: ${budget || 'Não especificado'}
Prazo: ${deadline || 'Não especificado'}

Descrição do Projeto:
${description}
        `.trim();

        const mailtoLink = `mailto:letticia@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Abrir cliente de email
        window.location.href = mailtoLink;

        // Limpar formulário
        form.reset();

        // Mostrar mensagem de sucesso
        showNotification('Formulário enviado! Você será redirecionado para seu email.', 'success');
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(239, 68, 68, 0.2)'};
        border: 1px solid ${type === 'success' ? 'rgba(168, 85, 247, 0.5)' : 'rgba(239, 68, 68, 0.5)'};
        color: ${type === 'success' ? 'rgb(168, 85, 247)' : 'rgb(239, 68, 68)'};
        border-radius: 0.65rem;
        font-size: 0.95rem;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;

    notification.textContent = message;
    document.body.appendChild(notification);

    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// UTILIDADES
// ============================================

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

function setCurrentYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ============================================
// ANIMAÇÕES ADICIONAIS (CSS-in-JS)
// ============================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    .menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(10px, 10px);
    }

    .menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }

    .menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
    }
`;
document.head.appendChild(style);

// ============================================
// SMOOTH SCROLL PARA LINKS INTERNOS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// ============================================
// PRELOAD DE IMAGENS
// ============================================

function preloadImages() {
    const images = [
        'https://private-us-east-1.manuscdn.com/sessionFile/dmQKgVD65IzIPMip3cQJ0N/sandbox/XCQB1j9squDOp4jDexjGIC_1770325916749_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZG1RS2dWRDY1SXpJUE1pcDNjUUowTi9zYW5kYm94L1hDUUIxajlzcXVET3A0akRleGpHSUNfMTc3MDMyNTkxNjc0OV9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CeyYf7O7O8O0tcmyPHq5sT93OWxvfWY7PG9TsxAWerc-8J~0cJU3V0Jmtw~YI9PNjMQYsJhwPdjCkbl4i~FTOtHpaCN-futr0~4HhtYWeHeLZc9iooslZT4XN5XKi7gEgu9cxzGcV9jc2gBb5CUwzSkCQMJSaHKJsXKTmsjt~oIZKZm5FOkUvnwJB9XNM84snsk8P-t5eSFij0FqLgEeLzwJBTzhX8JgGIPVaZK5vspxdrfBFeOV9UWRDKaRmUgtYhAwKCc0h1w-9ZEbN~vnlD95OX-14Hdk6uehWoUUFvhvzqf3k9edT5LzO6MNikreD-lH3Xw80pUqgDkxl~d3mQ__'
    ];

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

preloadImages();

console.log('Portfolio loaded successfully! 🚀');
