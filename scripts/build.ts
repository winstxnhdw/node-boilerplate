import { cp, mkdir, rm } from 'node:fs/promises'
import { build } from 'esbuild'

const build_directory = 'dist'
const external_modules = [] as string[]

async function main(args: string[]) {
  const arg = args.slice(2)[0]

  await rm(build_directory, { recursive: true, force: true })
  await mkdir(build_directory)

  const results = await Promise.allSettled(
    external_modules.map((module) =>
      cp(`node_modules/${module}`, `${build_directory}/node_modules/${module}`, {
        recursive: true,
      }),
    ),
  )

  for (const result of results) {
    if (result.status !== 'rejected') continue
    console.error(result.reason)
  }

  await build({
    entryPoints: ['src/index.ts'],
    outfile: `${build_directory}/index.js`,
    bundle: true,
    minify: arg !== '--test' && arg !== '-t',
    platform: 'node',
    external: external_modules,
  })
}

void main(Bun.argv)
