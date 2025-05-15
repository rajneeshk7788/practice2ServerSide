import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/ConnectDB.js';
import cors from 'cors';
//local module
import userRouter from './routes/UseRoute.js';

const app = express();
dotenv.config();

app.use(express.urlencoded());
app.use(express.json());

const corsOptions = {
  origin: process.env.FRONT_END_URL,
  credentials: true,
  optionsSuccessStatus: 200,
};

connectDB(process.env.DATABASE_URL);
app.use(cors(corsOptions));

app.use('/user', userRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});