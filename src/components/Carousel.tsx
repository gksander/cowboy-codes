import clsx from "clsx";
import type { OptimizedImageDetails } from "../utils/getOptimizedImageSrc";
import { OptimizedImage } from "./OptimizedImage";

type Props = {
  items: {
    title: string;
    description: string;
    subtitle: string;
    subsubtitle?: string;
    image?: OptimizedImageDetails;
    href?: string;
  }[];
  emphasizeFirstItem?: boolean;
  itemClassname?: string;
  className?: string;
  shouldClipText?: boolean;
};
export const Carousel = ({
  items,
  emphasizeFirstItem,
  itemClassname,
  className,
  shouldClipText,
}: Props) => {
  return (
    <div className={clsx("-mx-breakout relative", className)}>
      <div className=" px-breakout scroll-px-breakout flex gap-10 overflow-auto scrollbar-hide snap-normal snap-x">
        {items.map((item, i) => (
          <CarouselItem
            key={i}
            {...item}
            isPrimary={emphasizeFirstItem && i === 0}
            className={itemClassname}
            shouldClipText={shouldClipText}
          />
        ))}
        <div className="w-[calc(16.6667%-1.5rem)] sm:w-[calc(50%-1.5rem)] flex-shrink-0" />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-transparent to-[rgba(255,255,255,0.7)] dark:to-gray-800"></div>
    </div>
  );
};

export const CarouselItem = (
  item: Props["items"][number] & {
    isPrimary?: boolean;
    className?: string;
    shouldClipText?: boolean;
    isInternalLink?: boolean;
  },
) => {
  const titleClass = clsx(
    "font-bold self-start overflow-x-hidden whitespace-nowrap text-ellipsis max-w-full",
    item.isPrimary ? "text-gradient" : "text-gray-800 dark:text-gray-200",
    item.href &&
      "hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-150",
  );

  return (
    <div
      className={clsx(
        "flex flex-col shrink-0 gap-3 group relative rounded overflow-hidden snap-start",
        item.className,
      )}
    >
      <div className="flex-grow flex flex-col gap-2">
        {item.href ? (
          <a
            href={item.href}
            target={!item.isInternalLink ? "_blank" : undefined}
            rel={!item.isInternalLink ? "noopener noreferrer" : undefined}
            className={titleClass}
          >
            {item.title}
          </a>
        ) : (
          <div className={titleClass}>{item.title}</div>
        )}
        <p
          className={clsx(
            "flex-grow text-gray-800 dark:text-gray-300 text-sm",
            item.shouldClipText && "line-clamp-4",
          )}
        >
          {item.description}
        </p>
      </div>
      <div>
        <div className="font-bold text-sm text-gray-700 dark:text-gray-300">
          {item.subtitle}
        </div>
        {item.subsubtitle && (
          <div
            className="text-xs dark:text-gray-400"
            dangerouslySetInnerHTML={{ __html: item.subsubtitle }}
          ></div>
        )}
      </div>
      {item.image && (
        <OptimizedImage
          image={item.image}
          alt=""
          class="absolute bottom-3 w-16 h-16 right-3 object-contain z-[-1] opacity-30 group-hover:opacity-50 grayscale group-hover:grayscale-0 transition-filters duration-300"
        />
      )}
    </div>
  );
};
