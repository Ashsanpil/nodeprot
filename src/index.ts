import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './route/userRoutes';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}!`);
});
