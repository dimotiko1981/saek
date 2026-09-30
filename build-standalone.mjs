import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const outputPath = process.argv[2];

if (!outputPath) {
  throw new Error("Usage: node build-standalone.mjs <output-html>");
}

const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");
let html = read("mathima-01.html");
const css = read("assets/css/styles.css");
const appJs = read("assets/js/app.js");
const playerJs = read("assets/js/lesson-player.js");
const quizJs = read("assets/js/mathima-01.js");
const workshopImage = fs.readFileSync(path.join(root, "assets/images/mechatronics-diagnostic.webp")).toString("base64");

html = html
  .replace(
    /<link rel="stylesheet" href="assets\/css\/styles\.css\?v=\d+" \/>/,
    `<style>\n${css}\n    </style>`,
  )
  .replace(
    'src="assets/images/mechatronics-diagnostic.webp"',
    `src="data:image/webp;base64,${workshopImage}"`,
  )
  .replace(
    /\s*<script src="assets\/js\/app\.js"><\/script>/,
    `\n    <script>\n${appJs}\n    </script>`,
  )
  .replace(
    /\s*<script src="assets\/js\/lesson-player\.js\?v=\d+"><\/script>/,
    `\n    <script>\n${playerJs}\n    </script>`,
  )
  .replace(
    /\s*<script src="assets\/js\/mathima-01\.js\?v=\d+"><\/script>/,
    `\n    <script>\n${quizJs}\n    </script>`,
  );

const unresolvedAssets = [
  "assets/css/styles.css",
  "assets/js/app.js",
  "assets/js/lesson-player.js",
  "assets/js/mathima-01.js",
  "assets/images/mechatronics-diagnostic.webp",
].filter((asset) => html.includes(asset));

if (unresolvedAssets.length) {
  throw new Error(`Standalone build still references: ${unresolvedAssets.join(", ")}`);
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, html);

