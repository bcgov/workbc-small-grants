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

var clientConfirmationEmail = process.env.CLIENT_CONFIRMATION_EMAIL || process.env.OPENSHIFT_NODEJS_CLIENT_CONFIRMATION_EMAIL || "";
var clientConfirmationBCC = process.env.CLIENT_CONFIRMATION_BCC || process.env.OPENSHIFT_NODEJS_CLIENT_CONFIRMATION_BCC || "";
var clientListEmail = process.env.CLIENT_LISTEMAIL || process.env.OPENSHIFT_NODEJS_CLIENT_LISTEMAIL || "";
var clientNotifyEmail = process.env.CLIENT_NOTIFYEMAIL || process.env.OPENSHIFT_NODEJS_CLIENT_NOTIFYEMAIL || "";

function sendConfirmationEmail(applicationId) {
    try {
        let transporter = nodemailer.createTransport({
            host: "apps.smtp.gov.bc.ca",
            port: 25,
            secure: false,
            tls: {
                rejectUnauthorized: false
            } // true for 465, false for other ports
        });
        // send mail with defined transport object
        let message = {
            from: 'WEOG <donotreply@gov.bc.ca>', // sender address
            to: clientConfirmationEmail,// list of receivers
            bcc: clientConfirmationBCC,
            subject: "Application Confirmation - " + applicationId, // Subject line
            html: generateHTMLEmail("Thank you, your application has been received",applicationId) // html body
        };
        let info = transporter.sendMail(message, (error, info) => {
            if (error) {
                return "An error occurred while submitting the form, please try again. If the error persists please try again later.";
            } else {
                console.log("Message sent: %s", info.messageId);
                return "success"
            }
        });
    } catch (error) {
        console.log(error)
    }
}

function notifyApplicationReceived(values){
    try {
      let transporter = nodemailer.createTransport({
        host: "apps.smtp.gov.bc.ca",
        port: 25,
        secure: false,
        tls: {
          rejectUnauthorized: false
        } // true for 465, false for other ports
      });
      // send mail with defined transport object
      let message = {
        from: 'WEOG <donotreply@gov.bc.ca>', // sender address
        to: clientListEmail,// list of receivers
        subject: "A client grant application has been received", // Subject line
        html: notification.generateClientListNotification(values) // html body
      };
      let message2 = {
        from: 'WEOG <donotreply@gov.bc.ca>', // sender address
        to: clientNotifyEmail,// list of receivers
        subject: "A client grant application has been received", // Subject line
        html: notification.generateClientNotification(values) // html body
      };
      let info = transporter.sendMail(message, (error, info) => {
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

router.post('/', csrfProtection, (req, res) => {
    //clean the body
    clean(req.body);
    console.log(req.body)
    ClientFormValidationSchema.validate(req.body, { abortEarly: false }).catch(function (errors) {
        console.log(errors);
        var err = {}
        errors.inner.forEach(e => {
            err[e.path] = e.message
        })
        res.send({
            err
        })
        return
    })
    sendConfirmationEmail(req.body.applicationId)
    notifyApplicationReceived(req.body)
    res.send({
        ok: "ok"
    })
    //console.log(generateHTMLEmail("Application Submitted"));
    /*
  
    */
})


module.exports = router;