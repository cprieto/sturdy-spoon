import express from 'express';
import serveStatic from 'serve-static';
import history from 'connect-history-api-fallback';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dist = path.join(__dirname, 'dist');

const app = express();
app.use(history());
app.use(serveStatic(dist));

const server = app.listen(process.env.PORT || 3008, () => {
    const port = server.address().port;
    console.info(`App running at: http://localhost:${port}`);
});