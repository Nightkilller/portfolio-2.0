// Data store for Aditya Gupta Portfolio

const PORTFOLIO_DATA = {
  profile: {
    name: "Aditya Gupta",
    title: "Multi-Disciplinary Creative",
    location: "Los Angeles, CA",
    tagline: "Specialized in brand design, visual identity, and creative direction.",
    bio: "Hey there! I'm Aditya, a multi-disciplinary creative specialized in brand design, visual identity, and creative direction.",
    email: "aditya@example.com",
    socials: [
      { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
      { name: "TikTok", url: "https://tiktok.com", icon: "video" },
      { name: "Newsletter", url: "#", icon: "mail" }
    ],
    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe Lightroom",
      "Adobe Premiere Pro",
      "Figma",
      "After Effects"
    ]
  },
  
  projects: [
    {
      id: "united-we-dance",
      title: "United We Dance",
      subtitle: "Talent-based touring event group bringing rave experiences across the United States.",
      category: "branding",
      categoryLabel: "Branding & Events",
      tags: ["Logo Design", "Visual Identity", "Event Fliers"],
      role: "Logo Design, Visual Identity, Event Fliers",
      tools: "Adobe Photoshop, Adobe Illustrator",
      year: "2024",
      gradient: "linear-gradient(135deg, #431259 0%, #170d30 50%, #082446 100%)",
      accentColor: "#9d4edd",
      description: "United We Dance (UWD) is a nationwide talent-based touring event group bringing immersive rave experiences to major cities across the USA. Aditya worked directly with UWD to engineer a complete visual refresh, establishing a futuristic graphic identity that captures the energy, pulse, and community spirit of electronic dance music culture.",
      deliverables: [
        "Brand Refresh & Identity System",
        "Custom Typography & Logotype",
        "Tour Poster & Flier Templates",
        "Social Media Media Assets"
      ],
      highlights: [
        { label: "Tour Cities", value: "20+" },
        { label: "Scope", value: "Full Visual Refresh" },
        { label: "Client", value: "UWD Touring" }
      ]
    },
    {
      id: "outmoon-angels",
      title: "Outmoon Angels",
      subtitle: "Bold and artistic clothing brand redefining sustainable fashion as 'artwear'.",
      category: "branding",
      categoryLabel: "Brand Identity",
      tags: ["Logo Design", "Visual Identity", "Brand Guidelines"],
      role: "Logo Design & Visual Identity",
      tools: "Adobe Photoshop, Adobe Illustrator",
      year: "2024",
      gradient: "linear-gradient(135deg, #5c1d39 0%, #2b0e1d 50%, #7d3326 100%)",
      accentColor: "#f72585",
      description: "Outmoon Angels is an avant-garde sustainable fashion label based in California that treats apparel as wearable art. The brand identity reflects inclusivity, raw self-expression, and eco-conscious craftsmanship. The visual language blends delicate high-fashion typography with raw edgy motifs.",
      deliverables: [
        "Logo Design & Brandmark",
        "Typography & Color Guidelines",
        "Apparel Tag & Packaging Design",
        "Brand Identity Handbook"
      ],
      highlights: [
        { label: "Industry", value: "Sustainable Fashion" },
        { label: "Style", value: "Artwear & Edgy" },
        { label: "Scope", value: "Identity & Guidelines" }
      ]
    },
    {
      id: "tea-bag-tea-house",
      title: "Tea Bag Tea House",
      subtitle: "Modern artisanal tea house combining heritage Asian tea culture with contemporary design.",
      category: "branding",
      categoryLabel: "Packaging & Identity",
      tags: ["Logo Design", "Visual Identity", "Packaging"],
      role: "Logo Design & Visual Brand Identity",
      tools: "Adobe Photoshop, Adobe Illustrator",
      year: "2024 (In Progress)",
      gradient: "linear-gradient(135deg, #1b4332 0%, #081c15 50%, #2d6a4f 100%)",
      accentColor: "#52b788",
      description: "Tea Bag Tea House reimagines traditional tea rituals for modern urban lifestyle. Aditya designed a clean, soothing brand identity that pairs minimalism with organic textures, crafting custom packaging concepts, tea tins, and storefront signage aesthetics.",
      deliverables: [
        "Custom Logo Mark & Seal",
        "Packaging Concept Mockups",
        "Menu & Collateral Layouts",
        "Storefront Visual Identity"
      ],
      highlights: [
        { label: "Status", value: "In Progress" },
        { label: "Focus", value: "Packaging & Identity" },
        { label: "Vibe", value: "Artisanal & Minimal" }
      ]
    },
    {
      id: "adonix",
      title: "ADONIX",
      subtitle: "Vietnamese-American electronic artist performing dark techno and melodic soundscapes.",
      category: "fliers",
      categoryLabel: "Media & Event Fliers",
      tags: ["Logo Design", "Flier Design", "Media Creation"],
      role: "Logo & Flier Design, Full-Stack Media Creation",
      tools: "Adobe Photoshop, Illustrator, Lightroom, Premiere",
      year: "2024",
      gradient: "linear-gradient(135deg, #111111 0%, #2a080c 50%, #590d19 100%)",
      accentColor: "#ff0054",
      description: "ADONIX is a rising electronic music producer and DJ in Southern California known for high-intensity dark techno sets. Aditya handles full-stack creative direction, designing high-contrast event fliers, stage visual graphics, logo marks, and promotional video teasers.",
      deliverables: [
        "Iconic Artist Logotype",
        "Show & Festival Fliers",
        "EP Cover Artwork Direction",
        "Social Video Teasers"
      ],
      highlights: [
        { label: "Genre", value: "Dark Techno / Melodic" },
        { label: "Region", value: "Southern California" },
        { label: "Role", value: "Creative Director" }
      ]
    },
    {
      id: "peaking-duck",
      title: "Peaking Duck",
      subtitle: "Los Angeles nightlife entertainment group creating thematic immersive events.",
      category: "creative-direction",
      categoryLabel: "Creative Direction",
      tags: ["Creative Direction", "Event Fliers", "Social Campaign"],
      role: "Creative Direction, Event Flier Design",
      tools: "Adobe Photoshop, Adobe Illustrator",
      year: "2024",
      gradient: "linear-gradient(135deg, #3d0c5a 0%, #15002b 50%, #7b1e3a 100%)",
      accentColor: "#ff70a6",
      description: "Peaking Duck produces high-energy themed party experiences across Los Angeles. Aditya assists in curating the visual theme for every event edition, translating the sonic atmosphere into vivid, eye-catching digital fliers and campaign assets.",
      deliverables: [
        "Themed Event Poster Series",
        "Motion Graphics Fliers",
        "Social Media Campaign Kit",
        "On-Site Visual Collateral"
      ],
      highlights: [
        { label: "Location", value: "Los Angeles, CA" },
        { label: "Events", value: "15+ Themed Shows" },
        { label: "Scope", value: "Visual Theme & Fliers" }
      ]
    }
  ],

  services: [
    {
      id: "branding",
      title: "Brand Strategy & Visual Identity",
      number: "01",
      icon: "✨",
      description: "Building cohesive, timeless brand identities from logo marks and color systems to comprehensive brand guidelines that define your market presence.",
      features: ["Custom Logotype & Brandmarks", "Brand Identity Guidelines", "Color & Typography Systems", "Business Collateral & Stationery"]
    },
    {
      id: "fliers",
      title: "Event Fliers & Digital Artwork",
      number: "02",
      icon: "🎨",
      description: "Crafting striking, high-converting digital posters and print fliers for music festivals, club events, artist releases, and promotional campaigns.",
      features: ["Digital & Print Poster Design", "Motion Fliers for Social Media", "Cover Art & Single Artwork", "Tour Announcement Assets"]
    },
    {
      id: "direction",
      title: "Creative Direction & Campaign Media",
      number: "03",
      icon: "💡",
      description: "Directing the visual narrative of your project, product launch, or event series to ensure every touchpoint resonates with your target audience.",
      features: ["Theme & Aesthetic Curation", "Content & Media Strategy", "Photography & Video Direction", "Campaign Launch Assets"]
    },
    {
      id: "packaging",
      title: "Packaging & Apparel Graphics",
      number: "04",
      icon: "👕",
      description: "Designing tactile packaging, apparel graphics, and merchandise concepts that turn physical goods into prized collector items.",
      features: ["Custom Packaging Mockups", "Apparel & Merch Graphics", "Hangtags & Labeling", "Product Launch Media"]
    }
  ]
};
