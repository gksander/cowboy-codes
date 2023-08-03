import { Header } from "../Header";
import portrait from "../../assets/portrait-1.png";
import { ContentContainer } from "../ContentContainer";
import { AboutBanner } from "./AboutBanner";
import { BackgroundAndExperience } from "./BackgroundAndExperience";
import { Projects } from "./Projects";
import type { ComponentChildren } from "preact";

export function Homepage({ children }: { children: ComponentChildren }) {
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

          <img
            src={portrait.src}
            alt="headshot"
            class="w-[450px] mx-auto aspect-[2992/2533]"
            width="450px"
            loading="eager"
            // @ts-ignore
            fetchPriority={true}
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
