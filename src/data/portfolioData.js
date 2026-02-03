// Portfolio Data - Centralized content for Meet Padhiyar's portfolio

export const personalInfo = {
    name: "Meet Padhiyar",
    role: "Flutter & Java Developer",
    headline: "Engineered for Performance. Built for Mobile.",
    email: "padhiarmeet00@gmail.com",
    linkedin: "https://linkedin.com/in/meet-padhiar",
    github: "https://github.com/padhiarmeet",
    twitter: "https://x.com/Meet_Padhiar00",
};

export const aboutMe = `I am a B.Tech Computer Science student at Darshan University with a passion for building scalable backends and intuitive mobile applications. I bridge the gap between complex logic and user-friendly interfaces.`;

export const skills = {
    mobile: {
        title: "Mobile",
        icon: "Smartphone",
        items: ["Flutter", "Dart", "GetX", "BloC", "SQLite", "Firebase"],
    },
    backend: {
        title: "Backend",
        icon: "Server",
        items: ["Java", "Spring Boot", "Node.js", "Express.js"],
    },
    frontend: {
        title: "Frontend",
        icon: "Layout",
        items: ["React.js", "HTML", "CSS", "Bootstrap"],
    },
    database: {
        title: "Database",
        icon: "Database",
        items: ["MS SQL", "MongoDB"],
    },
    tools: {
        title: "Tools",
        icon: "Wrench",
        items: ["Git", "Postman", "Data Structures & Algorithms"],
    },
};

export const currentlyLearning = {
    topic: "Spring Boot",
    details: "Advanced Patterns & Microservices",
    progress: 65,
};

export const projects = [
    {
        title: "Image Compressor & PDF Maker",
        tech: ["Dart", "Flutter", "GetX", "SQLite"],
        description: "Offline-first Android toolkit with batch compression , PDF generation and format conversion with support of Android widget and Matirial You theming.",
        link: "https://play.google.com/store/apps/details?id=com.meet.imagecompressor&pcampaignid=web_share", // Play Store Link Placeholder
        icon: "Image",
        image: "/alien-invasion-banner.png",
    },
    {
        title: "OpenSlot",
        tech: ["Next.js", "Spring boot", "Hybernet", "PostgreSQL",],
        description: "A centralized platform that streamlines campus logistics by digitizing facility booking (labs/halls), asset tracking, and maintenance requests for staff and students.",
        link: "https://github.com/padhiarmeet/Resource-Management", // Play Store Link Placeholder
        icon: "Image",
    },
    {
        title: "Real-Time Chat App",
        tech: ["Flutter", "Firebase", "Firebase Auth", "Bloc"],
        description: "Secure 1:1 messaging with sub-second sync, media sharing, notifications, and online/offline status support.",
        link: "https://github.com/padhiarmeet/Chat-Application",
        icon: "MessageCircle",
    },
    {
        title: "ML-Based-Personal-Finance-Optimizer",
        tech: ["Flutter", "Firebase", "MongoDB", "Node.js", "Python"],
        description: "A comprehensive financial management application with machine learning capabilities for bill scanning, spending analysis, and transaction predictions.",
        link: "https://github.com/hetbhalani/ML-Based-Personal-Finance-Optimizer",
        icon: "Gamepad2",
        image: "/personal-finance-banner.png",
    },
    {
        title: "Alien Invasion Game",
        tech: ["Python", "Pygame"],
        description: "Dynamic 2D arcade shooter with difficulty scaling.",
        link: "https://github.com/padhiarmeet/Alien-Invasion",
        icon: "Gamepad2",
        image: "/alien-invasion-banner.png",
    },
    {
        title: "Movie-Tracker-widget",
        tech: ["Dart", "Flutter", "Android"],
        description: "A modern, neobrutalist-styled Flutter application for tracking movie releases with a customizable Android home screen widget.",
        link: "https://github.com/padhiarmeet/Movie-Tracker-widget", // Play Store Link Placeholder
        icon: "Image",
        image: "/movie-tracker-banner.png",
    }
];

export const experience = [
    {
        title: "Flutter Teaching Assistant",
        company: "Darshan University",
        period: "2025 - Present",
        details: [
            "Mentored 120+ undergraduates in mobile development, conducting daily code reviews and enforcing best practices in Flutter, Dart, and State Management.",
            "Debugged complex runtime errors and logic issues in student projects, sharpening own skills in troubleshooting and asynchronous programming.",
        ],
    },
];

export const education = [
    {
        degree: "B.Tech in Computer Science",
        institution: "Darshan University (Rajkot)",
        period: "2023 - Present",
        cgpa: "8.6",
    },
    {
        degree: "Higher Secondary (12th Science)",
        institution: "Modi School (Rajkot)",
        period: "2021 - 2023",
    },
    {
        degree: "Secondary (10th)",
        institution: "Sigma Education Network (Porbandar)",
        period: "2020 - 2021",
    },
];

export const achievements = [
    {
        title: "CodeArena Hackathon: ML Personal Finance Optimizer",
        description: "Built a fully functional, production-ready application using Flutter and Machine Learning. Unlike typical hackathon prototypes, this app was deployed as a ready-to-use product capable of real-time budget optimization and expense tracking within the 24-hour deadline.",
        icon: "Trophy",
    },
];

export const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];
