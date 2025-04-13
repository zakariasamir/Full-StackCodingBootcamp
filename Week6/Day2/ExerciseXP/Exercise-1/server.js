const express = require('express');
const app = express();
const postRoutes = require('./routes/postsRoutes.js');

app.use(express.json());
app.use('/posts', postRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server Error' });
});

app.listen(3000, () => console.log("Server running on port 3000"));
