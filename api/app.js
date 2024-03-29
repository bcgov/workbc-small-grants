var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var csrf = require('csurf')
var bodyParser = require('body-parser')
var cors = require('cors')

var origin = process.env.ORIGIN_URL || process.env.OPENSHIFT_NODEJS_ORIGIN_URL || "http://localhost:3000"

const corsOptions = {
    origin: origin,
    credentials: true,
    optionsSuccessStatus: 200,
};

var formRouter = require('./routes/form')
var clientFormRouter = require('./routes/clientForm')
var surveyOrgRouter = require('./routes/surveyOrg')
var surveyParticipantRouter = require('./routes/surveyParticipant')
var reportRouter = require('./routes/report')

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(helmet());


app.use('/api/form', formRouter)
app.use('/api/clientForm',clientFormRouter)
app.use('/api/surveyOrg',surveyOrgRouter)
app.use('/api/surveyParticipant',surveyParticipantRouter)
app.use('/api/reportForm',reportRouter)

module.exports = app;
