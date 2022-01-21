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

app = express();

var spr;

async function saveListClient(values) {
  try{
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
          url: listWebURL + testList === ""  ? 'workbcgrant/_api/contextInfo' : 'workbcgrantTest/_api/contextInfo',
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
      if (testList === ""){
        var l = listWebURL + `workbcGrantTest/_api/web/lists/getByTitle('ClientSubmissions')/items`
        var t = `SP.Data.Catchment${ca}ListItem`
      } else {
        var l = listWebURL + `workbcgrant/_api/web/lists/getByTitle('ClientSubmissions')/items`
        var t = `SP.Data.CatchmentTESTListItem`
      }
      console.log(l)
      return request.post({
        url: l,
        headers: headers,
        json: true,
        body: {
          "__metadata": {
            "type": t
          },

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
      console.log("error in chain")
      if (err.statusCode !== 403){
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

async function saveListForm(values,email,ca) {
  try{
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
          url: listWebURL + testList === ""  ? 'workbcgrant/_api/contextInfo' : 'workbcgrantTest/_api/contextInfo',
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
      if (testList === ""){
        var l = listWebURL + `workbcGrantTest/_api/web/lists/getByTitle('GrantApplications')/items`
        var t = `SP.Data.Catchment${ca}ListItem`
      } else {
        var l = listWebURL + `workbcgrant/_api/web/lists/getByTitle('GrantApplications')/items`
        var t = `SP.Data.CatchmentTESTListItem`
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
          //"": values.,
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
      if (err.statusCode !== 403){
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


cron.schedule('*/3 * * * *', async function() {
    console.log('running a task every 3 minutes');
    //console.log('running a task every 10 seconds');
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
        console.log("Have Employee not saved to reporting")
        console.log(results.length)
        for (const data of results){
          clean(data)
          console.log(data)
          await saveListClient(data)
              .then(function(saved){
                console.log("saved")
                console.log(saved)
                // save values to mongo db
                if (saved) {
                  try {
                    updateSavedToSP("Client",data._id);
                  }
                  catch (error) {
                    console.log(error);
                  }
                }
              })
              .catch(function(e){
                console.log("error")
                console.log(e)
              })
              
        }
    })
    await getFormNotSP()
    .then(async cursor => {
        var results = await cursor.toArray()
        console.log("Need employee not saved to reporting")
        console.log(results.length)
        for (const data of results){
          clean(data)
          console.log(data)
          await saveListForm(data)
              .then(function(saved){
                console.log("saved")
                console.log(saved)
                // save values to mongo db
                if (saved) {
                  try {
                    updateSavedToSP("Organization",data._id);
                  }
                  catch (error) {
                    console.log(error);
                  }
                }
              })
              .catch(function(e){
                console.log("error")
                console.log(e)
              })
              
        }
    })
});

app.listen(5000);