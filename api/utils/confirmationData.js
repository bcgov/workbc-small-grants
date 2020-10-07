var strings = require("./strings")

module.exports = {
    getOrgSubmitted(values){
        var data = [
            `<b>Note: you must get all your participants to complete the step above within the next 3 weeks.</b>`,
            `The following information was received:`,
            `<hr />`,
            `Application ID:  ${values._id}`,
            `Operating Name:  ${values.operatingName}`,
            `Legal Name:  ${values.legalName}`,
            `Mission Statement:  ${values.missionStatement}`,
            `Organization Website:  ${values.organizationWebsite}`,
            `Business Number:  ${values.businessNumber}`,
            `Non Profit:  ${values.confirmOrganizationNonProfit}`,
            `Non Profit Classification:  ${values.nonProfitClassification}`,
            `Non Profit SubClassification:  ${values.nonProfitSubClassification}`,
            `Non Profit Other SubClassification:  ${values.nonProfitSubClassificationOther}`,
            `Based In BC:  ${values.basedInBC}`,
            `Position Title:  ${values.positionTitle}`,
            `First Name:  ${values.firstName}`,
            `Last Name:  ${values.lastName}`,
            `Contact Email:  ${values.contactEmail}`,
            `Contact Phone:  ${values.contactPhone}`,
            `<h5>Alternate Contact</h5>`,
            `Position Title:  ${values.positionTitleAlternate}`,
            `First Name:  ${values.firstNameAlternate}`,
            `Last Name:  ${values.lastNameAlternate}`,
            `Email:  ${values.emailAlternate}`,
            `Phone:  ${values.phoneAlternate}`,
            `Contact Address 1:  ${values.contactAddress1}`,
            `contact Address 2:  ${values.contactAddress2}`,
            `Contact City:  ${values.contactCity}`,
            `Contact Postal:  ${values.contactPostal}`,
            `<h5>Mailing Address (only if different from contact)</h5>`,
            `Mailing Address Different:  ${values.otherMailingAddress}`,
            `Mailing Address1:  ${values.mailingAddress1}`,
            `Mailing Address2:  ${values.mailingAddress2}`,
            `Mailing City:  ${values.mailingCity}`,
            `Mailing Postal:  ${values.mailingPostal}`,
            `Number Of Applicants:  ${values.numberOfApplicants}`,
            `WorkSafeBC Insurance Coverage:  ${values.insuranceCoverage}`,
            `Commitment to monitor applicants:  ${values.monitorCommit}`,
            `Applicant eligibility confirmation:  ${values.applicantType}`,
            `Placement length confirmation:  ${values.placementLength}`,
            `Work Opportunity:`,  
            `${values.participantActivities}`,
            `What will organization provide:  ${values.participantExperiences}`,
            `Other Experience:`, 
            `${values.otherExperience}`,
            `Participants will gain:  ${values.participantSkills}`,
            `Other Skills: `,
            `${values.otherSkill}`,
            `Additional Benefits: `,
            `${values.additionalBenefits}`,
            `Stipend:  $${values.participantStipend}`,
            `Has Existing Supplier Number:  ${values.existingSupplierNumber}`,
            `Supplier Number:${values.supplierNumber}`,
            `Business Classification: ${values.businessClassification}`,
            `Tax Number:  ${values.taxNumber}`,
            `Signatory 1:  ${values.signatory1}`,
            `Signatory 2:  ${values.signatory2}`,
            `Certify Signatories:  ${values.signingAuthorityConfirm}`,
            `Consent:  ${values.organizationConsent}`,
            `<hr />`,
            `For more information on this grant opportunity, visit (include website link)`,
            `If you have additional questions or require assistance, please contact (who – email and phone number)`,
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
        return data

    }
}