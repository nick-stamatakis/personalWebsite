import Image from "next/image";
import { FileText } from "lucide-react";
import type { Experience } from "@/lib/data";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="group relative grid gap-3 sm:grid-cols-[160px_1fr] py-4 first:pt-0 last:pb-0 border-b border-neutral-200 last:border-0">
      {/* Left column: date + logo */}
      <div className="flex flex-col gap-3">
        <time className="text-sm text-neutral-500 tracking-wide">{experience.date}</time>
        {experience.logo && (
          <div className="w-20 h-20 relative">
            <Image
              src={experience.logo}
              alt={`${experience.company} logo`}
              width={80}
              height={80}
              className="object-contain w-full h-full"
            />
          </div>
        )}
      </div>

      {/* Right column: content */}
      <div>
        <h3 className="text-base font-semibold text-neutral-900 leading-snug">
          {experience.title}
        </h3>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-medium text-neutral-700">
            {experience.company}
          </span>
          {experience.link && (
            <>
              <span className="text-neutral-300">/</span>
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-700 underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-900 transition-colors"
              >
                {experience.linkLabel || experience.company}
              </a>
            </>
          )}
          {experience.location && (
            <>
              <span className="text-neutral-300">/</span>
              <span className="text-sm text-neutral-500">{experience.location}</span>
            </>
          )}
        </div>

        {/* Headline for featured roles */}
        {experience.headline && (
          <p className="mt-2 text-sm font-medium text-neutral-700">
            {experience.headline}
          </p>
        )}

        <ul className="mt-2.5 space-y-1.5">
          {experience.descriptions.map((desc, i) => (
            <li key={i} className="text-sm text-neutral-600 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-px before:bg-neutral-400">
              {desc}
            </li>
          ))}
        </ul>

        {experience.publicationLink && (
          <div className="mt-3 flex items-start gap-2">
            <FileText size={15} className="mt-0.5 text-neutral-400 flex-shrink-0" />
            <div>
              <a
                href={experience.publicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-900 transition-colors"
              >
                {experience.publicationTitle || "View publication"}
              </a>
              {experience.publicationVenue && (
                <span className="text-xs text-neutral-500 ml-2">
                  {experience.publicationVenue}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Tech tags for featured roles */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs text-neutral-500 border border-neutral-200 rounded px-2 py-0.5"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
