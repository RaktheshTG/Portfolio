export const heroLetters = ['R', 'A', 'K', 'T', 'H', 'E', 'S', 'H']
export const heroLettersLine2 = ['T', ' ', 'G']

export const techList = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'Express',
  'MySQL', 'PostgreSQL', 'LangGraph', 'Pinecone', 'Groq', 'Cohere',
]

export const skills = {
  proficient: ['React', 'Next.js', 'Node.js', 'Express', 'TypeScript', 'MySQL', 'Tailwind CSS', 'Git'],
  familiar: ['Python', 'LangGraph', 'PostgreSQL', 'Pinecone', 'Cohere', 'Groq', 'GSAP'],
  learning: ['FastAPI', 'Prisma', 'Docker', 'System Design'],
}

export const currentlyExploring = [
  {
    title: 'AI Engineering Roadmap',
    detail: "Working through Chip Huyen's AI Engineering, Sebastian Raschka's LLM book, and Anthropic's Building Effective Agents.",
  },
  {
    title: 'Full-Stack From Scratch',
    detail: 'Rebuilding full-stack fundamentals with a Next.js + PostgreSQL + Prisma project, outside the portfolio.',
  },
  {
    title: 'Galaxy Buds Companion',
    detail: 'Building an app bringing Samsung Galaxy Buds proximity-pairing to non-Samsung Android phones.',
  },
]

export const achievements = [
  { label: 'CGPA', value: '9.36', detail: 'B.Tech Computer Science, VIT Chennai — Class of 2028' },
  { label: 'Paper in progress', value: '01', detail: 'Applied systems paper using PaperTrail and CustomerSupportAI as case studies — targeting IEEE/Springer student-friendly conferences' },
  { label: 'Second paper in progress', value: '02', detail: '"Cloud-Native Architectures for Retrieval-Augmented Generation at Scale" — a mini review' },
]


export const projects = [
  {
    number: '01',
    name: 'PaperTrail',
    type: 'RAG / Inference',
    description:
      'A RAG (retrieval-augmented generation) pipeline built with Cohere embeddings, Pinecone vector search, and Groq for inference.',
    tags: ['Cohere', 'Pinecone', 'Groq'],
    color: 'signal',
    link: 'INSERT_PAPERTRAIL_GITHUB_LINK_HERE',
  },
  {
    number: '02',
    name: 'CustomerSupportAI',
    type: 'Multi-Agent System',
    description:
      'A multi-agent customer support system built with LangGraph, featuring SQLite-backed memory, RAG-grounded responses, and a human-in-the-loop approval gate before actions are taken.',
    tags: ['LangGraph', 'SQLite', 'RAG'],
    color: 'quiet',
    link: 'INSERT_CUSTOMERSUPPORTAI_GITHUB_LINK_HERE',
  },
  {
    number: '03',
    name: 'UniFocus',
    type: 'Full-Stack App',
    description:
      'A full-stack student productivity app with React, Express, and MySQL (hosted on Aiven) — 28 REST API endpoints and bcrypt password authentication. Deployed and live.',
    tags: ['React', 'Express', 'MySQL'],
    color: 'signal',
    link: 'INSERT_UNIFOCUS_GITHUB_LINK_HERE',
  },
  {
    number: '04',
    name: 'Galaxy Buds Companion',
    type: 'Android / Bluetooth',
    description:
      'An in-progress app bringing Samsung Galaxy Buds proximity-pairing features to non-Samsung Android phones.',
    tags: ['Android', 'Bluetooth', 'In Progress'],
    color: 'quiet',
    link: 'INSERT_GALAXYBUDS_GITHUB_LINK_HERE',
  },
]

export const socials = {
  github: 'https://github.com/RaktheshTG',
  linkedin: 'INSERT_LINKEDIN_LINK_HERE',
  email: 'INSERT_EMAIL_HERE',
}
