import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, githubLink }: {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
}) => (
    <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

        <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-600 mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
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
            className="inline-flex items-center bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
            {githubLink.includes('github.com') ? (
                <>
                    <Github className="mr-2" size={16} />
                    View Code
                </>
            ) : (
                <>
                    <ExternalLink className="mr-2" size={16} />
                    View Project
                </>
            )}
        </a>
    </div>
);

export default function Projects() {
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
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
                <p className="text-gray-600">Personal and academic projects showcasing technical skills</p>
            </div>

            <div className="grid gap-8 md:grid-cols-1">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}