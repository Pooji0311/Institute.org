import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js'; // <-- Add this line
import membersRouter from './routes/members.js';
import connectDB from './config/db.js';
import 'dotenv/config';

const app = express();
connectDB(); // <-- Connect to MongoDB
app.use(cors());
app.use(express.json()); // <-- Add this to parse JSON bodies

app.use('/', authRoutes); // <-- Add this to use your auth routes
app.use('/api', membersRouter);

app.get('/', (req, res) => {
  res.send('Hello, Express.js Server!');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

