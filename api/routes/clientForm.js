const express = require("express")
const nodemailer = require("nodemailer")
const csrf = require("csurf")
const ClientFormValidationSchema = require("../schemas/ClientFormValidationSchema")
const generateHTMLEmail = require("../utils/htmlEmail")
const notification = require("../utils/applicationReceivedEmail")
const clean = require("../utils/clean")
const { getClientSubmitted } = require("../utils/confirmationData")
const { saveClientForm } = require("../utils/mongoOperations")

const csrfProtection = csrf({ cookie: true })
const router = express.Router()

const clientConfirmationEmail = process.env.CLIENT_CONFIRMATION_EMAIL || process.env.OPENSHIFT_NODEJS_CLIENT_CONFIRMATION_EMAIL || ""
const clientConfirmationBCC = process.env.CLIENT_CONFIRMATION_BCC || process.env.OPENSHIFT_NODEJS_CLIENT_CONFIRMATION_BCC || ""
const clientListEmail = process.env.CLIENT_LISTEMAIL || process.env.OPENSHIFT_NODEJS_CLIENT_LISTEMAIL || ""
const clientListEmail2 = process.env.CLIENT_LISTEMAIL2 || process.env.OPENSHIFT_NODEJS_CLIENT_LISTEMAIL2 || ""
const clientListEmail3 = process.env.CLIENT_LISTEMAIL3 || process.env.OPENSHIFT_NODEJS_CLIENT_LISTEMAIL3 || ""

async function sendEmails(values) {
    try {
        const transporter = nodemailer.createTransport({
            host: "apps.smtp.gov.bc.ca",
            port: 25,
            secure: false,
            tls: {
                rejectUnauthorized: false
            } // true for 465, false for other ports
        })
        return await transporter
            .verify()
            .then((r) => {
                console.log(r)
                console.log("Transporter connected.")
                let cEmail
                if (clientConfirmationEmail === "") {
                    cEmail = values.clientEmail
                } else {
                    cEmail = clientConfirmationEmail
                }
                let cListEmail
                if (values._intake === "1") {
                    cListEmail = clientListEmail
                } else if (values._intake === "2") {
                    cListEmail = clientListEmail2
                } else if (values._intake === "3") {
                    cListEmail = clientListEmail3
                }
                // send mail with defined transport object
                const message1 = {
                    from: "Work Experience Opportunities Grant Program <donotreply@gov.bc.ca>", // sender address
                    to: cEmail, // list of receivers
                    bcc: clientConfirmationBCC,
                    subject: "Application Confirmation", // Subject line
                    html: generateHTMLEmail(
                        "Thank you, your information has been received",
                        [
                            `Your participant information for the Work Experience Opportunities Grant has been successfully submitted. A confirmation email, along with a copy of the submission details have been sent to the email address provided.`,
                            `Applications may take approximately four weeks for processing. The Ministry will contact your organization once the application has been processed, or if further information is required.`,
                            `<b>Income Reporting</b>`,
                            `Participants of the Work Experience Opportunities Grant project will be receiving financial supports (money) for participating.  Money received from this project will not be deducted from income assistance or disability assistance; however, participants must still report it to the ministry.  More information on how to report this income can be found <a href="https://www.workbc.ca/getmedia/4e24032a-c75d-44d3-809d-964a2dec8896/Income-Reporting-Guidelines.aspx" target="_blank" rel="noopener noreferrer">here</a>.  For additional help with submitting the monthly report, please contact the ministry at 1-866-866-0800.`,
                            `<b>For more information</b>`,
                            `For more information on this grant opportunity, visit <a href="https://workbc.ca/Employment-Services/Work-Experience-Opportunities-Grant.aspx" target="_blank" rel="noopener noreferrer">https://workbc.ca/Employment-Services/Work-Experience-Opportunities-Grant.aspx</a>`,
                            `If you have additional questions or require assistance, please review the application guidelines <a href="https://www.workbc.ca/getmedia/b73c6c7b-40ec-4c10-ae94-13775d76abbc/Application-Guide-Work-Experience-Opportunities-Grant.aspx" target="_blank" rel="noopener noreferrer">here</a>, or contact <a href="mailto:WorkExperienceGrants@gov.bc.ca">WorkExperienceGrants@gov.bc.ca</a>`
                        ],
                        [],
                        getClientSubmitted(values)
                    ) // html body
                }
                const message2 = {
                    from: "Work Experience Opportunities Grant Program <donotreply@gov.bc.ca>", // sender address
                    to: cListEmail, // list of receivers
                    subject: "A client grant application has been received", // Subject line
                    html: notification.generateClientListNotification(values) // html body
                }
                /*
        let message3 = {
          from: 'Work Experience Opportunities Grant Program <donotreply@gov.bc.ca>', // sender address
          to: clientNotifyEmail,// list of receivers
          subject: "A client grant application has been received", // Subject line
          html: notification.generateClientNotification(values) // html body
        }; */
                transporter.sendMail(message1, (error, info) => {
                    if (error) {
                        return "An error occurred while submitting the form, please try again. If the error persists please try again later."
                    }
                    console.log("Message sent: %s", info.messageId)
                    return "success"
                })
                transporter.sendMail(message2, (error, info) => {
                    if (error) {
                        return "An error occurred while submitting the form, please try again. If the error persists please try again later."
                    }
                    console.log("Message sent: %s", info.messageId)
                    return "success"
                })
                /*
        info = transporter.sendMail(message3, (error, info) => {
          if (error) {
            return "An error occurred while submitting the form, please try again. If the error persists please try again later.";
          } else {
            console.log("Message sent: %s", info.messageId);
            return "success"
          }
        });
        */
                return true
            })
            .catch((e) => {
                console.log(e)
                console.log("Error connecting to transporter")
                return false
            })
    } catch (error) {
        console.log(error)
    }
}

router.get("/", csrfProtection, (req, res) => {
    const token = req.csrfToken()
    res.cookie("XSRF-TOKEN", token)
    res.send({
        csrfToken: token
    })
})

router.post("/", csrfProtection, async (req, res) => {
    // clean the body
    clean(req.body)
    console.log(req.body)
    ClientFormValidationSchema.validate(req.body, { abortEarly: false })
        .then(async (value) => {
            try {
                const item = req.body
                await saveClientForm(item).then(async (r) => {
                    console.log(r.result)
                    if (r.result.ok === 1) {
                        await sendEmails(value)
                            .then((sent) => {
                                if (sent) {
                                    res.send({
                                        ok: "ok"
                                    })
                                } else if (!sent) {
                                    res.send({
                                        emailErr: "emailErr"
                                    })
                                }
                            })
                            .catch((e) => {
                                console.log(e)
                            })
                    } else {
                        res.send({
                            emailErr: "emailErr"
                        })
                    }
                })
            } catch (error) {
                console.log(error)
            }
        })
        .catch((errors) => {
            const err = {}
            errors.inner.forEach((e) => {
                err[e.path] = e.message
            })
            res.send({
                err
            })
        })
})

module.exports = router
