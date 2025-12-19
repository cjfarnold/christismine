

## Project overview

A lightweight Vite + React app that displays a grid of videos (thumbnails + titles) and opens a modal viewer for a selected video. Video metadata and images are served from `public/data/videos.json` and `public/images/...`, and a Python script can fetch and refresh that data from YouTube.

## Features

- Responsive video grid and modal viewer (components: `VideoGrid`, `VideoModal`, `VideoTile`)
- Static assets served from `public/` for simple hosting
- `fetch_videos.py` fetches YouTube playlist uploads, downloads thumbnails, and writes `public/data/videos.json`

## Tech stack

- **Frontend:** React + Vite
- **Script:** Python (requests) to fetch YouTube metadata and thumbnails
- **Preview / Build:** `npm run dev`, `npm run build`, `npm run preview`
