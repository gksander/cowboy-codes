const fs = require("node:fs/promises");
const path = require("node:path");
const resolveConfig = require("tailwindcss/resolveConfig");
const twConfig = require("../tailwind.config.cjs");

const { theme } = resolveConfig(twConfig);

const main = async () => {
  await fs.writeFile(
    path.resolve(__dirname, "./tw-colors.json"),
    JSON.stringify(theme.colors, null, 2),
  );
};

main().catch(console.error);
