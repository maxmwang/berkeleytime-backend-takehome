import express from 'express';
import http from 'http';

const PORT = 5001;

const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
  res.send('pong');
});

// TODO: Implement API endpoints. Feel free to create new directories/files.

http.createServer(app).listen(PORT, () => console.log(`Server started on port ${PORT}`));
