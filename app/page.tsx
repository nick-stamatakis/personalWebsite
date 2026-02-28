import Image from "next/image";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

import { Section } from "@/components/section";
import { ExperienceCard } from "@/components/experience-card";

import {
  personal,
  education,
  experiences,

  skills,
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
        {/* Header — impact-first                                           */}
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
            <p className="mt-1 text-base font-medium text-neutral-700">
              {personal.headline}
            </p>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              {personal.bio}
            </p>

            {/* Contact row */}
            <div className="flex flex-wrap items-center gap-4 mt-3">
              <a
                href={`mailto:${personal.email}`}
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {personal.email}
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
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#education">Education</NavLink>
        </nav>

        {/* ---------------------------------------------------------------- */}
        {/* Work — single unified section                                   */}
        {/* ---------------------------------------------------------------- */}
        <Section id="work" title="Work">
          <div>
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} experience={exp} />
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
        {/* CTA                                                              */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-8 mt-4 border-t border-neutral-200">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold text-neutral-900">
              Let&apos;s work together.
            </h2>

            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Get in touch
              <ArrowRight size={15} />
            </a>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Footer                                                           */}
        {/* ---------------------------------------------------------------- */}
        <footer className="pt-4 pb-4 border-t border-neutral-200">
          <p className="text-xs text-neutral-400 text-center">
            {personal.name} &middot; {personal.location}
          </p>
        </footer>
      </div>
    </div>
  );
}
