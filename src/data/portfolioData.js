export const portfolioData = {
  // Profile Information
  profile: {
    name: "Thannava Auamyam",
    role: "Software Developer/ FullStack Developer",
    location: "Bangkok, Thailand",
    tagline: "My dream is create something that change the world",
    bio: "Hello, and welcome. I'm Thannava Auamyam — a Software Developer with end-to-end capabilities across the full development lifecycle. From designing intuitive front-end interfaces and building robust back-end systems to managing DevOps pipelines and deployments, I operate comfortably at every layer of the stack. I don't just write code — I understand how a product is architected, built, shipped, and maintained. If you ask what my greatest strength is, the answer is simple: I learn fast, and I dream big. It may sound cliché, but that combination has defined every step of my career so far. New frameworks, unfamiliar infrastructure, emerging technologies — I thrive on the challenge of mastering them quickly and turning that knowledge into working solutions. A highlight of my journey so far: I single-handedly designed and built AI VISION, a complete AI-powered system, from concept to deployment. Leading an entire project independently taught me not only the technical craft, but also the discipline of making architectural decisions, owning outcomes, and thinking like a systems designer rather than just a coder. My long-term ambition goes beyond writing good software. I want to create something that genuinely improves people's lives — the way the inventor of the World Wide Web or the pioneers of computing changed the world. I believe technology should serve humanity, and I intend to be part of the generation that makes it happen. Currently, I'm deepening my expertise in Artificial Intelligence and software architecture — a demanding field where engineering rigor meets real-world responsibility. It's not the easy path, but I believe those who architect the systems of tomorrow carry a duty to build them thoughtfully. That's exactly where I want to be: at the frontier, solving hard problems that matter.",
    avatarBadge: "TA",
    avatarUrl: "/thannava.jpg",
  },

  social: {
    email: "normallifethan@gmail.com",
    github: "https://github.com/thanoka",
  },

  // Education Timeline
  education: [
    {
      year: "2022",
      title: "Graduated from ABC High School (Gifted Class)",
      detail: "Gifted Class program with emphasis on advanced mathematics & science",
      gpa: "3.38",
    },
    {
      year: "2023 – Present",
      title: "Studying Information Technology at DCE University",
      detail: "Field of Study: Full Stack Development",
      gpa: "In Progress",
    },
  ],

  skills: {
    "Programming Languages": [
      {
        name: "TypeScript / JavaScript",
        level: "Core Strength",
        description:
          "Primary language across every project — strict typing for shared service contracts, async control flow, and modern ECMAScript. Used for the Lumi navigation engine, Express 5 AI service, and three Next.js applications.",
        tag: "Primary",
      },
      {
        name: "Python",
        level: "Intermediate – Advanced",
        description:
          "Backend AI services with FastAPI and Flask: YOLO inference endpoints, Google Cloud Vision OCR pipelines, and speech-to-text audio normalization with ffmpeg.",
        tag: "Primary",
      },
      {
        name: "HTML5 & CSS3",
        level: "Proficient",
        description:
          "Semantic markup, CSS Modules, keyframe animation systems, and responsive layouts — including a fully hand-built browser game UI in vanilla CSS.",
        tag: "Frontend",
      },
      {
        name: "Shell / PowerShell / Bash",
        level: "Working Knowledge",
        description:
          "Automation scripts for multi-service startup, Cloudflare tunnel orchestration, and cross-platform launchers (.sh / .bat / .ps1).",
        tag: "Tooling",
      },
    ],

    "Frameworks & Libraries": [
      {
        name: "React 19 & React Native (Expo)",
        level: "Advanced",
        description:
          "Component architecture, custom hooks, and reactive state workflows. Built a production-grade Expo SDK 54 / React Native 0.81 app using expo-camera, expo-speech, expo-audio, expo-haptics, and Reanimated.",
        tag: "Frontend",
      },
      {
        name: "Next.js (App Router)",
        level: "Advanced",
        description:
          "Route groups, dynamic segments, server/client component boundaries, and API routes. Shipped multiple full-stack apps on Next.js 15 and 16 with Turbopack.",
        tag: "Fullstack",
      },
      {
        name: "Express 5 / Hono / Node.js 20",
        level: "Proficient",
        description:
          "REST service design, multipart upload handling with multer, CORS and env configuration, Swagger/OpenAPI documentation, and running TypeScript directly with tsx.",
        tag: "Backend",
      },
      {
        name: "FastAPI & Flask",
        level: "Proficient",
        description:
          "Stateless Python inference APIs served with Uvicorn — frame processing endpoints, health checks, and audio transcription services.",
        tag: "Backend",
      },
      {
        name: "Tailwind CSS 4 & Radix UI",
        level: "Proficient",
        description:
          "Design-system-driven interfaces with class-variance-authority, tailwind-merge, accessible Radix primitives, and Recharts data visualization.",
        tag: "Frontend",
      },
    ],

    "AI, Computer Vision & NLP": [
      {
        name: "Computer Vision (AI Vision Systems)",
        level: "Hands-on Project Experience",
        description:
          "End-to-end real-time vision pipeline design: frame capture and compression tuning for latency, object detection, bounding-box geometry (area ratios and centroid columns), 9-cell spatial grid mapping, multi-frame temporal confirmation to suppress false positives, and cooldown logic to prevent alert spam.",
        tag: "Featured",
      },
      {
        name: "Natural Language Processing (NLP)",
        level: "Hands-on Project Experience",
        description:
          "Thai-language natural language understanding and generation: intent extraction from free-form spoken input, fuzzy entity resolution mapping utterances onto canonical map node IDs, structured-output prompting with JSON schema enforcement, label synonym normalization, OCR text matching (exact and partial), and template-based natural language fallback generation.",
        tag: "Featured",
      },
      {
        name: "OCR & Text Recognition",
        level: "Hands-on Project Experience",
        description:
          "A dedicated YOLO text-region detector feeding cropped high-confidence regions into Google Cloud Vision OCR, with case normalization and weighted exact/partial string matching against a known sign vocabulary.",
        tag: "Vision",
      },
      {
        name: "Speech Interfaces (ASR & TTS)",
        level: "Hands-on Project Experience",
        description:
          "Full voice loop: audio capture, ffmpeg normalization to 16 kHz mono WAV, Thai speech recognition, and speech synthesis with a priority queue, interruption semantics, and emotion-to-prosody mapping across rate and pitch.",
        tag: "Voice AI",
      },
      {
        name: "Prompt & Persona Engineering",
        level: "Proficient",
        description:
          "Designing a consistent LLM persona (Lumi) that produces short, warm, urgency-aware speech, with strict JSON output contracts, intensity scoring, deterministic rule-based suggestions layered on top, and graceful degradation when the model returns malformed output.",
        tag: "LLM",
      },
      {
        name: "Multimodal AI Orchestration",
        level: "Hands-on Project Experience",
        description:
          "Fusing vision, text, and speech signals into a single decision loop — weighted multi-signal scoring across detection labels, OCR strings, and expected screen position, normalized into one confidence ranking that drives navigation state.",
        tag: "Architecture",
      },
      {
        name: "YOLO (Ultralytics)",
        level: "Hands-on Project Experience",
        description:
          "Dual-model inference pipeline: a general safety/object detector plus a dedicated text-region detector. Bounding-box area ratios drive proximity warning and danger thresholds in real time.",
        tag: "Featured",
      },
      {
        name: "LLM Integration (OpenRouter / Llama 3.3 70B)",
        level: "Hands-on Project Experience",
        description:
          "Persona engineering and structured-output prompting — converting JSON navigation events into short, warm, urgency-aware Thai speech, with intent filtering that maps free speech onto map node IDs and rule-based fallbacks when the model fails.",
        tag: "Featured",
      },
      {
        name: "Google Cloud Vision OCR & Speech-to-Text",
        level: "Hands-on Project Experience",
        description:
          "Service-account auth, OCR on cropped high-confidence sign regions only (for latency), and Thai (th-TH) speech recognition with ffmpeg-based 16 kHz mono WAV normalization.",
        tag: "Cloud AI",
      },
      {
        name: "Graph Algorithms & Spatial Reasoning",
        level: "Hands-on Project Experience",
        description:
          "BFS shortest-path routing over hand-authored floor-plan graphs, weighted visual self-localization scoring, 9-cell grid positioning, drift correction, and automatic rerouting.",
        tag: "Algorithms",
      },
    ],

    "Backend & Data": [
      {
        name: "NoSQL (MongoDB & Mongoose)",
        level: "Proficient",
        description:
          "Document-oriented data modeling across three applications: embedded vs. referenced document trade-offs, schema validation, indexing, aggregation queries, and ODM data access layers for authentication, wallet balances, and application state.",
        tag: "Database",
      },
      {
        name: "Graph & JSON Data Structures",
        level: "Hands-on Project Experience",
        description:
          "Designing a custom JSON floor-plan graph format — nodes, edges, landmark priorities, expected screen positions, and turn-trigger contracts for graph-based indoor navigation.",
        tag: "Data Structures",
      },
    ],

    "Tools & Technologies": [
      {
        name: "Docker & Docker Compose",
        level: "Proficient",
        description:
          "Containerized multi-service orchestration across Python (FastAPI/Flask) and Node.js microservices with unified networking and Cloudflare tunnel integration.",
        tag: "DevOps",
      },
      {
        name: "Git & GitHub",
        level: "Proficient",
        description:
          "Source code version control, structured branching hygiene, collaborative pull requests, and multi-service repository management.",
        tag: "Workflow",
      },
      {
        name: "Cloudflare Tunnels",
        level: "Hands-on Project Experience",
        description:
          "Zero-trust reverse proxies exposing local backend microservices (:3000, :5000, :7000) to public HTTPS endpoints for real-device mobile testing.",
        tag: "Networking",
      },
    ],

    "Languages": [
      {
        name: "Thai",
        level: "Native",
        description:
          "Native fluency in spoken and written Thai — natural language generation tuning, speech synthesis prosody mapping, and localized UI/UX.",
        tag: "Language",
      },
      {
        name: "English",
        level: "Professional Working",
        description:
          "Fluent reading of technical documentation, writing comprehensive software specifications, and collaborating in engineering workflows.",
        tag: "Communication",
      },
    ],
  },

  // Projects Collection
  // Each project becomes a book on the Library bookshelf (Room 3).
  projects: [
    {
      id: "lumi-ai-vision",
      title: "Lumi - AI Vision Indoor Navigation Assistant for Blind Users",
      bookSpineTitle: "Lumi · AI Vision",
      spineColor: "#2b1f3d", // Deep indigo-violet spine
      spineAccent: "#e0c27a", // Warm gold foil title text
      featured: true,
      shortDescription:
        "A camera-first, voice-only indoor navigation assistant that guides visually impaired users through hospitals and complex public buildings in natural Thai speech.",
      longDescription: `Indoor GPS does not work. For a blind user, "the registration desk is 15 steps to your left, just past the big sign" is the information that actually matters — and that information only exists in what the camera sees.


Lumi (ลูมี่) is a four-service AI system I designed and built end-to-end, alone, from concept to deployment. It streams camera frames from a phone to a vision service, determines where the user is standing by matching detected signs and landmarks against a hand-authored floor-plan graph, plans a turn-aware walking route with BFS, watches for obstacles and drift on every frame, then hands a stream of structured JSON events to an LLM persona that speaks short, warm, urgency-aware Thai through the phone's text-to-speech engine.


Architecture — four independent services. The frontend owns all navigation logic locally; every backend is stateless:
• Frontend (:8081) — Expo / React Native: camera capture loop, audio recording, navigation engine, TTS, haptics, accessible UI.
• AI Service (:3000) — Node 20 + TypeScript (Express 5, tsx): turns navigation events into natural Thai sentences, plus intent filtering for spoken destinations.
• Vision Service (:7000) — Python 3.11 (FastAPI + Uvicorn): YOLO safety detection, YOLO text-region detection, Google Cloud Vision OCR on sign crops, 9-cell grid localization.
• STT Service (:5000) — Python 3.11 (Flask): audio to 16 kHz mono WAV via ffmpeg, then Google Speech Recognition (th-TH).


Core capabilities:
• Visual self-localization — weighted scoring of YOLO labels, OCR sign text, and expected screen position against map nodes. Requires 40%+ confidence and two consecutive matching frames before committing a position.
• Turn-aware routing — BFS shortest path over the building graph, with instructions phrased as landmark triggers ("walk forward, when the REGISTRATION sign fills your view, turn left").
• Proximity safety alerts — a detection at 5%+ of the frame fires a warning, 15%+ fires danger, which interrupts all other speech. 5-second cooldown per object-and-grid pair.
• Drift correction — if a landmark that should be centered appears to the left, the user is nudged back onto the line.
• Automatic rerouting — walking off-route triggers a fresh BFS from the newly matched position.
• Voice destination input — hold the screen, speak a destination in Thai, Google STT transcribes it, and an LLM intent filter maps free speech onto a real map node ID.
• Emotion-modulated speech — every event carries an intensity value (0.0–1.0) mapped to TTS rate (1.0 to 1.6) and pitch (0.9 to 1.25), so danger sounds urgent and arrival sounds happy.
• Haptics — heavy buzz on danger and arrival, medium on turns and warnings.
• Graceful degradation — every event tag has a Thai fallback template, so the app still speaks correctly if the LLM call fails or returns malformed JSON.


The engine runs eight ordered steps per frame — safety check, location matching, route trigger, route progress, turn-reference monitoring, sign reading, alignment correction, and guidance — moving through the states idle, locating, navigating, arrived, lost, and rerouting. Events are spoken in strict priority order: danger, warning, turn_now, approaching_turn, alignment_correction, reroute, location_update, navigation_step, route_started, destination_set, arrived.


Engineering decisions worth noting: frames are captured at quality 0.1 with processing skipped to cut latency, OCR runs only on high-confidence text regions rather than whole frames, the loop re-arms after roughly 50 ms with live FPS and round-trip latency shown on screen, and an offline simulator lets the entire navigation engine be tested without a physical building. The whole stack starts with one Docker Compose command, or via Docker-free launch scripts, with Cloudflare tunnels exposing local backends to a real phone.`,
      technologies: [
        "React Native",
        "Expo SDK 54",
        "TypeScript",
        "Python 3.11",
        "FastAPI",
        "Flask",
        "Express 5",
        "Node.js 20",
        "YOLO / Ultralytics",
        "Google Cloud Vision OCR",
        "Google Speech-to-Text",
        "OpenRouter / Llama 3.3 70B",
        "Docker Compose",
        "Cloudflare Tunnel",
        "BFS Pathfinding",
      ],
      githubUrl: "https://github.com/thanoka/m-project",
      documentationUrl: "https://github.com/thanoka/m-project#readme",
      images: [
        {
          type: "image",
          url: "/grid_reference.jpg",
          alt: "Vision Pipeline & 9-Cell Grid Localization",
          caption:
            "Dual YOLO models with 9-cell grid positioning and OCR on high-confidence sign crops.",
        },
      ],
    },
    {
      id: "nyx-cloud",
      title: "Nyx Cloud - Full-Stack SaaS Platform & Dashboard",
      bookSpineTitle: "Nyx Cloud",
      spineColor: "#1e2d3d",
      spineAccent: "#8bb8d4",
      shortDescription:
        "A production-shaped SaaS application with authentication, subscription billing, and a data-rich dashboard.",
      longDescription: `Nyx Cloud is a full-stack SaaS platform built on the Next.js App Router, covering the entire commercial product surface: authenticated sign-in flows, a segmented dashboard with dynamic routes, subscription billing, and a documented API layer.


Key Highlights:
• Route-group architecture separating (auth) and (dashboard) concerns, with dynamic dashboard segments and protected layouts.
• Authentication via better-auth with OTP input and session-aware server components.
• Paddle integration on both client and server SDKs for checkout, subscriptions, and billing lifecycle handling.
• A Hono-powered API layer served alongside Next.js, documented with Swagger UI and swagger-jsdoc.
• MongoDB and Mongoose data models, TanStack Query for client-side caching and mutation state.
• A complete Radix UI + Tailwind CSS 4 design system with dark mode via next-themes, Recharts analytics, and Sonner toasts.
• IPFS-backed file handling through Pinata, plus React Hook Form with resolver-based validation across every form.`,
      technologies: [
        "Next.js 15",
        "TypeScript",
        "React",
        "Hono",
        "MongoDB",
        "Mongoose",
        "better-auth",
        "Paddle",
        "TanStack Query",
        "Radix UI",
        "Tailwind CSS 4",
        "Recharts",
        "Swagger / OpenAPI",
      ],
      githubUrl: "https://github.com/thanoka/nyx.cloud",
      documentationUrl: "",
      images: [
        {
          type: "image",
          url: "/Nxy-could.png",
          alt: "Nyx Cloud Platform Overview",
          caption: "Full-stack Next.js 15 SaaS platform landing page and authenticated workspace.",
        },
        {
          type: "image",
          url: "/nyx-cloud-dashboard.png",
          alt: "Nyx Cloud Dashboard & Analytics",
          caption: "Segmented dashboard with charts, tables, and theme-aware Radix components.",
        },
        {
          type: "image",
          url: "/nyx-cloud-subscribe.png",
          alt: "Nyx Cloud Subscription & Billing Checkout",
          caption: "better-auth sessions with OTP entry and Paddle subscription checkout.",
        },
      ],
    },
    {
      id: "loremaster",
      title: "Loremaster - Next.js 16 Interactive Story Platform",
      bookSpineTitle: "Loremaster",
      spineColor: "#284431", // Muted deep forest green spine
      spineAccent: "#c8a165", // Warm brass foil title text
      shortDescription:
        "An interactive narrative game platform with account sessions, an in-app wallet, and a shared-navigation app shell.",
      longDescription: `Loremaster is an interactive story and game platform built on the Next.js 16 App Router with the React Compiler enabled — a step toward the endless visual-novel engine I have wanted to build since I started programming.


Key Highlights:
• Nested route groups with a shared navigation shell, so game, home, and wallet screens keep a persistent chrome layer.
• In-app wallet with a top-up flow, built as a self-contained module with CSS Modules for scoped styling.
• NextAuth session handling with MongoDB and Mongoose persistence for player accounts and progress.
• An Express-based service layer alongside the Next.js routes, documented with next-swagger-doc and Swagger UI React.
• React 19 with babel-plugin-react-compiler, Tailwind CSS 4, and tw-animate-css for transition-heavy story sequences.`,
      technologies: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "NextAuth",
        "MongoDB",
        "Mongoose",
        "Express 5",
        "Tailwind CSS 4",
        "CSS Modules",
        "Swagger / OpenAPI",
      ],
      githubUrl: "https://github.com/thanoka/loremaster-f2",
      documentationUrl: "",
      images: [
        {
          type: "image",
          url: "/lore-master-home.png",
          alt: "Loremaster Story Platform Home",
          caption: "Interactive story platform home shell with persistent navigation chrome.",
        },
        {
          type: "image",
          url: "/lore-master-game.png",
          alt: "Loremaster Story Reader & Game Interface",
          caption: "Story reader interface with dialog sequences and transition choreography.",
        },
        {
          type: "image",
          url: "/lore-master-lib.png",
          alt: "Loremaster Library & Chapter Collection",
          caption: "Library archive with chapter progression, character notes, and save states.",
        },
      ],
    },
    {
      id: "war-dragons",
      title: "War Dragons - Browser Strategy Game (Vanilla Stack)",
      bookSpineTitle: "War Dragons",
      spineColor: "#3d1f1f", // Deep burgundy spine
      spineAccent: "#d9a24f", // Amber foil title text
      shortDescription:
        "A turn-based browser strategy game built entirely in vanilla HTML, CSS, and JavaScript — no frameworks, no build step.",
      longDescription: `War Dragons is a browser strategy game written from scratch in plain HTML, CSS, and JavaScript. It was the project where I learned how games are actually structured: state machines, turn loops, animation timing, and the discipline of building a UI without a framework to lean on.


Key Highlights:
• Hand-authored animation and effects system across multiple CSS files — flash effects, transitions, and dialog choreography driven purely by keyframes and class toggling.
• Map and battle screens assembled from custom image assets with layered backgrounds.
• Game state, turn resolution, and dialog sequencing implemented in vanilla JavaScript with no external dependencies.
• Zero build tooling: it runs from a static file server, which forced clean separation between markup, styling, and logic.`,
      technologies: ["JavaScript (ES6)", "HTML5", "CSS3", "CSS Animations", "DOM API"],
      githubUrl: "https://github.com/thanoka/War_Dragons",
      documentationUrl: "",
      images: [
        {
          type: "image",
          url: "/war-dragons.png",
          alt: "War Dragons Combat Battle Screen",
          caption: "Turn-based tactical combat arena with custom keyframe animations and battle effects.",
        },
        {
          type: "image",
          url: "/war-dragons-lobby.png",
          alt: "War Dragons World Map & Lobby",
          caption: "Interactive world map and campaign stage selector rendered without frameworks.",
        },
        {
          type: "image",
          url: "/war-dragons-item.png",
          alt: "War Dragons Equipment & Item Inventory",
          caption: "Unit equipment and inventory management interface with custom CSS styling.",
        },
      ],
    },
  ],

  // Experience Entries & Current Focus
  experience: [
    {
      id: "exp-1",
      period: "2025 – Present",
      role: "Solo Architect & Developer — Lumi AI Vision",
      organization: "Independent Project (Senior / Capstone Scale)",
      location: "Bangkok, Thailand",
      highlights: [
        "Designed and shipped a four-service AI system alone — React Native frontend, TypeScript LLM service, Python FastAPI vision service, and Flask speech-to-text service — from concept through Docker Compose deployment.",
        "Built a real-time computer vision pipeline with two YOLO models plus Google Cloud Vision OCR, running an eight-step navigation engine on every camera frame.",
        "Implemented visual self-localization, BFS route planning, proximity safety escalation, drift correction, and automatic rerouting over a hand-authored floor-plan graph.",
        "Engineered an accessibility-first voice interaction model: priority speech queue with interruption, emotion-to-prosody mapping, tiered haptics, and Thai fallback templates for graceful LLM failure.",
        "Authored a 31 KB engineering specification covering architecture, API contracts, scoring weights, map data format, and troubleshooting.",
      ],
    },
    {
      id: "exp-2",
      period: "2024 – Present",
      role: "Full-Stack Developer — Personal & University Projects",
      organization: "DCE University Labs & Personal Projects",
      location: "Bangkok, Thailand",
      highlights: [
        "Built multiple full-stack Next.js applications (App Router, versions 15 and 16) with authentication, MongoDB persistence, documented API layers, and subscription billing.",
        "Integrated third-party platform services end to end — Paddle payments, better-auth and NextAuth sessions, Pinata storage, and Google Cloud APIs.",
        "Engineering responsive web applications with modern component architectures and semantic HTML.",
        "Exploring local-first software paradigms and accessible user interface patterns.",
        "Collaborating on peer code reviews and participating in hands-on university tech hackathons.",
      ],
    },
  ],

  // Pinned Note on Corkboard
  currentlyLearning:
    "Currently learning & building: production ML inference optimization (model quantization and on-device YOLO), software architecture for distributed multi-service systems, LLM structured-output reliability and evaluation, and deeper accessibility engineering for voice-first interfaces.",

  // Room Wall Metadata
  roomMetadata: [
    {
      index: 0,
      id: "about",
      name: "The Hearth",
      duty: "About",
      subtitle: "Profile & Education",
      compass: "North Wall",
    },
    {
      index: 1,
      id: "skills",
      name: "The Study",
      duty: "Skills",
      subtitle: "Diary & Technical Skills",
      compass: "East Wall",
    },
    {
      index: 2,
      id: "projects",
      name: "The Library",
      duty: "Projects",
      subtitle: "Bookshelf & Rainy Window",
      compass: "South Wall",
    },
    {
      index: 3,
      id: "experience",
      name: "The Field Board",
      duty: "Experience",
      subtitle: "Experience & Field Notes",
      compass: "West Wall",
    },
  ],
};

export default portfolioData;
