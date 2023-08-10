import path from "node:path";
import imageSize from "image-size";
import colors from "../../../scripts/tw-colors.json";
import { format } from "date-fns";
import type { CollectionEntry } from "astro:content";
import { Canvas, FontLibrary, loadImage } from "skia-canvas";
import sharp from "sharp";

type BlogData = CollectionEntry<"blog">["data"];

// Import all pages from the content directory
const rawPages = import.meta.glob("/src/content/**/*.mdx", {
  eager: true,
});

// Remove the /src/content/ prefix from the paths
const pages = Object.entries(rawPages).reduce<Record<string, BlogData>>(
  (acc, [path, page]) => {
    acc[path.replace("/src/content/", "")] = (
      page as { frontmatter: BlogData }
    ).frontmatter;
    return acc;
  },
  {},
);

type Ext = ".avif" | ".jpeg";

export async function getStaticPaths() {
  const makeEntries = (ext: Ext) =>
    Object.entries(pages).map(([p, page]) => ({
      params: { route: p.replace(path.extname(p), "") + ext },
      props: { ...page, ext },
    }));

  return [...makeEntries(".jpeg"), ...makeEntries(".avif")];
}

export async function get({ props }: { props: BlogData & { ext: Ext } }) {
  let img = await drawOGImage({
    title: props.title,
    pubDate: new Date(props.pubDate),
    ogConfig: props?.ogConfig,
  });

  if (props.ext === ".avif") {
    img = await sharp(img).avif().toBuffer();
  }

  return new Response(img, {
    headers: {
      "content-type": `image/${props.ext.slice(1)}`,
    },
  });
}

FontLibrary.use(
  "Montserrat Thin",
  path.resolve(process.cwd(), "src/assets/montserrat-latin-500-normal.ttf"),
);

async function drawOGImage({
  title,
  pubDate,
  ogConfig,
}: {
  title: string;
  pubDate: Date;
  ogConfig?: BlogData["ogConfig"];
  isPng?: boolean;
}) {
  // Input massage
  const isLight = ogConfig?.colorMode === "light";
  const isFeatureImageFullBleed = ogConfig?.featureImageFullBleed !== false;
  const featureImagePath = ogConfig?.featureImagePath || "headshot.png";

  // Canvas config
  const WIDTH = 1200;
  const HEIGHT = 627;
  const PADDING = 50;
  const canvas = new Canvas(WIDTH, HEIGHT),
    ctx = canvas.getContext("2d");

  // Background
  const grd = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  grd.addColorStop(0.4, isLight ? colors.primary["100"] : colors.gray["800"]);
  grd.addColorStop(
    1,
    isLight ? colors.primary["200"] : colors.secondary["900"],
  );
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Feature image
  const imgPath = path.resolve(process.cwd(), "src/assets", featureImagePath);
  const { width = 1, height = 1 } = await imageSize(imgPath);

  const AR = height / width; // height / width
  const IMG_WIDTH = ogConfig?.featureImageWidth || 350;
  const IMG_HEIGHT = IMG_WIDTH * AR;
  ctx.drawImage(
    await loadImage(imgPath),
    WIDTH - (isFeatureImageFullBleed ? 0 : PADDING) - IMG_WIDTH,
    HEIGHT - (isFeatureImageFullBleed ? 0 : PADDING) - IMG_HEIGHT,
    IMG_WIDTH,
    IMG_HEIGHT,
  );

  // Title
  const titleFontSize = ogConfig?.titleFontSize || 75;
  ctx.font = `${titleFontSize}pt 'Montserrat Thin'`;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillStyle = isLight ? colors.gray["900"] : colors.white;
  ctx.textWrap = true;
  ctx.fillText(title, PADDING, PADDING, 0.85 * WIDTH);

  // Publication date
  ctx.font = `${0.5 * titleFontSize}pt 'Montserrat Thin'`;
  ctx.textAlign = "left";
  ctx.textBaseline = "bottom";
  ctx.fillStyle = isLight ? colors.gray["800"] : colors.gray["300"];
  ctx.fillText(format(pubDate, "MMMM yyyy"), PADDING, HEIGHT - PADDING);

  return canvas.toBuffer("jpeg", { density: 1 });
}
