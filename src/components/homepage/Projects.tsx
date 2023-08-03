import { SectionHeader } from "../SectionHeader";
import Clips from "../../assets/clips.png";
import Mandelbruh from "../../assets/mandelbruh.png";
import Pokedex from "../../assets/pokedex.png";
import Zephyr from "../../assets/zephyr.png";
import GifMaker from "../../assets/gif-maker.png";
import groqd from "../../assets/groqd-arcade.png";
import clsx from "clsx";
import { FaGithub } from "../icons/FaGithub";

export function Projects() {
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
                <img
                  alt={`${project.title} screenshot`}
                  src={project.image.src}
                  className={clsx(
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

type Project = {
  title: string;
  repoUrl?: string;
  description: string;
  link?: {
    href: string;
    title: string;
  };
  image?: ImageMetadata;
  imageFit?: "contain" | "cover";
};

const projects: Project[] = [
  {
    title: "Groqd",
    repoUrl: "https://github.com/FormidableLabs/groqd/",
    description: `A type and runtime safe query builder for the GROQ query language.`,
    image: groqd,
    // imageFit: "contain",
    link: {
      href: "https://formidable.com/open-source/groqd/",
      title: "Check it out",
    },
  },
  {
    title: "Clips",
    repoUrl: "https://github.com/FormidableLabs/clips",
    description: `A screen recording app built with web technologies.`,
    link: {
      href: "https://clips.formidable.dev/",
      title: "Check it out",
    },
    image: Clips,
  },
  {
    title: "Mandelbruh",
    repoUrl: "https://github.com/gksander/mandelbruh",
    description: `A mandelbrot fractal generator built with raw WebGL and Svelte.`,
    link: {
      href: "https://www.mandelbruh.dev/",
      title: "Check it out",
    },
    image: Mandelbruh,
  },
  {
    title: "React Native Zephyr",
    repoUrl: "https://github.com/FormidableLabs/react-native-zephyr",
    description: `TailwindCSS-inspired styling library for React Native.`,
    link: {
      href: "https://formidable.com/open-source/react-native-zephyr/",
      title: "View the docs",
    },
    image: Zephyr,
  },
  {
    title: "Personal PokeDex",
    repoUrl: "https://github.com/gksander/gks-pokedex-next",
    description: `Pokedex site built with Next.js static site generation powered by PokeAPI CSV data.`,
    link: {
      href: "https://pokedex.gksander.com/",
      title: "Check it out",
    },
    image: Pokedex,
  },
  {
    title: "GifMaker",
    repoUrl: "https://github.com/gksander/gif-maker",
    description: `Browser-based FFMPEG video converter. Handy for turning .mov files into GIFs.`,
    link: {
      href: "https://gif-maker.gksander.com/",
      title: "Check it out",
    },
    image: GifMaker,
  },
  // {
  //   title: "React Dynamic Geometry",
  //   repoUrl: "https://github.com/gksander/react-dynamic-geometry",
  //   description: `A React library for creating dynamic geometry boards. This was a "could I do that?" project, and was more for fun than for real-world use. Uses React, TypeScript, Jotai, and MATH.`,
  //   link: {
  //     href: "https://github.com/gksander/react-dynamic-geometry",
  //     title: "View the source with some examples",
  //   },
  // },
  // {
  //   title: "CIE Color Converter",
  //   repoUrl: "https://github.com/gksander/CIE-ColorConverter",
  //   description: `A dependency-free JS library to convert between 7 different color spaces. Lots of fun matrix maths.`,
  //   link: {
  //     href: "https://github.com/gksander/CIE-ColorConverter",
  //     title: "View the source",
  //   },
  // },
  // {
  //   title: `LearnJS Playground`,
  //   repoUrl: "https://github.com/gksander/learnjs-gatsby",
  //   description: `A pet project I started and never finished. Uses Gatsby and MDX to create static pages with JS-based learning exercises. Contains fun little interactive editors for tinkering with JS ideas.`,
  //   link: {
  //     href: "https://learnjs.gksander.com/",
  //     title: "View the live site",
  //   },
  // },
];
