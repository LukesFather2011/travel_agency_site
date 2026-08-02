# Sand Sea n Sun Travel — Website Assets

## File Structure
```
sand-sea-n-sun/
├── index.html        ← Main landing page
├── styles.css        ← All styles
├── script.js         ← Interactions & animations
└── assets/           ← Put your photos/videos here
    ├── caribbean.jpg
    ├── cruise.jpg
    ├── allinclusive.jpg
    ├── honeymoon.jpg
    └── group.jpg
```

## Adding Your Own Photos

The destination cards in the "Popular Trips" section support local images.
Drop your photos into the `assets/` folder with these exact filenames
(or update the filenames in `index.html`):

| Filename            | Used For                  |
|---------------------|---------------------------|
| `caribbean.jpg`     | Caribbean destination card|
| `cruise.jpg`        | Cruise Vacations card     |
| `allinclusive.jpg`  | All-Inclusive Resorts card|
| `honeymoon.jpg`     | Romantic Getaways card    |
| `group.jpg`         | Group Travel card         |

> **Tip:** If no local image is found, each card falls back to a matching gradient
> color scheme automatically — so the site still looks great without photos.

## Hero Background
The hero section currently uses a free Unsplash photo (no attribution required).
To replace it with your own, find this line in `styles.css`:

```css
background:
  url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?...')
```

Replace the URL with `url('assets/your-hero-photo.jpg')`.

## Hosting the Site
This is a static site — no server needed. Options:
- **GitHub Pages** (free) — drag the folder into a repo and enable Pages
- **Netlify** (free) — drag-and-drop deploy at netlify.com
- **Google Drive / Dropbox** — not ideal for websites; use the above instead

## Updating Contact Info
All contact links point to the Facebook page and Google Form already embedded.
No maintenance needed — the Google Form responses go straight to your inbox.
