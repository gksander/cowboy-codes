import { SectionHeader } from "../SectionHeader";
import clsx from "clsx";
import { FaGithub } from "../icons/FaGithub";
import type { OptimizedImageDetails } from "../../utils/getOptimizedImageSrc";
import { OptimizedImage } from "../OptimizedImage";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <div className="py-16">
      <SectionHeader
        subtitle="Some open projects I've worked on."
        className="mb-16"
      >
        Projects
      </SectionHeader>

      <div className="grid gap-x-6 gap-y-12 grid-cols-1 sm:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="group/card">
            {project.image ? (
              <div className="relative rounded-lg mb-3 overflow-hidden">
                <OptimizedImage
                  image={project.image}
                  alt={`${project.title} screenshot`}
                  class={clsx(
                    "w-full aspect-video",
                    project.imageFit === "contain"
                      ? "object-contain bg-gray-300"
                      : "object-cover",
                  )}
                />
                <div className="absolute inset-0 backdrop-grayscale group-hover/card:backdrop-grayscale-0 group-hover/card:backdrop-blur-0 bg-gray-100 bg-opacity-10 transition transition-[backdrop-filter] duration-200"></div>
              </div>
            ) : (
              <div className="bg-gray-300 w-full aspect-video rounded-lg mb-3"></div>
            )}

            <a
              className="font-bold text-lg text-gray-800 group/link flex gap-2 items-center hover:text-primary-700 transition-colors duration-150 mb-1"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span>{project.title}</span>
              <FaGithub className="w-5 h-5 opacity-0 group-hover/link:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0 scale-75 group-hover:scale-100" />
            </a>
            <p className="text-sm text-gray-800">
              {project.description}{" "}
              {project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-gray-700 hover:text-primary-800 transition-colors duration-150"
                >
                  {project.link.title}.
                </a>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export type Project = {
  title: string;
  repoUrl?: string;
  description: string;
  link?: {
    href: string;
    title: string;
  };
  image?: OptimizedImageDetails;
  imageFit?: "contain" | "cover";
};
