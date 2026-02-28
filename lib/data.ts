// ============================================================================
// Resume data — single source of truth for the entire site.
// Update this file when your resume changes.
// ============================================================================

import { asset } from "./utils";


export interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
  descriptions: string[];
  logo?: string;
  link?: string;
  linkLabel?: string;
  publicationLink?: string;
  publicationTitle?: string;
  publicationVenue?: string;
  /** One-line impact statement shown above bullets for featured roles */
  headline?: string;
  /** Tech tags shown below bullets for featured roles */
  technologies?: string[];
}

export interface SkillCategory {
  label: string;
  items: string[];
}

// ---------------------------------------------------------------------------
// Personal info
// ---------------------------------------------------------------------------

export const personal = {
  name: "Nicholas Stamatakis",
  email: "nicholas.nicos.stamatakis@gmail.com",
  phone: "(631) 809-0111",
  location: "Deer Park, NY",
  github: "https://github.com/nick-stamatakis",
  linkedin: "https://linkedin.com/in/nicholas-stamatakis",
  headshot: asset("/nick-headshot.jpg"),
  resume: asset("/NicholasStamatakisResume.pdf"),
  headline: "Full-stack engineer who ships products people use.",
  bio: `Built a full-stack exam prep platform serving 75,000+ users. Designed serverless data pipelines at Amazon. Published at ACM CCS 2025 in adversarial machine learning. CS & Applied Math at Stony Brook University.`,
};

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------

export const education = {
  school: "Stony Brook University Honors College",
  location: "Stony Brook, NY",
  degree:
    "B.S. in Computer Science and Applied Mathematics & Statistics, Specialization in Artificial Intelligence and Machine Learning",
  graduation: "Aug 2022 – May 2026",
  gpa: "3.85",
  logo: asset("/sbu.jpg"),
  highlights: [
    "Founder & VP of Web Development Club",
    "Dean's List",
    "Academic Achievement Award",
  ],
};

// ---------------------------------------------------------------------------
// Work — ordered most recent first, featured roles get headline + tech tags
// ---------------------------------------------------------------------------

export const experiences: Experience[] = [
  {
    title: "Software Development Engineer Intern",
    company: "Amazon",
    location: "New York, NY",
    date: "May 2025 – Aug 2025",
    logo: asset("/Amazon_logo.svg"),
    headline: "Serverless data pipeline expanding coverage 27× with 95% ML accuracy.",
    descriptions: [
      "Designed a serverless web-scraping pipeline with Scrapy on AWS Lambda, expanding coverage by ~27×.",
      "Integrated Claude 3.7 Sonnet via AWS Bedrock for NLP, yielding 95.35% accuracy on backtested datasets.",
      "Automated infrastructure deployment with AWS CDK, managing 100K+ JSON files in S3.",
      "Orchestrated a Step Function state machine with integration tests to validate the end-to-end CI/CD pipeline.",
      "Instrumented 10+ CloudWatch dashboards monitoring program health and error metrics.",
    ],
    technologies: ["AWS Lambda", "AWS CDK", "Scrapy", "AWS Bedrock", "S3", "Step Functions", "CloudWatch"],
  },
  {
    title: "Software Engineer Intern",
    company: "West Palm Test Prep",
    location: "West Palm Beach, FL",
    date: "Oct 2023 – Apr 2025",
    logo: asset("/whiz-logo.png"),
    link: "https://www.whiz.study",
    linkLabel: "whiz.study",
    headline: "AI exam prep platform with 75,000+ users.",
    descriptions: [
      "Launched whiz.study, a full-stack preparation platform serving 75,000+ users using a TurboRepo monorepo with Next.js, Expo (React Native), and Express across 6 apps with a 93-model PostgreSQL schema via Prisma ORM.",
      "Built an agentic AI tutor using Vercel AI SDK, OpenRouter, and a Bun WebSocket server.",
      "Engineered an adaptive study plan engine (\"Road to 1600\") that builds personalized lesson sequences using topological sorting, all as pure functions with 1,000+ automated tests.",
    ],
    technologies: ["TypeScript", "Next.js", "React Native", "Express", "TurboRepo", "Vercel AI SDK", "PostgreSQL", "Prisma", "Bun"],
  },
  {
    title: "Software Engineer Intern",
    company: "Zebra Technologies",
    location: "Holtsville, NY",
    date: "May 2024 – Aug 2024",
    logo: asset("/zebra-technologies-logo.svg"),
    descriptions: [
      "Engineered sentiment analysis system using Large Language Models, processing 200+ monthly feedback entries.",
      "Implemented semantic search over 8K+ JIRA tickets using Retrieval-Augmented Generation (RAG).",
      "Optimized a Qdrant Vector DB for efficient storage of System Problem Reports; reduced data retrieval time by 70% and enhanced report generation for 20,000 performance entries.",
    ],
  },
  {
    title: "Adversarial ML Researcher",
    company: "University of Connecticut",
    location: "Storrs, CT",
    date: "May 2023 – Oct 2023",
    logo: asset("/uconn.jpg"),
    publicationLink: "https://arxiv.org/abs/2506.14582",
    publicationTitle: "Busting the Ballot with Commodity Printers: Voting Meets Adversarial Machine Learning",
    publicationVenue: "ACM CCS 2025",
    headline: "Published research: auditing 10,000 ballots with 99.5% accuracy.",
    descriptions: [
      "Designed a support vector machine to audit 10,000 ballots for the state of Connecticut, achieving 99.5% validation accuracy.",
      "Implemented adversarial machine learning techniques to perform attacks on the model, reaching a detection rate of 98% for adversarial examples.",
      "Constructed advanced image registration software using Python and OpenCV; aligned 10,000 printed and scanned ballots, improving accuracy and reducing manual verification time by 85%.",
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV", "HuggingFace"],
  },
  {
    title: "Data Structures & Algorithms Teaching Assistant",
    company: "Stony Brook University",
    location: "Stony Brook, NY",
    date: "Aug 2023 – May 2024",
    logo: asset("/sbu.jpg"),
    descriptions: [
      "Created 50+ practice problems, led exam reviews, and proctored for 200+ students. Led weekly 1-hour recitations.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Publications
// ---------------------------------------------------------------------------

export const publications = [
  {
    title:
      "Busting the Ballot with Commodity Printers: Voting Meets Adversarial Machine Learning",
    url: "https://arxiv.org/abs/2506.14582",
    venue: "ACM CCS 2025",
  },
];

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

export const skills: SkillCategory[] = [
  {
    label: "Programming",
    items: [
      "Python",
      "TypeScript",
      "Java",
      "JavaScript",
      "C",
      "SQL",
      "OCaml",
      "HTML",
      "CSS",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS Lambda",
      "AWS Bedrock",
      "AWS CDK",
      "S3",
      "Step Functions",
      "SQS",
      "CloudWatch",
      "Docker",
      "Git",
      "CI/CD",
      "Linear",
    ],
  },
  {
    label: "Web Frameworks",
    items: [
      "Next.js",
      "React.js",
      "Express.js",
      "Node.js",
      "FastAPI",
      "Tailwind CSS",
      "Shadcn",
      "REST APIs",
    ],
  },
  {
    label: "Databases & Data",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Qdrant",
      "Kafka",
      "Prisma ORM",
      "Scrapy",
    ],
  },
  {
    label: "AI & ML",
    items: [
      "OpenAI API",
      "Vercel AI SDK",
      "RAG",
      "HuggingFace",
      "TensorFlow",
      "NumPy",
      "Sklearn",
      "Pandas",
      "OpenCV",
    ],
  },
];
