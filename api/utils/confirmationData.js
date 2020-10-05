var strings = require("./strings")

module.exports = {
    getOrgSubmitted(values){
        var data = [
            `<b>Note: you must get all your participants to complete the step above within the next 3 weeks.</b>`,
            `<hr />`,
            `<p>Application ID:  ${values._id}</p>`,
            `<p>Operating Name:  ${values.operatingName}</p>`,
            `<p>Legal Name:  ${values.legalName}</p>`,
            `<p>Mission Statement:  ${values.missionStatement}</p>`,
            `<p>Organization Website:  ${values.organizationWebsite}</p>`,
            `<p>Business Number:  ${values.businessNumber}</p>`,
            `<p>Non Profit:  ${values.confirmOrganizationNonProfit}</p>`,
            `<p>Non Profit Classification:  ${values.nonProfitClassification}</p>`,
            `<p>Non Profit SubClassification:  ${values.nonProfitSubClassification}</p>`,
            `<p>Non Profit Other SubClassification:  ${values.nonProfitSubClassificationOther}</p>`,
            `<p>Based In BC:  ${values.basedInBC}</p>`,
            `<p>Position Title:  ${values.positionTitle}</p>`,
            `<p>First Name:  ${values.firstName}</p>`,
            `<p>Last Name:  ${values.lastName}</p>`,
            `<p>Contact Email:  ${values.contactEmail}</p>`,
            `<p>Contact Phone:  ${values.contactPhone}</p>`,
            `<h5>Alternate Contact</h5>`,
            `<p>Position Title:  ${values.positionTitleAlternate}</p>`,
            `<p>First Name:  ${values.firstNameAlternate}</p>`,
            `<p>Last Name:  ${values.lastNameAlternate}</p>`,
            `<p>Email:  ${values.emailAlternate}</p>`,
            `<p>Phone:  ${values.phoneAlternate}</p>`,
            `<p>Contact Address 1:  ${values.contactAddress1}</p>`,
            `<p>contact Address 2:  ${values.contactAddress2}</p>`,
            `<p>Contact City:  ${values.contactCity}</p>`,
            `<p>Contact Postal:  ${values.contactPostal}</p>`,
            `<h5>Mailing Address (only if different from contact)</h5>`,
            `<p>Mailing Address Different:  ${values.otherMailingAddress}</p>`,
            `<p>Mailing Address1:  ${values.mailingAddress1}</p>`,
            `<p>Mailing Address2:  ${values.mailingAddress2}</p>`,
            `<p>Mailing City:  ${values.mailingCity}</p>`,
            `<p>Mailing Postal:  ${values.mailingPostal}</p>`,
            `<p>Number Of Applicants:  ${values.numberOfApplicants}</p>`,
            `<p>WorkSafeBC Insurance Coverage:  ${values.insuranceCoverage}</p>`,
            `<p>Commitment to monitor applicants:  ${values.monitorCommit}</p>`,
            `<p>Applicant eligibility confirmation:  ${values.applicantType}</p>`,
            `<p>Placement length confirmation:  ${values.placementLength}</p>`,
            `<p>Work Opportunity:</p>`,  
            `<p>${values.participantActivities}</p>`,
            `<p>What will organization provide:  ${values.participantExperiences}</p>`,
            `<p>Other Experience:</p>`, 
            `<p>${values.otherExperience}</p>`,
            `<p>Participants will gain:  ${values.participantSkills}</p>`,
            `<p>Other Skills: </p>`,
            `<p>${values.otherSkill}</p>`,
            `<p>Additional Benefits: </p>`,
            `<p>${values.additionalBenefits}</p>`,
            `<p>Stipend:  $${values.participantStipend}</p>`,
            `<p>Has Existing Supplier Number:  ${values.existingSupplierNumber}</p>`,
            `<p>Supplier Number:${values.supplierNumber}</p>`,
            `<p>Business Classification: ${values.businessClassification}</p>`,
            `<p>Tax Number:  ${values.taxNumber}</p>`,
            `<p>Signatory 1:  ${values.signatory1}</p>`,
            `<p>Signatory 2:  ${values.signatory2}</p>`,
            `<p>Certify Signatories:  ${values.signingAuthorityConfirm}</p>`,
            `<p>Consent:  ${values.organizationConsent}</p>`,
            `<hr />`
        ]
        return data

    },
    getClientSubmitted(values){
        var data=[
            `<p><b>Name:</b> ${values.clientName}</p>`,
            `<p><b>Last Name:</b> ${values.clientLastName}</p>`,
            `<p><b>DOB:</b> ${values.clientDOB.getDate()}/${values.clientDOB.getMonth()}/${values.clientDOB.getFullYear()}</p>`,
            `<p><b>Email:</b> ${values.clientEmail}</p>`,
            `<p><b>Address1:</b> ${values.clientAddress1}</p>`,
            `<p><b>Address2:</b> ${values.clientAddress2}</p>`,
            `<p><b>Consent:</b> ${values.clientConsent}</p>`,
        ]
        if (values.noOrgId){
            data.push(`<p><b>Organization Name:</b> ${strings.orEmpty(values.organizationNameM)}</p>`)
        } else {
            data.push(`<p><b>Application Id:</b> ${strings.orEmpty(values.applicationId)}${strings.orEmpty(values.applicationIdM)}</p>`)
        }


    }
}