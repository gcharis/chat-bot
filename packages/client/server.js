import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.resolve('./public')));

app.listen(8000, () => console.log('http://localhost:8000'));
