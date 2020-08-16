const mongoose = require('mongoose');
require('dotenv').config();

const address = process.env.DB;

mongoose.connect(address, 
    { useNewUrlParser: true },
    () => console.log('Database connected ' + address));