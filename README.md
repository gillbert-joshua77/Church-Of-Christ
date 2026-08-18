# Church Of Christ — கிறிஸ்துவின் சபை

**வேதமே வெளிச்சம் — The Word is Light**

A bilingual (Tamil / English) church website for the **Church Of Christ** in
Dindigul, Tamil Nadu, India. The site introduces the church to its
congregation and visitors with service times, ministries, leadership, events,
and a way to plan a visit — all switchable between Tamil and English.

## Project structure

```
Church-Of-Christ/
├── frontend/            # React + Vite + Tailwind CSS application (live website)
│   ├── public/
│   └── src/
│       ├── assets/      # images, icons, fonts (bundled with the app)
│       ├── components/  # reusable UI components
│       ├── layouts/     # reserved: layout components
│       ├── pages/       # reserved: future pages
│       ├── sections/    # homepage sections
│       ├── data/        # site data + Tamil/English translations
│       ├── context/     # React context (language provider)
│       ├── hooks/       # reserved: custom hooks
│       ├── services/    # reserved: API client code
│       ├── utils/       # reserved: shared helpers
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
├── backend/             # planned: Django + Django REST Framework (not yet built)
├── docs/                # project documentation
├── prototype/           # old visual reference HTML (not production)
└── assets/              # raw/original materials not used by the frontend
```

## Current stack

**Frontend (implemented):**

- React
- Vite
- Tailwind CSS
- Framer Motion

**Backend (planned — not yet implemented):**

- Django REST Framework
- PostgreSQL

**Deployment (planned):**

- Frontend → Vercel
- Backend → Render / Railway

> The backend, database, and authentication are **planned** design
> placeholders only. Nothing beyond the frontend is built yet.

## Getting started

```bash
cd frontend
npm install
npm run dev
```

## Documentation

- [`docs/project-overview.md`](docs/project-overview.md)
- [`docs/requirements.md`](docs/requirements.md)
- [`docs/architecture.md`](docs/architecture.md)
- [`docs/api.md`](docs/api.md)
- [`docs/database.md`](docs/database.md)
- [`docs/deployment.md`](docs/deployment.md)

## License

[MIT](LICENSE)
