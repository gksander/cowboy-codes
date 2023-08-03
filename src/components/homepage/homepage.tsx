import { Header } from "../Header";
import portrait from "../../assets/portrait-1.png";
import { ContentContainer } from "../ContentContainer";
import { AboutBanner } from "./AboutBanner";
import { BackgroundAndExperience } from "./BackgroundAndExperience";
import { Projects } from "./Projects";
import type { ComponentChildren } from "preact";
import { getImage } from "astro:assets";
import type { OptimizedImageDetails } from "../../utils/getOptimizedImageSrc";
import { OptimizedImage } from "../OptimizedImage";

export function Homepage({
  children,
  portrait,
}: {
  portrait: OptimizedImageDetails;
  children: ComponentChildren;
}) {
  // const deets = getImage(portrait);

  return (
    <>
      <Header>
        <ContentContainer class="px-5 pt-12 relative ">
          {/*<div className="absolute bottom-0  w-64 aspect-square bg-gradient-radial from-stone-500 to-transparent z-[-1]"></div>*/}

          <h1 class="text-3xl sm:text-4xl md:text-5xl text-gray-700 p-4 text-center font-bold mb-12">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'm Grant.{" "}
            <span class="text-gradient whitespace-nowrap">
              I build cool shit.
            </span>
          </h1>

          <OptimizedImage
            image={portrait}
            alt="Headshot"
            class="w-[450px] mx-auto aspect-[2992/2533] "
            loading="eager"
            id="headshot"
          />
        </ContentContainer>
      </Header>
      <AboutBanner />
      <ContentContainer class="px-5 flex flex-col gap-32 py-24">
        <BackgroundAndExperience />
        <Projects />
        {children}
      </ContentContainer>
    </>
  );
}
