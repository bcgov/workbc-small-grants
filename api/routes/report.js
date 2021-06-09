var express = require('express');
var router = express.Router();

var nodemailer = require("nodemailer");
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });

var generateHTMLEmail = require('../utils/htmlEmail')
var notification = require('../utils/applicationReceivedEmail');
var clean = require('../utils/clean')
//const { getSurveyOrgSubmitted } = require('../utils/confirmationData');

var reportConfirmation = process.env.REPORT_CONFIRMATION_EMAIL || process.env.OPENSHIFT_NODEJS_REPORT_CONFIRMATION_EMAIL || "";
var reportConfirmationBCC = process.env.REPORT_CONFIRMATION_BCC || process.env.OPENSHIFT_NODEJS_REPORT_CONFIRMATION_BCC || "";

async function sendEmails(values) {
  try {
    let transporter = nodemailer.createTransport({
      host: "apps.smtp.gov.bc.ca",
      port: 25,
      secure: false,
      tls: {
        rejectUnauthorized: false
      } // true for 465, false for other ports
    });
    return await transporter.verify()
      .then(function (r) {
        console.log(r)
        console.log("Transporter connected.")
        let message = {
          from: 'Work Experience Opportunities Grant Program <donotreply@gov.bc.ca>', // sender address
          to: surveyOrgListEmail,// list of receivers
          subject: "An organization survey response has been received", // Subject line
          html: notification.generateSurveyOrgListNotification(values) // html body
        };
        info = transporter.sendMail(message, (error, info) => {
          if (error) {
            return "An error occurred while submitting the form, please try again. If the error persists please try again later.";
          } else {
            console.log("Message sent: %s", info.messageId);
            return "success"
          }
        });
        return true
      }).catch(function (e) {
        console.log(e)
        console.log("Error connecting to transporter")
        return false
      })
  } catch (error) {
    console.log(error)
  }
}


router.get('/', csrfProtection, (req, res) => {
  var token = req.csrfToken()
  res.cookie('XSRF-TOKEN', token)
  res.send({
    csrfToken: token
  });

})

router.post('/', csrfProtection, async (req, res) => {
  //clean the body
  //clean(req.body);
  console.log(req.body)
  res.send({
    ok: "ok"
  })
})


module.exports = router;