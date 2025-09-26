# About

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator, with [pnpm](https://pnpm.io/) as the package manager. 

## Development

## Local Development

```bash
pnpm start # or pnpm dev
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
pnpm build
```

This command generates static content into the `build` and can be served locally by running `pnpm serve`

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
