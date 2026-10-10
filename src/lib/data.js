import marginaliaImg from '../assets/images/projects/marginalia-rag.webp';
import taskflowDashboardImg from '../assets/images/projects/taskflow-dashboard.webp';
import taskflowJobImg from '../assets/images/projects/taskflow-job.webp';
import aiVisionImg from '../assets/images/projects/ai-vision.webp';
import semoraImg from '../assets/images/projects/semora-cgpa.webp';
import splitupImg from '../assets/images/projects/splitup.webp';
import myflixImg from '../assets/images/projects/myflix.webp';

const GH = 'https://github.com/prakashseervi61';

export const GENERAL_INFO = {
  name: 'Prakash',
  role: 'Software Developer',
  email: 'prakashseervi1503@gmail.com',
  phone: '+91 78458 65066',
  location: 'Coimbatore, India',
  summary:
    'Pre-final year B.Tech Information Technology student (graduating 2028) building production-style projects: React frontends, Spring Boot and FastAPI backends, and a self-hosted RAG system.',
  stats: [
    { value: '24+', label: 'Public Repositories' },
    { value: '400+', label: 'Automated Tests' },
    { value: '200+', label: 'LeetCode Problems' },
  ],
  oldPortfolio: 'https://prakashseervi61.github.io/portfolio/',
};

export const SOCIAL_LINKS = [
  { name: 'github', url: `${GH}` },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/prakashv-dev/' },
  { name: 'leetcode', url: 'https://leetcode.com/u/r5rxBOU1qw/' },
  { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

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
    description: `
      A privacy-first, self-hosted Retrieval-Augmented Generation application that answers questions over your own
      documents. Upload <strong>PDF, DOCX or TXT</strong> files and ask questions in natural language — every answer is
      grounded in your documents and shipped with <strong>per-claim source citations</strong>, confidence scores and
      streamed responses.
      <ul>
        <li>🔒 Fully local storage — embeddings and history never leave your machine</li>
        <li>📎 Referenced-sources panel with a confidence score per citation</li>
        <li>🧠 Semantic chunking, BGE cross-encoder reranking and local embeddings</li>
        <li>🛡️ PII and prompt-injection guardrails</li>
        <li>🧪 325 pytest tests with a RAGAS evaluation gate in CI</li>
      </ul>
    `,
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
    description: `
      An asynchronous background-job processing platform. A REST API enqueues jobs, Redis holds them, and a separate
      headless worker executes them — with <strong>exponential-backoff retries</strong> and a
      <strong>dead-letter queue</strong> for inspecting failed jobs.
      <ul>
        <li>♻️ Exactly-once execution via atomic conditional UPDATE claims</li>
        <li>📊 Live dashboard for pending, running, completed, failed and retrying jobs</li>
        <li>🧪 76 JUnit tests, cursor pagination and Flyway migrations</li>
      </ul>
    `,
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
    description: `
      An on-device object detection platform that runs entirely in the browser. Inference is
      <strong>hardware-accelerated through WebGL</strong>, so images are processed locally and
      <strong>never uploaded</strong> — total data integrity with zero server cost.
      <ul>
        <li>🎯 Detects 80+ object classes with real-time bounding boxes</li>
        <li>⚡ Sub-100ms inference on-device via ONNX Runtime Web</li>
        <li>📱 Installable progressive web app with static-frame and live-camera modes</li>
      </ul>
    `,
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
    description: `
      A full-stack fleet management system with <strong>live GPS vehicle tracking</strong> on interactive maps,
      geofence entry/exit alerts and telemetry events for speeding, idling and harsh braking.
      <ul>
        <li>🗺️ Live map tracking with Leaflet and geofence alerts</li>
        <li>🔐 Stateless JWT authentication and role-based access control across 6 roles</li>
        <li>🧾 Automated trip-compliance checks across documents and maintenance</li>
      </ul>
    `,
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
    description: `
      A CGPA calculator built for engineering students — real-time SGPA/CGPA tracking, grade trends and
      multi-profile support. <strong>No backend</strong>: every profile and semester stays in the browser.
      <ul>
        <li>📊 Live grade distribution and target-progress visualisation</li>
        <li>📈 Semester-over-semester trend charts with Recharts</li>
        <li>🔐 Local profile sign-in with per-student data separation</li>
      </ul>
    `,
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
    description: `
      A group-expense splitting app. Split shared expenses with friends and settle up in one tap —
      <strong>no spreadsheets, no chasing anyone</strong> — with UPI deep-links for instant payments.
      <ul>
        <li>💸 Split group expenses and settle balances instantly via UPI</li>
        <li>📱 Responsive, installable-feeling UI built with Next.js and TypeScript</li>
      </ul>
    `,
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
    description: `
      A movie discovery web app backed by the live OMDB API. Browse trending films, search thousands of titles and
      build a watchlist — with smooth SPA navigation and instant results.
      <ul>
        <li>🔍 Debounced live search across the OMDB catalogue</li>
        <li>🎬 Movie detail pages with ratings, plots, cast and trailers</li>
        <li>📱 Responsive streaming-style interface built with React</li>
      </ul>
    `,
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
];

export const MY_EXPERIENCE = [
  {
    title: 'Independent Software Developer',
    company: 'Personal & Open-Source Projects',
    duration: 'Sep 2024 – Present',
    details:
      'Delivered production-style applications across React, Spring Boot and FastAPI, backed by automated test suites and code-review checklists on GitHub Actions CI.',
  },
  {
    title: 'B.Tech, Information Technology',
    company: 'Sri Krishna College of Technology, Coimbatore',
    duration: 'Sep 2024 – Expected 2028 · CGPA 7.58/10',
    details:
      'Coursework in data structures and algorithms, object-oriented programming and database management systems.',
  },
];

export const CERIFICATIONS = [
  'freeCodeCamp — Responsive Web Design Certification',
  'LeetCode — 200+ problems solved in data structures and algorithms',
];