# ts-template

A minimal TypeScript library template for 2026-era workflows.

## Stack

- **Runtime / package manager:** [Bun](https://bun.sh)
- **Formatter + linter:** [Biome](https://biomejs.dev)
- **Compiler:** TypeScript 5
- **Test runner:** `bun test`

## Quick start

```bash
bun install
bun run check
bun test
bun run build
```

## Scripts

- `bun run build` – build ESM (`dist/index.js`), CommonJS (`dist/index.cjs`) and types (`dist/index.d.ts`)
- `bun run typecheck` – run TypeScript in no-emit mode
- `bun run lint` – run Biome checks
- `bun run format` – apply Biome formatting
- `bun run check` – typecheck + lint
- `bun test` – run tests

## Notes on Biome config

This template **includes** `biome.json` intentionally for reproducibility and easier customization. If you prefer raw defaults, you can delete the file and run:

```bash
bunx --bun biome init
```

## License

MIT. See [LICENSE](./LICENSE).


## Pinned tool versions

- Bun: `1.3.9`
- Biome: `2.3.15`
- TypeScript: `5.9.3`
