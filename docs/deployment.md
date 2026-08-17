# Deployment

> **Status: Planned.** The website is not deployed yet.

## Frontend — Vercel

The React + Vite app in `frontend/` is designed to deploy to **Vercel**.

- Build command: `npm run build` (runs `vite build`)
- Output directory: `frontend/dist`
- Framework preset: Vite

## Backend — Render / Railway

The future Django REST Framework backend will deploy to **Render** or
**Railway** (TBD when the backend is implemented).

- Python runtime with `pip`/`requirements.txt`
- PostgreSQL database as a managed service
- Environment variables for secrets and configuration

## Environment variables

- Frontend: no runtime env vars required today. Any future API base URL will
  be configured via Vercel environment variables.
- Backend: Django `SECRET_KEY`, database credentials, and other secrets will
  be stored as environment variables — never committed.
