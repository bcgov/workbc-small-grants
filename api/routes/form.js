var express = require('express');
var router = express.Router();

var {check, validationResult, matchedData} = require('express-validator')
var nodemailer = require("nodemailer");
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });

router.get('/', csrfProtection, (req, res) => {
    var token = req.csrfToken()
    console.log(token)
    res.cookie('XSRF-TOKEN',token)
    res.send({
      csrfToken: token
    });
    
})

router.post('/', csrfProtection, (req,res) => {
    console.log(req.body);
    res.send({
      data: {},
      errors: {}
    });
})

module.exports = router;