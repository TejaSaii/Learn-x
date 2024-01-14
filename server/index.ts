import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRouter';
import courseRoutes from './routes/courseRouter'

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/app', courseRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

mongoose.connect("mongodb+srv://Tejas7844:Tejas@cluster0.35jadss.mongodb.net/learn-x");
