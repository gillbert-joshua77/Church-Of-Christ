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

## Content folders (Songs)

The website is driven by the real content in the project root:

- `Song Lyrics/` — one `.txt` file per song (Tamil lyrics)

There is **no manual index** for songs — the Vite content plugin
(`frontend/plugins/contentPlugin.js`) reads the folder at dev/build
startup and exposes the content to React as a virtual module. **Add a
song file, restart/build Vite, and it appears automatically.** Songs are
parsed into a normalized shape (see `src/content/songs/songParser.js`)
that mirrors the future Django API contract, so swapping in the backend
later only changes the loader (`src/content/*/…Loader.js`).

## Videos (`frontend/src/data/videos.json`)

Videos are a hand-maintained JSON index — there are no local MP4 files:

```json
{
  "id": 1,
  "title": "கிறிஸ்து உங்கள் இல்லத்திற்கு வந்தால்...?",
  "type": "video",          // "video" | "live"
  "parts": [
    { "part_no": 1, "ytId": "qJz5m5fMZl0" },
    { "part_no": 2, "ytId": "DmewQjd8Vgo" }
  ]
}
```

- Each entry's `parts` are rendered in order as responsive YouTube embeds
  built from `ytId` (thumbnails come straight from YouTube too).
- `src/content/videos/videoLoader.js` normalizes the JSON into the shape
  the UI expects; when a backend lands, only that loader changes.

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
