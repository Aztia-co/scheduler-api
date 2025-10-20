import express from 'express';
import type { AvailabilityRequest } from './models/availability.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, API is running!');
});

app.post('/availability', (req, res) => {
  const data: AvailabilityRequest = req.body;
  
  if (!data.userId || !data.availability) {
    res.status(400).json({ 
      error: 'Missing required fields: userId and availability' 
    });
    return;
  }

  if (!Array.isArray(data.availability)) {
    res.status(400).json({ 
      error: 'availability must be an array' 
    });
    return;
  }

  for (const slot of data.availability) {
    if (!slot.day || !slot.startTime || !slot.endTime) {
      res.status(400).json({ 
        error: 'Each availability slot must have day, startTime, and endTime' 
      });
      return;
    }
  }

  console.log('Received availability data:', data);
  
  res.status(201).json({ 
    message: 'Availability stored successfully',
    userId: data.userId,
    slotsCount: data.availability.length
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
