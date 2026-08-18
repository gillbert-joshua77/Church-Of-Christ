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

## Content folders (Songs & Videos)

The website is driven by the real content in the project root:

- `Song Lyrics/` — one `.txt` file per song (Tamil lyrics)
- `Video/` — local `.mp4`/`.webm`/`.mov` files; top-level folders become
  video **series**, standalone files appear under **General**

There is **no manual index** — the Vite content plugin
(`frontend/plugins/contentPlugin.js`) reads these folders at dev/build
startup and exposes the content to React as virtual modules. **Add a file,
restart/build Vite, and it appears automatically.**

- Songs & videos are parsed into a normalized shape (see
  `src/content/songs/songParser.js` and `src/content/videos/videoParser.js`)
  that mirrors the future Django API contract, so swapping in the backend
  later only changes the loaders (`src/content/*/…Loader.js`).
- Local videos are served in `vite dev` and `vite preview` via a
  Range-aware middleware (`/content/videos/…`). They are **not** copied
  into the build by default (the folder is multi-GB) — set
  `KS_COPY_VIDEOS=1` on `vite build` to include them in `dist/`.
- Thumbnails: if `ffmpeg`/`ffprobe` are installed, a representative frame
  is extracted per video; otherwise (or when no image exists next to a
  video) a branded CSS placeholder is shown — never a broken image.

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
