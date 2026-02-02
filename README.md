# Solid Data Manager

Solid Data Manager is a standalone React application for managing files in a Solid Pod. It provides a simple UI for browsing, uploading, downloading, and organizing resources in a Pod, and can also be embedded as a library in other applications.

## Features

- File and folder browsing for Solid Pods
- Upload, download, and delete resources
- Embedded mode via a lightweight bundle
- Solid authentication integration (Inrupt client libraries)
- SPA routing with static hosting support (Nginx)

## Installation (Docker)

### Production

Build and run the production container:

```bash
docker compose up --build
```

The app is served on port `3002` by default and is reachable at `http://localhost:3002`.

### Development

Run the dev container with live code mounting:

```bash
docker compose -f docker-compose.dev.yaml up --build
```

### Configuration

- `FRONTEND_PORT` (default: `3002`) controls the host port mapped to the container.
- For production image builds you can also set `PUBLIC_URL` (default: `/solid-data-manager`).

## Embedding

The embed entrypoint is exported as `solid-data-manager/embed` and exposes:

- `DataManagerEmbed` - router-free component (requires `webId` prop)
- `setSession` - optional override to inject a host session instance
- `solid-data-manager/embed.css` - styles for the embedded Data Manager

Example:

```js
import { DataManagerEmbed, setSession } from "solid-data-manager/embed";
import "solid-data-manager/embed.css";
import session from "./solidSession";

setSession(session);

<DataManagerEmbed webId={webId} />;
```

## Acknowledgements

This work has been supported as part of the research project _Gesundes Tal_ in collaboration with the city of Wuppertal, funded by the Federal Ministry of Housing, Urban Development and Building (BMWSB) and the Reconstruction Loan Corporation (KfW) through the funding program “Modellprojekte Smart Cities: Stadtentwicklung und Digitalisierung” (grant number 19454890).
