export const FORM_URL = {
    mainForm: "",
    clientForm: "",
    surveyOrg: "",
    surveyParticipant: "",
    reportForm: ""
}

if (process.env.NODE_ENV === "development") {
    FORM_URL.mainForm = "http://localhost:8000/api/form"
    FORM_URL.clientForm = "http://localhost:8000/api/clientForm"
    FORM_URL.surveyOrg = "http://localhost:8000/api/surveyOrg"
    FORM_URL.surveyParticipant = "http://localhost:8000/api/surveyParticipant"
    FORM_URL.reportForm = "http://localhost:8000/api/reportForm"
} else if (process.env.NODE_ENV === "production") {
    FORM_URL.mainForm = "/api/form"
    FORM_URL.clientForm = "/api/clientForm"
    FORM_URL.surveyOrg = "/api/surveyOrg"
    FORM_URL.surveyParticipant = "/api/surveyParticipant"
    FORM_URL.reportForm = "/api/reportForm"
}
