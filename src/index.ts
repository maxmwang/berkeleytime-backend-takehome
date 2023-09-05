import express from 'express';
import http from 'http';

const PORT = 5001;

const app = express();
const server = http.createServer(app);

app.use(express.json());

app.get('/ping', (req, res) => {
  res.send('pong');
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
