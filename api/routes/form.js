var express = require('express');
var router = express.Router();
const yup = require('yup')
const yupPhone = require('yup-phone')

var { check, validationResult, matchedData } = require('express-validator')
var nodemailer = require("nodemailer");
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });

var MainFormValidationSchema = require('../schemas/MainFormValidationSchema')
var generateHTMLEmail = require('../utils/htmlEmail')
var notification = require('../utils/applicationReceivedEmail');
var clean = require('../utils/clean')

var confirmationEmail1 = process.env.CONFIRMATIONONE || process.env.OPENSHIFT_NODEJS_CONFIRMATIONONE || "";
var confirmationEmail2 = process.env.CONFIRMATIONTWO || process.env.OPENSHIFT_NODEJS_CONFIRMATIONTWO || "";
var confirmationBCC = process.env.CONFIRMATIONBCC || process.env.OPENSHIFT_NODEJS_CONFIRMATIONBCC || "";
var listEmail = process.env.LISTEMAIL || process.env.OPENSHIFT_NODEJS_LISTEMAIL || "";
var notifyEmail = process.env.NOTIFYEMAIL || process.env.OPENSHIFT_NODEJS_NOTIFYEMAIL || "";
var clientURL = process.env.CLIENTURL || process.env.OPENSHIFT_NODEJS_CLIENTURL || "https://workbc-grants-dev.pathfinder.gov.bc.ca/clientForm"


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
    var mailingList;
    if (confirmationEmail1 !== "" && confirmationEmail2 !== "") {
      mailingList = [confirmationEmail1, confirmationEmail2]
    } else {
      //TODO
      mailingList = ""
    }
    // send mail with defined transport object
    let message = {
      from: 'WEOG <donotreply@gov.bc.ca>', // sender address
      to: mailingList,// list of receivers
      bcc: confirmationBCC,
      subject: "Application Confirmation - " + applicationId, // Subject line
      /*
        [
          `Application ID: ${applicationId}`,
          `Please visit the following URL in order to provide your consent to the Ministry.`,
          `<a href="${clientURL}/${applicationId}">${clientURL}/${applicationId}</a>`,
          `If you prefer a PDF version of the form, one can be found here. Once complete please email it to (email).`,
        ],
      */
      html: generateHTMLEmail("Thank you, your application has been received", 
        [
          `<b>Application ID: ${applicationId}</b>`,
          `Your application has been successfully received. You can print this page for your records. A confirmation email has also been sent to the two contacts provided on the form.`,
          `<b>Next Steps:</b>`,
          `Please provide your participants the following instructions:`,
        ],
        [
          `Application ID: ${applicationId}`,
          `Please visit the following URL in order to provide your consent to the Ministry.`,
          `<a href="${clientURL}/${applicationId}">${clientURL}/${applicationId}</a>`,
          `If you prefer a PDF version of the form, one can be found here. Once complete please email it to (email).`,
        ],
        [
          `Note: you must get all your participants to complete the step above within the next 3 weeks.`
        ]
        ) // html body
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

function notifyApplicationReceived(values) {
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
      to: listEmail,// list of receivers
      subject: "A grant application has been received - " + values._id, // Subject line
      html: notification.generateListNotification(values) // html body
    };
    let message2 = {
      from: 'WEOG <donotreply@gov.bc.ca>', // sender address
      to: notifyEmail,// list of receivers
      subject: "A grant application has been received - " + values._id, // Subject line
      html: notification.generateNotification(values) // html body
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
  MainFormValidationSchema.validate(req.body, { abortEarly: false })
    .then(function (value) {
      sendConfirmationEmail(req.body._id)
      //notifyApplicationReceived(req.body)
      res.send({
        ok: "ok"
      })
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

  //console.log(generateHTMLEmail("Application Submitted"));
  /*

  */
})

module.exports = router;