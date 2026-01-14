export const DEFAULT_LANGUAGE = "pt";
export const SUPPORTED_LANGUAGES = ["pt", "en"];

const navigation = {
  pt: {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
  },
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
  },
};

const home = {
  pt: {
    subtitle: "Até Infinito e Além 🚀",
    projects: "Ver Projetos",
    contact: "Me contate",
  },
  en: {
    subtitle: "To infinity and beyond 🚀",
    projects: "See projects",
    contact: "Contact Me",
  },
};

const about = {
  pt: {
    title: "Sobre mim",
    subtitle:
      "Sou um jovem desenvolvedor estusiasta no mundo da programação e com um longo caminho a percorrer para alcançar meus objetivos. Minhas habilidades flutuam entre o front-end e o back-end, colocando-as em sinergia para criar aplicações e sistemas web. Minha vontade é de conseguir melhorar minhas capacidades ao maximo e me tornar o melhor de mim nos mais diversos aspectos. Atualmente cursando minha 2º pós graduação, dessa vez na PUC-RIO.",
    formationTitle: "Formação",
    formation1: "Pós Graduação em Desenvolvimento Full-Stack",
    formation2: "Graduação em Sistemas da Informação",
    experienceTitle: "Experiência",
    experience1: "Assistente de Dados I - Vix Logística (2025 - 2026)",
    role:
      "Desenvolvimento de sistemas para o auxílio e otimização dos processos dos funcionários da Vix Logística, e da Petrobras",
    courseTitle: "Cursos",
    course1: "Escola Técnica de Gwinnett (Curso de Inglês)",
    course2: "Brasas English Course",
    languages: [
      { name: "Português", level: 3 },
      { name: "Inglês", level: 2 },
    ],
    levels: ["Básico", "Intermediário", "Avançado", "Fluente"],
  },
  en: {
    title: "About Me",
    subtitle:
      "I am a young and enthusiastic developer in the world of programming, with a long journey ahead to achieve my goals. My skills range from front-end to back-end, combining both in synergy to create web applications and systems. My goal is to continuously improve my abilities to the fullest and become the best version of myself in every possible way. Currently pursuing my second postgraduate degree, In PUC-RIO this time.",
    formationTitle: "Education",
    formation1: "Postgraduate Certificate in Full-Stack Development",
    formation2: "BSc in Information Systems ",
    experienceTitle: "Experience",
    experience1: "Data Assistant I - Vix Logística (2025 - 2026)",
    role:
      "Development of internal systems aimed at supporting and optimizing the operational workflows of employees at Vix Logística and Petrobras.",
    courseTitle: "Courses",
    course1: "Gwinnett Technical College (English Course)",
    course2: "Brasas English Course",
    languages: [
      { name: "Portuguese", level: 3 },
      { name: "English", level: 2 },
    ],
    levels: ["Basic", "Intermediate", "Advanced", "Fluent"],
  },
};

const projectAssets = {
  gameCatalog: {
    technologies: ["ReactJS", "Python", "FastApi", "MySQL", "Docker"],
    url: "https://youtu.be/wUAtUlpYEI4",
  },
  financialReport: {
    technologies: ["Laravel", "ReactJS", "Tailwind", "MySQL"],
    url: "https://financialite.rolims.com",
  },
  staffManagement: {
    technologies: ["ReactJS", "Laravel", "MySQL"],
    images: {
      pt: [
        "/danreby-portifolio/img/Efetivo/pt/1.jpeg",
        "/danreby-portifolio/img/Efetivo/pt/2.jpeg",
        "/danreby-portifolio/img/Efetivo/pt/3.jpeg",
        "/danreby-portifolio/img/Efetivo/pt/4.jpeg",
        "/danreby-portifolio/img/Efetivo/pt/5.jpeg",
        "/danreby-portifolio/img/Efetivo/pt/6.jpeg",
        "/danreby-portifolio/img/Efetivo/pt/7.jpeg",
        "/danreby-portifolio/img/Efetivo/pt/8.jpeg",
        "/danreby-portifolio/img/Efetivo/pt/9.jpeg",
        "/danreby-portifolio/img/Efetivo/pt/10.jpeg",
        "/danreby-portifolio/img/Efetivo/pt/11.jpeg",
        "/danreby-portifolio/img/Efetivo/pt/12.jpeg",
      ],
      en: [
        "/danreby-portifolio/img/Efetivo/en/1.jpg",
        "/danreby-portifolio/img/Efetivo/en/2.jpg",
        "/danreby-portifolio/img/Efetivo/en/3.jpg",
        "/danreby-portifolio/img/Efetivo/en/4.jpg",
        "/danreby-portifolio/img/Efetivo/en/5.jpg",
        "/danreby-portifolio/img/Efetivo/en/6.jpg",
        "/danreby-portifolio/img/Efetivo/en/7.jpg",
        "/danreby-portifolio/img/Efetivo/en/8.jpg",
        "/danreby-portifolio/img/Efetivo/en/9.jpg",
        "/danreby-portifolio/img/Efetivo/en/10.jpg",
        "/danreby-portifolio/img/Efetivo/en/11.jpg",
        "/danreby-portifolio/img/Efetivo/en/12.jpg",
      ],
    },
  },
  evaluation: {
    technologies: ["Filament", "Laravel", "MySQL"],
  },
};

const projectCopy = {
  pt: {
    gameCatalog: {
      title: "Catálogo de Jogos",
      description:
        "Um catálogo de jogos para o gerênciamento e organização de jogos pessoais. Desenvolvido como projeto acadêmico para a conclusão do modulo de Back-End Avançado em minha 2º pós-graduação na PUC-RIO",
    },
    financialReport: {
      title: "Relatório de finanças",
      description:
        "Um site para gerênciamento de finanças pessoais. O projeto foi feito pensando inteiramente para o uso pessoal com o intuito de registrar as despesas e gerar um relatório sobre os gastos",
    },
    staffManagement: {
      title: "Sistema de Efetivos",
      description:
        "Um sistema para o gerenciamento dos efetivos da Vix Logística, feito para o gerenciamento e monitoramento das informações necessárias para a administração dos funcionários da empresa.",
    },
    evaluation: {
      title: "Sistema de Avaliações",
      description:
        "Um sistema de avaliações de serviços prestados de uma empresa terceirizada da Petrobras, com o intuito de ajudar no processo de avaliações de funcionários.",
    },
  },
  en: {
    gameCatalog: {
      title: "Game Catalog",
      description:
        "A games catalog for managing and organizing a personal game collection. Developed as an academic project to complete the Advanced Back-End module of my second postgraduate program at PUC-Rio.",
    },
    financialReport: {
      title: "Financial Report System",
      description:
        "A website for managing personal finances. The project was created entirely for personal use with the aim of recording expenses and generating reports on spending.",
    },
    staffManagement: {
      title: "Staff Management System",
      description:
        "A system for managing Vix Logística's staff, built to manage and monitor essential information for employee administration within the company.",
    },
    evaluation: {
      title: "Evaluation System",
      description:
        "A service evaluation system for a Petrobras subcontractor, aimed at streamlining the employee evaluation process.",
    },
  },
};

const buildProjectList = (locale) => {
  const copy = projectCopy[locale] || projectCopy[DEFAULT_LANGUAGE];

  return Object.entries(projectAssets).map(([key, asset]) => {
    const projectText = copy[key] || {};
    const localizedImages = asset.images
      ? asset.images[locale] || asset.images[DEFAULT_LANGUAGE] || []
      : undefined;

    return {
      ...asset,
      ...projectText,
      ...(localizedImages ? { images: localizedImages } : {}),
    };
  });
};

const projects = {
  pt: {
    title: "Projetos",
    projects: buildProjectList("pt"),
  },
  en: {
    title: "Projects",
    projects: buildProjectList("en"),
  },
};

const contact = {
  pt: {
    title: "Entre em Contato",
    name: "Seu Nome",
    email: "example@gmail.com",
    message: "Sua Mensagem",
    send: "Enviar",
    sending: "Enviando...",
    sent: "Mensagem enviada com sucesso!",
    error: "Erro ao enviar a mensagem. Tente novamente mais tarde.",
  },
  en: {
    title: "Get in Touch",
    name: "Your Name",
    email: "example@hotmail.com",
    message: "Your Message",
    send: "Send",
    sending: "Sending...",
    sent: "Message sent successfully!",
    error: "Error sending message. Try again later.",
  },
};

const findMe = {
  pt: {
    title: "Encontre-me nas redes",
  },
  en: {
    title: "Find me on the webs",
  },
};

export const translations = {
  pt: {
    navigation: navigation.pt,
    home: home.pt,
    about: about.pt,
    projects: projects.pt,
    contact: contact.pt,
    findMe: findMe.pt,
  },
  en: {
    navigation: navigation.en,
    home: home.en,
    about: about.en,
    projects: projects.en,
    contact: contact.en,
    findMe: findMe.en,
  },
};

Object.freeze(translations);
