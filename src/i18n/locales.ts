export type Locale = "en" | "pt-BR";

export const locales: Record<Locale, Record<string, string>> = {
  en: {
    // Nav
    "nav.projects": "./projects",
    "nav.skills": "./skills",
    "nav.experience": "./experience",
    "nav.contact": "$ hire --me",

    // Hero
    "hero.eyebrow": "Software Architect \u00B7 Available for Hire",
    "hero.title.1": "From ",
    "hero.title.h1": "legacy chaos",
    "hero.title.2": "\nto ",
    "hero.title.h2": "clean architecture",
    "hero.title.3": ".\nI make it happen.",
    "hero.sub":
      "6+ years turning complex enterprise problems into scalable, well-architected systems. I design distributed backends, secure API integrations, and modernize legacy platforms \u2014 with Java, Go, TypeScript, and AI-powered workflows.",
    "hero.btn.projects": "View Projects \u2192",
    "hero.btn.cv": "Download CV",

    // Terminal card
    "terminal.title": "~/yure/profile.ts",
    "terminal.comment": "// yure moutella",
    "terminal.role": '"Software Architect"',
    "terminal.exp": "6",
    "terminal.stack.1": '"Java"',
    "terminal.stack.2": '"TypeScript"',
    "terminal.stack.3": '"Go"',
    "terminal.stack.4": '"Python"',
    "terminal.available": "true",

    // Stats
    "stats.exp": "Experience",
    "stats.projects": "Enterprise Systems",
    "stats.integrations": "API Integrations",
    "stats.uptime": "System Uptime",

    // Sections
    "section.projects.label": "// selected work",
    "section.projects.title": "Featured Projects",
    "section.projects.seeAll": "View all on GitHub \u2192",
    "section.skills.label": "// expertise",
    "section.skills.title": "What I Do",
    "section.experience.label": "// work history",
    "section.experience.title": "Experience",

    // Projects
    "project.1.badge": "\u2605 Personal Project",
    "project.1.cat": "Full-Stack \u00B7 Cloud-Native",
    "project.1.name": "King-Poker",
    "project.1.desc": "Full-stack poker platform built with Go backend and React SPA frontend. Cloud-native deployment with clean architecture principles.",
    "project.2.cat": "Full-Stack \u00B7 Cloud-Native",
    "project.2.name": "ShortIt",
    "project.3.cat": "Coming Soon",
    "project.3.name": "Next Project",

    // Skills
    "skill.1.icon": "cloud-native",
    "skill.1.name": "Cloud-Native & GCP",
    "skill.1.desc":
      "Cloud-native architectures on Google Cloud Platform. Cloud Run, GKE, VM Instances, and serverless workloads. Scalable, resilient infrastructure with DDD and Clean Architecture.",
    "skill.2.icon": "backend",
    "skill.2.name": "Backend & APIs",
    "skill.2.desc":
      "RESTful and event-driven APIs in Java, Node.js, and Go. Microservices, Kafka, and MQTT.",
    "skill.3.icon": "integration",
    "skill.3.name": "Enterprise Integration",
    "skill.3.desc":
      "API-first integration patterns connecting modern services with legacy mainframe systems.",

    // Experience
    "exp.1.date": "2024 \u2014 Present",
    "exp.1.role": "Senior Software Engineer / Pega Engineer",
    "exp.1.company": "Capgemini \u00B7 Rio de Janeiro",
    "exp.1.desc":
      "Working for a national bank, dealing with corporative loan credit systems\nTechnically refining user stories for the team\nEvaluating business rules and end-user usability\nDeveloping features on cloud-native Pega Platform\nBuilding REST services with design patterns and best practices\nActively conducting code reviews to ensure quality",
    "exp.2.date": "2021 \u2014 2024",
    "exp.2.role": "Mid-Level Software Engineer",
    "exp.2.company": "Sistran \u00B7 Rio de Janeiro",
    "exp.2.desc":
      "Estimating development time for features\nActively participating in technical team decisions\nDeveloping backend services to integrate with legacy mainframe systems",
    "exp.3.date": "2018 \u2014 2021",
    "exp.3.role": "Junior Software Engineer",
    "exp.3.company": "Sistran \u00B7 Rio de Janeiro",
    "exp.3.desc":
      "Working for a major insurance company, creating new features and maintaining legacy systems\nDeveloping front-end features\nBuilding REST APIs for new projects",
    "exp.4.date": "2016 \u2014 2017",
    "exp.4.role": "Trainee Developer",
    "exp.4.company": "Lasf Inform\u00E1tica \u00B7 Rio de Janeiro",
    "exp.4.desc":
      "Developing new features for the company website",

    // CTA
    "cta.title.1": "Let's build something\n",
    "cta.title.2": "great together.",
    "cta.sub": "Open to full-time roles & freelance contracts.",
    "cta.btn": "$ git contact --yure",

    // Footer
    "footer.copy": "\u00A9 2025 Yure Moutella. Built with Next.js.",

    // Chat
    "chat.title": "Ask about Yure",
    "chat.placeholder": "Ask me anything about Yure...",
    "chat.send": "Send",
    "chat.greeting": "Hi! I can answer questions about Yure's experience, skills, and projects. What would you like to know?",

    // Language
    "lang.toggle": "PT-BR",
  },
  "pt-BR": {
    // Nav
    "nav.projects": "./projetos",
    "nav.skills": "./habilidades",
    "nav.experience": "./experiencia",
    "nav.contact": "$ hire --me",

    // Hero
    "hero.eyebrow": "Arquiteto de Software \u00B7 Dispon\u00EDvel para Contrata\u00E7\u00E3o",
    "hero.title.1": "Do ",
    "hero.title.h1": "caos legado",
    "hero.title.2": "\npara uma ",
    "hero.title.h2": "arquitetura limpa",
    "hero.title.3": ".\nEu fa\u00E7o acontecer.",
    "hero.sub":
      "6+ anos transformando problemas complexos em sistemas escal\u00E1veis e bem arquitetados. Projeto backends distribu\u00EDdos, integra\u00E7\u00F5es API seguras e modernizo plataformas legadas \u2014 com Java, Go, TypeScript e workflows com IA.",
    "hero.btn.projects": "Ver Projetos \u2192",
    "hero.btn.cv": "Baixar CV",

    // Terminal card
    "terminal.title": "~/yure/profile.ts",
    "terminal.comment": "// yure moutella",
    "terminal.role": '"Arquiteto de Software"',
    "terminal.exp": "6",
    "terminal.stack.1": '"Java"',
    "terminal.stack.2": '"TypeScript"',
    "terminal.stack.3": '"Go"',
    "terminal.stack.4": '"Python"',
    "terminal.available": "true",

    // Stats
    "stats.exp": "Experi\u00EAncia",
    "stats.projects": "Sistemas Enterprise",
    "stats.integrations": "Integra\u00E7\u00F5es API",
    "stats.uptime": "Uptime de Sistemas",

    // Sections
    "section.projects.label": "// trabalhos selecionados",
    "section.projects.title": "Projetos em Destaque",
    "section.projects.seeAll": "Ver todos no GitHub \u2192",
    "section.skills.label": "// especialidades",
    "section.skills.title": "O Que Eu Fa\u00E7o",
    "section.experience.label": "// hist\u00F3rico profissional",
    "section.experience.title": "Experi\u00EAncia",

    // Projects
    "project.1.badge": "\u2605 Projeto Pessoal",
    "project.1.cat": "Full-Stack \u00B7 Cloud-Native",
    "project.1.name": "King-Poker",
    "project.1.desc": "Plataforma de poker full-stack com backend em Go e frontend SPA em React. Deploy cloud-native com princ\u00EDpios de clean architecture.",
    "project.2.cat": "Full-Stack \u00B7 Cloud-Native",
    "project.2.name": "ShortIt",
    "project.3.cat": "Em Breve",
    "project.3.name": "Pr\u00F3ximo Projeto",

    // Skills
    "skill.1.icon": "cloud-native",
    "skill.1.name": "Cloud-Native & GCP",
    "skill.1.desc":
      "Arquiteturas cloud-native no Google Cloud Platform. Cloud Run, GKE, VM Instances e workloads serverless. Infraestrutura escal\u00E1vel e resiliente com DDD e Clean Architecture.",
    "skill.2.icon": "backend",
    "skill.2.name": "Backend & APIs",
    "skill.2.desc":
      "APIs RESTful e event-driven em Java, Node.js e Go. Microsservi\u00E7os, Kafka e MQTT.",
    "skill.3.icon": "integra\u00E7\u00E3o",
    "skill.3.name": "Integra\u00E7\u00E3o Enterprise",
    "skill.3.desc":
      "Padr\u00F5es de integra\u00E7\u00E3o API-first conectando servi\u00E7os modernos com sistemas legados mainframe.",

    // Experience
    "exp.1.date": "2024 \u2014 Presente",
    "exp.1.role": "Engenheiro de Software S\u00EAnior / Engenheiro Pega",
    "exp.1.company": "Capgemini \u00B7 Rio de Janeiro",
    "exp.1.desc":
      "Atuando para um banco nacional, lidando com sistemas de cr\u00E9dito corporativo\nRefinando tecnicamente user stories para o time\nAvaliando regras de neg\u00F3cio e usabilidade para o usu\u00E1rio final\nDesenvolvendo features na plataforma Pega cloud-native\nConstruindo servi\u00E7os REST com design patterns e boas pr\u00E1ticas\nConduzindo ativamente code reviews para garantir qualidade",
    "exp.2.date": "2021 \u2014 2024",
    "exp.2.role": "Engenheiro de Software Pleno",
    "exp.2.company": "Sistran \u00B7 Rio de Janeiro",
    "exp.2.desc":
      "Estimando tempo de desenvolvimento para features\nParticipando ativamente nas decis\u00F5es t\u00E9cnicas do time\nDesenvolvendo servi\u00E7os backend para integra\u00E7\u00E3o com sistemas legados mainframe",
    "exp.3.date": "2018 \u2014 2021",
    "exp.3.role": "Engenheiro de Software J\u00FAnior",
    "exp.3.company": "Sistran \u00B7 Rio de Janeiro",
    "exp.3.desc":
      "Atuando para uma grande seguradora, criando novas features e mantendo sistemas legados\nDesenvolvendo features front-end\nConstruindo APIs REST para novos projetos",
    "exp.4.date": "2016 \u2014 2017",
    "exp.4.role": "Desenvolvedor Estagi\u00E1rio",
    "exp.4.company": "Lasf Inform\u00E1tica \u00B7 Rio de Janeiro",
    "exp.4.desc":
      "Desenvolvendo novas features para o site da empresa",

    // CTA
    "cta.title.1": "Vamos construir algo\n",
    "cta.title.2": "incr\u00EDvel juntos.",
    "cta.sub": "Aberto a vagas CLT e contratos freelance.",
    "cta.btn": "$ git contact --yure",

    // Footer
    "footer.copy": "\u00A9 2025 Yure Moutella. Constru\u00EDdo com Next.js.",

    // Chat
    "chat.title": "Pergunte sobre o Yure",
    "chat.placeholder": "Pergunte qualquer coisa sobre o Yure...",
    "chat.send": "Enviar",
    "chat.greeting": "Ol\u00E1! Posso responder perguntas sobre a experi\u00EAncia, habilidades e projetos do Yure. O que voc\u00EA gostaria de saber?",

    // Language
    "lang.toggle": "EN",
  },
};
