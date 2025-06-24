// proxy-server.js
import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();

// Configure CORS more securely for production
app.use(cors({
  origin: ['http://localhost:5173', 'https://your-production-domain.com'],
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

const GAS_URL = 'https://script.google.com/macros/s/AKfycbzoqE613yT4uDUqA1BOCeZOM8Qtfeds-0FgDvyXMp2k0X6J_myZnS647Lppt24CCkaC/exec';

app.post('/submit-form', async (req, res) => {
  try {
    // Validate request body
    if (!req.body || typeof req.body !== 'object') {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    const response = await axios.post(GAS_URL, req.body, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 5000 // 5 second timeout
    });

    res.json(response.data);
  } catch (error) {
    console.error('Proxy error:', error);
    
    if (error.response) {
      // The request was made and the server responded with a status code
      res.status(error.response.status).json({ 
        error: error.response.data || 'Error forwarding request' 
      });
    } else if (error.request) {
      // The request was made but no response was received
      res.status(504).json({ error: 'No response from Google Apps Script' });
    } else {
      // Something happened in setting up the request
      res.status(500).json({ error: error.message });
    }
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});