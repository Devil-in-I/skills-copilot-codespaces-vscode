// Create web server
import express from 'express';
const app = express();
const PORT = 3000;

// Add a route to the web server
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the web server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
