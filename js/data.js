// Data store for Aditya Gupta Portfolio

const PORTFOLIO_DATA = {
  profile: {
    name: "Aditya Gupta",
    title: "Multi-Disciplinary Developer & Creative",
    location: "Los Angeles, CA",
    tagline: "Specialized in full-stack engineering, AI applications, brand identity, and creative direction.",
    bio: "Hey there! I'm Aditya, a multi-disciplinary developer and creative specialized in building modern web apps, AI tools, and visual identities.",
    email: "aditya@example.com",
    socials: [
      { name: "GitHub", url: "https://github.com/Nightkilller", icon: "code" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "user" },
      { name: "LeetCode", url: "https://leetcode.com", icon: "terminal" },
      { name: "Instagram", url: "https://instagram.com", icon: "camera" },
      { name: "Email", url: "mailto:aditya@example.com", icon: "mail" }
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
      "C++ / Data Structures",
      "Node.js / Express",
      "TailwindCSS / GSAP",
      "Git / GitHub Actions",
      "Adobe Illustrator & Photoshop"
    ]
  },
  
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
