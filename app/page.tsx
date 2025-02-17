import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

// Define prop types for the SkillBadge component
interface SkillBadgeProps {
    skill: string;
}

// Define prop types for the ExperienceCard component
interface ExperienceCardProps {
    title: string;
    company: string;
    date: string;
    descriptions: string[];
}

// A reusable badge component for displaying a single skill
const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => (
    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 mb-2 px-2.5 py-1 rounded inline-block">
    {skill}
  </span>
);

// A reusable card component for displaying experience details
const ExperienceCard: React.FC<ExperienceCardProps> = ({
                                                           title,
                                                           company,
                                                           date,
                                                           descriptions,
                                                       }) => (
    <div className="mb-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-lg text-gray-600">{company}</p>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <ul className="list-disc list-inside">
            {descriptions.map((desc, index) => (
                <li key={index} className="text-sm text-gray-700">
                    {desc}
                </li>
            ))}
        </ul>
    </div>
);

// Main Home page component
export default function Home(): JSX.Element {
    return (
        <main className="flex flex-col items.txt-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-2/3 p-8">
                        {/* About Me Section */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-blue-600">About Me</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Computer Science and Applied Mathematics &amp; Statistics student
                                at Stony Brook University. Passionate about software engineering
                                and data science. Founder &amp; Vice President of the Web
                                Development Club.
                            </p>
                        </section>

                        {/* Education Section */}
                        <section className="mb-8 text-gray-700">
                            <h2 className="text-2xl font-bold mb-4 text-blue-600">Education</h2>
                            <p className="font-semibold">Stony Brook University</p>
                            <p>B.S. in Computer Science and Applied Mathematics &amp; Statistics</p>
                            <p>Expected Graduation: May 2026</p>
                            <p>GPA: 3.86, Honors College</p>
                        </section>

                        {/* Skills Section */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-blue-600">Skills</h2>
                            <div className="flex flex-wrap">
                                <SkillBadge skill="Python" />
                                <SkillBadge skill="TypeScript" />
                                <SkillBadge skill="JavaScript" />
                                <SkillBadge skill="Java" />
                                <SkillBadge skill="C" />
                                <SkillBadge skill="SQL" />
                                <SkillBadge skill="OCaml" />
                                <SkillBadge skill="HTML" />
                                <SkillBadge skill="CSS" />
                                <SkillBadge skill="React.js" />
                                <SkillBadge skill="Next.js" />
                                <SkillBadge skill="Node.js" />
                                <SkillBadge skill="Express.js" />
                                <SkillBadge skill="MongoDB" />
                                <SkillBadge skill="PostgreSQL" />
                                <SkillBadge skill="AWS" />
                                <SkillBadge skill="Git" />
                            </div>
                        </section>

                        {/* Example usage of ExperienceCard (optional)
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">Experience</h2>
              <ExperienceCard
                title="Software Engineer Intern"
                company="Example Corp"
                date="June 2023 - Aug 2023"
                descriptions={[
                  "Developed new features using React and TypeScript",
                  "Collaborated with a team of 5 developers",
                ]}
              />
            </section>
            */}
                    </div>
                </div>
            </div>
        </main>
    );
}
