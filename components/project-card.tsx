import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group py-4 first:pt-0 last:pb-0 border-b border-neutral-200 last:border-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-neutral-900 leading-snug">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-neutral-600 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs text-neutral-500 border border-neutral-200 rounded px-2 py-0.5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 p-2 rounded-lg text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
          aria-label={`View ${project.title}`}
        >
          {project.isExternal ? (
            <ExternalLink size={18} />
          ) : (
            <Github size={18} />
          )}
        </a>
      </div>
    </article>
  );
}
