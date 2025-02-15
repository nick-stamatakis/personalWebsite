import React from 'react';
import { Github } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, githubLink }: {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
}) => (
    <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="mb-4">
            <h4 className="font-semibold text-gray-600 mb-2">Technologies used:</h4>
            <div className="flex flex-wrap">
                {technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-200 text-gray-700 text-xs font-medium mr-2 mb-2 px-2.5 py-1 rounded">
            {tech}
          </span>
                ))}
            </div>
        </div>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <Github className="mr-2" size={20} />
            View on GitHub
        </a>
    </div>
);

export default function Projects() {
    const projects = [
        {
            title: "AI-Powered SAT Prep website",
            description: "Developed an AI-powered code review tool that integrates with GitHub to provide automated code suggestions and improvements.",
            technologies: ["Typescript", "Next.js", "Tailwind CSS", "Shadcn/ui", "OpenAI API"],
            githubLink: "https://wptp.study"
        },
        {
            title: "Fake Stack Overflow",
            description: "Built a replica of StackOverFlow.com",
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
            githubLink: "https://github.com/nick-stamatakis/Fake-Stack-Overflow"
        },
        {
            title: "Convolutional Neural Network Applications",
            description: "Used varying levels of Neural nets to audit voting in the state of Conneticut",
            technologies: ["Python", "Pytorch", "TensorFlow", "HuggingFace API"],
            githubLink: "https://github.com/nick-stamatakis/Adversarial-Machine-Learning-in-Voting-Systems"
        },
        {
            title: "Google Page Rank Algoirthm",
            description: "Provides a user tabular view of web pages according to the rank in the algorithm.",
            technologies: ["Java", "javax.swing"],
            githubLink: "https://github.com/nick-stamatakis/DataStructures"
        },
    ];

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">Projects</h1>
            <div className="space-y-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}