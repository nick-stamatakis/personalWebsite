import Image from "next/image";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

import { Section } from "@/components/section";
import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";

import {
  personal,
  education,
  experiences,
  publications,
  projects,
  skills,
  extracurriculars,
} from "@/lib/data";

// ============================================================================
// Nav link helper
// ============================================================================

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
    >
      {children}
    </a>
  );
}

// ============================================================================
// Page
// ============================================================================

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Thin top rule */}
      <div className="h-px bg-neutral-200" />

      <div className="max-w-5xl mx-auto px-6 py-8 animate-fade-up">
        {/* ---------------------------------------------------------------- */}
        {/* Header                                                           */}
        {/* ---------------------------------------------------------------- */}
        <header className="flex flex-col sm:flex-row items-start gap-5 mb-6">
          <div className="flex-shrink-0">
            <Image
              src={personal.headshot}
              alt={personal.name}
              width={96}
              height={96}
              className="rounded-full"
              priority
            />
          </div>

          <div className="flex-1 min-w-0">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              {personal.name}
            </h1>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              {personal.bio}
            </p>

            {/* Contact row */}
            <div className="flex flex-wrap items-center gap-4 mt-3">
              <a
                href={`mailto:${personal.email}`}
                className="text-neutral-400 hover:text-neutral-900 transition-colors"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-900 transition-colors"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>
        </header>

        {/* In-page navigation */}
        <nav className="flex flex-wrap gap-5 mb-6 pb-3 border-b border-neutral-200">
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#publications">Publications</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
        </nav>

        {/* ---------------------------------------------------------------- */}
        {/* Experience                                                       */}
        {/* ---------------------------------------------------------------- */}
        <Section id="experience" title="Experience">
          <div>
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} experience={exp} />
            ))}
          </div>
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* Education                                                        */}
        {/* ---------------------------------------------------------------- */}
        <Section id="education" title="Education">
          <div className="py-1">
            <h3 className="text-base font-semibold text-neutral-900">
              {education.school}
            </h3>
            <p className="text-sm text-neutral-600 mt-1">{education.degree}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-neutral-500">{education.graduation}</span>
              <span className="text-neutral-300">/</span>
              <span className="text-sm text-neutral-500">GPA: {education.gpa}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {education.highlights.map((h) => (
                <span
                  key={h}
                  className="text-xs text-neutral-500 border border-neutral-200 rounded px-2 py-0.5"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* Publications                                                     */}
        {/* ---------------------------------------------------------------- */}
        <Section id="publications" title="Publications">
          <div className="space-y-4">
            {publications.map((pub) => (
              <div key={pub.url} className="flex items-start gap-3">
                <FileText size={16} className="mt-0.5 text-neutral-400 flex-shrink-0" />
                <div>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-900 transition-colors"
                  >
                    {pub.title}
                  </a>
                  <span className="text-xs text-neutral-500 ml-2">{pub.venue}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* Projects                                                         */}
        {/* ---------------------------------------------------------------- */}
        <Section id="projects" title="Projects">
          <div>
            {projects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* Skills                                                           */}
        {/* ---------------------------------------------------------------- */}
        <Section id="skills" title="Skills">
          <div className="space-y-4">
            {skills.map((category) => (
              <div key={category.label}>
                <h3 className="text-sm font-medium text-neutral-700 mb-1.5">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-neutral-500 border border-neutral-200 rounded px-2 py-0.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* Extra-curriculars                                                */}
        {/* ---------------------------------------------------------------- */}
        <Section id="extracurriculars" title="Extra-curriculars">
          <ul className="space-y-2">
            {extracurriculars.map((item) => (
              <li
                key={item}
                className="text-sm text-neutral-600 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-px before:bg-neutral-400"
              >
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* Footer                                                           */}
        {/* ---------------------------------------------------------------- */}
        <footer className="pt-6 pb-4 border-t border-neutral-200">
          <p className="text-xs text-neutral-400 text-center">
            {personal.name} &middot; {personal.location}
          </p>
        </footer>
      </div>
    </div>
  );
}
