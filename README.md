# node-boilerplate

A no-compromise boilerplate for projects willing to be on the cutting edge of ECMAScript and Node.

## Commands

### Setup

Install all dependencies.

```bash
bun install
```

Run your application.

```bash
bun run dev
```

### Build

Minify and bundle the Node application with [esbuild](https://esbuild.github.io/).

```bash
bun run build
```

Human-readable bundle of your Node application. For debugging purposes.

```bash
bun run build test
```

### Test

Run your tests with hot reloading.

```bash
bun run test
```

Run your tests without hot reloading. For testing in a CI pipeline.

```bash
bun run testci
```
