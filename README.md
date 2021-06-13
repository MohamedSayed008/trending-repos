This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, Install Dependencies

```bash
yarn install
```

Then run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on

- [http://localhost:3000/api/devs](http://localhost:3000/api/devs)
- [http://localhost:3000/api/repos](http://localhost:3000/api/repos)

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Caveats

These are the obvious caveats

- Inline styles
- Not using any CSS library
- HTML Semantic and structure needs refinement
- The API is using static baseUrl it supposed to use dynamic one based on the Environment
- There was no home page therefore permanent redirection is happening from the root
- Responsiveness needs refinement
