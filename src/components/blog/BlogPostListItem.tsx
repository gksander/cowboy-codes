import { OptimizedImage } from "@components/OptimizedImage";
import type { CollectionEntry } from "astro:content";
import { format } from "date-fns";

export function BlogPostListItem({ slug, data }: CollectionEntry<"blog">) {
  return (
    <div class="flex flex-col">
      <div class="mb-3">
        <a href={`/blog/${slug}`} class="block group">
          <OptimizedImage
            image={{
              src: [`/og/blog/${slug}.avif`, `/og/blog/${slug}.jpeg`],
              attributes: {
                width: OG_WIDTH,
                height: OG_HEIGHT,
              },
            }}
            alt={`Cover image for ${data.title}`}
            class="rounded group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-150"
          />
        </a>
      </div>
      <div class="flex-1 flex flex-col">
        <a
          class="font-bold text-gray-800 dark:text-gray-200 mb-2 block hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-150"
          href={`/blog/${slug}`}
        >
          {data.title}
        </a>
        <p class="flex-1 text-gray-700 dark:text-gray-300 text-sm mb-2 line-clamp-3">
          {data.description}
        </p>
        <p class="text-xs dark:text-gray-400">
          {format(data.pubDate, "MMMM yyyy")}
        </p>
      </div>
    </div>
  );
}

const OG_WIDTH = 1200;
const OG_HEIGHT = 627;
