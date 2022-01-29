const cron = require('node-cron')
const express = require('express')
const spauth = require('node-sp-auth')
const request = require('request-promise')
var {getClientNotSP, getFormNotSP, updateSavedToSP} = require('./mongo')
var clean = require('./clean')

var listWebURL = process.env.LISTWEBURL || process.env.OPENSHIFT_NODEJS_LISTWEBURL || ""
var listUser = process.env.LISTUSER || process.env.OPENSHIFT_NODEJS_LISTUSER || ""
var listPass = process.env.LISTPASS || process.env.OPENSHIFT_NODEJS_LISTPASS || ""
var listDomain = process.env.LISTDOMAIN || process.env.OPENSHIFT_NODEJS_LISTDOMAIN || ""
var listParty = process.env.LISTPARTY || process.env.OPENSHIFT_NODEJS_LISTPARTY || ""
var listADFS = process.env.LISTADFS || process.env.OPENSHIFT_NODEJS_LISTADFS || ""
var testList = process.env.TESTLIST || process.env.OPENSHIFT_NODEJS_TESTLIST || ""
var listURL = testList === "" ?  `/workbcGrantTest/_api/contextInfo` : `/workbcgrant/_api/contextInfo` 
console.log(`${listWebURL}${listURL}`)
app = express();

var spr;

async function saveListClient(values) {
  try {
    var headers;
    return await spr
      .then(async data => {
        headers = data.headers;
        headers['Accept'] = 'application/json;odata=verbose';
        return headers
      }).then(async response => {
        //return true
        //console.log(response)
        headers = response
        
        return request.post({
          url:  `${listWebURL}${listURL}`,
          headers: headers,
          json: true,
        })
      }).then(async response => {
        var digest = response.d.GetContextWebInformation.FormDigestValue
        return digest
      }).then(async response => {
        //console.log(headers)
        headers['X-RequestDigest'] = response
        headers['Content-Type'] = "application/json;odata=verbose"
        if (testList === "") {
          var l = listWebURL + `/workbcGrantTest/_api/web/lists/getByTitle('ClientSumbissionsTest')/items`
          var t = `SP.Data.ClientSumbissionsTestListItem`
        } else {
          var l = listWebURL + `workbcgrant/_api/web/lists/getByTitle('ClientSubmissions')/items`
          var t = `SP.Data.ClientSubmissionsListItem`
        }
       
        return request.post({
          url: l,
          headers: headers,
          json: true,
          body: {
            "__metadata": {
              "type": t
            },
            'Title': `${values.clientName} - ${values.applicationIdM}`,
            'Intake': `Intake${values._intake}`,
            'selfSubmitID': values.applicationIdM,
            'linkedID':  typeof values.applicationId !== 'undefined' ? values.applicationId:'',
            'selfSubmitOrganization': values.organizationNameM,
            'firstName': values.clientName,
            'lastName': values.clientLastName,
            'SIN': values.clientDOB,
            'email': values.clientEmail,
            'address1': values.clientAddress1,
            'address2': values.clientAddress2,
            'consent': values.clientConsent,
            'approximateHours':values.approximateHours,
            'estimatedStartDate':values.estimatedStartDate,
            'receivingAssistanceFromFirstNati': values.receivingAssistanceFromFirstNationOrTribalCouncil,
          }
        })
      }).then(async response => {
        //item was created
        //console.log(response)
        return true
      })
      .catch(err => {
        //there was an error in the chan
        //item was not created
        console.log('error in chain')
        if (err.statusCode !== 403) {
          console.log(err);
          
        }
        console.log(err.config)
        console.log(err.statusCode)
        /*
        if (err.statusCode == 403){
          saveList(values)
        }
        */
        return false
      })

    //try catch catcher
  } catch (error) {
    console.log(error)
    return false
  }
}

async function saveListForm(values, email, ca) {
  try {
    var headers;
    return await spr
      .then(async data => {
        headers = data.headers;
        headers['Accept'] = 'application/json;odata=verbose';
        return headers
      }).then(async response => {
        //return true
        //console.log(response)
        headers = response
        return request.post({
          url: `${listWebURL}${listURL}`,
          headers: headers,
          json: true,
        })
      }).then(async response => {
        var digest = response.d.GetContextWebInformation.FormDigestValue
        return digest
      }).then(async response => {
        //console.log(headers)
        headers['X-RequestDigest'] = response
        headers['Content-Type'] = "application/json;odata=verbose"
        if (testList === "") {
          var l = listWebURL + `/workbcGrantTest/_api/web/lists/getByTitle('GrantApplicationsTest')/items`
          var t = `SP.Data.GrantApplicationsTestListItem`
        } else {
          var l = listWebURL + `/workbcgrant/_api/web/lists/getByTitle('GrantApplications')/items`
          var t = `SP.Data.GrantApplicationsListItem`
        }
        console.log("webURL:")
        console.log(l)
        return request.post({
          url: l,
          headers: headers,
          json: true,
          body: {
            "__metadata": {
              "type": t
            },
            'Title': `${values.applicationId} - ${values.operatingName}`,
            'applicationID': `2022-${values.applicationId}`,// check the others consistency
            'operatingName': `${values.operatingName}`,
            'legalName': `${values.legalName}`,
            'missionStatement': `${values.missionStatement}`,
            'organizationWebsite': `${values.organizationWebsite}`,
            'businessNumber': `${values.businessNumber}`,
            'confirmOrganizationNonProfit': `${values.confirmOrganizationNonProfit}`,
            'charityRegistrationNumber': `${values.charityRegistrationNumber}`,
            'societyRegistrationID': `${values.societyRegistrationID}`,
            'nonProfitClassification': `${values.nonProfitClassification}`,
            'nonProfitSubClassification': `${values.nonProfitSubClassification}`,
            'nonProfitSubClassificationOther': `${values.nonProfitSubClassificationOther}`,
            'basedInBC': values.basedInBC,
            'positionTitle': values.positionTitle,
            'firstName': values.firstName,
            'lastName': values.lastName,
            'contactEmail': values.contactEmail,
            'contactPhone': values.contactPhone,
            'positionTitleAlternate': values.positionTitleAlternate,
            'firstNameAlternate': values.firstNameAlternate,
            'lastNameAlternate': values.lastNameAlternate,
            'emailAlternate': values.emailAlternate,
            'phoneAlternate': values.phoneAlternate,
            'otherMailingAddress': values.otherMailingAddress,
            'contactAddress1': values.contactAddress1,
            'contactAddress2': values.contactAddress2,
            'contactCity': values.contactCity,
            'contactPostal': values.contactPostal,
            'mailingAddress1': values.mailingAddress1,
            'mailingAddress2': values.mailingAddress2,
            'mailingCity': values.mailingCity,
            'mailingPostal': values.mailingPostal,
            //step 2
            'numberOfApplicants': parseInt(values.numberOfApplicants),
            'insuranceCoverage': values.insuranceCoverage,
            'monitorCommit': values.monitorCommit,
            'applicantType': values.applicantType,
            'understandNotAvailableTo': values.understandNotAvailableTo,
            'administerGrantUnderstanding': values.administerGrantUnderstanding,
            //placementLength,
            'workExperienceTakesPlaceElsewher': values.workExperienceTakesPlaceElsewhere,
            'partneringBusinessName': values.partneringBusinessName,
            'partneringBusinessActivities': values.partneringBusinessActivities,
            //partneringBusinessAffiliation,
            'partneringBusinessContactAddress': values.partneringBusinessContactAddress1,
            'partneringBusinessContactAddress0': values.partneringBusinessContactAddress2,
            'partneringBusinessContactCity': values.partneringBusinessContactCity,
            'partneringBusinessContactPostal': values.partneringBusinessContactPostal,
            'participantActivities': values.participantActivities,
            'participantExperiences': values.participantExperiences.toString(),
            'otherExperience': values.otherExperience,
            'participantSkills': values.participantSkills.toString(),
            'otherSkill': values.otherSkill,
            'additionalBenefits': values.additionalBenefits,
            //step 3
            //participantStipend,
            'existingSupplierNumber': values.existingSupplierNumber == 'yes'? true : false,
            'supplierNumber': values.supplierNumber,
            'businessClassification': values.businessClassification,
            'taxNumber': values.taxNumber,
            'signatory1': values.signatory1,
            'signatory2': values.signatory2,
            'signingAuthorityConfirm': values.signingAuthorityConfirm,
            'organizationConsent': values.organizationConsent,
            'Intake': 'Intake4',
          }
        })
      }).then(async response => {
        //item was created
        return true
      })
      .catch(err => {
        //there was an error in the chan
        //item was not created
        console.log("error in chain")
        if (err.statusCode !== 403) {
          console.log(err);
        }
        console.log(err.statusCode)
        /*
        if (err.statusCode == 403){
          saveList(values)
        }
        */
        return false
      })

    //try catch catcher
  } catch (error) {
    console.log(error)
    return false
  }
}


cron.schedule('*/3 * * * *', async function () {
  console.log('running a task every 3 minutes');
  //console.log('running a task every 10 seconds')

    spr = spauth.getAuth(listWebURL, {
      username: listUser,
      password: listPass,
      domain: listDomain,
      relyingParty: listParty,
      adfsUrl: listADFS
  })
  
  await getClientNotSP()
    .then(async cursor => {
      var results = await cursor.toArray()
      console.log("Participant Form")
      console.log(results.length)
      for (const data of results) {
        clean(data)
        console.log(data)
        await saveListClient(data)
          .then(function (saved) {
            console.log("saved")
            console.log(saved)
            // save values to mongo db
            if (saved) {
              try {
                updateSavedToSP("Client", data._id);
              }
              catch (error) {
                console.log(error);
              }
            }
          })
          .catch(function (e) {
            console.log("error")
            console.log(e)
          })

      }
    })

  await getFormNotSP()
    .then(async cursor => {
      var results = await cursor.toArray()
      console.log("Organization Form")
      console.log(results.length)
      for (const data of results) {
        clean(data)
        console.log(data)
        await saveListForm(data)
          .then(function (saved) {
            console.log("saved")
            console.log(saved)
            // save values to mongo db
            if (saved) {
              try {
                updateSavedToSP("Organization", data._id);
              }
              catch (error) {
                console.log(error);
              }
            }
          })
          .catch(function (e) {
            console.log("error")
            console.log(e)
          })

      }
    })
});

app.listen(5000);