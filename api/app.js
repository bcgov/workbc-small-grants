var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var csrf = require('csurf')
var bodyParser = require('body-parser')
var cors = require('cors')

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200,
};

var formRouter = require('./routes/form')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(helmet());


app.use('/form', formRouter)

module.exports = app;
