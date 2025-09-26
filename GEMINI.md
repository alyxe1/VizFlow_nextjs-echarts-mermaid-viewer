# GEMINI.md

## Project Overview

This project is a Next.js application called "VizFlow" that provides a web-based tool to visualize Mermaid graph definitions. It parses Mermaid syntax from `.md` files and renders them as interactive and explorable charts using ECharts. The application supports features like file upload, a default visualization, interactive graph controls (pan, zoom, node highlighting), and subgraph support.

The frontend is built with React and TypeScript, and the charting is powered by Apache ECharts. The application is configured to run in a development environment, be built for production, and started as a production server.

## Building and Running

### Development

To run the application in a development environment, use the following command:

```bash
npm run dev
```

This will start the development server on [http://localhost:3000](http://localhost:3000).

### Production

To build the application for production, use the following command:

```bash
npm run build
```

To start the production server, use the following command:

```bash
npm run start
```

## Development Conventions

The codebase is written in TypeScript and uses React for the user interface. The project follows standard Next.js conventions. The application's main page is `app/page.tsx`, which uses the `EchartsGraph` component from `components/EchartsGraph.tsx` to render the graph. The Mermaid parsing logic is located in `lib/mermaidParser.ts`.

The project uses `eslint` for linting, which can be run with the following command:

```bash
npm run lint
```
