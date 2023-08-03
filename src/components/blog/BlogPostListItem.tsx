type Props = {
  title: string;
  description: string;
  publishedAt: string;
  href: string;
};

export function BlogPostListItem({
  title,
  description,
  href,
  publishedAt,
}: Props) {
  return (
    <div>
      <a href={href} class="font-bold mb-2">
        {title}
      </a>
      <div>{description}</div>
      <div>{publishedAt}</div>
    </div>
  );
}
