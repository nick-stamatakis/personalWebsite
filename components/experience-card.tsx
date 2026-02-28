import Image from "next/image";
import { ExternalLink } from "lucide-react";
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
          {experience.link ? (
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-700 underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-900 transition-colors"
            >
              {experience.company}
            </a>
          ) : (
            <span className="text-sm font-medium text-neutral-700">
              {experience.company}
            </span>
          )}
          {experience.location && (
            <>
              <span className="text-neutral-300">/</span>
              <span className="text-sm text-neutral-500">{experience.location}</span>
            </>
          )}
        </div>

        {experience.isResearch && (
          <span className="inline-block mt-2 text-xs font-medium tracking-wide uppercase text-neutral-500 border border-neutral-300 rounded px-2 py-0.5">
            Published Research
          </span>
        )}

        <ul className="mt-2.5 space-y-1.5">
          {experience.descriptions.map((desc, i) => (
            <li key={i} className="text-sm text-neutral-600 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-px before:bg-neutral-400">
              {desc}
            </li>
          ))}
        </ul>

        {experience.publicationLink && (
          <a
            href={experience.publicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-neutral-700 underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-900 transition-colors"
          >
            View publication on arXiv
            <ExternalLink size={13} />
          </a>
        )}
      </div>
    </article>
  );
}
