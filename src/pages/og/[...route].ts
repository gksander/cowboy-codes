import path from "node:path";
import colors from "../../../scripts/tw-colors.json";
import pkg from "canvas";
const { registerFont, createCanvas, loadImage } = pkg;
import { format } from "date-fns";

// Import all pages from the content directory
const rawPages = import.meta.glob("/src/content/**/*.mdx", {
  eager: true,
});

// Remove the /src/content prefix from the paths
const pages = Object.entries(rawPages).reduce(
  (acc, [path, page]) => ({
    ...acc,
    [path.replace("/src/content", "")]: page,
  }),
  {},
);

export async function getStaticPaths() {
  return Object.entries(pages).map(([p, page]) => ({
    params: { route: p.replace(path.extname(p), "") + ".png" },
    // @ts-ignore
    props: page.frontmatter,
  }));
}

export async function get({ props }) {
  return {
    body: await drawOGImage({ title: props.title, pubDate: props.pubDate }),
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
  pubDate: string;
}) {
  const SC = 2;
  const width = SC * 1200;
  const height = SC * 627;
  const padding = SC * 50;

  // Instantiate the canvas object
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  // Background
  // Create gradient
  const grd = context.createLinearGradient(0, 0, width, height);
  grd.addColorStop(0.4, colors.gray["800"]);
  grd.addColorStop(1, colors.secondary["900"]);
  context.fillStyle = grd;
  context.fillRect(0, 0, width, height);

  // Headshot
  const AR = 1958 / 2000; // height / width
  const IMG_WIDTH = SC * 350;
  const IMG_HEIGHT = IMG_WIDTH * AR;
  context.drawImage(
    await loadImage(path.resolve(process.cwd(), "src/assets/headshot.png")),
    width - IMG_WIDTH,
    height - IMG_HEIGHT,
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
  const lines = getLines(context, title, 0.85 * width);
  lines.forEach((line, i) => {
    context.fillText(line, padding, padding + i * lineHeight * titleFontSize);
  });

  // Publication date
  context.font = `${0.5 * titleFontSize}pt 'Montserrat Thin'`;
  context.textAlign = "left";
  context.textBaseline = "bottom";
  context.fillStyle = colors.gray["300"];
  context.fillText(
    format(new Date(pubDate), "MMMM yyyy"),
    padding,
    height - padding,
  );

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

const hexToBase10 = (h: string) => parseInt(h, 16);
// For simplicity, assume hexValue of shape #xxxxxx
const hexToRgb = (hexValue: string) => {
  const rHex = hexValue.substring(1, 3);
  const gHex = hexValue.substring(3, 5);
  const bHex = hexValue.substring(5, 7);

  const r = hexToBase10(rHex);
  const g = hexToBase10(gHex);
  const b = hexToBase10(bHex);

  return { r, g, b };
};
