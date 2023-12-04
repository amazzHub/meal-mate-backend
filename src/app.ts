import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (_req, res) => res.send('Sever up and running!'));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
