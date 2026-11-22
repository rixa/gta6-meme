// Entry point for the make.fun "Post a GTA 6 meme on X" bounty (gta6-meme-x-01).
// Copies POST.json (which holds the URL of the X post) from the repository
// root to the output directory, so the grader can find it.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// The bot directory (repository root) can be overridden by the grader via
// MAKEFUN_BOT_DIR; otherwise it is the directory holding this script.
const repoRoot = process.env.MAKEFUN_BOT_DIR
  ? resolve(process.env.MAKEFUN_BOT_DIR)
  : dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(repoRoot, "POST.json");
const dest = join(outDir, "POST.json");

if (!existsSync(src)) {
  console.error(`POST.json not found at ${src}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);
console.log(`Copied POST.json to ${dest}`);
