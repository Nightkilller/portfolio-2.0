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
      "JavaScript / TypeScript",
      "React / Next.js",
      "Python / FastAPI",
      "C++ / Xcode / Swift",
      "Node.js / Express",
      "TailwindCSS / GSAP",
      "Git / GitHub Actions",
      "Adobe Illustrator & Photoshop"
    ]
  },

  // 4 Front Page Desk Polaroids (GitHub, Xcode, LinkedIn, YouTube)
  deskPolaroids: [
    {
      id: "desk-github",
      title: "GitHub",
      subtitle: "Open-source repositories, commit history & code contributions.",
      categoryLabel: "GitHub Profile",
      gradient: "linear-gradient(135deg, #181717 0%, #0d0d0d 50%, #2b2b2b 100%)",
      accentColor: "#2ecc71",
      glowColor: "rgba(46, 204, 113, 0.4)",
      github: "https://github.com/Nightkilller",
      demo: "https://github.com/Nightkilller",
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="#ffffff"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
      description: "Explore Aditya's full open-source portfolio, software engineering projects, repository activity, and code contributions on GitHub.",
      usecase: "Open-source software projects, codebase architecture, and public repository contributions.",
      deliverables: ["Full-Stack Repositories", "Open-Source Contributions", "Algorithm Implementations", "CI/CD Workflows"]
    },
    {
      id: "desk-xcode",
      title: "Xcode",
      subtitle: "Native iOS & macOS app development using Swift, SwiftUI & Xcode.",
      categoryLabel: "iOS & Mac Development",
      gradient: "linear-gradient(135deg, #007acc 0%, #005999 50%, #003e66 100%)",
      accentColor: "#4cc9f0",
      glowColor: "rgba(76, 201, 240, 0.4)",
      github: "https://github.com/Nightkilller",
      demo: "https://developer.apple.com/xcode/",
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
      description: "Native iOS and macOS application development leveraging Swift, SwiftUI, Xcode, and Apple's CoreML & Metal graphics frameworks.",
      usecase: "Mobile applications, Mac desktop tools, performance optimization, and iOS design engineering.",
      deliverables: ["SwiftUI Apps", "CoreML Intelligence Integration", "Mac Desktop Utilities", "App Store Publishing"]
    },
    {
      id: "desk-linkedin",
      title: "LinkedIn",
      subtitle: "Professional developer network, industry experience & engineering background.",
      categoryLabel: "Professional Profile",
      gradient: "linear-gradient(135deg, #0a66c2 0%, #004182 50%, #002752 100%)",
      accentColor: "#38bdf8",
      glowColor: "rgba(56, 189, 248, 0.4)",
      github: "https://linkedin.com/in/adityagupta",
      demo: "https://linkedin.com/in/adityagupta",
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="#ffffff"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
      description: "Connect with Aditya Gupta on LinkedIn to view full professional engineering experience, career milestones, recommendations, and tech accomplishments.",
      usecase: "Professional networking, technical leadership, contract commissions, and career opportunities.",
      deliverables: ["Career Milestones", "Full Engineering Experience", "Industry Recommendations", "Professional Network"]
    },
    {
      id: "desk-youtube",
      title: "YouTube",
      subtitle: "Tech talks, live coding streams, software tutorials & project demos.",
      categoryLabel: "Videos & Tutorials",
      gradient: "linear-gradient(135deg, #cc0000 0%, #800000 50%, #400000 100%)",
      accentColor: "#ff4d4d",
      glowColor: "rgba(255, 77, 77, 0.4)",
      github: "https://youtube.com",
      demo: "https://youtube.com",
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="#ffffff"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
      description: "Watch video demos, architecture breakdowns, live coding tutorials, and technical talks on Aditya's YouTube channel.",
      usecase: "Software engineering video walk-throughs, UI/UX speed runs, and live project demos.",
      deliverables: ["Project Video Demos", "Live Coding Sessions", "Architecture Breakdown Talks", "Tutorial Series"]
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
