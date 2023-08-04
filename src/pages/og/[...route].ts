import path from "node:path";
import colors from "../../../scripts/tw-colors.json";
import pkg from "canvas";
const { registerFont, createCanvas, loadImage } = pkg;
import { format } from "date-fns";
import type { CollectionEntry } from "astro:content";

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

export async function getStaticPaths() {
  return Object.entries(pages).map(([p, page]) => ({
    params: { route: p.replace(path.extname(p), "") + ".png" },
    props: page,
  }));
}

export async function get({ props }: { props: BlogData }) {
  return {
    body: await drawOGImage({
      title: props.title,
      pubDate: new Date(props.pubDate),
    }),
  };
}

/**
 * Drawing
 */

registerFont(
  path.resolve(process.cwd(), "src/assets/montserrat-latin-500-normal.ttf"),
  {
    family: "Montserrat Thin",
  },
);

async function drawOGImage({
  title,
  pubDate,
}: {
  title: string;
  pubDate: Date;
}) {
  const SC = 2;
  const WIDTH = SC * 1200;
  const HEIGHT = SC * 627;
  const PADDING = SC * 50;

  // Instantiate the canvas object
  const canvas = createCanvas(WIDTH, HEIGHT);
  const context = canvas.getContext("2d");

  // Background
  // Create gradient
  const grd = context.createLinearGradient(0, 0, WIDTH, HEIGHT);
  grd.addColorStop(0.4, colors.gray["800"]);
  grd.addColorStop(1, colors.secondary["900"]);
  context.fillStyle = grd;
  context.fillRect(0, 0, WIDTH, HEIGHT);

  // Headshot
  const AR = 1958 / 2000; // height / width
  const IMG_WIDTH = SC * 350;
  const IMG_HEIGHT = IMG_WIDTH * AR;
  context.drawImage(
    await loadImage(path.resolve(process.cwd(), "src/assets/headshot.png")),
    WIDTH - IMG_WIDTH,
    HEIGHT - IMG_HEIGHT,
    IMG_WIDTH,
    IMG_HEIGHT,
  );

  // Title
  const titleFontSize = SC * 75;
  const lineHeight = 1.5;
  context.font = `${titleFontSize}pt 'Montserrat Thin'`;
  context.textAlign = "left";
  context.textBaseline = "top";
  context.fillStyle = colors.white;
  const lines = getLines(context, title, 0.85 * WIDTH);
  lines.forEach((line, i) => {
    context.fillText(line, PADDING, PADDING + i * lineHeight * titleFontSize);
  });

  // Publication date
  context.font = `${0.5 * titleFontSize}pt 'Montserrat Thin'`;
  context.textAlign = "left";
  context.textBaseline = "bottom";
  context.fillStyle = colors.gray["300"];
  context.fillText(format(pubDate, "MMMM yyyy"), PADDING, HEIGHT - PADDING);

  return canvas.toBuffer("image/png");
}

function getLines(ctx: any, text: string, maxWidth: number) {
  var words = text.split(" ");
  var lines = [];
  var currentLine = words[0];

  for (var i = 1; i < words.length; i++) {
    var word = words[i];
    var width = ctx.measureText(currentLine + " " + word).width;
    if (width < maxWidth) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
}
