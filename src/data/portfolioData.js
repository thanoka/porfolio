// Portfolio content revision: 22 September 2026.
// Standalone replacement for the uploaded portfolioData.js.
// Evidence: https://www.thannava.site and https://github.com/thanoka
// Project claims are based on repository inspection, not runtime certification.
// Education institution names, dates and GPA need owner confirmation.
// rating: null means "not rated". See portfolio-review.md for UI fallbacks
// that must be removed to prevent the current components from showing 5 stars.

export const portfolioData = {
  profile: {
    name: "Thannava Auamyam",
    role: "Aspiring AI & Systems Engineer",
    focus: "AI Applications • Systems • Automation",
    location: "Bangkok, Thailand",
    tagline: "Turning complex logic into useful AI-powered tools.",
    bio: "I'm a fourth-year Information Technology student in Bangkok with a full-stack development background. I enjoy designing how systems work, connecting their components, and building tools that solve practical problems. My main project, Lumi, combines computer vision, OCR, voice interaction, and graph-based navigation in a mobile prototype. JavaScript is my strongest language, and I use TypeScript and Python in my projects while continuing to strengthen my fluency. I'm seeking an internship in AI engineering, DevOps, or platform engineering where I can contribute to real systems and learn how to test, deploy, and operate them responsibly.",
    avatarBadge: "TA",
    avatarUrl: "",
    summary: "Fourth-year IT student building AI applications and multi-service prototypes with TypeScript, Python, and Docker. Interested in AI engineering, DevOps, and platform engineering internships.",
    workSummary: "Selected projects in assistive AI, web application integration, game systems, and JavaScript fundamentals.",
    metrics: [
      { val: "4", lbl: "Selected Projects" },
      { val: "Vision + Voice", lbl: "AI Integration" },
      { val: "Docker", lbl: "Local Deployment" },
    ],
    primaryCta: "Explore Projects",
    secondaryCta: "Discuss an Internship",
    aboutEyebrow: "ABOUT ME",
    educationEyebrow: "EDUCATION",
    workEyebrow: "SELECTED WORK",
    followEyebrow: "CONTACT & CODE",
    browsePortfolioLabel: "EXPLORE THE PROJECTS",
    headerSubtitle: "Rainforest Cabin Portfolio",
    footerNote: "Built with care in the Rainforest Cabin",
  },

  social: {
    email: "normallifethan@gmail.com",
    github: "https://github.com/thanoka",
  },

  navbarConfig: {
    brandInitials: "TA",
    brandTitle: "Thannava",
    brandRole: "Aspiring AI & Systems Engineer",
    brandSubtitle: "Rainforest Cabin Portfolio",
    statusBeacon: {
      header: "Seeking an Internship",
      detail: "AI • DevOps • Platform",
      color: "#55efc4",
    },
    quickAction: {
      header: "Let's Talk",
      detail: "Contact ↗",
      targetId: "experience",
      color: "#d4a754",
    },
  },

  modalConfig: {
    badgeText: "Cabin Archive • Project Notes",
    statusBadge: "Personal / Academic Project",
    highlightsHeader: "Implementation Highlights",
    meshHeader: "Components & Responsibilities",
    techStackHeader: "Tools Used",
    fieldNotesHeader: "Problem, Implementation & Limitations",
    githubButtonText: "View Source Code",
    docsButtonText: "Read Project Documentation",
    closeTooltip: "Close Project (Esc)",
    imagePlaceholderLabel: "Project Preview",
    color: "#d4a754",
    tabs: [
      { id: "overview", label: "Overview & Components", icon: "Layers" },
      { id: "tech", label: "Tools & Technologies", icon: "Cpu" },
      { id: "notes", label: "Engineering Notes", icon: "BookOpen" },
    ],
  },

  bookshelfConfig: {
    crestNumeral: "III",
    eyebrow: "The Library • Selected Projects",
    mainTitle: "AI Applications & Software Systems",
    infoBadgeText: "Choose a project to explore its implementation",
    featuredBadge: "Featured Project",
    headline: "Selected Engineering Projects",
    subline: "What I built, how the components fit together, and what still needs improvement.",
    quickSelectLabel: "Choose a Project:",
    showcasedLabel: "Currently Selected:",
    openDossierButtonText: "Read Project Details",
    sourceButtonText: "Source Code",
    pedestalCueText: "Open Project Details",
    engineeringFeatsEyebrow: "Implementation Highlights",
    systemArchitectureEyebrow: "Components & Data Flow",
    documentationButtonText: "Read Engineering Notes",
    guidanceText: "Select a book to explore the project, its source code, and engineering notes.",
    verticalSpineText: "SELECTED PROJECTS",
    pinButtonText: "Select",
    pinnedButtonText: "Selected",
    pinnedBadgeText: "SELECTED",
    clickToPinText: "SELECT PROJECT ↗",
    coverOverlayText: "SELECT",
    coverOverlayHeroText: "VIEW DETAILS",
  },

  // Institution names and GPA omitted rather than publishing unconfirmed placeholders.
  education: [
    {
      year: "2022",
      title: "chanpradittharam wittayakom (Gifted Class)",
      detail: "Gifted Class program with emphasis on advanced mathematics & science",
      gpa: "3.38",
    },
    {
      year: "In progress",
      title: "Information Technology Student AT Sripatum University | Bangkok",
      detail: "Fourth-year student in Bangkok with a focus on full-stack development.",
      gpa: "In Progress",
    },
  ],


  skillsGrimoire: {
    sectionEyebrow: "The Study • Skills & Development",
    sectionTitle: "AI, Systems & Engineering Foundations",
    crestNumeral: "II",
    ariaLabel: "Project Skills and Planned Learning",
    turnBackLabel: "Previous",
    nextFolioLabel: "Next",
    signatureSuffix: "Field Desk Bangkok",
    folios: [
      {
        id: "ai-vision",
        numeral: "FOLIO I",
        header: "Folio I · Applied AI",
        detail: "Model integration, vision pipelines, voice interfaces, and application logic",
        color: "#d4a754",
        icon: "Cpu",
        leftPage: {
          chapterNum: "CAP. 01",
          title: "Computer Vision & Perception",
          folioNum: "p. 14",
          sections: [
            {
              title: "Vision Pipeline Integration",
              num: "1.1",
              items: [
                {
                  header: "YOLO / Ultralytics",
                  detail: "Integrated object and text-region detectors in Lumi's Python backend. Used detections as inputs to navigation logic.",
                  badge: "Project Use",
                  color: "#ffd88a",
                },
                {
                  header: "Google Cloud Vision OCR",
                  detail: "Cropped detected sign regions before OCR and passed recognized text into landmark matching.",
                  badge: "Project Use",
                  color: "#ffd88a",
                },
                {
                  header: "Detection Post-processing",
                  detail: "Mapped bounding boxes to a nine-cell frame grid and calculated image-area ratios for heuristic warning rules.",
                  badge: "Project Use",
                  color: "#ffd88a",
                },
              ],
            },
            {
              title: "From Perception to Decisions",
              num: "1.2",
              items: [
                {
                  header: "Landmark Matching",
                  detail: "Combined OCR text, detected labels, and expected frame positions to score candidate map locations.",
                  badge: "Project Use",
                  color: "#ffd88a",
                },
                {
                  header: "AI Integration Scope",
                  detail: "Focus on connecting existing models and APIs with application logic, user interactions, and service boundaries.",
                  badge: "Current Scope",
                  color: "#d8cbbe",
                },
              ],
            },
          ],
        },
        rightPage: {
          chapterNum: "CAP. 02",
          title: "LLM & Voice Interfaces",
          folioNum: "p. 15",
          sections: [
            {
              title: "Language Model Integration",
              num: "2.1",
              items: [
                {
                  header: "LLM APIs / OpenRouter",
                  detail: "Used an LLM to turn navigation events into Thai guidance and map spoken destinations to map-node identifiers.",
                  badge: "Project Use",
                  color: "#ffd88a",
                },
                {
                  header: "Response Parsing & Fallbacks",
                  detail: "Implemented JSON parsing, response-field handling, and Thai fallback templates. Strict output validation remains an improvement target.",
                  badge: "Project Use",
                  color: "#ffd88a",
                },
              ],
            },
            {
              title: "Voice Interaction",
              num: "2.2",
              items: [
                {
                  header: "SpeechRecognition & FFmpeg",
                  detail: "Integrated Thai transcription through SpeechRecognition's Google recognizer and audio conversion through FFmpeg.",
                  badge: "Project Use",
                  color: "#ffd88a",
                },
                {
                  header: "Text-to-Speech & Event Priority",
                  detail: "Built queued speech, interruption rules, intensity-based rate and pitch, and haptic feedback for Lumi.",
                  badge: "Project Use",
                  color: "#ffd88a",
                },
              ],
            },
          ],
        },
      },
      {
        id: "fullstack-systems",
        numeral: "FOLIO II",
        header: "Folio II · Systems",
        detail: "Programming foundations, state transitions, service boundaries, and data",
        color: "#2e7d32",
        icon: "Layers",
        leftPage: {
          chapterNum: "CAP. 03",
          title: "Languages & System Logic",
          folioNum: "p. 16",
          sections: [
            {
              title: "Programming Languages",
              num: "3.1",
              items: [
                {
                  header: "JavaScript",
                  detail: "My strongest language. Used for browser game logic, DOM interactions, and web applications.",
                  badge: "Primary",
                  color: "#ffd88a",
                },
                {
                  header: "TypeScript",
                  detail: "Used for application logic, shared navigation types, and Node.js services. Continuing to strengthen independent fluency.",
                  badge: "Working Use",
                  color: "#d8cbbe",
                },
                {
                  header: "Python",
                  detail: "Used for inference endpoints, OCR integration, and audio processing. Continuing to deepen library and language knowledge.",
                  badge: "Working Use",
                  color: "#d8cbbe",
                },
              ],
            },
            {
              title: "Logic & Data Structures",
              num: "3.2",
              items: [
                {
                  header: "Graphs & State Transitions",
                  detail: "Implemented BFS routing, navigation states, event priorities, cooldowns, and rerouting over a hand-authored map.",
                  badge: "Project Use",
                  color: "#ffd88a",
                },
              ],
            },
          ],
        },
        rightPage: {
          chapterNum: "CAP. 04",
          title: "Applications & Service Boundaries",
          folioNum: "p. 17",
          sections: [
            {
              title: "Backend Integration",
              num: "4.1",
              items: [
                {
                  header: "Node.js / Express / Hono",
                  detail: "Built HTTP endpoints for AI interactions and web applications, integrating external APIs and JSON responses.",
                  badge: "Project Use",
                  color: "#ffd88a",
                },
                {
                  header: "FastAPI / Flask",
                  detail: "Separated vision and speech processing into Python services with image and audio upload endpoints.",
                  badge: "Project Use",
                  color: "#ffd88a",
                },
                {
                  header: "MongoDB & Application Data",
                  detail: "Used document data for file records, subscriptions, player state, and game content across web projects.",
                  badge: "Project Use",
                  color: "#ffd88a",
                },
              ],
            },
            {
              title: "User-Facing Applications",
              num: "4.2",
              items: [
                {
                  header: "React / Next.js / React Native",
                  detail: "Built web interfaces and an Expo mobile prototype to connect users with backend logic and AI services.",
                  badge: "Project Use",
                  color: "#ffd88a",
                },
              ],
            },
          ],
        },
      },
      {
        id: "languages-tooling",
        numeral: "FOLIO III",
        header: "Folio III · Delivery",
        detail: "Existing local deployment experience and clearly separated learning goals",
        color: "#c62828",
        icon: "Terminal",
        leftPage: {
          chapterNum: "CAP. 05",
          title: "Deployment & Development Tools",
          folioNum: "p. 18",
          sections: [
            {
              title: "Tools Used in Projects",
              num: "5.1",
              items: [
                {
                  header: "Docker & Docker Compose",
                  detail: "Defined containers and local startup for Lumi's client and three backends using Dockerfiles and Compose.",
                  badge: "Project Use",
                  color: "#ffd88a",
                },
                {
                  header: "Cloudflare Tunnels",
                  detail: "Used temporary HTTPS tunnels to connect a physical phone to locally running backends during development.",
                  badge: "Project Use",
                  color: "#ffd88a",
                },
                {
                  header: "Shell & PowerShell Scripts",
                  detail: "Used startup and tunnel scripts to coordinate local services and frontend endpoint configuration.",
                  badge: "Project Use",
                  color: "#ffd88a",
                },
                {
                  header: "Git & GitHub",
                  detail: "Use version control to maintain project source, track changes, and share implementations through public repositories.",
                  badge: "Project Use",
                  color: "#ffd88a",
                },
              ],
            },
          ],
        },
        rightPage: {
          chapterNum: "CAP. 06",
          title: "Next Learning Goals",
          folioNum: "p. 19",
          sections: [
            {
              title: "Planned, Not Yet Claimed",
              num: "6.1",
              items: [
                {
                  header: "Testing & AI Evaluation",
                  detail: "Add automated navigation tests, malformed-output cases, labeled evaluation data, and reproducible latency measurements.",
                  badge: "Planned",
                  color: "#d8cbbe",
                },
                {
                  header: "Linux, Networking & CI/CD",
                  detail: "Strengthen process, port, DNS, and HTTP debugging; add GitHub Actions for linting, tests, and container builds.",
                  badge: "Planned",
                  color: "#d8cbbe",
                },
                {
                  header: "Secure Deployment & Observability",
                  detail: "Practice authenticated APIs, secrets handling, health checks, structured logs, metrics, and recovery procedures.",
                  badge: "Planned",
                  color: "#d8cbbe",
                },
                {
                  header: "ML & Cloud Foundations",
                  detail: "Learn evaluation metrics, dataset splits, model versioning, and one cloud deployment workflow before adding larger platforms.",
                  badge: "Planned",
                  color: "#d8cbbe",
                },
              ],
            },
          ],
        },
      },
    ],
  },

  projects: [
    // Evidence: https://github.com/thanoka/m-project
    {
      id: "lumi-ai-vision",
      volumeNumeral: "VOL. 01",
      title: "Lumi - AI Indoor Navigation Prototype",
      bookSpineTitle: "Lumi · AI Vision",
      spineColor: "#2b1f3d",
      spineAccent: "#e0c27a",
      featured: true,
      rating: null,
      keyMetrics: [
        { label: "System Structure", value: "Client + 3 Backends" },
        { label: "Vision Pipeline", value: "2 YOLO Models + OCR" },
        { label: "Navigation Logic", value: "BFS + State Transitions" },
        { label: "Validation Tool", value: "Navigation Simulator" },
      ],
      services: [
        { name: "Mobile Client", port: ":8081", stack: "Expo / React Native / TypeScript", role: "Camera capture, navigation state, route planning, voice output, and haptics" },
        { name: "AI Guidance Service", port: ":3000", stack: "Node.js / Express / OpenRouter", role: "Destination interpretation, Thai guidance, response parsing, and fallback templates" },
        { name: "Vision Service", port: ":7000", stack: "Python / FastAPI / YOLO / Cloud Vision", role: "Object detection, text-region detection, OCR, and frame-grid mapping" },
        { name: "Speech Service", port: ":5000", stack: "Python / Flask / FFmpeg / SpeechRecognition", role: "Audio conversion and Thai speech transcription" },
      ],
      highlights: [
        { label: "Perception to Action", detail: "Connected vision and OCR outputs to location matching, route planning, and guidance events." },
        { label: "Explicit Application Logic", detail: "Kept routing and navigation state in code rather than delegating every decision to an LLM." },
        { label: "Failure Handling", detail: "Added speech priorities and fallback paths, with a simulator for exploring navigation behavior." },
      ],
      shortDescription: "An assistive navigation prototype combining computer vision, OCR, graph-based routing, and Thai voice guidance.",
      longDescription: `Problem
Indoor navigation assistance needs more than object labels: it needs location context, route state, and understandable guidance.

My contribution
Designed and built a mobile client with three backend services, connecting existing vision and language models to application-specific navigation logic.

Implementation
• The Expo client sends camera images to a Python vision service.
• Two YOLO models detect objects and text regions; Google Cloud Vision extracts text from selected crops.
• A TypeScript navigation engine matches landmarks against a hand-authored map and uses BFS for routes with the fewest graph edges.
• Navigation states, turn triggers, warning thresholds, and rerouting are handled by application code.
• An Express service turns structured events into Thai guidance through OpenRouter.
• A Flask service uses SpeechRecognition's Google recognizer for Thai voice input.
• Docker Compose and startup scripts support local development; temporary tunnels connect a physical phone.

Engineering decisions
Separate perception services from client navigation logic. Use deterministic route and state rules alongside LLM-generated language. Provide speech-priority handling, fallback templates, and a navigation simulator.

Current limitations
This is a prototype, not a validated mobility aid or a production hospital deployment. Bounding-box size is a warning heuristic, not a measured distance. The system depends on hand-authored maps, camera conditions, and network services. Inference runs on the backend, not on the phone.

Next validation
Add reproducible accuracy and latency evaluation, automated state-transition tests, strict LLM-output validation, authenticated endpoints, and controlled accessibility testing before making real-world safety claims.`,
      technologies: [
        "TypeScript", "Python", "React Native", "Expo", "FastAPI", "Flask",
        "Node.js", "Express", "YOLO / Ultralytics", "Google Cloud Vision OCR",
        "SpeechRecognition", "FFmpeg", "OpenRouter", "Docker Compose",
        "Cloudflare Tunnel", "BFS",
      ],
      githubUrl: "https://github.com/thanoka/m-project",
      documentationUrl: "https://github.com/thanoka/m-project#readme",
      images: [
        { type: "image", url: "/grid_reference.jpg", alt: "Illustration of vision detections and frame regions", caption: "Vision debugging illustration. Not an accuracy or performance benchmark." },
      ],
    },
    // Evidence: https://github.com/thanoka/nyx.cloud
    {
      id: "nyx-cloud",
      volumeNumeral: "VOL. 02",
      title: "Nyx Cloud - File Storage & Subscription Prototype",
      bookSpineTitle: "Nyx Cloud",
      spineColor: "#1e2d3d",
      spineAccent: "#8bb8d4",
      rating: null,
      keyMetrics: [
        { label: "Application", value: "Next.js + TypeScript" },
        { label: "Authentication", value: "better-auth OAuth" },
        { label: "Storage Integration", value: "Pinata + MongoDB" },
        { label: "Billing Integration", value: "Paddle" },
      ],
      services: [
        { name: "Web Application", port: ":3000", stack: "Next.js 15 / React 18", role: "Sign-in, dashboard routes, file views, and subscription interface" },
        { name: "API Routes", port: "/api/v1", stack: "Hono / Next.js", role: "File and subscription-related HTTP handlers within the web application" },
        { name: "Authentication & Billing", port: "External APIs", stack: "better-auth / Paddle", role: "OAuth sessions, checkout integration, and subscription event handling" },
        { name: "Data & File Storage", port: "External Services", stack: "MongoDB / Mongoose / Pinata", role: "File metadata, subscription records, and IPFS-backed file integration" },
      ],
      highlights: [
        { label: "Service Integration", detail: "Connected authentication, file storage, subscription data, and billing APIs in a single application." },
        { label: "Application Structure", detail: "Separated dashboard routes, server actions, data models, and Hono API handlers." },
        { label: "Operational Learning", detail: "A useful foundation for testing webhook behavior, authorization, and failure handling." },
      ],
      shortDescription: "A full-stack file-storage prototype with OAuth sign-in, MongoDB records, Pinata integration, and Paddle subscription workflows.",
      longDescription: `Problem
Bring file management, user accounts, and subscription flows into a single web application.

Implementation
• Next.js App Router and React interfaces for sign-in and dashboard screens.
• better-auth configured with Google and GitHub OAuth providers.
• Hono route handlers for file and Paddle integration.
• MongoDB and Mongoose models for file and subscription data.
• Pinata integration for IPFS-backed file handling.
• Paddle checkout and subscription-management code.

What this demonstrates
Third-party API integration, application structure, data modeling, and coordination between frontend interactions and server-side operations.

Current limitations
This is a development prototype. Payment-event handling, security, and performance need further testing before production use. The repository README still needs a project-specific setup guide and architecture explanation.

Next improvement
Add subscription-event tests, replay-safe webhook handling, resource-ownership checks, and documented development setup.`,
      technologies: [
        "Next.js 15", "React 18", "TypeScript", "Hono", "MongoDB",
        "Mongoose", "better-auth", "Paddle", "Pinata", "TanStack Query",
        "Radix UI", "Tailwind CSS",
      ],
      githubUrl: "https://github.com/thanoka/nyx.cloud",
      documentationUrl: "",
      images: [
        { type: "image", url: "/Nxy-could.png", alt: "Nyx Cloud interface", caption: "File-storage application interface." },
        { type: "image", url: "/nyx-cloud-dashboard.png", alt: "Nyx Cloud dashboard", caption: "Dashboard and file-management interface." },
        { type: "image", url: "/nyx-cloud-subscribe.png", alt: "Nyx Cloud subscription interface", caption: "Subscription interface with Paddle integration." },
      ],
    },
    // Evidence: https://github.com/thanoka/loremaster-f2
    {
      id: "loremaster",
      volumeNumeral: "VOL. 03",
      title: "Loremaster - Stateful Story & Game Prototype",
      bookSpineTitle: "Loremaster",
      spineColor: "#284431",
      spineAccent: "#c8a165",
      rating: null,
      keyMetrics: [
        { label: "Application", value: "Next.js 16 + React 19" },
        { label: "Game Data", value: "MongoDB" },
        { label: "Core Logic", value: "Movement + Inventory" },
        { label: "Authentication", value: "NextAuth" },
      ],
      services: [
        { name: "Application Interface", port: ":3000", stack: "Next.js / React", role: "Library, game screens, shared navigation, and account interface" },
        { name: "Game Actions", port: "Server Actions", stack: "TypeScript / Next.js", role: "Movement rules, item requirements, state updates, and battle-related logic" },
        { name: "Persistent Game Data", port: "MongoDB", stack: "MongoDB", role: "Game content, player location, inventory, and saved state" },
        { name: "Account & Top-up Interface", port: "App Routes", stack: "NextAuth / React / CSS Modules", role: "Session handling and a prototype amount-selection and QR display flow" },
      ],
      highlights: [
        { label: "Stateful Game Logic", detail: "Movement depends on map exits, quest progression, inventory, and equipment requirements." },
        { label: "Persistent State", detail: "Player location and game data are read and updated through server-side database operations." },
        { label: "Interface Integration", detail: "Connected game screens, account sessions, and a shared application layout." },
      ],
      shortDescription: "An interactive game prototype focused on persistent player state, rule-based movement, inventory, and account-backed interfaces.",
      longDescription: `Problem
Represent a game world as structured data and make player actions change persistent state.

Implementation
• Next.js 16 and React 19 for application routes and game interfaces.
• MongoDB-backed player state, locations, inventory, and game content.
• Server-side movement logic checks exits, quest stages, keys, and equipment before updating location.
• NextAuth session handling and shared navigation across application pages.
• A separate top-up interface for selecting an amount and displaying a QR code.

What this demonstrates
Business-rule design, state transitions, data-driven application behavior, and integration between interface actions and stored state.

Current limitations
The top-up flow is an interface prototype, not a completed payment-settlement system. Authorization, payment confirmation, concurrent updates, and recovery behavior need further testing. The repository README still needs project-specific documentation.

Next improvement
Test game rules independently, enforce resource ownership for every action, and document which features are complete versus experimental.`,
      technologies: [
        "Next.js 16", "React 19", "TypeScript", "NextAuth",
        "MongoDB", "Tailwind CSS", "CSS Modules",
      ],
      githubUrl: "https://github.com/thanoka/loremaster-f2",
      documentationUrl: "",
      images: [
        { type: "image", url: "/lore-master-home.png", alt: "Loremaster home screen", caption: "Home screen and shared application navigation." },
        { type: "image", url: "/lore-master-game.png", alt: "Loremaster game interface", caption: "Game interface connected to player and world state." },
        { type: "image", url: "/lore-master-lib.png", alt: "Loremaster library interface", caption: "Library interface for the story and game prototype." },
      ],
    },
    // Evidence: https://github.com/thanoka/War_Dragons
    {
      id: "war-dragons",
      volumeNumeral: "VOL. 04",
      title: "War Dragons - JavaScript Browser Game",
      bookSpineTitle: "War Dragons",
      spineColor: "#3d1f1f",
      spineAccent: "#d9a24f",
      rating: null,
      keyMetrics: [
        { label: "Core Language", value: "JavaScript" },
        { label: "Interface", value: "HTML + CSS + DOM" },
        { label: "Game Logic", value: "Turns + Combat Rules" },
        { label: "Local Persistence", value: "localStorage" },
      ],
      services: [
        { name: "Combat Logic", port: "Browser", stack: "JavaScript", role: "Turn updates, health and mana, skill cooldowns, and randomized combat decisions" },
        { name: "Game Screens", port: "DOM", stack: "HTML / DOM API", role: "Lobby, battle interface, equipment views, and event-driven updates" },
        { name: "Visual Feedback", port: "CSS", stack: "CSS / JavaScript", role: "Effects, animation classes, and battle feedback" },
        { name: "Local Data", port: "Storage", stack: "localStorage", role: "Save item and character-state data in the browser" },
      ],
      highlights: [
        { label: "JavaScript Foundations", detail: "Implemented game behavior directly using JavaScript and browser APIs." },
        { label: "Rule-Based Behavior", detail: "Coordinated turns, skills, resource checks, cooldowns, and randomized combat." },
        { label: "Local Persistence", detail: "Stored item and character data through localStorage." },
      ],
      shortDescription: "A browser game demonstrating JavaScript fundamentals through combat logic, interface events, and local saved data.",
      longDescription: `Purpose
A foundations project for learning how to organize interactive application logic without a frontend framework.

Implementation
• HTML screens and CSS styling connected through DOM events.
• JavaScript functions for combat, turns, resource checks, and skill cooldowns.
• Randomized decisions in combat behavior.
• localStorage for item and character data.
• Animation classes and visual effects for player feedback.

What this demonstrates
My JavaScript foundation, interest in logic-heavy systems, and ability to connect data, rules, and interfaces.

Next improvement
Separate pure game rules from DOM manipulation, add automated tests, and document the setup and gameplay. Keep this as a supporting foundations project rather than the main evidence for AI or DevOps work.`,
      technologies: ["JavaScript", "HTML", "CSS", "DOM API", "localStorage"],
      githubUrl: "https://github.com/thanoka/War_Dragons",
      documentationUrl: "",
      images: [
        { type: "image", url: "/war-dragons.png", alt: "War Dragons battle screen", caption: "Battle interface with JavaScript-driven combat and visual feedback." },
        { type: "image", url: "/war-dragons-lobby.png", alt: "War Dragons lobby", caption: "Browser game lobby and navigation." },
        { type: "image", url: "/war-dragons-item.png", alt: "War Dragons equipment screen", caption: "Item and equipment interface." },
      ],
    },
  ],

  experienceBoard: {
    sectionEyebrow: "The Field Board • Project Experience",
    sectionTitle: "What I've Built & Where I'm Heading",
    crestNumeral: "IV",
    sectionBadge: "Personal & Academic Projects",
    fieldLogTag: "Project Contributions",
    milestones: [
      {
        id: "exp-1",
        period: "Featured project",
        header: "Developer & System Designer · Lumi",
        organization: "Independent Project",
        location: "Bangkok, Thailand",
        color: "#d4a754",
        badge: "AI Prototype",
        techStack: ["TypeScript", "Python", "React Native", "YOLO", "Docker Compose"],
        projectLinkText: "Explore Lumi ↗",
        highlights: [
          "Designed a client and three backend services connecting computer vision, voice input, navigation logic, and Thai guidance.",
          "Integrated object detection, text-region detection, and OCR with map-based location matching.",
          "Implemented graph routing, navigation states, warning priorities, and rerouting behavior.",
          "Added a navigation simulator, local startup scripts, and Docker Compose configuration.",
        ],
      },
      {
        id: "exp-2",
        period: "Selected projects",
        header: "Developer · Web Applications & Game Systems",
        organization: "Personal & Academic Projects",
        location: "Bangkok, Thailand",
        color: "#2e7d32",
        badge: "Software Projects",
        techStack: ["JavaScript", "TypeScript", "Next.js", "MongoDB", "HTTP APIs"],
        projectLinkText: "Explore Supporting Projects ↗",
        highlights: [
          "Built web application prototypes connecting user interfaces, authentication, databases, and external services.",
          "Implemented file-storage and subscription integrations in Nyx Cloud.",
          "Developed persistent game-state and movement rules in Loremaster.",
          "Built browser game interactions and combat logic in JavaScript through War Dragons.",
        ],
      },
    ],
    research: {
      header: "Next Development Goals",
      detail: "My next focus is making project behavior measurable and repeatable: automated tests, AI evaluation, CI/CD, Linux and networking fundamentals, secure deployment, and observability. These are development goals, not claims of existing production expertise.",
      color: "#ffd88a",
      tags: ["Automated Tests", "AI Evaluation", "CI/CD", "Secure Deployment"],
      footerNote: "Cabin Workbench • Planned Development",
    },
    dispatch: {
      header: "Let's Build Something Useful",
      detail: "Seeking an internship in AI engineering, DevOps, or platform engineering. Interested in teams building useful tools, automating workflows, and improving real systems.",
      color: "#d4a754",
    },
  },

  roomMetadata: [
    { index: 0, id: "about", name: "The Hearth", duty: "About", crest: "I", subtitle: "Profile & Education", compass: "North Wall" },
    { index: 1, id: "skills", name: "The Study", duty: "Skills", crest: "II", eyebrow: "The Study • Skills & Development", title: "AI, Systems & Engineering Foundations", subtitle: "Project Experience & Planned Learning", compass: "East Wall" },
    { index: 2, id: "projects", name: "The Library", duty: "Projects", crest: "III", subtitle: "Selected Projects & Source Code", compass: "South Wall" },
    { index: 3, id: "experience", name: "The Field Board", duty: "Experience", crest: "IV", eyebrow: "The Field Board • Project Experience", title: "What I've Built & Where I'm Heading", subtitle: "Contributions, Learning Goals & Contact", compass: "West Wall" },
  ],
};

export default portfolioData;
