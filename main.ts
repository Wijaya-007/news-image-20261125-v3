// The World in One Day — Wednesday 25 November 2026 (v3).
// Deterministic, offline: copies the pre-rendered front page (entry.png,
// sitting next to this script) into the output directory. No network,
// no randomness, no timestamps in the output.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
console.log("Wrote entry.png to " + outDir);
