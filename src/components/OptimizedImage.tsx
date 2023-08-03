import type { OptimizedImageDetails } from "../utils/getOptimizedImageSrc";

export function OptimizedImage({
  image,
  alt,
  class: className,
  id,
  isHighPriority,
}: {
  image: OptimizedImageDetails;
  alt: string;
  class?: string;
  id?: string;
  isHighPriority?: boolean;
}) {
  return (
    <picture>
      <source type="image/avif" srcset={image.src[0]} />
      <source type="image/webp" srcSet={image.src[1]} />
      <img
        src={image.src[2]}
        alt={alt}
        class={className}
        {...image.attributes}
        id={id}
        // @ts-ignore
      />
    </picture>
  );
}
