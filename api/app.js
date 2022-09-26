const express = require("express")
const cookieParser = require("cookie-parser")
const helmet = require("helmet")
const bodyParser = require("body-parser")
const cors = require("cors")

const origin = process.env.ORIGIN_URL || process.env.OPENSHIFT_NODEJS_ORIGIN_URL || "http://localhost:3000"

const corsOptions = {
    origin,
    credentials: true,
    optionsSuccessStatus: 200
}

const formRouter = require("./routes/form")
const clientFormRouter = require("./routes/clientForm")
const surveyOrgRouter = require("./routes/surveyOrg")
const surveyParticipantRouter = require("./routes/surveyParticipant")
const reportRouter = require("./routes/report")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(helmet())

app.use("/api/form", formRouter)
app.use("/api/clientForm", clientFormRouter)
app.use("/api/surveyOrg", surveyOrgRouter)
app.use("/api/surveyParticipant", surveyParticipantRouter)
app.use("/api/reportForm", reportRouter)

module.exports = app
