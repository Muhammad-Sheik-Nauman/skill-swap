import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { sessionMiddleware } from './config/session.js';
import router from './routes/index.js';
import connectDB from './models/index.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(sessionMiddleware);

app.use(router);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running at Port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err.message);
    process.exit(1);
  }
};

startServer();
