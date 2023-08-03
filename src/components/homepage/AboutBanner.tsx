import { ContentContainer } from "../ContentContainer";

export function AboutBanner() {
  return (
    <div className="text-gray-700 relative -mt-16">
      <div className="absolute inset-x-0 h-[800px] -top-[400px] bg-gradient-to-b from-white via-primary-100 to-white z-[-1]" />
      <ContentContainer class="px-5 py-8 flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-12 justify-center">
        {SECTIONS.map((section) => (
          <div
            key={section.title}
            className="sm:w-half-8 text-left sm:text-center"
          >
            <h2 className="text-xl font-bold mb-2 text-gray-800">
              {section.title}
            </h2>
            <p className="leading-snug">{section.body}</p>
          </div>
        ))}
      </ContentContainer>
    </div>
  );
}

const SECTIONS: { title: string; body: string }[] = [
  {
    title: "Code cowboy",
    body: `TypeScript connoisseur. Animation aficionado. Frontend web, mostly React and Next.js. Cross-platform mobile with React Native, Kotlin, and Swift. Backend with Node.js. Can do a bit of cloud wrangling.`,
  },
  {
    title: "Team leader",
    body: `With a background in education and technical communication, a passion for people, and the technical sophistication to guide projects – I'm your guy when it comes to leading engineering teams.`,
  },
  {
    title: "Curious cat",
    body: `Learning is one of my favorite past times, followed closely by teaching others. You'll catch me learning new things on the daily and walking head first into horizon expansion.`,
  },
];
