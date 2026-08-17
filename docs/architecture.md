# Architecture

## Frontend (implemented)

- **React 19** — component-based UI
- **Vite 8** — build tool and dev server
- **Tailwind CSS 4** — utility-first styling (via `@tailwindcss/vite`)
- **Framer Motion** — animations
- Located in [`frontend/`](../frontend)

Key source layout (`frontend/src/`):

| Path          | Purpose                                        |
| ------------- | ---------------------------------------------- |
| `components/` | Reusable UI components (Button, Header, Logo…) |
| `sections/`   | Homepage sections (Hero, About, Ministries…)   |
| `context/`    | React context (language provider)              |
| `data/`       | Site data + translations (Tamil/English)       |
| `assets/`     | Bundled images (fonts/icons reserved)          |
| `pages/`      | Future page routes (reserved)                  |
| `layouts/`    | Future layout components (reserved)            |
| `hooks/`      | Future custom hooks (reserved)                 |
| `services/`   | Future API client code (reserved)              |
| `utils/`      | Future shared helpers (reserved)               |

## Backend (planned)

- **Django** + **Django REST Framework** — REST API
- Located in [`backend/`](../backend) — not implemented yet.

## Database (planned)

- **PostgreSQL** — production database. See
  [`database.md`](database.md).

## Deployment (planned)

- **Frontend** → Vercel
- **Backend** → Render / Railway

See [`deployment.md`](deployment.md).
