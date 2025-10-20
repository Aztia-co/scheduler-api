import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, API is running!');
});

// Dummy endpoint to test dotenv
app.get('/env-test', (req, res) => {
  res.json({
    apiKey: process.env.API_KEY,
    port: process.env.PORT
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
