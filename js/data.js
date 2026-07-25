// Data store for Aditya Gupta Portfolio

const PORTFOLIO_DATA = {
  profile: {
    name: "Aditya Gupta",
    title: "Multi-Disciplinary Developer & Creative",
    location: "Los Angeles, CA",
    tagline: "Specialized in full-stack engineering, AI applications, brand identity, and creative direction.",
    bio: "Hey there! I'm Aditya, a multi-disciplinary creative specialized in brand design, visual identity, and creative direction.",
    email: "aditya@example.com",
    socials: [
      { name: "GitHub", url: "https://github.com/Nightkilller", icon: "code" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "user" },
      { name: "LeetCode", url: "https://leetcode.com", icon: "terminal" },
      { name: "Instagram", url: "https://instagram.com", icon: "camera" }
    ],
    education: [
      {
        degree: "B.S. in Computer Science & Engineering",
        institution: "University of California",
        year: "2021 — 2025",
        description: "Specialized in Artificial Intelligence, Full-Stack Software Engineering, Data Structures & Algorithms, and Computer Graphics."
      },
      {
        degree: "Full-Stack Software Architecture Certification",
        institution: "Tech Academy",
        year: "2023",
        description: "Advanced cloud architecture, microservices, GraphQL, and modern web frameworks."
      }
    ],
    tools: [
      "Figma",
      "Adobe Photoshop",
      "Xcode",
      "VS Code",
      "JavaScript / TypeScript",
      "React / Next.js",
      "Python / FastAPI",
      "C++ / Algorithms",
      "Git / GitHub Actions"
    ]
  },

  // 4 Front Page Desk Tool Cards (Figma, Photoshop, Xcode, VS Code) - Matching User Screenshot
  deskPolaroids: [
    {
      id: "desk-figma",
      title: "Figma",
      subtitle: "UI/UX & Visual Design Tool",
      categoryLabel: "Design Tool",
      gradient: "linear-gradient(135deg, #1e1e1e 0%, #121212 50%, #2a2a2a 100%)",
      accentColor: "#F24E1E",
      glowColor: "rgba(242, 78, 30, 0.45)",
      github: "https://figma.com",
      demo: "https://figma.com",
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 38 57"><path fill="#0ACF83" d="M19 57a9.5 9.5 0 0 1-9.5-9.5c0-5.247 4.253-9.5 9.5-9.5h9.5v9.5A9.5 9.5 0 0 1 19 57z"/><path fill="#A259FF" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5A9.5 9.5 0 0 1 0 47.5z"/><path fill="#F24E1E" d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z"/><path fill="#FF7262" d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z"/><path fill="#1ABCFE" d="M19 0h9.5a9.5 9.5 0 0 1 0 19H19V0z"/></svg>`,
      description: "Figma is Aditya's primary interface design tool for wireframing, high-fidelity UI design, component systems, and client prototypes.",
      usecase: "UI/UX component design systems, mobile app wireframes, and vector branding collateral.",
      deliverables: ["High-Fidelity UI Prototypes", "Design System Libraries", "Interactive Motion Specs", "Vector Asset Export"]
    },
    {
      id: "desk-photoshop",
      title: "Photoshop",
      subtitle: "Image, Poster & Graphic Editor",
      categoryLabel: "Graphic Editor",
      gradient: "linear-gradient(135deg, #001e36 0%, #001224 50%, #00335c 100%)",
      accentColor: "#31A8FF",
      glowColor: "rgba(49, 168, 255, 0.45)",
      github: "https://adobe.com/photoshop",
      demo: "https://adobe.com/photoshop",
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#31A8FF"><rect width="24" height="24" rx="5" fill="#001E36"/><path d="M4.5 16.5v-9h3.5c1.4 0 2.5.8 2.5 2.2 0 1.5-1.1 2.3-2.5 2.3h-1.5v4.5h-2zm2-6.2h1.3c.6 0 1.1-.3 1.1-1 0-.6-.5-.9-1.1-.9h-1.3v1.9zm7.2 6.3c-1.3 0-2.2-.6-2.5-1.4l1.6-.7c.2.4.5.7 1 .7.4 0 .7-.2.7-.5 0-.4-.4-.5-1.1-.8-1.2-.4-2-1-2-2.1 0-1.3 1.1-2.1 2.5-2.1 1.1 0 1.9.5 2.3 1.3l-1.5.7c-.2-.4-.5-.6-.8-.6-.3 0-.6.2-.6.4 0 .3.3.5 1 .7 1.3.4 2.1 1 2.1 2.2 0 1.4-1.1 2.2-2.7 2.2z" fill="#31A8FF"/></svg>`,
      description: "Adobe Photoshop is used for advanced photo manipulation, event poster graphics, texture composition, and branding mockups.",
      usecase: "High-resolution digital graphics, event poster series, photo retouching, and artwork compositing.",
      deliverables: ["Event Poster Series", "Digital Graphics & Fliers", "Photo Retouching", "Packaging Mockups"]
    },
    {
      id: "desk-xcode",
      title: "Xcode",
      subtitle: "iOS & macOS Native IDE",
      categoryLabel: "iOS & Mac IDE",
      gradient: "linear-gradient(135deg, #007acc 0%, #005999 50%, #003e66 100%)",
      accentColor: "#4cc9f0",
      glowColor: "rgba(76, 201, 240, 0.45)",
      github: "https://developer.apple.com/xcode/",
      demo: "https://developer.apple.com/xcode/",
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
      description: "Apple Xcode is the primary IDE for developing native iOS and macOS applications using Swift, SwiftUI, and CoreML APIs.",
      usecase: "Mobile iOS app engineering, macOS desktop applications, performance profiling, and App Store builds.",
      deliverables: ["SwiftUI iOS Applications", "Mac Desktop Utilities", "CoreML Model Integration", "App Store Publishing"]
    },
    {
      id: "desk-vscode",
      title: "VS Code",
      subtitle: "Code Editor & Full-Stack Environment",
      categoryLabel: "Code Editor",
      gradient: "linear-gradient(135deg, #0066b8 0%, #004b87 50%, #00335c 100%)",
      accentColor: "#007acc",
      glowColor: "rgba(0, 122, 204, 0.45)",
      github: "https://code.visualstudio.com",
      demo: "https://code.visualstudio.com",
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#ffffff"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.41-3.33a.997.997 0 0 0-1.354.14L.24 7.218a.998.998 0 0 0 .11 1.408l3.6 2.92-3.6 2.92a.998.998 0 0 0-.11 1.408l1.041 1.278a.997.997 0 0 0 1.354.14l4.41-3.33 9.46 8.63c.47.43 1.15.54 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 21.656V4.304a1.5 1.5 0 0 0-.85-1.377zM18 16.5l-5.5-4.5L18 7.5v9z"/></svg>`,
      description: "Visual Studio Code is Aditya's daily driver editor for full-stack JavaScript, TypeScript, Python, Next.js, and C++ development.",
      usecase: "Full-stack web application development, debugging, Git version control, and multi-language editing.",
      deliverables: ["Next.js & React Web Apps", "Python FastAPI Backends", "Custom Extensions & Tooling", "Git Workflows"]
    }
  ],

  // Work Showcase Grid Projects
  projects: [
    {
      id: "portfolio-2-0",
      title: "Portfolio 2.0",
      subtitle: "Interactive developer portfolio with cutting-mat desk grid, case study drawers, and winking SVG avatar.",
      category: "web",
      categoryLabel: "Web Engineering",
      tags: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      role: "Lead Full-Stack Developer & Designer",
      tools: "JavaScript, HTML5, CSS3, GSAP",
      year: "2024",
      gradient: "linear-gradient(135deg, #1f4337 0%, #163229 50%, #0d221b 100%)",
      accentColor: "#2ecc71",
      github: "https://github.com/Nightkilller/portfolio-2.0",
      demo: "http://localhost:8085",
      description: "Designed to showcase full-stack projects in an unforgettable interactive desk environment. Recreates a self-healing green grid cutting mat with polaroid cards, push pins, winking vector avatar, case study drawer, and booking inquiry workflows.",
      usecase: "Personal portfolio showcase for software engineering, design case studies, and client project booking inquiries.",
      deliverables: [
        "Interactive Cutting-Mat Grid Canvas",
        "Winking Hover Avatar Component",
        "Project Case Study Drawer",
        "Work With Me Booking Form Modal"
      ]
    },
    {
      id: "legalease",
      title: "LegalEase AI",
      subtitle: "NLP-powered platform simplifying complex legal contracts into plain-English summaries & risk scores.",
      category: "ai",
      categoryLabel: "AI & Full-Stack",
      tags: ["React", "Next.js", "Python", "FastAPI", "OpenAI"],
      role: "Full-Stack & AI Engineer",
      tools: "Next.js, Python, OpenAI API, TailwindCSS",
      year: "2024",
      gradient: "linear-gradient(135deg, #1a2a40 0%, #0f1826 50%, #294066 100%)",
      accentColor: "#4cc9f0",
      github: "https://github.com/Nightkilller/LegalEase",
      demo: "https://legalease-ai.vercel.app",
      description: "Enables non-lawyers and small business owners to upload NDAs, Terms of Service, and contracts to receive instant risk analysis, key clause extractions, and plain-English summaries using GPT-4 LLM pipelines.",
      usecase: "Automated legal document review, contract risk scoring, and clause translation for startups and freelancers.",
      deliverables: [
        "PDF Contract Parsing Pipeline",
        "Real-Time Clause Risk Analyzer",
        "Interactive Summary Dashboard",
        "Exportable PDF Reports"
      ]
    },
    {
      id: "datalakeguard",
      title: "DataLakeGuard",
      subtitle: "Automated data governance and PII detection framework for enterprise data lakes.",
      category: "data",
      categoryLabel: "Data Engineering",
      tags: ["Python", "PySpark", "Docker", "AWS S3"],
      role: "Backend & Data Engineer",
      tools: "Python, PySpark, Docker, AWS S3",
      year: "2024",
      gradient: "linear-gradient(135deg, #3d1225 0%, #1a0810 50%, #661f3e 100%)",
      accentColor: "#f72585",
      github: "https://github.com/Nightkilller/DataLakeGuard",
      demo: "https://datalakeguard.org",
      description: "Scans enterprise data streams in real time to detect, redact, and flag Sensitive Personally Identifiable Information (PII) before storage in cloud data lakes.",
      usecase: "Automated compliance (GDPR/CCPA) enforcement and PII redaction for big data pipelines.",
      deliverables: [
        "PySpark Streaming Scanner",
        "Regex & Machine Learning PII Detector",
        "Automated Redaction Engine",
        "AWS S3 Integration Plugin"
      ]
    },
    {
      id: "gitverse",
      title: "GitVerse Analytics",
      subtitle: "Visual analytics platform for GitHub repository contributions, commit velocity, and team metrics.",
      category: "web",
      categoryLabel: "Web Engineering",
      tags: ["Next.js", "TypeScript", "GraphQL", "Chart.js"],
      role: "Frontend Engineer",
      tools: "Next.js, TypeScript, GraphQL, Chart.js",
      year: "2024",
      gradient: "linear-gradient(135deg, #2b1f40 0%, #120c1d 50%, #48336b 100%)",
      accentColor: "#9d4edd",
      github: "https://github.com/Nightkilller/GitVerse",
      demo: "https://gitverse.dev",
      description: "Provides deep visual insights into open-source repository activity, contributor leaderboards, code churn statistics, and automated dependency health audits.",
      usecase: "Engineering team productivity analytics, repo health monitoring, and open-source contribution tracking.",
      deliverables: [
        "GitHub GraphQL API Integration",
        "Interactive Churn & Velocity Charts",
        "Contributor Leaderboard Module",
        "Dependency Health Score Engine"
      ]
    },
    {
      id: "flashy-ui",
      title: "Flashy UI System",
      subtitle: "Modern glassmorphism UI component library built for rapid web app prototyping.",
      category: "design",
      categoryLabel: "UI & Design System",
      tags: ["React", "TailwindCSS", "Storybook", "Framer Motion"],
      role: "Design System Architect",
      tools: "React, TailwindCSS, Storybook",
      year: "2024",
      gradient: "linear-gradient(135deg, #123330 0%, #081a18 50%, #1f5752 100%)",
      accentColor: "#52b788",
      github: "https://github.com/Nightkilller/FlashyUI",
      demo: "https://flashy-ui.lovable.app",
      description: "A comprehensive library of 40+ accessible, production-ready UI components featuring smooth glassmorphism effects, fluid micro-interactions, and dark mode tokens.",
      usecase: "Rapid UI prototyping for web applications requiring a high-end futuristic aesthetic.",
      deliverables: [
        "40+ Accessible React Components",
        "Interactive Storybook Documentation",
        "Custom TailwindCSS Design Tokens",
        "Dark Mode Theme Manager"
      ]
    },
    {
      id: "smart-route-ai",
      title: "Smart Route AI",
      subtitle: "Dynamic graph algorithm and machine learning pathfinding engine for dynamic traffic routing.",
      category: "ai",
      categoryLabel: "Algorithms & AI",
      tags: ["C++", "Python", "Graph Algorithms", "OpenCV"],
      role: "Systems & Algorithm Developer",
      tools: "C++, Python, NetworkX, OpenCV",
      year: "2024",
      gradient: "linear-gradient(135deg, #3d2b12 0%, #1a1208 50%, #66491f 100%)",
      accentColor: "#ffb703",
      github: "https://github.com/Nightkilller/SmartRouteAI",
      demo: "https://smartroute.ai",
      description: "Calculates optimal real-time travel routes by processing live camera feeds, road network graphs, weather hazards, and historical traffic congestion patterns.",
      usecase: "Autonomous vehicle path planning, logistics fleet dispatching, and dynamic urban traffic routing.",
      deliverables: [
        "A* & Dijkstra Graph Optimizer in C++",
        "OpenCV Live Traffic Density Analyzer",
        "Interactive Route Visualizer",
        "Real-Time Hazard Re-Routing Module"
      ]
    },
    {
      id: "united-we-dance",
      title: "United We Dance",
      subtitle: "Nationwide touring rave experience visual identity and event graphics refresh.",
      category: "design",
      categoryLabel: "Branding & Media",
      tags: ["Brand Identity", "Event Poster", "Typography"],
      role: "Brand Designer & Creative Director",
      tools: "Adobe Illustrator, Photoshop",
      year: "2024",
      gradient: "linear-gradient(135deg, #431259 0%, #170d30 50%, #082446 100%)",
      accentColor: "#9d4edd",
      github: "https://github.com/Nightkilller/united-we-dance",
      demo: "https://unitedwedance.com",
      description: "Re-envisioned graphic identity system for a 20+ city touring electronic music event group including custom logotype, poster series, and social media media assets.",
      usecase: "Touring event brand promotion, digital poster marketing, and stage visuals.",
      deliverables: [
        "Custom Logotype & Brand Refresh",
        "Tour Announcement Poster Series",
        "Social Media Campaign Kit",
        "On-Stage Video Loop Graphics"
      ]
    }
  ]
};
