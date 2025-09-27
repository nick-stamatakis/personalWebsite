import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronRight } from 'lucide-react';

const ExperienceCard = ({ title, company, date, descriptions, logo, link, location, isResearch, publicationLink }: {
    title: string;
    company: string;
    date: string;
    descriptions: string[];
    logo?: string;
    link?: string;
    location?: string;
    isResearch?: boolean;
    publicationLink?: string;
}) => (
    <div className={`group rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] border ${
        isResearch
            ? 'bg-gradient-to-br from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 border-emerald-200 hover:border-emerald-300'
            : 'bg-gradient-to-br from-slate-50 to-slate-100 hover:from-indigo-50 hover:to-purple-50 border-slate-200 hover:border-indigo-200'
    }`}>
        <div className="flex items-start mb-6">
            {logo && (
                <div className="mr-6 flex-shrink-0">
                    <div className="w-16 h-16 bg-white rounded-xl shadow-md p-3 group-hover:shadow-lg transition-shadow duration-300">
                        <Image
                            src={logo}
                            alt={`${company} logo`}
                            width={40}
                            height={40}
                            className="object-contain w-full h-full"
                        />
                    </div>
                </div>
            )}
            <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                    <h3 className={`text-xl font-bold transition-colors duration-300 ${
                        isResearch
                            ? 'text-slate-800 group-hover:text-emerald-700'
                            : 'text-slate-800 group-hover:text-indigo-700'
                    }`}>{title}</h3>
                    {isResearch && (
                        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                            📄 PUBLISHED RESEARCH
                        </span>
                    )}
                </div>
                {link ? (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-indigo-600 hover:text-purple-600 transition-colors duration-300 flex items-center group/link"
                    >
                        {company}
                        <ExternalLink size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                ) : (
                    <p className={`text-lg font-semibold ${isResearch ? 'text-emerald-600' : 'text-indigo-600'}`}>{company}</p>
                )}
                <div className="flex items-center gap-3 mt-2">
                    <p className="text-sm text-slate-500 bg-slate-200 inline-block px-3 py-1 rounded-full">{date}</p>
                    {location && (
                        <p className="text-sm text-slate-500">{location}</p>
                    )}
                </div>
            </div>
        </div>
        <ul className="space-y-3">
            {descriptions.map((desc, index) => (
                <li key={index} className="flex items-start text-slate-700 leading-relaxed group/item">
                    <ChevronRight size={16} className={`mr-3 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-300 ${
                        isResearch ? 'text-emerald-500' : 'text-indigo-500'
                    }`} />
                    <span>{desc}</span>
                </li>
            ))}
        </ul>
        {publicationLink && (
            <div className="mt-6 pt-4 border-t border-emerald-200">
                <a
                    href={publicationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:shadow-lg hover:scale-105 group/button"
                >
                    <ExternalLink className="mr-2 group-hover/button:translate-x-1 transition-transform duration-300" size={18} />
                    View Publication on arXiv
                    <span className="ml-2 text-emerald-200 text-sm">• Busting the Ballot with Commodity Printers</span>
                </a>
            </div>
        )}
    </div>
);

const ProjectCard = ({ title, description, technologies, githubLink }: {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
}) => (
    <div className="group bg-gradient-to-br from-slate-50 to-slate-100 hover:from-emerald-50 hover:to-teal-50 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] border border-slate-200 hover:border-emerald-200">
        <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors duration-300">{title}</h3>
        <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>

        <div className="mb-6">
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="bg-slate-200 text-slate-700 text-sm px-3 py-1 rounded-full hover:bg-emerald-200 hover:text-emerald-800 transition-colors duration-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>

        <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-slate-800 to-slate-700 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group/button"
        >
            {githubLink.includes('github.com') ? (
                <>
                    <Github size={18} className="mr-2 group-hover/button:rotate-12 transition-transform duration-300" />
                    View Code
                </>
            ) : (
                <>
                    <ExternalLink size={18} className="mr-2 group-hover/button:translate-x-1 transition-transform duration-300" />
                    View Project
                </>
            )}
        </a>
    </div>
);

export default function Home() {
  const experiences = [
        {
            title: "Software Development Engineer Intern",
            company: "Amazon.com, Inc.",
            date: "May 2025 - August 2025",
            logo: "/Amazon_logo.svg",
            descriptions: [
                "Designed a serverless web-scraping pipeline with Scrapy on AWS Lambda, expanding coverage by ~27×.",
                "Integrated Claude 3.7 Sonnet via AWS Bedrock for NLP, yielding 95.35% accuracy on backtested datasets.",
                "Automated infrastructure deployment with AWS CDK, managing 100K+ JSON files in S3.",
                "Orchestrated a Step Function state machine with integration tests to validate the end-to-end CI/CD pipeline.",
                "Instrumented 10+ CloudWatch dashboards, monitoring program health and error metrics."
            ]
        },
        {
            title: "Software Engineer Intern",
            company: "whiz.study",
            date: "October 2023 – April 2025",
            logo: "/whiz-logo.png",
            link: "https://www.whiz.study",
            descriptions: [
                "Launched a full-stack exam prep platform https://www.whiz.study with 60,000+ users using Next.js/Vercel.",
                "Devised an AI tutor using WebSockets for real-time image processing, integrating OpenAI's API for intelligent feedback and automated text highlighting—boosting student accuracy by 40%.",
                "Built modern UI with TypeScript, Tailwind, and shadcn/ui, raising user satisfaction 75%.",
                "Refactored a 350-parameter PostgreSQL schema using Prisma ORM; integrated with Supabase production DB."
            ]
        },
        {
            title: "Software Engineer Intern",
            company: "Zebra Technologies",
            date: "May 2024 – August 2024",
            logo: "/zebra-technologies-logo.svg",
            descriptions: [
                "Engineered sentiment analysis system using Large Language Models, processing 200+ monthly feedback entries.",
                "Implemented semantic search over 8K+ JIRA tickets using Retrieval-Augmented Generation (RAG).",
                "Optimized a Qdrant Vector DB for efficient storage of System Problem Reports; reduced data retrieval time by 70% and enhanced report generation for 20,000 performance entries."
            ]
        },
        {
            title: "Data Structures & Algorithms Teaching Assistant",
            company: "Stony Brook University",
            date: "August 2023 – May 2024",
            location: "Stony Brook, NY",
            descriptions: [
                "Created 50+ practice problems, led exam reviews, and proctored for 200+ students.",
                "Led weekly 1-hour recitations, boosting comprehension and engagement."
            ]
        },
        {
            title: "Adversarial Machine Learning Researcher",
            company: "University of Connecticut",
            date: "May 2023 – October 2023",
            location: "Storrs, CT",
            isResearch: true,
            publicationLink: "https://arxiv.org/abs/2506.14582",
            descriptions: [
                "Designed a support vector machine to audit 10,000 ballots for the state of Connecticut, achieving 99.5% validation accuracy.",
                "Implemented adversarial machine learning techniques to perform attacks on the model, reaching a detection rate of 98% for adversarial examples.",
                "Constructed advanced image registration software using Python and OpenCV; aligned 10,000 printed and scanned ballots, improving accuracy and reducing manual verification time by 85%."
            ]
        }
    ];

    const projects = [
        {
            title: "AI-Powered SAT Prep Platform",
            description: "Developed a comprehensive exam preparation platform with AI tutoring capabilities, real-time feedback, and automated text highlighting. Platform serves 60,000+ users with interactive learning tools.",
            technologies: ["TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui", "OpenAI API", "WebSockets"],
            githubLink: "https://www.whiz.study"
        },
        {
            title: "Fake Stack Overflow",
            description: "Built a complete replica of StackOverflow.com with user authentication, question posting, voting system, and search functionality. Implemented full CRUD operations and responsive design.",
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
            githubLink: "https://github.com/nick-stamatakis/Fake-Stack-Overflow"
        },
        {
            title: "Adversarial Machine Learning in Voting Systems",
            description: "Research project using convolutional neural networks to audit voting ballots for Connecticut state elections. Implemented adversarial attacks and defenses with 99.5% validation accuracy.",
            technologies: ["Python", "PyTorch", "TensorFlow", "HuggingFace", "OpenCV"],
            githubLink: "https://github.com/nick-stamatakis/Adversarial-Machine-Learning-in-Voting-Systems"
        },
        {
            title: "Google PageRank Algorithm Implementation",
            description: "Implemented Google's PageRank algorithm with a Java Swing GUI providing tabular views of web pages ranked according to the algorithm. Includes data visualization and sorting capabilities.",
            technologies: ["Java", "Swing", "Data Structures"],
            githubLink: "https://github.com/nick-stamatakis/DataStructures"
        },
    ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left side - Text content */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <div className="inline-block">
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-fade-in">
                  Nicholas Stamatakis
                </h1>
                <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8 animate-expand"></div>
              </div>

              <p className="text-xl lg:text-2xl text-slate-600 mb-12 leading-relaxed animate-fade-in-up">
                I&apos;m a senior at Stony Brook University Honors College (CS + Applied Math & Stats, GPA 3.85) with experience at Amazon, Zebra Technologies, and whiz.study. My work spans scalable systems, AI/ML, and full-stack development — from building a scalable web-scraping pipeline at Amazon to creating an AI tutor at whiz.study used by 50K+ students. I&apos;m passionate about designing intelligent systems, optimizing infrastructure, and applying machine learning to real-world problems.
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8 animate-fade-in-up animation-delay-200">
                <a href="mailto:nicholas.stamatakis@stonybrook.edu" className="flex items-center text-slate-600 hover:text-indigo-600 transition-colors duration-300 group">
                  <Mail size={20} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  nicholas.stamatakis@stonybrook.edu
                </a>
                <div className="flex items-center text-slate-600">
                  <Phone size={20} className="mr-2" />
                  (631) 809-0111
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in-up animation-delay-400">
                <a
                  href="https://github.com/nick-stamatakis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-slate-200 hover:border-indigo-300"
                >
                  <Github size={24} className="text-slate-600 group-hover:text-indigo-600 transition-colors duration-300" />
                </a>
                <a
                  href="https://linkedin.com/in/nicholas-stamatakis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-slate-200 hover:border-indigo-300"
                >
                  <Linkedin size={24} className="text-slate-600 group-hover:text-indigo-600 transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Right side - Headshot */}
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <Image
                  src="/nick-headshot.jpg"
                  alt="Nicholas Stamatakis"
                  width={300}
                  height={300}
                  className="relative rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Experience */}
      <section className="relative pt-4 pb-8">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>


      {/* Education */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 border border-rose-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-white font-bold text-xl">SBU</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-rose-700 transition-colors duration-300">Stony Brook University Honors College</h3>
                  <p className="text-slate-600">Stony Brook, NY</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Degree</h4>
                  <p className="text-slate-600">Bachelor of Science in Computer Science and Applied Mathematics & Statistics</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Timeline</h4>
                  <p className="text-slate-600">Expected Graduation: May 2026</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Academic Performance</h4>
                  <p className="text-slate-600">GPA: 3.85 • Dean&apos;s List • Academic Achievement Award</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Leadership</h4>
                  <p className="text-rose-600 font-semibold">Founder & VP of Web Development Club</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 border border-violet-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
              <h3 className="text-xl font-bold text-slate-800 mb-6 group-hover:text-violet-700 transition-colors duration-300">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'TypeScript', 'Java', 'JavaScript', 'C', 'SQL', 'OCaML', 'HTML', 'CSS'].map((skill, index) => (
                  <span key={index} className="bg-white text-slate-700 px-4 py-2 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-violet-200 hover:border-violet-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 border border-violet-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
              <h3 className="text-xl font-bold text-slate-800 mb-6 group-hover:text-violet-700 transition-colors duration-300">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {['AWS', 'Next.js', 'React.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'TensorFlow', 'PyTorch', 'OpenCV'].map((skill, index) => (
                  <span key={index} className="bg-white text-slate-700 px-4 py-2 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-violet-200 hover:border-violet-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}