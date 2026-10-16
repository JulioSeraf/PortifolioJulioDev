const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
const translations = {
    es: {
        pageTitle: "Julio | Desarrollador Web",
        navHome: "Inicio",
        navAbout: "Sobre mí",
        navProjects: "Proyectos",
        navContact: "Contacto",
        heroTitle: "Hola, soy Julio.",
        heroDescription: "Desarrollador web junior apasionado por crear experiencias digitales.",
        heroButton: "Ver mis proyectos",
        aboutTitle: "Sobre mí",
        aboutDescription: "Estoy estudiando Desarrollo de Aplicaciones Web y me gusta crear páginas web modernas, funcionales y adaptables.",
        skillsTitle: "Mis habilidades",
        projectsTitle: "Mis proyectos",
        contactTitle: "Contacto",
        contactDescription: "¿Tienes una propuesta o quieres trabajar conmigo? ¡Hablemos!",
        contactButton: "Envíame un email"
    },

    pt: {
        pageTitle: "Julio | Desenvolvedor Web",
        navHome: "Início",
        navAbout: "Sobre mim",
        navProjects: "Projetos",
        navContact: "Contato",
        heroTitle: "Olá, sou o Julio.",
        heroDescription: "Desenvolvedor web júnior apaixonado por criar experiências digitais.",
        heroButton: "Ver meus projetos",
        aboutTitle: "Sobre mim",
        aboutDescription: "Estou estudando Desenvolvimento de Aplicações Web e gosto de criar sites modernos, funcionais e responsivos.",
        skillsTitle: "Minhas habilidades",
        projectsTitle: "Meus projetos",
        contactTitle: "Contato",
        contactDescription: "Tem uma proposta ou quer trabalhar comigo? Vamos conversar!",
        contactButton: "Envie-me um email"
    },

    en: {
        pageTitle: "Julio | Web Developer",
        navHome: "Home",
        navAbout: "About me",
        navProjects: "Projects",
        navContact: "Contact",
        heroTitle: "Hi, I'm Julio.",
        heroDescription: "Junior web developer passionate about creating digital experiences.",
        heroButton: "View my projects",
        aboutTitle: "About me",
        aboutDescription: "I'm studying Web Application Development and enjoy building modern, functional, and responsive websites.",
        skillsTitle: "My skills",
        projectsTitle: "My projects",
        contactTitle: "Contact",
        contactDescription: "Have a project in mind or want to work together? Let's talk!",
        contactButton: "Send me an email"
    }
};

function changeLanguage(language) {
    const selectedTranslations = translations[language];

    if (!selectedTranslations) return;

    // Traduzir todos os elementos com data-i18n
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (selectedTranslations[key]) {
            element.textContent = selectedTranslations[key];
        }
    });

    // Atualizar o título e o idioma do documento
    document.title = selectedTranslations.pageTitle;
    document.documentElement.lang = language;

    // Atualizar o botão ativo
    document.querySelectorAll(".lang-btn").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.lang === language
        );
    });

    // Guardar o idioma escolhido
    localStorage.setItem("portfolioLanguage", language);
}

// Adicionar eventos aos botões
document.querySelectorAll(".lang-btn").forEach(button => {
    button.addEventListener("click", () => {
        changeLanguage(button.dataset.lang);
    });
});

// Restaurar o idioma guardado ou usar espanhol por padrão
const savedLanguage = localStorage.getItem("portfolioLanguage") || "es";
changeLanguage(savedLanguage);