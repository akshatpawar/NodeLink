import express from 'express';
import mongoose from 'mongoose';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToSocket } from './controllers/socketManager.js';
import userRoutes from './routes/users.routes.js';

dotenv.config();

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set('port', (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({ limit: '40kb' }));
app.use(express.urlencoded({ limit: '40kb', extended: true }));

app.use('/api/v1/users', userRoutes);

const start = async () => {
  app.set("mongo_user")
  const connDb = await mongoose.connect(process.env.MONGODB_URL);
  console.log(`Database connected : ${connDb.connection.host}`);
  server.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
  });
}

start();