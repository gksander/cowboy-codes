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
import type { OptimizedImageDetails } from "../../utils/getOptimizedImageSrc";

export function BackgroundAndExperience({
  expItems,
  edItems,
}: {
  expItems: IExperience[];
  edItems: EducationItem[];
}) {
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
        items={expItems.map((exp, i) => ({
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
        {edItems.map((item, i) => (
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

export type IExperience = {
  title: string;
  company: string;
  description: string;
  time: string;
  logo?: OptimizedImageDetails;
};

export type EducationItem = {
  title: string;
  institution: string;
  time: string;
  description: string;
  logo?: OptimizedImageDetails;
};
