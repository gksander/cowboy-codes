import { SectionHeader } from "../SectionHeader";
import clsx from "clsx";
import FormidableIcon from "../../assets/Formidable-Icon.png";
import Coinbase from "../../assets/coinbase-icon.png";
import ASU from "../../assets/asu.png";
import Henri from "../../assets/henri.png";
import Synapse from "../../assets/synapse.png";
import Artisan from "../../assets/Artisan.png";
import { SubsectionHeader } from "../SubsectionHeader";
import { Carousel, CarouselItem } from "../Carousel";

export function BackgroundAndExperience() {
  return (
    <div>
      <SectionHeader
        subtitle="My academic and work background."
        className="mb-16"
      >
        Background & Experience
      </SectionHeader>

      <SubsectionHeader
        className="mb-8"
        subtitle="My work history. From teaching calculus, to slinging code, to leading
        teams."
      >
        Experience
      </SubsectionHeader>
      <Carousel
        items={experiences.map((exp) => ({
          title: exp.title,
          description: exp.description,
          image: exp.logo,
          subtitle: exp.company,
          subsubtitle: exp.time,
        }))}
        itemClassname="w-5/6 sm:w-[calc(50%-0.75rem)]"
        emphasizeFirstItem={true}
        className="mb-24"
      />

      <SubsectionHeader
        className="mb-8"
        subtitle="My academic background in theoretical mathematics, computational
        science, and education."
      >
        Education
      </SubsectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {educationItems.map((item, i) => (
          <CarouselItem
            key={i}
            title={item.title}
            description={item.description}
            subtitle={item.institution}
            subsubtitle={item.time}
            isPrimary={i === 0}
            image={item.logo}
          />
        ))}
      </div>
    </div>
  );
}

const Item = (
  item: (IExperience | EducationItem) & {
    isPrimary?: boolean;
    className?: string;
  },
) => {
  return (
    <div
      className={clsx(
        "flex flex-col shrink-0 gap-3 group relative rounded overflow-hidden snap-start",
        item.className,
      )}
      key={item.title}
    >
      <div className="flex-grow flex flex-col gap-2">
        <div
          className={clsx(
            "font-bold text-gray-800 self-start",
            item.isPrimary && "text-gradient",
          )}
        >
          {item.title}
        </div>
        <p className="flex-grow text-gray-800 text-sm">{item.description}</p>
      </div>
      <div>
        <div className="font-bold text-sm text-gray-700">
          {"company" in item ? item.company : item.institution}
        </div>
        <div
          className="text-xs"
          dangerouslySetInnerHTML={{ __html: item.time }}
        ></div>
      </div>
      {item.logo && (
        <img
          alt=""
          src={item.logo.src}
          className="absolute bottom-3 w-16 h-16 right-3 object-contain z-[-1] opacity-30 group-hover:opacity-50 grayscale group-hover:grayscale-0 transition-filters duration-300"
        />
      )}
    </div>
  );
};

type IExperience = {
  title: string;
  company: string;
  description: string;
  time: string;
  logo?: ImageMetadata;
};

const experiences: IExperience[] = [
  {
    title: "VP of Engineering",
    company: "Formidable",
    description: `Helping client engineering teams shine their brightest. Overseeing the development of open source software and community outreach.`,
    time: "June 2022 &ndash; current",
    logo: FormidableIcon,
  },
  {
    title: "Sr. Software Engineer",
    company: "Coinbase",
    description: `Full stack web and mobile on the Platform team. Built client SDKs and developer tools to help third parties integrate with Coinbase's fiat payment rails.`,
    time: `Nov. 2021 &ndash; June 2022`,
    logo: Coinbase,
  },
  {
    title: "Sr. Software Engineer",
    company: "Formidable Labs",
    description: `Software consultant, building software and helping others build software better. Focus on front-end web and native mobile using primarily JS tooling.`,
    time: `Mar. 2021 &ndash; Nov. 2021`,
    logo: FormidableIcon,
  },
  {
    title: "Sr. Software Engineer",
    company: "Synapse Studios",
    description: `Team lead on health/insurance tech client. Full-stack web and mobile. TypeScript, React, React Native, and Node.js.`,
    time: `Jan. 2020 &ndash; Mar. 2021`,
    logo: Synapse,
  },
  {
    title: "Sr. Software Engineer",
    company: "Henri Home",
    description: `Full-stack web and mobile development. React Native, Vue.JS, and Ruby on Rails.`,
    time: `Sept. 2019 &ndash; Jan. 2020`,
    logo: Henri,
  },
  {
    title: `Software Engineer`,
    company: "Artisan Colour",
    description: `Full-stack web development of eCommerce sites and internal tools. Vue.js, NodeJS, and MongoDB.`,
    time: `Aug. 2018 &ndash; Sept. 2019`,
    logo: Artisan,
  },
  {
    title: `Software Engineer`,
    company: "COSma Learning",
    description: `Development and R&D of custom online math courseware. JavaScript, PHP, and MySQL.`,
    time: `Jan. 2015 &ndash; Aug. 2018`,
  },
  {
    title: `Math Instructor`,
    company: "Arizona State Univ.",
    description: `Taught calculus and precalculus. Lead professional development workshops. R&D of online courseware.`,
    time: `May 2014 &ndash; Aug. 2018`,
    logo: ASU,
  },
];

type EducationItem = {
  title: string;
  institution: string;
  time: string;
  description: string;
  logo?: ImageMetadata;
};
const educationItems: EducationItem[] = [
  {
    time: "2018",
    title: "M.A - Mathematics",
    institution: "Arizona State University",
    description: `4.0 GPA. Focus on theoretical mathematics, math education, and online curriculum development.`,
    logo: ASU,
  },
  {
    time: "2014",
    title: "B.S. - Mathematics",
    institution: "Arizona State University",
    description: `4.0 GPA. Focus on theoretical and applied mathematics.`,
    logo: ASU,
  },
];
