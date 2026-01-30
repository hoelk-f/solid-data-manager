# Solid Data Manager

Standalone React app for managing files in a Solid Pod.

## Development

- `npm start` – run the standalone app.
- `npm run build` – build the standalone app and embed library.
- `npm run build:app` – build only the standalone app.
- `npm run build:lib` – build only the embed library.

## Embedding

The embed entrypoint is exported as `solid-data-manager/embed` and exposes:

- `DataManagerEmbed` – router-free component (requires `webId` prop)
- `setSession` – optional override to inject a host session instance
- `solid-data-manager/embed.css` – styles for the embedded Data Manager

Example:

```js
import { DataManagerEmbed, setSession } from "solid-data-manager/embed";
import "solid-data-manager/embed.css";
import session from "./solidSession";

setSession(session);

<DataManagerEmbed webId={webId} />;
```
