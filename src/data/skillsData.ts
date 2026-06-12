import {
  Monitor,
  Code2,
  Atom,
  Boxes,
  FileCode2,
  Braces,
  Cpu,
  GitCommitHorizontal,
  Cable,
  Palette,
  Wind,
  GitBranch,
  Layers3,
  Activity,
  Zap,
  TestTube,
  Wrench,
  PlugZap,
  Cloud,
  Database,
  Server,
} from 'lucide-react'
import { SkillGroup } from '../types/skill'

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend Frameworks',
    iconTheme: {
      icon: Monitor,
      color: 'cyan',
    },
    skills: [
      { name: 'React.js', icon: Atom },
      { name: 'Next.js (familiar)', icon: Monitor },
      { name: 'Angular (legacy)', icon: Boxes },
    ],
  },

  {
    category: 'Languages & Core Concepts',
    iconTheme: {
      icon: Code2,
      color: 'amber',
    },
    skills: [
      { name: 'TypeScript', icon: FileCode2 },
      { name: 'JavaScript ES6+', icon: Braces },
      { name: 'Event Loop', icon: Cpu },
      { name: 'Closures', icon: GitCommitHorizontal },
      { name: 'Async/Await', icon: Cable },
    ],
  },

  {
    category: 'UI & Styling',
    iconTheme: {
      icon: Palette,
      color: 'pink',
    },
    skills: [
      { name: 'HTML5', icon: Code2 },
      { name: 'CSS3', icon: Palette },
      { name: 'SASS', icon: Palette },
      { name: 'Tailwind CSS', icon: Wind },
      { name: 'Material UI', icon: Boxes },
      { name: 'Responsive Design', icon: Monitor },
    ],
  },

  {
    category: 'State Management & Architecture',
    iconTheme: {
      icon: Layers3,
      color: 'purple',
    },
    skills: [
      { name: 'Redux Toolkit', icon: GitBranch },
      { name: 'Context API', icon: Cpu },
      { name: 'React Query', icon: Activity },
      { name: 'Zustand', icon: Layers3 },
    ],
  },

  {
    category: 'Build & Tools',
    iconTheme: {
      icon: Wrench,
      color: 'orange',
    },
    skills: [
      { name: 'Webpack', icon: Boxes },
      { name: 'Vite', icon: Zap },
      { name: 'npm', icon: Boxes },
      { name: 'Git', icon: GitBranch },
    ],
  },

  {
    category: 'Testing & Quality',
    iconTheme: {
      icon: TestTube,
      color: 'emerald',
    },
    skills: [
      { name: 'Jest', icon: TestTube },
      { name: 'React Testing Library', icon: TestTube },
      { name: 'Unit Testing', icon: Cpu },
      { name: 'Integration Testing', icon: Layers3 },
      { name: 'WCAG', icon: Monitor },
    ],
  },

  {
    category: 'APIs & Real-Time',
    iconTheme: {
      icon: PlugZap,
      color: 'red',
    },
    skills: [
      { name: 'REST APIs', icon: PlugZap },
      { name: 'Server-Sent Events (SSE)', icon: Activity },
      { name: 'WebSocket', icon: Cable },
      { name: 'Fetch API', icon: PlugZap },
      { name: 'Axios', icon: Activity },
    ],
  },

  {
    category: 'DevOps & CI/CD',
    iconTheme: {
      icon: GitBranch,
      color: 'sky',
    },
    skills: [
      { name: 'GitHub Actions', icon: GitBranch },
      { name: 'Jenkins', icon: Activity },
      { name: 'CI/CD Pipelines', icon: GitBranch },
      { name: 'Agile/Scrum', icon: Layers3 },
      { name: 'Docker (familiar)', icon: Boxes },
      { name: 'AWS EC2 (familiar)', icon: Cloud },
    ],
  },

  {
    category: 'Monitoring & Performance',
    iconTheme: {
      icon: Activity,
      color: 'lime',
    },
    skills: [
      { name: 'Sentry', icon: Activity },
      { name: 'PostHog', icon: Activity },
      { name: 'Performance Optimization', icon: Zap },
      { name: 'Profiling', icon: Cpu },
      { name: 'Bundle Analysis', icon: Boxes },
    ],
  },

  {
    category: 'Backend & Databases (Familiar)',
    iconTheme: {
      icon: Database,
      color: 'indigo',
    },
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'Express.js', icon: Server },
      { name: 'MongoDB', icon: Database },
    ],
  },
]

 export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  export const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  }