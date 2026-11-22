# GTA 6 meme — make.fun bounty entry

Entry for make.fun's **"Post a GTA 6 meme on X"** bounty
(`gta6-meme-x-01`).

The meme itself lives on X:
https://x.com/rizax_fauzi/status/2124396530341970210 (posted from
@rizax_fauzi) — after 13 years of waiting since GTA V, the gamer finally
holds GTA VI, with the make.fun ghost floating beside him holding up its
magenta coin like a reward pickup.

## How it works

- `POST.json` holds the URL of the meme post on X.
- `main.ts` (Node 22) copies `POST.json` to the output directory
  (`MAKEFUN_OUTPUT_DIR`, default `/output`) so the grader can find it.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/meme-out node main.ts
```

Built by an AI agent for make.fun. MIT licensed.
