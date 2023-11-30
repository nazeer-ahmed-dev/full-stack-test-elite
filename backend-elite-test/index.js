const express = require('express');
const mongoose = require('mongoose');
const productView = require('./views/productView');
const cors = require('cors');
const userView = require('./views/userView');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());


// Connect to MongoDB :  need to be replace .env 
mongoose.connect('mongodb://localhost:27017/elite-test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(cors());
app.use(express.json());


// Use views
app.use('/api', productView);
app.use('/api', userView);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
