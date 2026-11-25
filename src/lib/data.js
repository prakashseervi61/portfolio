import marginaliaImg from '../assets/images/projects/marginalia-rag.webp';
import taskflowDashboardImg from '../assets/images/projects/taskflow-dashboard.webp';
import taskflowJobImg from '../assets/images/projects/taskflow-job.webp';
import aiVisionImg from '../assets/images/projects/ai-vision.webp';
import semoraImg from '../assets/images/projects/semora-cgpa.webp';
import splitupImg from '../assets/images/projects/splitup.webp';
import myflixImg from '../assets/images/projects/myflix.webp';

const GH = 'https://github.com/prakashseervi61';

export const GENERAL_INFO = {
  email: 'prakashseervi1503@gmail.com',
  github: 'https://github.com/prakashseervi61',
  linkedin: 'https://www.linkedin.com/in/prakashv-dev/',
  location: 'Coimbatore, India',
  resume: '/portfolio/Prakash-Resume.pdf',
  headline: 'Full-Stack Developer',
  tagline:
    'I build web apps end to end — React frontends, Spring Boot & FastAPI backends, and applied AI.',
  education: 'B.Tech IT · Sri Krishna College of Technology · Class of 2028',
  summary:
    'Pre-final year B.Tech Information Technology student (graduating 2028) building production-style projects: React frontends, Spring Boot and FastAPI backends, and a self-hosted RAG system.',
  stats: [
    { value: '24+', label: 'Public Repositories' },
    { value: '400+', label: 'Automated Tests' },
    { value: '200+', label: 'LeetCode Problems' },
  ],
};

const icon = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;
// A few projects have no devicon entry; simple-icons covers them.
const simpleIcon = (slug) => `https://cdn.jsdelivr.net/npm/simple-icons@13/icons/${slug}.svg`;

export const MY_STACK = {
  languages: [
    { name: 'Python', icon: icon('python/python-original.svg') },
    { name: 'Java', icon: icon('java/java-original.svg') },
    { name: 'JavaScript', icon: icon('javascript/javascript-original.svg') },
    { name: 'TypeScript', icon: icon('typescript/typescript-original.svg') },
    { name: 'SQL', icon: icon('mysql/mysql-original.svg') },
    { name: 'C++', icon: icon('cplusplus/cplusplus-original.svg') },
    { name: 'Bash', icon: icon('bash/bash-original.svg') },
  ],
  frontend: [
    { name: 'React 19', icon: icon('react/react-original.svg') },
    { name: 'Next.js', icon: icon('nextjs/nextjs-original.svg') },
    { name: 'Tailwind CSS', icon: icon('tailwindcss/tailwindcss-original.svg') },
    { name: 'HTML5', icon: icon('html5/html5-original.svg') },
    { name: 'CSS3', icon: icon('css3/css3-original.svg') },
    { name: 'Framer Motion', icon: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
    { name: 'GSAP', icon: 'https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg' },
    { name: 'TensorFlow.js', icon: icon('tensorflow/tensorflow-original.svg') },
    { name: 'Leaflet', icon: simpleIcon('leaflet') },
  ],
  backend: [
    { name: 'Spring Boot', icon: icon('spring/spring-original.svg') },
    { name: 'FastAPI', icon: icon('fastapi/fastapi-original.svg') },
    { name: 'Node.js', icon: icon('nodejs/nodejs-original.svg') },
    { name: 'REST APIs', icon: simpleIcon('postman') },
    { name: 'JWT Auth', icon: simpleIcon('jsonwebtokens') },
  ],
  ai: [
    { name: 'Machine Learning', icon: icon('scikitlearn/scikitlearn-original.svg') },
    { name: 'RAG', icon: simpleIcon('openai') },
    { name: 'LLM APIs', icon: 'https://cdn.worldvectorlogo.com/logos/gemini-ai.svg' },
    { name: 'ChromaDB', icon: icon('python/python-original.svg') },
    { name: 'PyTorch', icon: icon('pytorch/pytorch-original.svg') },
  ],
  data: [
    { name: 'PostgreSQL', icon: icon('postgresql/postgresql-original.svg') },
    { name: 'MySQL', icon: icon('mysql/mysql-original.svg') },
    { name: 'SQLite', icon: icon('sqlite/sqlite-original.svg') },
    { name: 'Redis', icon: icon('redis/redis-original.svg') },
  ],
  devops: [
    { name: 'Git', icon: icon('git/git-original.svg') },
    { name: 'GitHub Actions', icon: icon('github/github-original.svg') },
    { name: 'Docker', icon: icon('docker/docker-original.svg') },
    { name: 'Linux', icon: icon('linux/linux-original.svg') },
    { name: 'Postman', icon: icon('postman/postman-original.svg') },
  ],
};

export const PROJECTS = [
  {
    title: 'QA-Assistant "Marginalia"',
    slug: 'qa-assistant-marginalia',
    sourceCode: `${GH}/QA-Assistant`,
    year: 'Jun 2026 – Sep 2026',
    categories: ['AI/ML', 'Backend'],
    problem: 'Most RAG chat tools hallucinate — they invent answers or force you to dig through sources to verify every claim.',
    solution: `
      Self-hosted RAG document Q&A where every answer ships with per-claim source citations and confidence scores.
      <ul>
        <li>🔒 Fully local — embeddings and history never leave your machine</li>
        <li>📎 Referenced-sources panel with a confidence score per citation</li>
        <li>🧠 Semantic chunking, BGE cross-encoder reranking and local embeddings</li>
        <li>🛡️ PII and prompt-injection guardrails</li>
        <li>🧪 325 pytest tests with a RAGAS evaluation gate in CI</li>
      </ul>
    `,
    challenge: `Keeping answers grounded in source documents instead of hallucinating — solved with per-chunk citation tracking and a confidence score that drops when source overlap is low.`,
    role: `
      Solo Developer <br/>
      <ul>
        <li>✅ Built the RAG pipeline end to end with Python, FastAPI and ChromaDB</li>
        <li>🔌 Integrated the Gemini LLM API for grounded answer generation</li>
        <li>🐳 Containerised the stack with Docker and automated CI with GitHub Actions</li>
      </ul>
    `,
    techStack: ['Python', 'FastAPI', 'React', 'ChromaDB', 'Gemini API', 'Docker'],
    thumbnail: marginaliaImg,
    images: [marginaliaImg],
  },
  {
    title: 'TaskFlow',
    slug: 'taskflow',
    sourceCode: `${GH}/TaskFlow`,
    year: 'Jul 2026 – Sep 2026',
    categories: ['Backend', 'Full Stack'],
    problem: 'Background jobs run twice or vanish when workers crash — there is no exactly-once execution guarantee.',
    solution: `
      Background job processing platform — REST API enqueues jobs, Redis holds them, headless workers execute with exponential-backoff retries and a dead-letter queue.
      <ul>
        <li>♻️ Exactly-once execution via atomic conditional UPDATE claims</li>
        <li>📊 Live dashboard for pending, running, completed, failed and retrying jobs</li>
        <li>🧪 76 JUnit tests, cursor pagination and Flyway migrations</li>
      </ul>
    `,
    challenge: `Preventing duplicate job execution across worker replicas — solved with atomic conditional UPDATE claims so each job runs exactly once even under concurrency.`,
    role: `
      Solo Developer <br/>
      <ul>
        <li>✅ Designed the REST enqueue contract and the Redis-backed queue</li>
        <li>🔁 Implemented retry/backoff logic and the dead-letter queue</li>
        <li>✅ Verified exactly-once execution: 12 jobs across 3 worker replicas, 0 duplicates</li>
      </ul>
    `,
    techStack: ['Java 21', 'Spring Boot', 'Redis', 'PostgreSQL', 'React 19', 'Docker Compose'],
    thumbnail: taskflowDashboardImg,
    images: [taskflowDashboardImg, taskflowJobImg],
  },
  {
    title: 'AI Vision — Edge Object Detection',
    slug: 'ai-vision',
    sourceCode: `${GH}/Object-Detection`,
    year: 'Jan 2026 – Feb 2026',
    categories: ['AI/ML', 'Frontend'],
    problem: 'Cloud object detection uploads your images to third-party servers — a privacy risk with ongoing server cost.',
    solution: `
      On-device object detection that runs entirely in the browser — images are processed locally via WebGL and never uploaded.
      <ul>
        <li>🎯 Detects 80+ object classes with real-time bounding boxes</li>
        <li>⚡ Sub-100ms inference on-device via ONNX Runtime Web</li>
        <li>📱 Installable progressive web app with static-frame and live-camera modes</li>
      </ul>
    `,
    challenge: `Running YOLO object detection entirely client-side without uploading images — solved with ONNX Runtime Web and WebGL hardware acceleration for sub-100ms inference.`,
    role: `
      Solo Developer <br/>
      <ul>
        <li>✅ Built the detection pipeline with YOLO ONNX models in the browser</li>
        <li>🎛️ Added a configurable confidence threshold and live result panel</li>
        <li>📦 Packaged as an offline-capable PWA</li>
      </ul>
    `,
    techStack: ['React 19', 'Vite', 'ONNX Runtime Web', 'WebGL', 'PWA'],
    thumbnail: aiVisionImg,
    images: [aiVisionImg],
  },
  {
    title: 'Fleet Management & GPS Tracking',
    slug: 'fleet-management',
    sourceCode: `${GH}/Fleet-Management-and-GPS-Vehicle-Tracking-System`,
    year: 'Apr 2026 – Jun 2026',
    categories: ['Backend', 'Full Stack'],
    problem: 'Fleet operators lack unified visibility — GPS tracking, geofence alerts, and role-based access are scattered across disconnected tools.',
    solution: `
      Full-stack fleet system with live GPS vehicle tracking on interactive maps, geofence entry/exit alerts and telemetry for speeding, idling and harsh braking.
      <ul>
        <li>🗺️ Live map tracking with Leaflet and geofence alerts</li>
        <li>🔐 Stateless JWT authentication and role-based access control across 6 roles</li>
        <li>🧾 Automated trip-compliance checks across documents and maintenance</li>
      </ul>
    `,
    challenge: `Securing 11 REST controllers with stateless JWT and role-based access across 6 user roles — solved with Spring Security method-level annotations and a custom role hierarchy.`,
    role: `
      Solo Developer <br/>
      <ul>
        <li>✅ Secured 11 REST controllers with Spring Security JWT</li>
        <li>🛰️ Built the telemetry pipeline for driving-behaviour events</li>
        <li>🧑‍🤝‍🧑 Added role-based access control for 6 user roles</li>
      </ul>
    `,
    techStack: ['Spring Boot 3.5', 'Spring Security', 'React 19', 'MySQL', 'Leaflet'],
    thumbnail: null,
    images: [],
  },
  {
    title: 'Semora — CGPA Calculator',
    slug: 'semora-cgpa',
    sourceCode: `${GH}/CGPA-CALC`,
    liveUrl: `${GH}/CGPA-CALC`,
    year: 'Jul 2026',
    categories: ['Frontend'],
    problem: 'Students need backend accounts to track grades — their academic data lives on someone else\'s server.',
    solution: `
      CGPA calculator for engineering students — real-time SGPA/CGPA tracking, grade trends and multi-profile support. No backend: every profile stays in the browser.
      <ul>
        <li>📊 Live grade distribution and target-progress visualisation</li>
        <li>📈 Semester-over-semester trend charts with Recharts</li>
        <li>🔐 Local profile sign-in with per-student data separation</li>
      </ul>
    `,
    challenge: `Keeping all student data isolated in the browser without a backend — solved with per-profile localStorage keys and a grade scale editor that recalculates SGPA/CGPA in real time.`,
    role: `
      Solo Developer <br/>
      <ul>
        <li>✅ Implemented the SGPA/CGPA calculation engine and grade scale editor</li>
        <li>📈 Built the dashboard and trends views with Recharts</li>
        <li>🎨 Designed a fully responsive, mobile-first interface</li>
      </ul>
    `,
    techStack: ['React', 'Recharts', 'React Router', 'Tailwind CSS', 'Vite'],
    thumbnail: semoraImg,
    images: [semoraImg],
  },
  {
    title: 'SplitUp',
    slug: 'splitup',
    sourceCode: `${GH}/splitup`,
    year: '2026',
    categories: ['Frontend', 'Full Stack'],
    problem: 'Splitting expenses means chasing friends, manual spreadsheets, and copy-pasting payment details between apps.',
    solution: `
      Group expense splitting app — settle shared expenses in one tap with UPI deep-links for instant payments. No spreadsheets, no chasing anyone.
      <ul>
        <li>💸 Split group expenses and settle balances instantly via UPI</li>
        <li>📱 Responsive, installable-feeling UI built with Next.js and TypeScript</li>
      </ul>
    `,
    challenge: `Generating UPI deep-links that pre-fill payee, amount and note so users can settle expenses in one tap — solved with a UPI URL builder that encodes payment details into a clickable link.`,
    role: `
      Solo Developer <br/>
      <ul>
        <li>✅ Built the expense-splitting and settlement logic</li>
        <li>🎨 Designed the marketing site and product UI in Next.js + Tailwind</li>
      </ul>
    `,
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    thumbnail: splitupImg,
    images: [splitupImg],
  },
  {
    title: 'myFlix',
    slug: 'myflix',
    sourceCode: `${GH}/myFlix`,
    liveUrl: 'https://prakashseervi61.github.io/myFlix/',
    year: 'Jun 2026',
    categories: ['Frontend'],
    problem: 'Movie search feels sluggish — API calls fire on every keystroke, hammering the server and lagging the UI.',
    solution: `
      Movie discovery app over the live OMDB API with debounced search, watchlist and SPA navigation.
      <ul>
        <li>🔍 Debounced live search across the OMDB catalogue</li>
        <li>🎬 Movie detail pages with ratings, plots, cast and trailers</li>
        <li>📱 Responsive streaming-style interface built with React</li>
      </ul>
    `,
    challenge: `Keeping search responsive while querying the OMDB API on every keystroke — solved with a debounced search hook that waits 300ms after the user stops typing before firing the API request.`,
    role: `
      Solo Developer <br/>
      <ul>
        <li>✅ Built the app from scratch with React and JavaScript</li>
        <li>🔄 Integrated the OMDB API with debounced search handling</li>
        <li>🚀 Deployed to GitHub Pages</li>
      </ul>
    `,
    techStack: ['React', 'JavaScript', 'OMDB API', 'Vite'],
    thumbnail: myflixImg,
    images: [myflixImg],
  },
  {
    title: 'logcli',
    slug: 'logcli',
    sourceCode: `${GH}/logcli`,
    year: '2026',
    categories: ['Backend', 'CLI'],
    problem: '`grep` doesn\'t understand structured logs — JSON, logfmt, and OpenTelemetry OTLP each need a different parser.',
    solution: `
      Fast, local-first log viewer and processor for JSON, logfmt, plain text and OpenTelemetry OTLP logs.
      <ul>
        <li>🔍 Boolean query language with and/or/not, parentheses and like operators</li>
        <li>📋 Interactive TUI with declarative config and PII redaction</li>
        <li>🚨 Alert rules and compressed log support</li>
        <li>🧪 Native database index with full test coverage</li>
      </ul>
    `,
    challenge: `Parsing multiple log formats (JSON, logfmt, plain text, OTLP) with a single query language — solved with a format-agnostic parser pipeline and boolean expression engine.`,
    role: `
      Solo Developer <br/>
      <ul>
        <li>✅ Built the log parsing engine supporting JSON, logfmt, plain text and OTLP</li>
        <li>🎛️ Implemented boolean query language and interactive TUI</li>
        <li>📦 Published as native binary with no Docker required at runtime</li>
      </ul>
    `,
    techStack: ['CLI', 'TUI', 'OpenTelemetry', 'Log Processing'],
    thumbnail: null,
    images: [],
  },
];

export const MY_EXPERIENCE = [
  {
    title: 'Independent Software Developer',
    company: 'Personal & Open-Source Projects',
    duration: 'Sep 2024 – Present',
    details:
      'Delivered production-style applications across React, Spring Boot and FastAPI, backed by automated test suites and code-review checklists on GitHub Actions CI.',
    bullets: [
      'Architected 8+ full-stack and AI applications spanning RAG, edge ML, job queues and fleet tracking',
      'Maintained 400+ automated unit/integration tests across pytest, JUnit and Vitest, gated on GitHub Actions CI',
      'Shipped solo end to end — database schema, backend APIs, React frontend and deployment',
    ],
  },
  {
    title: 'B.Tech, Information Technology',
    company: 'Sri Krishna College of Technology, Coimbatore',
    duration: 'Sep 2024 – Expected 2028 · CGPA 7.58/10',
    details:
      'Coursework in data structures and algorithms, object-oriented programming and database management systems.',
  },
];

export const CERTIFICATIONS = [
  'freeCodeCamp — Responsive Web Design Certification',
  'LeetCode — 200+ problems solved in data structures and algorithms',
];