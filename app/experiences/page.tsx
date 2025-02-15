import React from 'react';

const ExperienceCard = ({ title, company, date, descriptions }: {
    title: string;
    company: string;
    date: string;
    descriptions: string[];
}) => (
    <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
        <p className="text-lg text-gray-600">{company}</p>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <ul className="list-disc list-inside">
            {descriptions.map((desc, index) => (
                <li key={index} className="text-sm text-gray-700 mb-1">{desc}</li>
            ))}
        </ul>
    </div>
);

export default function Experiences() {
    const experiences = [
        {
            title: "Software Engineering Intern",
            company: "Zebra Technologies",
            date: "May 2024 – Present",
            descriptions: [
                "Developed a Full-Stack application to perform sentiment analysis using Large Language Models, processing over 200 user feedback entries monthly.",
                "Conducted semantic search of 8,000+ JIRA tickets using Retrieval-Augmented Generation (RAG).",
                "Engineered a Vector Database with Qdrant for efficient storage of System Problem Reports; reduced data retrieval time by 70% and enhanced report generation for 20,000 performance entries."
            ]
        },
        {
            title: "Software Engineering Intern",
            company: "West Palm Test Prep",
            date: "October 2023 – May 2024",
            descriptions: [
                "Launched a full-stack website focused on delivering comprehensive test prep for the new SAT, resulting in a 35% increase in student engagement on the site.",
                "Deployed a monorepo using Vercel and Next.js containing 4 separate repositories.",
                "Utilized typescript, tailwind and shadcn/ui for the UI, improving user satisfaction by 75%.",
                "Modified a 350 parameter database using PostgreSQL and Prisma ORM.",
                "Devised a marketing plan to reach 1,000+ students in West Palm Beach Florida Schools."
            ]
        },
        {
            title: "Data Structures & Algorithms Teaching Assistant",
            company: "Stony Brook University",
            date: "August 2023 – May 2024",
            descriptions: [
                "Created over 50 practice problems, held exam review sessions, and proctored exams for 200+ students.",
                "Taught a one hour recitation each week, enhancing student comprehension and engagement."
            ]
        },
        {
            title: "Adversarial Machine Learning Researcher",
            company: "University of Connecticut",
            date: "May 2023 – October 2023",
            descriptions: [
                "Designed a support vector machine to audit 10,000 ballots for the state of Connecticut, achieving a confirmation accuracy of 99.5%.",
                "Implemented adversarial machine learning techniques to perform attacks on the model, reaching a detection rate of 98% for adversarial examples.",
                "Constructed advanced image registration software using Python and OpenCV; aligned 10,000 printed and scanned ballots, improving accuracy and reducing manual verification time by 85%."
            ]
        }
    ];

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">Work Experience</h1>
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} {...exp} />
                ))}
            </div>
        </div>
    );
}