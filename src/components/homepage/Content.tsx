import { SectionHeader } from "../SectionHeader";
import { SubsectionHeader } from "../SubsectionHeader";
import { Carousel } from "../Carousel";
import { YoutubeEmbed } from "../YoutubeEmbed";

export function Content() {
  return (
    <div>
      <SectionHeader
        subtitle="Some dev-related content I've created over the last few years."
        className="mb-16"
      >
        Content
      </SectionHeader>

      <div className="flex flex-col gap-24">
        <div>
          <SubsectionHeader
            className="mb-8"
            subtitle="Some things I've written over the years."
          >
            Blog posts
          </SubsectionHeader>
          <div>
            <a href="/blog" className="text-gradient font-bold">
              Check out my blog.
            </a>
          </div>
        </div>

        <div>
          <SubsectionHeader
            className="mb-8"
            subtitle="Some videos and presentations I've made over the years."
          >
            Videos & Presentations
          </SubsectionHeader>

          <div className="grid gap-x-6 gap-y-12 grid-cols-1 sm:grid-cols-2">
            {VIDEOS.map((video) => (
              <div key={video.src} className="group">
                <div className="aspect-video w-full relative rounded-lg overflow-hidden mb-3">
                  <YoutubeEmbed id={video.src} />
                </div>
                <div className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition transition-colors duration-150">
                  {video.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const VIDEOS: { src: string; title: string }[] = [
  { src: "x-4GPDBWA2w", title: "Cloudinary DevJams: Migrating to Cloudinary" },
  { src: "DHeoxQBkcC0", title: "RN EU 2021: React Native Animations" },
  { src: "jtdaGeY_Ncs", title: "Chrome Live Expressions" },
  { src: "U-R89TfvVbs", title: "Browser currentTarget vs target" },
  { src: "opRtbpCKpBs", title: "Better Images in React Native" },
  { src: "3CL015A1Rgc", title: "Custom Pressables in React Native" },
];
