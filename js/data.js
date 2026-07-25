// Data store for Aditya Gupta Portfolio

const PORTFOLIO_DATA = {
  profile: {
    name: "Aditya Gupta",
    title: "Multi-Disciplinary Developer & Creative",
    location: "Bhopal, India",
    tagline: "Specialized in full-stack engineering, AI applications, and scalable software.",
    bio: "I'm Aditya Gupta, a Computer Science & Engineering student passionate about building AI-powered applications, full-stack web platforms, and scalable software. I enjoy solving real-world problems through clean code, modern technologies, and intuitive user experiences while continuously exploring AI, cloud computing, and open source.",
    email: "adityagupta.dev@gmail.com",
    socials: [
      { name: "GitHub", url: "https://github.com/Nightkilller", icon: "code" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "user" },
      { name: "LeetCode", url: "https://leetcode.com", icon: "terminal" },
      { name: "Instagram", url: "https://instagram.com", icon: "camera" }
    ],
    education: [
      {
        degree: "B.Tech in Computer Science & Engineering (CSE)",
        institution: "VIT Bhopal University",
        year: "2024 — 2028",
        description: "Specializing in Artificial Intelligence, Full-Stack Development, Data Structures & Algorithms, Machine Learning, Cloud Computing, and Software Engineering. Active in hackathons, open-source contributions, and real-world AI application development."
      },
      {
        degree: "Professional Learning & Technical Focus",
        institution: "Independent & Open-Source Development",
        year: "2024 — Present",
        description: "Focused on Full-Stack Development (React, Node.js, Express), Artificial Intelligence & Machine Learning, Flutter App Development, AWS Cloud Fundamentals, and Competitive Programming (LeetCode & Codeforces)."
      }
    ],
    tools: [
      "React / Next.js",
      "Flutter / Dart",
      "Python",
      "C++",
      "JavaScript / TypeScript",
      "Node.js / Express",
      "Git / GitHub",
      "AWS",
      "Firebase",
      "MongoDB",
      "MySQL",
      "Figma"
    ]
  },

  // 4 Desk Floating Logos — REAL official icons via Devicon CDN
  deskPolaroids: [
    {
      id: "desk-xcode",
      title: "Xcode",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg",
      accentColor: "#30b8ff",
      glowColor: "rgba(48, 184, 255, 0.55)",
      github: "https://developer.apple.com/xcode/",
      demo: "https://developer.apple.com/xcode/",
      description: "Apple Xcode is the primary IDE for developing native iOS and macOS applications using Swift, SwiftUI, and CoreML APIs.",
      usecase: "Mobile iOS app engineering, macOS desktop applications, performance profiling, and App Store builds.",
      deliverables: ["SwiftUI iOS Applications", "Mac Desktop Utilities", "CoreML Model Integration", "App Store Publishing"]
    },
    {
      id: "desk-python",
      title: "Python",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      accentColor: "#3776AB",
      glowColor: "rgba(55, 118, 171, 0.55)",
      github: "https://python.org",
      demo: "https://python.org",
      description: "Python is Aditya's go-to language for AI/ML pipelines, backend APIs with FastAPI, data engineering with PySpark, and automation scripting.",
      usecase: "AI model training, REST API development, data pipeline automation, and scripting utilities.",
      deliverables: ["FastAPI Backend Services", "ML Model Training Pipelines", "PySpark Data Processors", "Automation Scripts"]
    },
    {
      id: "desk-figma",
      title: "Figma",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      accentColor: "#F24E1E",
      glowColor: "rgba(242, 78, 30, 0.55)",
      github: "https://figma.com",
      demo: "https://figma.com",
      description: "Figma is Aditya's primary interface design tool for wireframing, high-fidelity UI design, component systems, and client prototypes.",
      usecase: "UI/UX component design systems, mobile app wireframes, and vector branding collateral.",
      deliverables: ["High-Fidelity UI Prototypes", "Design System Libraries", "Interactive Motion Specs", "Vector Asset Export"]
    },
    {
      id: "desk-github",
      title: "GitHub",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      accentColor: "#ffffff",
      glowColor: "rgba(255, 255, 255, 0.55)",
      github: "https://github.com/Nightkilller",
      demo: "https://github.com/Nightkilller",
      description: "Explore Aditya's full open-source portfolio, software engineering projects, repository activity, and code contributions on GitHub.",
      usecase: "Open-source software projects, codebase architecture, and public repository contributions.",
      deliverables: ["Full-Stack Repositories", "Open-Source Contributions", "Algorithm Implementations", "CI/CD Workflows"]
    },
    {
      id: "desk-docker",
      title: "Docker",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      accentColor: "#2496ED",
      glowColor: "rgba(36, 150, 237, 0.55)"
    },
    {
      id: "desk-firebase",
      title: "Firebase",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      accentColor: "#FFCA28",
      glowColor: "rgba(255, 202, 40, 0.55)"
    },
    {
      id: "desk-swift",
      title: "Swift",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
      accentColor: "#F05138",
      glowColor: "rgba(240, 81, 56, 0.55)"
    }
  ],

  // Main Showcase Projects (6 Repos)
  projects: [
    {
      id: "peakprep",
      title: "PeakPrep",
      subtitle: "Intelligent Review & AI-Powered Voice Interview Platform tailored to roles, experience levels, and system design.",
      category: "ai",
      categoryLabel: "AI & Voice Platform",
      tags: ["Next.js 15", "TypeScript", "Vapi AI", "GPT-4o", "Tailwind CSS"],
      role: "Lead Developer & AI Architect",
      tools: "Next.js 15, TypeScript, Vapi Voice AI, Excalidraw, Clerk, Docker",
      year: "2024",
      gradient: "linear-gradient(135deg, #0d3b66 0%, #001d3d 50%, #003566 100%)",
      accentColor: "#5dfeca",
      github: "https://github.com/Nightkilller/PeakPrep---Ai-Interviewer",
      demo: "https://peak-prep-ai-interviewer.vercel.app/",
      description: "PeakPrep is a modern web application leveraging cutting-edge voice AI agents (Vapi + GPT-4o) for realistic job interview practice. Features secure Clerk authentication, dynamic voice interview sessions, Excalidraw system design whiteboarding with AI vision critiques, ATS resume scoring, coding assessments, and ISRO/DRDO government internship discovery.",
      usecase: "Interactive voice interview simulation, system design architecture whiteboarding, ATS resume optimization, and competitive coding evaluation.",
      deliverables: [
        "Real-Time Vapi AI Voice Agent Integration",
        "System Design Whiteboarding with Vision Critique",
        "ATS Resume Parser & Scoring Engine",
        "Automated PDF Performance Analytics Reports"
      ]
    },
    {
      id: "echo",
      title: "ECHO",
      subtitle: "Glowing Agentic Voice Companion & Real-Time On-Screen Mentor for macOS.",
      category: "ai",
      categoryLabel: "macOS & Agentic AI",
      tags: ["SwiftUI", "AppKit", "Groq Llama-4", "Apple Speech", "ScreenCaptureKit"],
      role: "Creator & Native macOS Engineer",
      tools: "SwiftUI, AppKit, Apple Speech API, Groq Llama-4 Scout, Vision",
      year: "2024",
      gradient: "linear-gradient(135deg, #1d3557 0%, #03045e 50%, #0077b6 100%)",
      accentColor: "#00b4d8",
      github: "https://github.com/Nightkilller/ECHO",
      demo: "https://github.com/Nightkilller/ECHO",
      description: "Echo is an always-on visual AI companion living in the macOS menu bar. Triggered via global keyboard shortcut (Control + Option), Echo captures screen buffers, transcribes voice locally offline via Apple Speech framework, and flies along parabolic Bezier curves to point out UI buttons, open local directories, or execute window actions.",
      usecase: "Real-time on-screen interactive software tutoring, visual UI pointing, offline voice transcription, and agentic macOS window automation.",
      deliverables: [
        "Parabolic Bezier Flight & Animation Engine",
        "Offline Native Speech Recognition (Hindi/Hinglish/English)",
        "Circular Magnifying Lens Screen Overlay (1.3x)",
        "Agentic Finder & Accessibility OS Automation"
      ]
    },
    {
      id: "rooms",
      title: "ROOMS",
      subtitle: "Secure real-time text messaging, high-quality audio & video calling platform.",
      category: "web",
      categoryLabel: "Real-Time Web Platform",
      tags: ["React", "Vite", "Node.js", "Socket.io", "ZEGOCLOUD"],
      role: "Full-Stack Web Engineer",
      tools: "React, Vite, Node.js, Express, Socket.io, MongoDB, ZEGOCLOUD",
      year: "2024",
      gradient: "linear-gradient(135deg, #2b1e3a 0%, #150c21 50%, #4a2862 100%)",
      accentColor: "#a855f7",
      github: "https://github.com/Nightkilller/ROOMS",
      demo: "https://rooms-amber.vercel.app",
      description: "ROOMS is a secure, real-time private messaging and video calling web application. Built with React and Node.js, it features low-latency WebSockets messaging, ZEGOCLOUD audio/video calls, Firebase Auth, in-browser voice note recordings, and an admin dashboard.",
      usecase: "Encrypted private group communication, peer-to-peer video conferencing, and instant media sharing.",
      deliverables: [
        "Scalable Socket.io WebSocket Chat Engine",
        "ZEGOCLOUD Audio & Video Call Integration",
        "In-Browser Voice Note Recording & Media Sharing",
        "Admin Dashboard & Network Analytics"
      ]
    },
    {
      id: "noleaks",
      title: "NOLEAKS",
      subtitle: "Interactive Node.js CLI tool for secret scanning, git history audits, and .env validation.",
      category: "cli",
      categoryLabel: "DevSecOps CLI Tool",
      tags: ["Node.js", "CLI", "npm", "Git Security", "DevSecOps"],
      role: "Creator & Package Author",
      tools: "Node.js, Commander, Inquirer, Git API, npm",
      year: "2024",
      gradient: "linear-gradient(135deg, #1e3a29 0%, #0a1f13 50%, #2e593e 100%)",
      accentColor: "#2ecc71",
      github: "https://github.com/Nightkilller/NOLEAKS",
      demo: "https://www.npmjs.com/package/noleaks",
      description: "Published npm CLI package (`npx noleaks`) preventing leaked secrets and API keys before pushing code. Provides an interactive terminal matrix menu for checking missing `.env` keys, scanning AWS/GitHub secret patterns, auditing Git commit history, and scaffolding `.env.example` files.",
      usecase: "Pre-commit security scanning, API key leakage prevention, and automated repository secret remediation.",
      deliverables: [
        "Published Global npm Package (`npx noleaks`)",
        "Regex Secret Detection (AWS, RSA, Stripe, GitHub Tokens)",
        "Deep Git History Audit Engine",
        "Automated .env.example Scaffolding"
      ]
    },
    {
      id: "mandi-mitra",
      title: "MANDI-MITRA XAI",
      subtitle: "Explainable Agricultural Price Forecasting & Market Intelligence for farmers.",
      category: "ai",
      categoryLabel: "Explainable AI & AgriTech",
      tags: ["Python", "PyTorch", "SHAP", "FastAPI", "React"],
      role: "AI & Full-Stack Developer",
      tools: "PyTorch (LSTM), SHAP XAI, FastAPI, React, MongoDB, Open-Meteo",
      year: "2024",
      gradient: "linear-gradient(135deg, #3d2b12 0%, #1a1208 50%, #66491f 100%)",
      accentColor: "#ffb703",
      github: "https://github.com/Nightkilller/MANDI-MITRA",
      demo: "https://github.com/Nightkilller/MANDI-MITRA",
      description: "MandiMitra XAI is a full-stack Explainable AI platform built for farmers in Madhya Pradesh. It uses a PyTorch LSTM with Bahdanau attention for 14-day crop price forecasting across 10 districts, combined with SHAP explanations, a Sell vs. Store optimizer, and live weather-based harvest advice in Hindi and English.",
      usecase: "Predictive agricultural commodity pricing, SHAP transparent AI reasoning, and storage vs. sale optimization.",
      deliverables: [
        "14-Day PyTorch LSTM Price Forecasting Engine",
        "SHAP Transparent AI Explanation Layer",
        "Sell vs. Store Spoilage Optimizer",
        "Bilingual Hindi/English React Dashboard"
      ]
    },
    {
      id: "meetmind",
      title: "MeetMind",
      subtitle: "AI Meeting Intelligence Copilot — Groq Whisper transcription, Llama 3.3 summaries & Azure health scoring.",
      category: "ai",
      categoryLabel: "AI Productivity Platform",
      tags: ["Next.js 16", "Groq Whisper", "Llama 3.3 70B", "Azure AI", "MongoDB"],
      role: "Lead Full-Stack AI Engineer",
      tools: "Next.js 16, Groq Whisper V3, Groq Llama 3.3, Azure AI (GPT-4o), Clerk",
      year: "2024",
      gradient: "linear-gradient(135deg, #1b263b 0%, #0d1b2a 50%, #415a77 100%)",
      accentColor: "#00f5d4",
      github: "https://github.com/Nightkilller/MeetMind",
      demo: "https://meet-mind-bay.vercel.app",
      description: "Built for Microsoft Build AI Hackathon 2026. MeetMind records and transcribes meetings with Groq Whisper Large V3, analyzes meeting transcripts using Groq Llama 3.3 70B, extracts action items with priorities and due dates, calculates a Meeting Health Score via Azure AI (GPT-4o), and generates follow-up email drafts.",
      usecase: "Automated meeting transcription, AI action item extraction, meeting health analysis, and follow-up email generation.",
      deliverables: [
        "Real-Time Audio Transcription (Groq Whisper Large V3)",
        "Automated Action Items & Priority Extractor (Llama 3.3 70B)",
        "Azure AI GPT-4o Meeting Health Sentiment Score",
        "One-Click Follow-up Email Generator"
      ]
    }
  ],

  // Apps I Created Section (2 Repos)
  apps: [
    {
      id: "flashyyy",
      title: "Flashyyy",
      subtitle: "High-speed cross-platform P2P file transfer app over local network TLS sockets & UDP multicast discovery.",
      category: "apps",
      categoryLabel: "Mobile & Desktop App",
      tags: ["Flutter", "Dart", "Node.js", "TLS Sockets", "Ed25519"],
      role: "Creator & Mobile Architect",
      tools: "Flutter, Dart, Node.js, UDP Multicast, SQLite, Ed25519",
      year: "2024",
      gradient: "linear-gradient(135deg, #3a1c1c 0%, #1c0a0a 50%, #632424 100%)",
      accentColor: "#ff4d4d",
      github: "https://github.com/Nightkilller/Flashyyy",
      demo: "https://github.com/Nightkilller/Flashyyy",
      description: "Flashy is a secure, high-speed cross-platform peer-to-peer (P2P) file transfer app built with Flutter and Node.js. It features automatic UDP multicast LAN peer discovery, mutual Ed25519 cryptographic handshakes over direct TLS sockets, resumable chunk-based streaming (512KB chunks) with SHA-256 integrity, and multi-device trust syncing.",
      usecase: "High-speed offline file sharing across mobile and desktop without internet or cloud bandwidth limits.",
      deliverables: [
        "UDP Multicast LAN Peer Discovery Engine (`224.0.2.51`)",
        "Mutual Ed25519 Self-Signed TLS Handshake Protocol",
        "Resumable Chunk Streaming (512KB) with SHA-256 Integrity",
        "Cross-Platform Flutter Desktop & Mobile UI"
      ]
    },
    {
      id: "datalakeguardv2",
      title: "DataLake Guard v2.0",
      subtitle: "Offline biometric face recognition & active liveness anti-spoofing attendance system for NHAI.",
      category: "apps",
      categoryLabel: "Mobile & Edge AI App",
      tags: ["Flutter", "MobileFaceNet TFLite", "Apple Vision", "MLKit", "SQLite"],
      role: "Mobile AI Engineer",
      tools: "Flutter, MobileFaceNet TFLite (INT8), Apple Vision, Google MLKit, AWS REST",
      year: "2024",
      gradient: "linear-gradient(135deg, #1c2b36 0%, #0b151b 50%, #2e4758 100%)",
      accentColor: "#00b4d8",
      github: "https://github.com/Nightkilller/DataLakeGuardv2",
      demo: "https://youtube.com/shorts/qW0SuQdo5aQ?feature=share",
      description: "Built for NHAI Hackathon 7.0. A production-grade mobile app for 100% offline facial recognition and active liveness detection (blink + head turn anti-spoofing) in zero-network zones, automatically syncing records to AWS REST endpoints when internet connectivity is restored.",
      usecase: "Field personnel authentication, offline-first biometric attendance, and anti-spoofing liveness verification.",
      deliverables: [
        "MobileFaceNet INT8 Quantized Face Embedding Engine (~1.2MB)",
        "Native Platform Liveness Bridge (Apple Vision iOS + Google MLKit Android)",
        "Active Anti-Spoofing Challenge (Blink EAR + Euler Yaw Head Turn)",
        "Offline SQLite Encrypted Storage with Automated AWS Sync"
      ]
    }
  ]
};
