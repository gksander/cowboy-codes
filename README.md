# Grant's Astro site setup

TODO: Self-document what's going on here.

## Blog Post FrontMatter options

- `title`: Title of the post (used for OpenGraph as well).
- `description`: Used as snippet shown on listing page, and used for HTML meta if no `metaDescription` provided.
- `metaDescription` explicitly set description for metadata tags.
- `keywords`: SEO keywords (comma-separated list)
- `pubDate`: date of publication
- `hasMath`: whether math equations present and need to load KaTeX for rendering.
- `ogConfig`:
  - `colorMode`: either `light` or `dark` (default)
  - `titleFontSize`: title font size, default 75
  - `featureImagePath`: path for feature image (optional), relative to `src/assets`.
  - `featureImageFullBleed`: whether or not to full-bleed feature image
  - `featureImageWidth`: set width of feature image (default is 350).
