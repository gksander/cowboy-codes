import type { OptimizedImageDetails } from "../utils/getOptimizedImageSrc";

export function OptimizedImage({
  image,
  alt,
  class: className,
  loading = "lazy",
  id,
}: {
  image: OptimizedImageDetails;
  alt: string;
  class?: string;
  loading?: "eager" | "lazy";
  id?: string;
}) {
  return (
    <picture>
      <source type="image/avif" srcset={image.src[0]} />
      <source type="image/webp" srcSet={image.src[1]} />
      <img
        src={image.src[2]}
        alt={alt}
        loading={loading}
        class={className}
        {...image.attributes}
        id={id}
      />
    </picture>
  );
}
