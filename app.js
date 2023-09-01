const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const customerRouter = require('./routers/customerRoutes');
const productRouter = require('./routers/productRoutes');

require('dotenv').config();
const app = express();

const DB = process.env.MONGO_URI;

mongoose.connect(DB).then(() => {
  console.log('DB successfully connected');
});

app.use(express.json());

app.use(morgan('dev'));

app.use('/api', customerRouter);
app.use('/api', productRouter);

const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
