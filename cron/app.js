const cron = require("node-cron")
const express = require("express")
const spauth = require("node-sp-auth")
const request = require("request-promise")
const {
    getClientNotSP,
    getFormNotSP,
    updateSavedToSP,
    checkForPreviousOrganizationApplications,
    checkForDuplicateClients,
    updatePotentialDuplicate
} = require("./mongo")
const clean = require("./clean")
const Strings = require("./strings")

const listWebURL = process.env.LISTWEBURL || process.env.OPENSHIFT_NODEJS_LISTWEBURL || ""
const listUser = process.env.LISTUSER || process.env.OPENSHIFT_NODEJS_LISTUSER || ""
const listPass = process.env.LISTPASS || process.env.OPENSHIFT_NODEJS_LISTPASS || ""
const listDomain = process.env.LISTDOMAIN || process.env.OPENSHIFT_NODEJS_LISTDOMAIN || ""
const listParty = process.env.LISTPARTY || process.env.OPENSHIFT_NODEJS_LISTPARTY || ""
const listADFS = process.env.LISTADFS || process.env.OPENSHIFT_NODEJS_LISTADFS || ""
const testList = process.env.TESTLIST || process.env.OPENSHIFT_NODEJS_TESTLIST || ""
const listURL = testList === "" ? `/workbcGrantTest/_api/contextInfo` : `/workbcgrant/_api/contextInfo`

const app = express()

let spr

async function saveListClient(values) {
    try {
        let headers
        let results
        let duplicates = 5
        let DuplicateString = ""
        return await spr
            .then(async (data) => {
                headers = data.headers
                headers.Accept = "application/json;odata=verbose"
                return headers
            })
            .then(async (response) => {
                // return true
                // console.log(response)
                headers = response

                return request.post({
                    url: `${listWebURL}${listURL}`,
                    headers,
                    json: true
                })
            })
            .then(async (response) => {
                results = await checkForDuplicateClients(values.clientLastName, values.clientDOB)
                if (results !== undefined) {
                    if (results.length < 5) {
                        duplicates = results.length
                    }

                    results = results.slice(1, duplicates)
                    for (let i = 0; i < duplicates - 1; i += 1) {
                        if (results[i]._id !== values.applicationId) {
                            DuplicateString += `${results[i]._id}\n`
                        }
                    }
                }
                try {
                    if (DuplicateString !== "undefined") {
                        updatePotentialDuplicate("Client", values.applicationId, DuplicateString)
                    } else {
                        updatePotentialDuplicate("Client", values.applicationId, "")
                    }
                } catch (error) {
                    console.log(error)
                }
                const digest = response.d.GetContextWebInformation.FormDigestValue
                return digest
            })
            .then(async (response) => {
                let l
                let t

                // console.log(headers)
                headers["X-RequestDigest"] = response
                headers["Content-Type"] = "application/json;odata=verbose"
                if (testList === "") {
                    l = `${listWebURL}/workbcGrantTest/_api/web/lists/getByTitle('ClientSumbissionsTest')/items`
                    t = `SP.Data.ClientSumbissionsTestListItem`
                } else {
                    l = `${listWebURL}workbcgrant/_api/web/lists/getByTitle('ClientSubmissions')/items`
                    t = `SP.Data.ClientSubmissionsListItem`
                }

                return request.post({
                    url: l,
                    headers,
                    json: true,
                    body: {
                        __metadata: {
                            type: t
                        },
                        Title: `${values.clientName} - ${Strings.orEmpty(values.applicationId)}${Strings.orEmpty(values.applicationIdM)}`,
                        Intake: `Intake${values._intake}`,
                        selfSubmitID: values.applicationIdM,
                        linkedID: typeof values.applicationId !== "undefined" ? values.applicationId : "",
                        selfSubmitOrganization: values.organizationNameM,
                        firstName: values.clientName,
                        lastName: values.clientLastName,
                        SIN: values.clientDOB,
                        email: values.clientEmail,
                        address1: values.clientAddress1,
                        address2: values.clientAddress2,
                        consent: values.clientConsent,
                        approximateHours: values.approximateHours,
                        estimatedStartDate: values.estimatedStartDate,
                        receivingAssistanceFromFirstNati: values.receivingAssistanceFromFirstNationOrTribalCouncil,
                        potentialDuplicate: DuplicateString !== "undefined" ? DuplicateString : ""
                    }
                })
            })
            .then(async (response) => {
                // item was created
                // console.log(response)
                console.log(response)
                return {
                    itemCreated: true,
                    itemID: response.d.ID
                }
                // return true
            })
            .catch((err) => {
                // there was an error in the chan
                // item was not created
                console.log("error in chain")
                if (err.statusCode !== 403) {
                    console.log(err)
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

        // try catch catcher
    } catch (error) {
        console.log(error)
        return false
    }
}

async function saveListForm(values) {
    try {
        let headers
        let duplicates = false
        return await spr
            .then(async (data) => {
                headers = data.headers
                headers.Accept = "application/json;odata=verbose"
                return headers
            })
            .then(async (response) => {
                // return true
                // console.log(response)
                headers = response
                return request.post({
                    url: `${listWebURL}${listURL}`,
                    headers,
                    json: true
                })
            })
            .then(async (response) => {
                duplicates = await checkForPreviousOrganizationApplications(values.businessNumber)
                try {
                    updatePotentialDuplicate("Organization", values._id, duplicates)
                } catch (error) {
                    console.log(error)
                }
                const digest = response.d.GetContextWebInformation.FormDigestValue
                return digest
            })
            .then(async (response) => {
                let l
                let t

                // console.log(headers)
                headers["X-RequestDigest"] = response
                headers["Content-Type"] = "application/json;odata=verbose"
                if (testList === "") {
                    l = `${listWebURL}/workbcGrantTest/_api/web/lists/getByTitle('GrantApplicationsTest')/items`
                    t = `SP.Data.GrantApplicationsTestListItem`
                } else {
                    l = `${listWebURL}/workbcgrant/_api/web/lists/getByTitle('GrantApplications')/items`
                    t = `SP.Data.GrantApplicationsListItem`
                }
                console.log("webURL:")
                console.log(l)
                return request.post({
                    url: l,
                    headers,
                    json: true,
                    body: {
                        __metadata: {
                            type: t
                        },
                        Title: `2022-${values._id} - ${values.operatingName}`,
                        applicationID: `2022-${values._id}`, // check the others consistency
                        operatingName: `${values.operatingName}`,
                        legalName: `${values.legalName}`,
                        missionStatement: `${values.missionStatement}`,
                        organizationWebsite: `${values.organizationWebsite}`,
                        businessNumber: `${values.businessNumber}`,
                        confirmOrganizationNonProfit: `${values.confirmOrganizationNonProfit}`,
                        charityRegistrationNumber: `${values.charityRegistrationNumber}`,
                        societyRegistrationID: `${values.societyRegistrationID}`,
                        nonProfitClassification: `${values.nonProfitClassification}`,
                        nonProfitSubClassification: `${values.nonProfitSubClassification}`,
                        nonProfitSubClassificationOther: `${values.nonProfitSubClassificationOther}`,
                        basedInBC: values.basedInBC,
                        positionTitle: values.positionTitle,
                        firstName: values.firstName,
                        lastName: values.lastName,
                        contactEmail: values.contactEmail,
                        contactPhone: values.contactPhone,
                        positionTitleAlternate: values.positionTitleAlternate,
                        firstNameAlternate: values.firstNameAlternate,
                        lastNameAlternate: values.lastNameAlternate,
                        emailAlternate: values.emailAlternate,
                        phoneAlternate: values.phoneAlternate,
                        otherMailingAddress: values.otherMailingAddress,
                        contactAddress1: values.contactAddress1,
                        contactAddress2: values.contactAddress2,
                        contactCity: values.contactCity,
                        contactPostal: values.contactPostal,
                        mailingAddress1: values.mailingAddress1,
                        mailingAddress2: values.mailingAddress2,
                        mailingCity: values.mailingCity,
                        mailingPostal: values.mailingPostal,
                        // step 2
                        numberOfApplicants: parseInt(values.numberOfApplicants, 10),
                        insuranceCoverage: values.insuranceCoverage,
                        monitorCommit: values.monitorCommit,
                        applicantType: values.applicantType,
                        understandNotAvailableTo: values.understandNotAvailableTo,
                        administerGrantUnderstanding: values.administerGrantUnderstanding,
                        // placementLength,
                        workExperienceTakesPlaceElsewher: values.workExperienceTakesPlaceElsewhere,
                        partneringBusinessName: values.partneringBusinessName,
                        partneringBusinessActivities: values.partneringBusinessActivities,
                        // partneringBusinessAffiliation,
                        partneringBusinessContactAddress: values.partneringBusinessContactAddress1,
                        partneringBusinessContactAddress0: values.partneringBusinessContactAddress2,
                        partneringBusinessContactCity: values.partneringBusinessContactCity,
                        partneringBusinessContactPostal: values.partneringBusinessContactPostal,
                        participantActivities: values.participantActivities,
                        participantExperiences: values.participantExperiences.toString(),
                        otherExperience: values.otherExperience,
                        participantSkills: values.participantSkills.toString(),
                        otherSkill: values.otherSkill,
                        additionalBenefits: values.additionalBenefits,
                        // step 3
                        // participantStipend,
                        existingSupplierNumber: values.existingSupplierNumber === "yes",
                        supplierNumber: values.supplierNumber,
                        businessClassification: values.businessClassification,
                        taxNumber: values.taxNumber,
                        signatory1: values.signatory1,
                        signatory2: values.signatory2,
                        signingAuthorityConfirm: values.signingAuthorityConfirm,
                        organizationConsent: values.organizationConsent,
                        potentialDuplicate: duplicates,
                        Intake: "Intake4"
                    }
                })
            })
            .then(async (response) => {
                // item was created
                console.log(response)
                return {
                    itemCreated: true,
                    itemID: response.d.ID
                }
                // return true
            })
            .catch((err) => {
                // there was an error in the chan
                // item was not created
                console.log("error in chain")
                if (err.statusCode !== 403) {
                    console.log(err)
                }
                console.log(err.statusCode)
                /*
        if (err.statusCode == 403){
          saveList(values)
        }
        */
                return false
            })

        // try catch catcher
    } catch (error) {
        console.log(error)
        return false
    }
}

cron.schedule("*/3 * * * *", async () => {
    console.log("running a task every 3 minutes")
    // console.log('running a task every 10 seconds')

    spr = spauth.getAuth(listWebURL, {
        username: listUser,
        password: listPass,
        domain: listDomain,
        relyingParty: listParty,
        adfsUrl: listADFS
    })

    await getFormNotSP().then(async (cursor) => {
        const results = await cursor.toArray()
        console.log("Organization Form")
        console.log(results.length)
        // eslint-disable-next-line no-restricted-syntax
        for await (const data of results) {
            // await findFormByApplicationID(`${Strings.orEmpty(data.applicationId)}${Strings.orEmpty(data.applicationIdM)}`)
            clean(data)
            console.log(data)

            await saveListForm(data)
                .then((saved) => {
                    console.log("saved")
                    console.log(saved)
                    // save values to mongo db
                    if (saved.itemCreated) {
                        try {
                            updateSavedToSP("Organization", data._id, saved.itemID)
                        } catch (error) {
                            console.log(error)
                        }
                    }
                })
                .catch((e) => {
                    console.log("error")
                    console.log(e)
                })
        }
    })

    await getClientNotSP().then(async (cursor) => {
        const results = await cursor.toArray()
        console.log("Participant Form")
        console.log(results.length)
        // eslint-disable-next-line no-restricted-syntax
        for await (const data of results) {
            clean(data)
            console.log(data)
            await saveListClient(data)
                .then((saved) => {
                    console.log("saved")
                    console.log(saved)
                    // save values to mongo db
                    if (saved.itemCreated) {
                        try {
                            updateSavedToSP("Client", data._id, saved.itemID)
                        } catch (error) {
                            console.log(error)
                        }
                    }
                })
                .catch((e) => {
                    console.log("error")
                    console.log(e)
                })
        }
    })
})

app.listen(5000)
