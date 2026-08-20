# Exodia

Vite + React + TypeScript app with shadcn/ui, TanStack Query, and Zustand.

## Stack

| Concern      | Choice                                                     |
| ------------ | ---------------------------------------------------------- |
| Build        | Vite 8 + `@vitejs/plugin-react`                            |
| Language     | TypeScript (strict, `erasableSyntaxOnly`)                  |
| UI           | shadcn/ui (`radix-nova` style) + Tailwind CSS v4           |
| Icons        | lucide-react                                               |
| Data fetching| TanStack Query v5 (+ devtools)                             |
| State        | Zustand (devtools + persist middleware)                    |
| Toasts       | sonner                                                     |

## Commands

```bash
npm run dev      # dev server on http://localhost:5173
npm run build    # typecheck (tsc -b) + production build
npm run preview  # serve the production build
npm run lint     # oxlint
```

## Layout

```
src/
  api/            # fetch wrapper + per-resource query/mutation definitions
    client.ts     # api<T>() helper, ApiError
    posts.ts      # queryOptions, key factory, useCreatePost
  components/
    providers.tsx # QueryClientProvider, theme sync, Toaster, devtools
    ui/           # shadcn components (owned by you — edit freely)
  lib/
    query-client.ts
    utils.ts      # cn()
  stores/
    app-store.ts  # Zustand store, devtools-named actions
```

## Devtools

- **TanStack Query** — floating button in the bottom-right corner in dev.
- **Zustand** — the store is registered as `AppStore` in the
  [Redux DevTools](https://github.com/reduxjs/redux-devtools) browser extension.
  Every action is named (`app/toggleTheme`, …) so the timeline stays readable.
  Devtools are gated on `import.meta.env.DEV` and stripped from production builds.

## Adding components

```bash
npx shadcn@latest add dialog dropdown-menu table
```

## Configuration

Copy `.env.example` to `.env` and set `VITE_API_URL` to point at your backend.
The default targets JSONPlaceholder so the demo screen works with no setup.
