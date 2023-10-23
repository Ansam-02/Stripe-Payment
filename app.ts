import express from 'express';
import paymentRoute from './routes/paymentRoute.js';
import dotenv from 'dotenv';

dotenv.config();
const PORT = 4000;

const app = express();


app.get('/', (req, res) => {
  res.send('Server UP!');
});
app.use('/', paymentRoute);


app.listen(PORT, () => {
  console.log(`App is running and listening on port ${PORT}`);
});