# DCEN

Powering smarter cities through intelligent energy management. ©DCen brings together data, infrastructure, and control tools to ensure reliable, efficient, and sustainable energy flow.

A grid-monitoring dashboard: live network stats, deployment tracking, a grid load heatmap, and load-capacity gauges for a fictional energy operator ("Umbrella Corp").

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- React Router v7 (client-side routing, no backend)

All data on screen is mocked/simulated client-side — there is no API or backend yet.

## Getting started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build
npm run lint     # oxlint
```

## Routes / screens

| Route | Page | Status |
|---|---|---|
| `/login` | Login (`Welcome to ©DCen`) | Built — form navigates to `/` on submit, no real auth |
| `/` | Standard View (overview dashboard) | Partially built — layout + panel shells in place, panel content pending |
| `/grid` | Source Terminal | Partially built — same as above |
| `/deployment` | Heat Map / Deployment Tracker | Built — generated hex-grid heatmap with live mock sector loads, click-to-inspect side panel |
| `/load-test` | Loading Capacity | Built — capacity/peak-load/reserve-margin gauges, results panels pending |

`/maintenance`, `/deployments`, `/terminal-issues` tabs exist as disabled placeholders (no screens designed yet).

## Design source

The visual design comes from a Figma file (`Smart Data Dashboard`, file key `WFr2k2sF6bQd1QxgbJe4vG`) pulled via the Figma MCP server. The Figma seat is on a **Starter plan (20 MCP tool calls/month)**, which was exhausted partway through — so:

- The **shared layout** (top bar, sidebar, view tabs), **Login**, **Standard View**, and **Source Terminal** screens were built directly from Figma design context/screenshots.
- The **Heat Map/Deployment Tracker** and **Loading Capacity** screens were designed and built from scratch in-app (no more Figma budget), reusing the established color/typography/component system rather than copying Figma pixel-for-pixel.
- Several UI details (panel headers, stat ticker layout, sidebar dropdowns, live/blinking data) were iterated on and refined directly against the running app per follow-up feedback, independent of the original Figma file.

To resume pulling from Figma, either wait for the monthly quota reset or upgrade the seat to Dev/Full (see `whoami`/`get_libraries` rate-limit docs in the Figma MCP server).

## Design system notes

- **Colors:** dark navy `#1C2632` (primary text/dark fills), gray `#6E808E` (secondary text/borders), snow `#EFF2F9` / `#E4EBF1` (light backgrounds), status colors green `#00FF3C` (good), yellow `#FEEC61` (caution), orange `#FEB161` (sun/moderate), red `#FF0022` (danger) — see `src/lib/status.ts`.
- **`PanelShell`** (`src/components/ui/PanelShell.tsx`): the shared panel "shell" — rounded corners, white border, soft embossed inset shadow (copied from the sidebar). Every panel/card uses this and supplies its own background.
- **`PanelHeaderBadge`** / **`PlainPanel`** (`src/components/ui/`): two panel-header styles — a bordered diagonal-stripe badge for primary panels, and a plain centered gray caption for secondary panels (see the bottom row of Standard View).
- **`StatTicker`** (`src/components/layout/StatTicker.tsx`): the top-bar stat ticker. Numeric rows live-fluctuate on a ~2.5s interval via `useLiveValue`; danger-status pills (e.g. Storm Alert, RES) pulse/blink via `animate-pulse`.
- **`HexGrid`** (`src/components/heatmap/HexGrid.tsx`) + **`GaugeChart`** (`src/components/charts/GaugeChart.tsx`): hand-built SVG visualizations (hex heatmap, circular gauge) used in place of Figma-exported map images once the Figma quota ran out.
- Sidebar nav items (Source, Storage & Backup, Grid, Consumption) expand into sub-category dropdowns (accordion, one open at a time); only Source and Storage have real sub-items so far.

## Known gaps / next steps

- Standard View and Source Terminal panels still show "Coming next." placeholders for map/chart content (previously backed by Figma screenshot images, removed in favor of building real components).
- Heat Map and Loading Capacity results/summary panels are placeholders pending design.
- No backend/API — all values are mocked or randomly simulated client-side.
- No auth — Login always succeeds and redirects to `/`.
- Nothing has been committed to git yet as of the end of this session; everything currently sits as uncommitted local changes.
