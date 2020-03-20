const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const app = express();
const connectDB = require('./config/db');

//Load env vars
dotenv.config({ path: './config/config.env' });

//Connect to MongoDB
connectDB();

//Routes
const sentences = require('./routes/sentences');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));

const PORT = process.env.PORT || 5000;

app.use('/', sentences);

app.listen(PORT);
