import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const plan =
  "Days 1-3: find one niche problem; validate with 20 outreach messages. Days 4-10: build a tiny paid tool for it, price $19. Days 11-30: sell on Gumroad, spend the $100 on targeted ads, post daily demos, reinvest profit. Zero sales by day 14: kill it, pivot to freelance gigs.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const file = join(outDir, "entry.txt");
writeFileSync(file, plan, "utf8");
chmodSync(file, 0o644);
