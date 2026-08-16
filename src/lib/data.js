import myFlixImg from '../assets/images/myFlix.png';
import todoImg from '../assets/images/ToDo.png';

// Data file converted from reference/lib/data.ts to JavaScript
export const GENERAL_INFO = {
    email: 'prakashseervi1503@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Prakash, I am reaching out to you because...',

    oldPortfolio: 'https://prakashseervi61.github.io/portfolio/',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/prakashseervi61' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/prakash-v-446194326/' },
    { name: 'leetcode', url: 'https://leetcode.com/u/r5rxBOU1qw/' },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
        {
            name: 'React',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
            name: 'Next.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        },
        {
            name: 'Tailwind CSS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        },
        {
            name: 'Framer Motion',
            icon: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg',
        },
        {
            name: 'Redux',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
        },
        {
            name: 'HTML',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        },
        {
            name: 'CSS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        },
    ],
    backend: [
        {
            name: 'Spring Boot',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        },
        {
            name: 'Node.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
        {
            name: 'JPA',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        },
        {
            name: 'PostgreSQL',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        },
        {
            name: 'GitHub',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        },
        {
            name: 'VS Code',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        },
        {
            name: 'Docker',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        },
        {
            name: 'Swagger',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg',
        },
    ],
};

export const PROJECTS = [
    {
        title: 'myFlix',
        slug: 'myflix',
        liveUrl: 'https://prakashseervi61.github.io/myFlix/',
        year: 2025,
        description: `
      myFlix is a movie discovery web app that lets you search thousands of movies and shows live from the OMDB API. Each result shows rating, plot, year, and cast so you can quickly decide what to watch next.

      Key Features:<br/>
      <ul>
        <li>🔍 Debounced live search with instant results</li>
        <li>🎬 Movie details including rating, plot, and cast</li>
        <li>📱 Fully responsive UI built with Tailwind CSS</li>
        <li>⚡ Fast client-side rendering with React</li>
      </ul>
      `,
        role: `
      Solo Developer <br/>
      Owned the entire project:
      <ul>
        <li>✅ Built the app from scratch with React and JavaScript</li>
        <li>🎨 Designed a clean, responsive interface with Tailwind CSS</li>
        <li>🔄 Integrated the OMDB API with debounced search handling</li>
        <li>🚀 Deployed to GitHub Pages</li>
      </ul>
      `,
        techStack: ['React', 'Tailwind CSS', 'OMDB API', 'JavaScript'],
        thumbnail: myFlixImg,
        longThumbnail: myFlixImg,
        images: [
            myFlixImg,
            'https://placehold.co/1200x800?text=myFlix+2',
        ],
    },
    {
        title: 'Todo List Web App',
        slug: 'todo-list-web-app',
        liveUrl: 'https://prakashseervi61.github.io/Todo-List-Web-App/',
        year: 2025,
        description: `
      A clean and simple todo list web app built with React. Add, edit, and delete tasks, filter them by status, and keep everything in sync with localStorage so your list survives page reloads.
      `,
        role: `
      Solo Developer <br/>
      <ul>
        <li>✅ Implemented add, edit, delete, and filter functionality</li>
        <li>💾 Persisted tasks using localStorage</li>
        <li>🎨 Styled a minimal, responsive UI with Tailwind CSS</li>
      </ul>
      `,
        techStack: ['React', 'Tailwind CSS', 'localStorage'],
        thumbnail: todoImg,
        longThumbnail: todoImg,
        images: [
            todoImg,
            'https://placehold.co/1200x800?text=Todo+List+2',
        ],
    },
    {
        title: 'CGPA Calculator',
        slug: 'cgpa-calculator',
        sourceCode: 'https://github.com/prakashseervi61/CGPA-CALC',
        year: 2025,
        description: `
      A GPA and CGPA calculator that helps students track their academic performance. Compute semester GPA and cumulative CGPA, visualize results with interactive charts, and navigate between calculators with clean routes.
      `,
        role: `
      Solo Developer <br/>
      <ul>
        <li>✅ Built calculator logic for GPA and cumulative CGPA</li>
        <li>📊 Added visual charts using Recharts</li>
        <li>🧭 Structured multiple views with React Router</li>
      </ul>
      `,
        techStack: ['React', 'Recharts', 'React Router', 'Tailwind CSS'],
        thumbnail: 'https://placehold.co/600x400?text=CGPA+Calculator',
        longThumbnail: 'https://placehold.co/400x800?text=CGPA+Calculator',
        images: [
            'https://placehold.co/1200x800?text=CGPA+Calculator+1',
            'https://placehold.co/1200x800?text=CGPA+Calculator+2',
        ],
    },
    {
        title: '3D Solar System',
        slug: '3d-solar-system',
        sourceCode: 'https://github.com/prakashseervi61/3D-Solar-System-Website',
        year: 2025,
        description: `
      An interactive 3D solar system rendered entirely in the browser with Three.js. Explore orbiting planets with real textures, lighting, and free camera controls powered by WebGL.
      `,
        role: `
      Solo Developer <br/>
      <ul>
        <li>✅ Modeled planets and orbits in 3D using Three.js</li>
        <li>🔭 Added orbital animation and camera controls</li>
        <li>📝 Written in TypeScript for type safety</li>
      </ul>
      `,
        techStack: ['TypeScript', 'Three.js', 'WebGL'],
        thumbnail: 'https://placehold.co/600x400?text=3D+Solar+System',
        longThumbnail: 'https://placehold.co/400x800?text=3D+Solar+System',
        images: [
            'https://placehold.co/1200x800?text=3D+Solar+System+1',
            'https://placehold.co/1200x800?text=3D+Solar+System+2',
        ],
    },
    {
        title: 'QA Assistant',
        slug: 'qa-assistant',
        sourceCode: 'https://github.com/prakashseervi61/QA-Assistant',
        year: 2025,
        description: `
      A question-answering assistant that ingests PDF documents and answers questions about them. Uses a Retrieval-Augmented Generation (RAG) pipeline with an LLM to return grounded, context-aware answers.
      `,
        role: `
      Solo Developer <br/>
      <ul>
        <li>✅ Built a RAG pipeline for PDF question answering</li>
        <li>🧠 Integrated an LLM for answer generation</li>
        <li>📄 Processed and chunked PDF documents</li>
      </ul>
      `,
        techStack: ['Python', 'RAG', 'LLM', 'PDF Processing'],
        thumbnail: 'https://placehold.co/600x400?text=QA+Assistant',
        longThumbnail: 'https://placehold.co/400x800?text=QA+Assistant',
        images: [
            'https://placehold.co/1200x800?text=QA+Assistant+1',
            'https://placehold.co/1200x800?text=QA+Assistant+2',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Personal Portfolio Website',
        company: 'Self Project',
        duration: '2025',
        details:
            'Responsive portfolio built with React and Tailwind CSS with interactive UI components.',
    },
    {
        title: 'Self-learning & Skill Development',
        company: 'Personal Growth',
        duration: '2024 – Present',
        details:
            'Focused on mastering DSA in C++, building REST APIs with Spring Boot, and modern frontend with React.',
    },
];
