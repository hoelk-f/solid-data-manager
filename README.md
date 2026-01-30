# Solid Data Manager

Solid Data Manager is a standalone React application for managing files in a Solid Pod. It provides a simple UI for browsing, uploading, downloading, and organizing resources in a Pod, and can also be embedded as a library in other applications.

## Features

- File and folder browsing for Solid Pods
- Upload, download, and delete resources
- Embedded mode via a lightweight bundle
- Solid authentication integration (Inrupt client libraries)
- SPA routing with static hosting support (Nginx)

## Installation (Docker)

Build and run the container:

```bash
docker compose up --build
```

The app is served on port `3002` by default and is reachable at `http://localhost:3002`.

### Configuration

The Docker Compose setup defines these environment variables:

- `REACT_APP_OIDC_ISSUER` (default: `https://solidcommunity.net`)
- `REACT_APP_REDIRECT_URL` (default: `http://localhost`)
- `REACT_APP_FOOTER_LOGOS` (default: `/Logo_TMDT.png`)
- `REACT_APP_VERSION` (default: `0.1.0`)
- `PORT` (default: `3002`)
- `FRONTEND_PORT` (default: `3002`)

For image builds you can also set `PUBLIC_URL` (default: `/solid-data-manager`).

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
