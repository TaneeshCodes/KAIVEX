/**
 * Kaivex Content Data
 * All copy lives here as structured data.
 * PLACEHOLDER values are explicitly annotated and rendered with visible '00' or dummy markers.
 */

export const CONTACT_EMAIL = "hello@kaivex.com";
export const CALENDAR_URL = ""; /* PLACEHOLDER: Provide your Calendly/Cal.com link here; hidden when empty */

export const SERVICE_IMAGE_PATHS = {
  leadManagement: "/services/lead-management.webp",
  website: "/services/website.webp",
  app: "/services/app.webp",
  aiMl: "/services/ai-ml.webp",
  saas: "/services/saas.webp",
  computerVision: "/services/computer-vision.webp"
};

export const SERVICES_DATA = {
  eyebrow: "WHAT WE DO",
  h2: "SERVICES THAT GROW YOUR BUSINESS",
  paragraph: "Stop juggling agencies for design, development and AI. Kaivex plans, builds and launches your software under one roof, so you spend less time coordinating and more time growing",
  ctaButton: "START A PROJECT",
  services: [
    {
      id: "lead-management",
      number: "01",
      title: "LEAD MANAGEMENT",
      descriptor: "Capture, score and nurture every lead",
      bullets: [
        "Capture from web, WhatsApp and email",
        "Scoring and auto-assignment",
        "Dashboards and follow-up reminders"
      ],
      tags: ["CRM", "Automation"],
      serviceKey: "Lead Management",
      hue: 215,
      imageSrc: SERVICE_IMAGE_PATHS.leadManagement,
      alt: "3D illustration of a glass funnel collecting glowing lead icons"
    },
    {
      id: "website",
      number: "02",
      title: "WEBSITE DEVELOPMENT",
      descriptor: "Fast, responsive websites that convert",
      bullets: [
        "Design to launch",
        "SEO and page speed",
        "CMS and integrations"
      ],
      tags: ["Web", "SEO"],
      serviceKey: "Website",
      hue: 200,
      imageSrc: SERVICE_IMAGE_PATHS.website,
      alt: "3D illustration of a browser window with a dashboard layout"
    },
    {
      id: "app",
      number: "03",
      title: "APP DEVELOPMENT",
      descriptor: "iOS, Android and cross-platform apps",
      bullets: [
        "Product design and prototyping",
        "Native and cross-platform builds",
        "Store launch and updates"
      ],
      tags: ["Mobile", "Cross-platform"],
      serviceKey: "App",
      hue: 235,
      imageSrc: SERVICE_IMAGE_PATHS.app,
      alt: "3D illustration of a smartphone with app icons"
    },
    {
      id: "ai-ml",
      number: "04",
      title: "AI / ML",
      descriptor: "Custom models and smart automation",
      bullets: [
        "Chatbots and assistants",
        "Prediction and recommendations",
        "Document and data automation"
      ],
      tags: ["AI", "Automation"],
      serviceKey: "AI / ML",
      hue: 150,
      imageSrc: SERVICE_IMAGE_PATHS.aiMl,
      alt: "3D illustration of a glowing AI microchip network"
    },
    {
      id: "saas",
      number: "05",
      title: "SAAS",
      descriptor: "Cloud products built end to end",
      bullets: [
        "Multi-tenant architecture",
        "Billing and onboarding",
        "Scaling and monitoring"
      ],
      tags: ["Cloud", "Product"],
      serviceKey: "SaaS",
      hue: 190,
      imageSrc: SERVICE_IMAGE_PATHS.saas,
      alt: "3D illustration of a cloud connected to servers"
    },
    {
      id: "computer-vision",
      number: "06",
      title: "COMPUTER VISION",
      descriptor: "Image and video intelligence",
      bullets: [
        "Object detection and tracking",
        "Quality inspection",
        "Real-time video analytics"
      ],
      tags: ["Vision", "Edge"],
      serviceKey: "Computer Vision",
      hue: 330,
      imageSrc: SERVICE_IMAGE_PATHS.computerVision,
      alt: "3D illustration of an AI vision inspection camera system"
    }
  ],
  footerRow: {
    prompt: "Not sure what you need?",
    actionText: "Talk to us"
  }
};

export const WORK_DATA = {
  eyebrow: "Client work",
  h2: "Projects we’ve built with our clients",
  filterChips: ["All", "Websites", "Apps", "AI / ML", "SaaS", "Vision"],
  projects: [
    {
      id: "project-one",
      name: "Project One", /* PLACEHOLDER */
      client: "Client 01", /* PLACEHOLDER */
      industry: "Fintech", /* PLACEHOLDER */
      category: "SaaS",
      outcome: "Cloud infrastructure supporting 00x user scale", /* PLACEHOLDER */
      tags: ["SaaS", "Cloud"],
      hue: 210,
      metric: "00%", /* PLACEHOLDER */
      imageUrl: "/work/project-1.png",
      gradient: "from-emerald-500/75 via-teal-700/75 to-emerald-950/85",
      cssGradient: "linear-gradient(to top, rgba(2, 44, 34, 0.96) 0%, rgba(13, 148, 136, 0.75) 50%, rgba(16, 185, 129, 0.55) 100%)",
      challenge: "Legacy transactional systems suffered severe latency during market peaks, dropping customer requests under high load.", /* PLACEHOLDER */
      whatWeBuilt: "Engineered a low-latency event-driven microservices architecture with elastic compute pools and automated ledger reconciliation.", /* PLACEHOLDER */
      result: "Achieved 00% reduction in API response time and sustained 00,000 requests per second with zero transaction failures.", /* PLACEHOLDER */
      techStack: ["React", "Node.js", "AWS", "PostgreSQL", "Redis"],
      testimonial: {
        quote: "Kaivex delivered a reliable platform on schedule without cutting corners on code quality.", /* PLACEHOLDER */
        author: "Engineering Director", /* PLACEHOLDER */
        role: "Client 01" /* PLACEHOLDER */
      }
    },
    {
      id: "project-two",
      name: "Project Two", /* PLACEHOLDER */
      client: "Client 02", /* PLACEHOLDER */
      industry: "Healthcare", /* PLACEHOLDER */
      category: "AI / ML",
      outcome: "Automated triage model trained on private datasets", /* PLACEHOLDER */
      tags: ["AI / ML", "Automation"],
      hue: 275,
      metric: "00%", /* PLACEHOLDER */
      imageUrl: "/work/project-2.png",
      gradient: "from-slate-800/85 via-slate-900/85 to-slate-950/90",
      cssGradient: "linear-gradient(to top, rgba(2, 6, 23, 0.96) 0%, rgba(30, 41, 59, 0.8) 50%, rgba(51, 65, 85, 0.6) 100%)",
      challenge: "Clinical staff spent 00+ hours per week manually categorizing complex medical intake forms and lab summaries.", /* PLACEHOLDER */
      whatWeBuilt: "Developed a HIPAA-compliant NLP extraction pipeline paired with human-in-the-loop review interfaces and instant routing.", /* PLACEHOLDER */
      result: "Reduced case intake wait time by 00% while maintaining 00.0% classification precision across test cohorts.", /* PLACEHOLDER */
      techStack: ["Python", "PyTorch", "FastAPI", "Next.js", "Docker"],
      testimonial: {
        quote: "The automated classification workflow cut hours off our daily operational backlog.", /* PLACEHOLDER */
        author: "Head of Operations", /* PLACEHOLDER */
        role: "Client 02" /* PLACEHOLDER */
      }
    },
    {
      id: "project-three",
      name: "Project Three", /* PLACEHOLDER */
      client: "Client 03", /* PLACEHOLDER */
      industry: "E-Commerce", /* PLACEHOLDER */
      category: "Websites",
      outcome: "High-performance storefront with sub-second page loads", /* PLACEHOLDER */
      tags: ["Websites", "Web", "SEO", "E-Commerce"],
      hue: 195,
      metric: "00%", /* PLACEHOLDER */
      imageUrl: "/work/project-3.png",
      gradient: "from-amber-500/75 via-orange-600/75 to-amber-950/85",
      cssGradient: "linear-gradient(to top, rgba(69, 26, 3, 0.96) 0%, rgba(234, 88, 12, 0.75) 50%, rgba(245, 158, 11, 0.55) 100%)",
      challenge: "Slow mobile page performance drove high bounce rates and constrained organic search rankings across international regions.", /* PLACEHOLDER */
      whatWeBuilt: "Designed and launched an edge-rendered headless web application with aggressive image optimization and instant page transitions.", /* PLACEHOLDER */
      result: "Generated a 00% lift in mobile checkout completion and earned a sustained 00/100 Core Web Vitals score.", /* PLACEHOLDER */
      techStack: ["Next.js", "TypeScript", "TailwindCSS", "Edge CDN"],
      testimonial: {
        quote: "Our mobile conversion rate climbed immediately after deploying the edge storefront.", /* PLACEHOLDER */
        author: "VP of Growth", /* PLACEHOLDER */
        role: "Client 03" /* PLACEHOLDER */
      }
    },
    {
      id: "project-four",
      name: "Project Four", /* PLACEHOLDER */
      client: "Client 04", /* PLACEHOLDER */
      industry: "Logistics", /* PLACEHOLDER */
      category: "Apps",
      outcome: "Cross-platform driver dispatch and offline navigation", /* PLACEHOLDER */
      tags: ["Apps", "Mobile", "Cross-platform", "Logistics"],
      hue: 240,
      metric: "00%", /* PLACEHOLDER */
      imageUrl: "/work/project-4.png",
      gradient: "from-sky-400/75 via-cyan-600/75 to-teal-950/85",
      cssGradient: "linear-gradient(to top, rgba(4, 47, 46, 0.96) 0%, rgba(8, 145, 178, 0.75) 50%, rgba(56, 189, 248, 0.55) 100%)",
      challenge: "Field personnel required reliable route synchronization and proof-of-delivery in regions with intermittent cellular signal.", /* PLACEHOLDER */
      whatWeBuilt: "Built an offline-first mobile application featuring local state reconciliation, background telematics and barcode scanning.", /* PLACEHOLDER */
      result: "Eliminated 00% of delivery sync errors and improved driver route adherence across 00 regional hubs.", /* PLACEHOLDER */
      techStack: ["Flutter", "Dart", "PostgreSQL", "Google Cloud"],
      testimonial: {
        quote: "Our dispatch drivers rely on the app daily even in areas with zero cell connectivity.", /* PLACEHOLDER */
        author: "Fleet Operations Manager", /* PLACEHOLDER */
        role: "Client 04" /* PLACEHOLDER */
      }
    },
    {
      id: "project-five",
      name: "Project Five", /* PLACEHOLDER */
      client: "Client 05", /* PLACEHOLDER */
      industry: "Manufacturing", /* PLACEHOLDER */
      category: "Vision",
      outcome: "Edge-deployed optical defect detection on conveyor lines", /* PLACEHOLDER */
      tags: ["Vision", "Edge"],
      hue: 340,
      metric: "00%", /* PLACEHOLDER */
      imageUrl: "/work/project-5.png",
      gradient: "from-rose-500/75 via-red-600/75 to-rose-950/85",
      cssGradient: "linear-gradient(to top, rgba(76, 5, 25, 0.96) 0%, rgba(225, 29, 72, 0.75) 50%, rgba(244, 63, 94, 0.55) 100%)",
      challenge: "Manual inspection lines struggled to identify micro-surface fissures at high production line throughput.", /* PLACEHOLDER */
      whatWeBuilt: "Deployed high-speed camera stations running real-time edge computer vision models with automated pneumatic rejection triggers.", /* PLACEHOLDER */
      result: "Achieved 00.0% surface anomaly detection accuracy at 000 parts per minute with zero line slowdown.", /* PLACEHOLDER */
      techStack: ["Python", "OpenCV", "TensorFlow", "Edge Hardware"],
      testimonial: {
        quote: "The optical defect inspection system saved thousands of dollars in scrapped assembly batches.", /* PLACEHOLDER */
        author: "Quality Engineering Lead", /* PLACEHOLDER */
        role: "Client 05" /* PLACEHOLDER */
      }
    },
    {
      id: "project-six",
      name: "Project Six", /* PLACEHOLDER */
      client: "Client 06", /* PLACEHOLDER */
      industry: "B2B SaaS", /* PLACEHOLDER */
      category: "SaaS",
      outcome: "Multi-tenant lead enrichment and automated scoring", /* PLACEHOLDER */
      tags: ["SaaS", "Automation"],
      hue: 160,
      metric: "00%", /* PLACEHOLDER */
      imageUrl: "/work/project-6.png",
      gradient: "from-blue-500/75 via-indigo-600/75 to-purple-950/85",
      cssGradient: "linear-gradient(to top, rgba(30, 27, 75, 0.96) 0%, rgba(79, 70, 229, 0.75) 50%, rgba(59, 130, 246, 0.55) 100%)",
      challenge: "Sales operations teams lost hours weekly copying and matching lead records across disconnected CRM instances.", /* PLACEHOLDER */
      whatWeBuilt: "Engineered a unified ingestion webhook engine that enriches lead records in real-time and routes high-intent deals.", /* PLACEHOLDER */
      result: "Automated 00% of pipeline qualification and saved over 00 hours of manual rep administrative effort monthly.", /* PLACEHOLDER */
      techStack: ["Node.js", "React", "PostgreSQL", "Kafka"],
      testimonial: {
        quote: "Our outbound team now spends their time closing rather than doing repetitive data entry.", /* PLACEHOLDER */
        author: "Revenue Operations Director", /* PLACEHOLDER */
        role: "Client 06" /* PLACEHOLDER */
      }
    }
  ]
};

export const PRODUCTS_DATA = {
  eyebrow: "What we offer",
  h2: "Products ready for your business",
  products: [
    {
      id: "kaivex-crm",
      name: "Kaivex CRM", /* PLACEHOLDER */
      status: "Live",
      category: "Sales",
      promise: "Capture, qualify and route every inbound lead before intent cools",
      builtFor: "Growth agencies, B2B sales teams and service operators",
      features: [
        "Multi-channel webhook capture from web forms, WhatsApp and email",
        "Algorithmic lead scoring with automated rep territory assignment",
        "Real-time pipeline analytics, revenue forecasting and follow-up sequences"
      ],
      hue: 220
    },
    {
      id: "kaivex-insights",
      name: "Kaivex Insights", /* PLACEHOLDER */
      status: "Beta",
      category: "Analytics",
      promise: "Turn product event telemetry into clear growth decisions without complex SQL",
      builtFor: "SaaS founders, product managers and growth engineers",
      features: [
        "Plug-and-play event SDK with sub-second funnel and cohort queries",
        "Predictive churn detection powered by embedded behavioral models",
        "Automated weekly executive revenue and engagement summaries"
      ],
      hue: 280
    }
  ],
  customCard: {
    title: "Need something custom?",
    description: "We architect, engineer and deploy bespoke software systems tailored to your unique operational workflows.",
    actionText: "Let’s talk"
  }
};

export const ABOUT_DATA = {
  eyebrow: "About Kaivex",
  h2: "Built by engineers who care about outcomes",
  story: {
    paragraphs: [
      /* PLACEHOLDER: Company narrative */
      "Kaivex was founded by engineers who saw too many projects derailed by bloated roadmaps, over-complex tooling and disconnected consultants. We operate as a focused technical strike team that partners closely with founders and leadership.",
      /* PLACEHOLDER: Mission statement */
      "We believe real software leverage comes from craft, clean architecture and disciplined execution. Our goal is to engineer durable systems that eliminate operational bottlenecks and scale reliably with your business."
    ],
    note: "Built to scale",
    microcopy: "Software that grows your business"
  },
  values: [
    {
      id: "clarity",
      title: "Clarity",
      description: "Direct technical communication, transparent sprint tracking and zero architectural theater." /* PLACEHOLDER */
    },
    {
      id: "craft",
      title: "Craft",
      description: "Rigorous engineering standards across database schema, API contracts and clean user interfaces." /* PLACEHOLDER */
    },
    {
      id: "speed",
      title: "Speed",
      description: "Disciplined sprint cadence delivering production-ready releases into users’ hands rapidly." /* PLACEHOLDER */
    },
    {
      id: "ownership",
      title: "Ownership",
      description: "We treat your business goals, uptime, and long-term maintainability with personal responsibility." /* PLACEHOLDER */
    }
  ],
  timeline: [
    {
      step: "01",
      title: "Discover",
      description: "Deep technical review to uncover operational friction, assess architecture feasibility, and define measurable deliverables."
    },
    {
      step: "02",
      title: "Design",
      description: "High-fidelity interactive interface prototypes, data schema diagrams, and technical integration specifications."
    },
    {
      step: "03",
      title: "Build",
      description: "Modular sprint engineering with continuous test coverage, automated staging environments, and weekly demonstration builds."
    },
    {
      step: "04",
      title: "Launch and grow",
      description: "Zero-downtime production deployment, telemetry observability, and continuous performance optimization."
    }
  ],
  techStack: [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "AWS",
    "Google Cloud",
    "PostgreSQL",
    "Flutter",
    "Swift"
  ],
  stats: [
    { value: "00+", label: "Products deployed", isPlaceholder: true }, /* PLACEHOLDER */
    { value: "00%", label: "Client retention", isPlaceholder: true }, /* PLACEHOLDER */
    { value: "00", label: "Global regions served", isPlaceholder: true } /* PLACEHOLDER */
  ],
  team: [], /* PLACEHOLDER: Rendered only when team members are provided */
  testimonials: [] /* PLACEHOLDER: Rendered only when client testimonials are provided */
};

export const CONTACT_DATA = {
  eyebrow: "Contact",
  h2: "Have an idea? Let’s build it",
  intro: "Whether you need a full product build, custom AI automation, or infrastructure that scales, we are ready to partner with you.",
  channels: [
    {
      id: "email",
      type: "Email",
      value: "hello@kaivex.com",
      href: "mailto:hello@kaivex.com",
      isPlaceholder: false
    },
    {
      id: "whatsapp",
      type: "WhatsApp",
      value: "+00 000 000 0000", /* PLACEHOLDER */
      href: null,
      isPlaceholder: true
    },
    {
      id: "location",
      type: "Location",
      value: "Global / UTC±0 to UTC+8", /* PLACEHOLDER */
      href: null,
      isPlaceholder: true
    },
    {
      id: "hours",
      type: "Working hours",
      value: "Mon – Fri, 9am – 6pm", /* PLACEHOLDER */
      href: null,
      isPlaceholder: true
    }
  ],
  socialLinks: [
    { name: "LinkedIn", url: "https://linkedin.com/company/kaivex" }, /* PLACEHOLDER */
    { name: "X", url: "https://x.com/kaivex" }, /* PLACEHOLDER */
    { name: "GitHub", url: "https://github.com/kaivex" } /* PLACEHOLDER */
  ],
  card: {
    headline: "Start a project",
    sentence: "Tell us what you want to build. Our engineering leads will review your specs and respond within 2 hours.",
    buttonText: "Send project details →"
  },
  faqSubtitle: "We are here to help you with any questions you may have. If you don’t find what you need, please contact us.",
  faqContactEmail: "hello@kaivex.com",
  faq: [
    {
      id: "faq-1",
      question: "What does a project cost?", /* PLACEHOLDER */
      answer: "Every build is scoped to your exact business requirements. We provide fixed-price sprint estimates for discrete milestones or monthly engineering retainers for continuous product development. Detailed transparent scopes are shared following our discovery session."
    },
    {
      id: "faq-2",
      question: "How long does it take?", /* PLACEHOLDER */
      answer: "Typical sprint cycles run from 2 to 8 weeks depending on integration complexity. We emphasize early functional MVP deliveries so your team can gather real user feedback while we build out advanced features."
    },
    {
      id: "faq-3",
      question: "Do you offer support after launch?", /* PLACEHOLDER */
      answer: "Yes. Every engagement includes a dedicated post-launch monitoring and stabilization period, followed by flexible ongoing maintenance agreements covering security patches, cloud optimization and feature releases."
    },
    {
      id: "faq-4",
      question: "Who owns the code?", /* PLACEHOLDER */
      answer: "You retain 100% intellectual property ownership of all source code, architecture diagrams, cloud infrastructure scripts, and design artifacts upon milestone completion."
    },
    {
      id: "faq-5",
      question: "Do you work with international clients across timezones?", /* PLACEHOLDER */
      answer: "Yes. We partner with founders and engineering teams globally across the Americas, Europe, and Asia-Pacific. Sprints feature async documentation, transparent milestone boards, and scheduled synchronous overlap reviews."
    },
    {
      id: "faq-6",
      question: "How do we get started?", /* PLACEHOLDER */
      answer: "Click 'Start a project' to submit your project requirements. We’ll schedule a 30-minute discovery session to discuss scope, review technical constraints, and outline an architectural roadmap."
    }
  ],
  readyBand: {
    h2: "Ready when you are",
    buttonText: "Start a project"
  },
  footer: {
    copyright: "© 2026 Kaivex. All rights reserved.",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "hello@kaivex.com", href: "mailto:hello@kaivex.com" }
    ]
  }
};
