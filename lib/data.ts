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
  isResearch?: boolean;
  publicationLink?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  isExternal?: boolean; // true = not a GitHub repo
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
  email: "nicholas.stamatakis@stonybrook.edu",
  phone: "(631) 809-0111",
  location: "Deer Park, NY",
  github: "https://github.com/nick-stamatakis",
  linkedin: "https://linkedin.com/in/nicholas-stamatakis",
  headshot: asset("/nick-headshot.jpg"),
  bio: `Senior at Stony Brook University Honors College studying Computer Science and Applied Mathematics & Statistics. Experience building scalable systems at Amazon, AI/ML tools at Zebra Technologies, and full-stack products at West Palm Test Prep. Published researcher in adversarial machine learning.`,
};

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------

export const education = {
  school: "Stony Brook University Honors College",
  location: "Stony Brook, NY",
  degree:
    "B.S. in Computer Science and Applied Mathematics & Statistics",
  graduation: "Expected Graduation: May 2026",
  gpa: "3.85",
  highlights: [
    "Founder & VP of Web Development Club",
    "Dean's List",
    "Academic Achievement Award",
  ],
};

// ---------------------------------------------------------------------------
// Work experience (ordered most recent first)
// ---------------------------------------------------------------------------

export const experiences: Experience[] = [
  {
    title: "Software Development Engineer Intern",
    company: "Amazon.com, Inc.",
    location: "New York, NY",
    date: "May 2025 \u2013 August 2025",
    logo: asset("/Amazon_logo.svg"),
    descriptions: [
      "Designed a serverless web-scraping pipeline with Scrapy on AWS Lambda, expanding coverage by ~27\u00d7.",
      "Integrated Claude 3.7 Sonnet via AWS Bedrock for NLP, yielding 95.35% accuracy on backtested datasets.",
      "Automated infrastructure deployment with AWS CDK, managing 100K+ JSON files in S3.",
      "Orchestrated a Step Function state machine with integration tests to validate the end-to-end CI/CD pipeline.",
      "Instrumented 10+ CloudWatch dashboards, monitoring program health and error metrics.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "West Palm Test Prep",
    location: "West Palm Beach, FL",
    date: "October 2023 \u2013 April 2025",
    logo: asset("/whiz-logo.png"),
    link: "https://www.whiz.study",
    descriptions: [
      "Launched a full-stack exam prep platform whiz.study with 50,000+ users using Next.js/Vercel.",
      "Devised an AI tutor using WebSockets for real-time image processing, integrating OpenAI\u2019s API for intelligent feedback and automated text highlighting\u2014boosting student accuracy by 40%.",
      "Built modern UI with TypeScript, Tailwind, and shadcn/ui, raising user satisfaction 75%.",
      "Refactored a 350-parameter PostgreSQL schema using Prisma ORM; integrated with Supabase production DB.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Zebra Technologies",
    location: "Holtsville, NY",
    date: "May 2024 \u2013 August 2024",
    logo: asset("/zebra-technologies-logo.svg"),
    descriptions: [
      "Engineered sentiment analysis system using Large Language Models, processing 200+ monthly feedback entries.",
      "Implemented semantic search over 8K+ JIRA tickets using Retrieval-Augmented Generation (RAG).",
      "Optimized a Qdrant Vector DB for efficient storage of System Problem Reports; reduced data retrieval time by 70% and enhanced report generation for 20,000 performance entries.",
    ],
  },
  {
    title: "Data Structures & Algorithms Teaching Assistant",
    company: "Stony Brook University",
    location: "Stony Brook, NY",
    date: "August 2023 \u2013 May 2024",
    logo: asset("/sbu.jpg"),
    descriptions: [
      "Created 50+ practice problems, led exam reviews, and proctored for 200+ students.",
      "Led weekly 1-hour recitations, boosting comprehension and engagement.",
    ],
  },
  {
    title: "Adversarial Machine Learning Researcher",
    company: "University of Connecticut",
    location: "Storrs, CT",
    date: "May 2023 \u2013 October 2023",
    logo: asset("/uconn.jpg"),
    isResearch: true,
    publicationLink: "https://arxiv.org/abs/2506.14582",
    descriptions: [
      "Designed a support vector machine to audit 10,000 ballots for the state of Connecticut, achieving 99.5% validation accuracy.",
      "Implemented adversarial machine learning techniques to perform attacks on the model, reaching a detection rate of 98% for adversarial examples.",
      "Constructed advanced image registration software using Python and OpenCV; aligned 10,000 printed and scanned ballots, improving accuracy and reducing manual verification time by 85%.",
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
    venue: "arXiv",
  },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export const projects: Project[] = [
  {
    title: "AI-Powered SAT Prep Platform",
    description:
      "Full-stack exam preparation platform with AI tutoring, real-time feedback, and automated text highlighting. Serves 50,000+ users.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "OpenAI API",
      "WebSockets",
    ],
    link: "https://www.whiz.study",
    isExternal: true,
  },
  {
    title: "Fake Stack Overflow",
    description:
      "Complete replica of StackOverflow with user authentication, question posting, voting system, and search. Full CRUD operations and responsive design.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/nick-stamatakis/Fake-Stack-Overflow",
  },
  {
    title: "Adversarial ML in Voting Systems",
    description:
      "Research project using CNNs to audit voting ballots for Connecticut state elections. Adversarial attacks and defenses with 99.5% validation accuracy.",
    technologies: ["Python", "PyTorch", "TensorFlow", "HuggingFace", "OpenCV"],
    link: "https://github.com/nick-stamatakis/Adversarial-Machine-Learning-in-Voting-Systems",
  },
  {
    title: "Google PageRank Implementation",
    description:
      "PageRank algorithm implementation with a Java Swing GUI for tabular views of ranked web pages. Includes data visualization and sorting.",
    technologies: ["Java", "Swing", "Data Structures"],
    link: "https://github.com/nick-stamatakis/DataStructures",
  },
];

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

export const skills: SkillCategory[] = [
  {
    label: "Languages",
    items: [
      "Python",
      "TypeScript",
      "Java",
      "JavaScript",
      "C",
      "SQL",
      "OCaML",
      "HTML",
      "CSS",
    ],
  },
  {
    label: "Frameworks & Tools",
    items: [
      "AWS (Lambda, Bedrock, CDK, S3, CloudWatch, Step Functions, SQS)",
      "Scrapy",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma ORM",
      "PostgreSQL",
      "OpenAI API",
      "Vercel AI SDK",
      "React.js",
      "Express.js",
      "Node.js",
      "Kafka",
      "MongoDB",
      "Qdrant",
      "HuggingFace",
      "FastAPI",
      "REST APIs",
      "OpenCV",
      "TensorFlow",
      "NumPy",
      "Sklearn",
      "Pandas",
      "Git",
      "Docker",
      "Linear",
    ],
  },
  {
    label: "Soft Skills",
    items: ["Leadership", "Communication", "Project Coordination"],
  },
  {
    label: "Human Languages",
    items: [
      "English (native)",
      "Greek (native)",
      "Italian (conversational)",
    ],
  },
];

// ---------------------------------------------------------------------------
// Extra-curricular
// ---------------------------------------------------------------------------

export const extracurriculars = [
  "Chanter at Greek Orthodox Church",
  "Active member of Greek & Cypriot Heritage Club",
  "Captain of Intramural Basketball Team",
];
