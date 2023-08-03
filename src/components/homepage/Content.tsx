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
          <Carousel
            items={BLOG_POSTS.map((post) => ({
              title: post.title,
              description: post.description,
              subtitle: post.platform,
              subsubtitle: post.publishDate,
              href: post.href,
            }))}
            itemClassname="w-5/6 sm:w-[calc(50%-0.75rem)]"
            shouldClipText={true}
          />
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
                <div className="font-bold text-gray-800 group-hover:text-primary-700 transition transition-colors duration-150">
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

const BLOG_POSTS: {
  title: string;
  description: string;
  href: string;
  image?: ImageMetadata;
  platform: "formidable.com" | "dev.to";
  publishDate?: string;
}[] = [
  {
    title: "A New Perspective: Sanity Perspectives and Live Previews",
    description:
      "In this post I'll walk through Sanity Perspectives and how they've drastically simplified our live preview workflows.",
    href: "https://formidable.com/blog/2023/sanity-a-new-perspective/",
    platform: "formidable.com",
    publishDate: "July 2023",
  },
  {
    title:
      "Powering Our Website's Evolution: Next.js App Router and Sanity CMS in Action",
    description:
      "What we've learned building web apps using Sanity and Next.js App Router that is great for content authors and great for end users while rearchitecting our website.",
    href: "https://formidable.com/blog/2023/powering-our-website-s-evolution-next-js-app-router-and-sanity-cms-in-action/",
    platform: "formidable.com",
    publishDate: "June 2023",
  },
  {
    title:
      "How we reduced image bandwidth by 86% migrating our media library to Cloudinary",
    description:
      "Merely migrating to Cloudinary is saving us significant image bandwidth, which is great for our end-users and great for the world.",
    href: "https://formidable.com/blog/2023/migrating-to-cloudinary/",
    platform: "formidable.com",
    publishDate: "February 2023",
  },
  {
    title: "What the hex?",
    description:
      "If you’re a designer or frontend developer, chances are you’ve happened upon hex color codes (such as `#ff6d91`). Have you ever wondered what the hex you’re looking at when working with hex color codes? In this post we’re going to break down these hex color codes and how they relate to RGB colors.",
    href: "https://formidable.com/blog/2022/what-the-hex/",
    platform: "formidable.com",
    publishDate: "October 2022",
  },
  {
    title: "Screen and Webcam Mixing and Recording with Web APIs",
    description:
      "There are great native applications on the market for screen recording and editing. While tools like these include a whole host of powerful editing features, for short-form content that doesn’t require post-processing, they might be overkill. I wanted to explore how far browser technology has come in the way of screen sharing and recording, and attempt to create a tool that would allow me to quickly create short-form technical video content with a little bit of flare.",
    href: "https://formidable.com/blog/2022/screen-webcam-mixing-recording/",
    platform: "formidable.com",
    publishDate: "September 2022",
  },
  {
    title: "What to Expect When Moving from React Web to React Native",
    description:
      "If you're a React Web engineer looking to build native mobile applications, React Native is a great choice. But it IS a little different. Here's where the paths diverge.",
    href: "https://formidable.com/blog/2021/rn-vs-react/",
    platform: "formidable.com",
    publishDate: "July 2021",
  },
  {
    title:
      "Animations in React Native: Performance and Reason-about-ability with Reanimated 2",
    description:
      "In this article, I'm going to discuss one of the aforementioned challenges of mobile app development with RN—building smooth animations and gestures—and a tool in the RN ecosystem, React Native Reanimated, that helps us take on this challenge without fear.",
    href: "https://formidable.com/blog/2021/reanimated-two/",
    platform: "formidable.com",
    publishDate: "April 2021",
  },
  {
    title: "React Native Tilt Carousel Animation",
    description:
      "It turns out, React Native FlatLists can do a ton of cool stuff! In this post, we'll look at one of those things: building a carousel that has a fancy tilt effect.",
    href: "https://dev.to/gksander/react-native-tilt-carousel-animation-13ep",
    platform: "dev.to",
    publishDate: "October 2020",
  },
  {
    title: "A Keyboard Display using CSS Grid",
    description:
      "I started working on a project for a client, that consists of creating web-based typing lessons. Part of the requirement was to create a non-interactive on-screen keyboard where the keys light up on keystroke.",
    href: "https://dev.to/gksander/a-keyboard-display-using-css-grid-2k2n",
    platform: "dev.to",
    publishDate: "April 2018",
  },
];

const VIDEOS: { src: string; title: string }[] = [
  { src: "x-4GPDBWA2w", title: "Cloudinary DevJams: Migrating to Cloudinary" },
  { src: "DHeoxQBkcC0", title: "RN EU 2021: React Native Animations" },
  { src: "jtdaGeY_Ncs", title: "Chrome Live Expressions" },
  { src: "U-R89TfvVbs", title: "Browser currentTarget vs target" },
  { src: "opRtbpCKpBs", title: "Better Images in React Native" },
  { src: "3CL015A1Rgc", title: "Custom Pressables in React Native" },
];
