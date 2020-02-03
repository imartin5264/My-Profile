const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();

// Middleware EJs view
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({ extended: false }));
//Static folder
app.use(express.static('public'));

//importing routes
app.use('/', require('./routes/meroutes'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));