const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/blogApp')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ DB error:', err));

app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);
app.use(errorHandler);

app.listen(5000, () => console.log('🚀 Server running on port 5000'));