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
  headline: "Full-stack engineer who ships products people use.",
  bio: `Built an AI tutoring platform serving 75,000+ users. Designed serverless data pipelines at Amazon. Published researcher in adversarial machine learning. CS & Applied Math at Stony Brook University.`,
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
      "Designed a serverless web-scraping pipeline with Scrapy on AWS Lambda, expanding data coverage by ~27×.",
      "Integrated Claude 3.7 Sonnet via AWS Bedrock for NLP, achieving 95.35% accuracy on backtested datasets.",
      "Automated infrastructure with AWS CDK, managing 100K+ JSON files in S3.",
      "Orchestrated Step Function state machines with integration tests for end-to-end CI/CD.",
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
      "Launched whiz.study end-to-end with Next.js, TypeScript, and Tailwind CSS on Vercel.",
      "Designed an AI tutor using WebSockets for real-time image processing with OpenAI's API, boosting student accuracy by 40%.",
      "Architected a 350-parameter PostgreSQL schema with Prisma ORM on Supabase.",
      "Raised user satisfaction 75% through modern UI design with shadcn/ui.",
    ],
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "OpenAI API", "WebSockets", "PostgreSQL", "Prisma", "Supabase"],
  },
  {
    title: "Software Engineer Intern",
    company: "Zebra Technologies",
    location: "Holtsville, NY",
    date: "May 2024 – Aug 2024",
    logo: asset("/zebra-technologies-logo.svg"),
    descriptions: [
      "Engineered sentiment analysis system with LLMs, processing 200+ monthly feedback entries.",
      "Implemented semantic search over 8K+ JIRA tickets using RAG.",
      "Optimized Qdrant Vector DB, reducing data retrieval time 70% across 20K entries.",
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
    publicationVenue: "ACM CCS '25",
    headline: "Published research: auditing 10,000 ballots with 99.5% accuracy.",
    descriptions: [
      "Designed a support vector machine to audit ballots for Connecticut state elections with 99.5% validation accuracy.",
      "Implemented adversarial attacks reaching 98% detection rate for adversarial examples.",
      "Built image registration software with OpenCV, aligning 10,000 printed/scanned ballots and reducing manual verification by 85%.",
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
      "Created 50+ practice problems, led exam reviews, and proctored for 200+ students.",
      "Led weekly 1-hour recitations, boosting comprehension and engagement.",
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
    venue: "ACM CCS '25",
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
];
