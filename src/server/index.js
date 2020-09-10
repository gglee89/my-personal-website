const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// MIDDLEWARE
app.use(express.static('dist'));

// ENDPOINTS
app.get('/', (req, res) => {
  res.status(200).sendFile('dist/index.html');
});

// STARTING NODE-EXPRESS SERVER
app.listen(PORT, () => {
  console.log(`Server started. Listening to port ${PORT}`);
});
