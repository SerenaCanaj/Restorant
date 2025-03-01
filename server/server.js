const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/mongoose.config');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productRoutes = require('./src/routes/productRoutes');
const reviewRoutes = require('./src/routes/reviewRoutes');

app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
    res.send('Welcome to Restaurant Menu API');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});