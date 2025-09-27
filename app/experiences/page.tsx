import React from 'react';

const ExperienceCard = ({ title, company, date, descriptions }: {
    title: string;
    company: string;
    date: string;
    descriptions: string[];
}) => (
    <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
        <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
            <p className="text-lg text-blue-600 font-semibold mb-1">{company}</p>
            <p className="text-sm text-gray-500 bg-gray-50 inline-block px-3 py-1 rounded-full">{date}</p>
        </div>
        <ul className="space-y-3">
            {descriptions.map((desc, index) => (
                <li key={index} className="flex items-start text-gray-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>{desc}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default function Experiences() {
    const experiences = [
        {
            title: "Software Development Engineer Intern",
            company: "Amazon.com, Inc.",
            date: "May 2025 - August 2025",
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
            descriptions: [
                "Created 50+ practice problems, led exam reviews, and proctored for 200+ students.",
                "Led weekly 1-hour recitations, boosting comprehension and engagement."
            ]
        },
        {
            title: "Adversarial Machine Learning Researcher",
            company: "University of Connecticut",
            date: "May 2023 – October 2023",
            descriptions: [
                "Designed a support vector machine to audit 10,000 ballots for the state of Connecticut, achieving 99.5% validation accuracy.",
                "Implemented adversarial machine learning techniques to perform attacks on the model, reaching a detection rate of 98% for adversarial examples.",
                "Constructed advanced image registration software using Python and OpenCV; aligned 10,000 printed and scanned ballots, improving accuracy and reducing manual verification time by 85%"
            ]
        }
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Work Experience</h1>
                <p className="text-gray-600">Professional experience and internships</p>
            </div>

            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} {...exp} />
                ))}
            </div>
        </div>
    );
}