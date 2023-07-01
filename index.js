import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { blogRoute } from './route/blog.route.js';
import cookieParser from 'cookie-parser';
import { authRoute } from './route/auth.route.js';
import { jobRoute } from './route/job.route.js';

const app = express();

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
  } catch (error) {
    throw error;
  }
}

mongoose.connection.on('connected', () => {
  console.log('mongodb connected');
});
mongoose.connection.on('disconnected', () => {
  console.log('mongodb disconnected');
});

app.get('/', (req,res) => {
  res.json('server running')
})
app.listen(5000, () => {
  console.log('server running..')
});
connect();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute)
app.use('/api/blog', blogRoute)
app.use('/api/job', jobRoute)

app.use((err,req,res,next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong!'
  res.status(status).send(message)
});
