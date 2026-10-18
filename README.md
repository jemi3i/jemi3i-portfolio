
# COCKROACH Underground Fashion

Brutalist, high-end streetwear storefront concept for a clothing brand. The UI blends raw typography, glitch visuals, and survivalist motifs into a bold e-commerce experience.

## Highlights

- Multi-page storefront with Home, Shop, Product detail, Cart, and Contact flows
- Strong visual identity with glitch, scanline, and technical typography motifs
- Fast Vite build and SPA routing with React Router

## Tech Stack

- React + TypeScript
- Vite
- React Router

## Local Development

**Prerequisites:** Node.js 20+

1. Install dependencies:
   `npm install`
2. Start the dev server:
   `npm run dev`

## Production Build

1. Build the app:
   `npm run build`
2. Preview locally:
   `npm run preview`

## Docker

1. Build the image:
   `docker build -t cockroach-fashion .`
2. Run the container:
   `docker run --rm -p 8080:80 cockroach-fashion`

Open http://localhost:8080

## CI

GitHub Actions runs `npm install` and `npm run build` on pushes and pull requests to `main`.
