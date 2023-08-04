const fs = require("node:fs/promises");
const path = require("node:path");
const { createCanvas, loadImage, registerFont } = require("canvas");

registerFont(path.resolve(__dirname, "montserrat-latin-500-normal.ttf"), {
  family: "Montserrat Thin",
});

const main = async () => {
  const width = 1200;
  const height = 627;

  // Instantiate the canvas object
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  // Fill the rectangle with purple
  context.fillStyle = "#764abc";
  context.fillRect(0, 0, width, height);

  context.drawImage(
    await loadImage(path.resolve(__dirname, "../src/assets/headshot-bw.png")),
    0,
    0,
    100,
    100,
  );

  // Text

  context.font = "70pt 'Montserrat Thin'";
  context.textAlign = "center";
  context.fillStyle = "#fff";

  context.fillText("gksander", 500, 300);

  // Write the image to file
  const buffer = canvas.toBuffer("image/png");
  await fs.writeFile("./image.png", buffer);
};

main();
