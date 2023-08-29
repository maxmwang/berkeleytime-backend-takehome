import express, { Request, Response } from 'express';
import http from 'http';
import * as dotenv from 'dotenv';

import connectDB from './db/init';

dotenv.config();

const PORT = 5001;

connectDB();

const app = express();
const server = http.createServer(app);

app.use(express.json());

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
