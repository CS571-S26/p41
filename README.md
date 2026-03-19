# TicketFind

TicketFind is a small React app built with Vite.

## How to run the project

1. Install dependencies:

```bash
npm install
```

Why we use it:
This downloads the packages the project needs, like React and Vite.

2. Build the project:

```bash
npm run build
```

Why we use it:
This creates the production version of the app. In this project, the built files go into the `docs/` folder for GitHub Pages.

3. Start the local development server:

```bash
npm run dev
```

Why we use it:
This runs the app locally so you can open it in your browser, test changes, and see updates while you work.

## GitHub Pages

GitHub Pages does not run Vite for you.
It only serves the static files created by `npm run build`, which is why the `docs/` folder matters.
