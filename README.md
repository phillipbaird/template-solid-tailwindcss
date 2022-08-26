## template-solid-tailwindcss

Get started developing with [SolidJS](https://www.solidjs.com/), [TailwindCSS](https://tailwindcss.com/) and [Typescript](https://www.typescriptlang.org/) using this enhanced version of the standard [ts-tailwind template](https://github.com/solidjs/templates).
It adds...
- `pnpm` out of the box.
- Vitest for testing
- Prettier for code formatting
- ESLint for linting
- a `public` folder with blank favicon

## Usage

```shell
# Typescript + tailwindcss template
$ pnpx degit phillipbaird/template-solid-tailwindcss my-solid-project
$ cd my-solid-project
$ pnpm install # or pnpm install or yarn install
```

This templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

## Available Scripts

In the project directory, you can run:

### `pnpm dev` or `pnpm start`

Runs the app in the development mode.<br>
Open [http://localhost:5172](http://localhost:5172) to view it in the browser.

The page will reload if you make edits.<br>

### `pnpm build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `pnpm server`

Serves the app built by `pnpm build` for local testing of production build.

### `pnpm test`

Run tests using Vitest.

### `pnpm coverage`

Check test coverage.

### `pnpm prettier`

Run Prettier across source code.

### `pnpm lint`

Run ESLint for Typescript across the source code.


## Deployment

You can deploy the `dist` folder to any static host provider (netlify, etc. etc.)
