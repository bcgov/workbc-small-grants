var express = require('express');
var router = express.Router();
const yup = require('yup')
const yupPhone = require('yup-phone')

var { check, validationResult, matchedData } = require('express-validator')
var nodemailer = require("nodemailer");
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });

var ClientFormValidationSchema = require('../schemas/ClientFormValidationSchema.js')
var generateHTMLEmail = require('../utils/htmlEmail')
var notification = require('../utils/applicationReceivedEmail');
var clean = require('../utils/clean')
const { getClientSubmitted } = require('../utils/confirmationData');

var clientConfirmationEmail = process.env.CLIENT_CONFIRMATION_EMAIL || process.env.OPENSHIFT_NODEJS_CLIENT_CONFIRMATION_EMAIL || "";
var clientConfirmationBCC = process.env.CLIENT_CONFIRMATION_BCC || process.env.OPENSHIFT_NODEJS_CLIENT_CONFIRMATION_BCC || "";
var clientListEmail = process.env.CLIENT_LISTEMAIL || process.env.OPENSHIFT_NODEJS_CLIENT_LISTEMAIL || "";
var clientNotifyEmail = process.env.CLIENT_NOTIFYEMAIL || process.env.OPENSHIFT_NODEJS_CLIENT_NOTIFYEMAIL || "";

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
        var cEmail;
        if (clientConfirmationEmail === ""){
          cEmail = values.clientEmail
        } else {
          cEmail = clientConfirmationEmail
        }
        // send mail with defined transport object
        let message1 = {
          from: 'WEOG <donotreply@gov.bc.ca>', // sender address
          to: cEmail,// list of receivers
          bcc: clientConfirmationBCC,
          subject: "Application Confirmation - ", // Subject line
          html: generateHTMLEmail("Thank you, your information has been received", 
            ["Thank you your application has been received", "The following information was received:"],  
            [],
            getClientSubmitted(values)) // html body
        };
        let message2 = {
          from: 'WEOG <donotreply@gov.bc.ca>', // sender address
          to: clientListEmail,// list of receivers
          subject: "A client grant application has been received", // Subject line
          html: notification.generateClientListNotification(values) // html body
        };
        let message3 = {
          from: 'WEOG <donotreply@gov.bc.ca>', // sender address
          to: clientNotifyEmail,// list of receivers
          subject: "A client grant application has been received", // Subject line
          html: notification.generateClientNotification(values) // html body
        };
        let info = transporter.sendMail(message1, (error, info) => {
          if (error) {
            return "An error occurred while submitting the form, please try again. If the error persists please try again later.";
          } else {
            console.log("Message sent: %s", info.messageId);
            return "success"
          }
        });
        info = transporter.sendMail(message2, (error, info) => {
          if (error) {
            return "An error occurred while submitting the form, please try again. If the error persists please try again later.";
          } else {
            console.log("Message sent: %s", info.messageId);
            return "success"
          }
        });
        info = transporter.sendMail(message3, (error, info) => {
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
  clean(req.body);
  console.log(req.body)
  ClientFormValidationSchema.validate(req.body, { abortEarly: false })
    .then(async function (value) {
      try {
        await sendEmails(value)
          .then(function (sent) {
            if (sent){
              res.send({
                ok: "ok"
              })
            } else if (!sent) {
              res.send({
                emailErr: "emailErr"
              })
            }
          }).catch(function (e) {
            console.log(e)
          })
      } catch (error) {
        console.log(error)
      }
      return
    })
    .catch(function (errors) {
      var err = {}
      errors.inner.forEach(e => {
        err[e.path] = e.message
      })
      res.send({
        err
      })
      return
    })
})


module.exports = router;