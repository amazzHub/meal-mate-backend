import express from 'express';
import './database/config/connection';
import { appRoutes } from './routes/app.routes';

const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (_req, res) => res.send('Sever up and running!'));
app.use('/', appRoutes);

app.listen(
    port,
    (): void => {
        console.log(`Server running on http://localhost:${port}`.toUpperCase());
    }
);
