import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRouter';
import courseRoutes from './routes/courseRouter'
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const dbhost = process.env.DB_HOST as string;
const port = process.env.PORT as string;

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/app', courseRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

mongoose.connect(dbhost);
