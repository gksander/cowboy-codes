import type { OptimizedImageDetails } from "../utils/getOptimizedImageSrc";

export function OptimizedImage({
  image,
  alt,
  class: className,
  id,
  isHighPriority,
  ignoreAspectRatio,
}: {
  image: OptimizedImageDetails;
  alt: string;
  class?: string;
  id?: string;
  isHighPriority?: boolean;
  ignoreAspectRatio?: boolean;
}) {
  const avifSrc = image.src.find(
    (img) => img.includes(".avif") || img.includes("f=avif"),
  );
  const webpSrc = image.src.find(
    (img) => img.includes(".webp") || img.includes("f=webp"),
  );
  const defaultSrc = image.src.at(-1) || "";

  return (
    <picture>
      {avifSrc && <source type="image/avif" srcset={avifSrc} />}
      {webpSrc && <source type="image/webp" srcSet={webpSrc} />}
      <img
        src={defaultSrc}
        alt={alt}
        class={className}
        style={{
          aspectRatio: ignoreAspectRatio
            ? undefined
            : `${image.attributes.width} / ${image.attributes.height}`,
        }}
        {...image.attributes}
        id={id}
      />
    </picture>
  );
}
