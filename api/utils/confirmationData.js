var strings = require("./strings")

module.exports = {
    getOrgSubmitted(values){
        var data = [
            `<b>Note: you must get all your participants to complete the step above within the next 3 weeks.</b>`,
            `For more information on this grant opportunity, visit (include website link)`,
            `If you have additional questions or require assistance, please contact (who – email and phone number)`,
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
            `contact Address 2:  ${strings.orEmpty(values.contactAddress2)}`,
            `Contact City:  ${values.contactCity}`,
            `Contact Postal:  ${values.contactPostal}`,
            `<h5>Mailing Address (only if different from contact)</h5>`,
            `Mailing Address Different:  ${values.otherMailingAddress}`,
            `Mailing Address1:  ${strings.orEmpty(values.mailingAddress1)}`,
            `Mailing Address2:  ${strings.orEmpty(values.mailingAddress2)}`,
            `Mailing City:  ${strings.orEmpty(values.mailingCity)}`,
            `Mailing Postal:  ${strings.orEmpty(values.mailingPostal)}`,
            `Number Of Applicants:  ${values.numberOfApplicants}`,
            `WorkSafeBC Insurance Coverage:  ${values.insuranceCoverage}`,
            `Commitment to monitor applicants:  ${values.monitorCommit}`,
            `Applicant eligibility confirmation:  ${values.applicantType}`,
            `Placement length confirmation:  ${values.placementLength}`,
            `Work Opportunity:`,  
            `${values.participantActivities}`,
            `What will organization provide:  ${values.participantExperiences}`,
            `Other Experience:`, 
            `${strings.orEmpty(values.otherExperience)}`,
            `Participants will gain:  ${values.participantSkills}`,
            `Other Skills: `,
            `${strings.orEmpty(values.otherSkill)}`,
            `Additional Benefits: `,
            `${strings.orEmpty(values.additionalBenefits)}`,
            `Stipend:  $${values.participantStipend}`,
            `Has Existing Supplier Number:  ${values.existingSupplierNumber}`,
            `Supplier Number:${values.supplierNumber}`,
            `Business Classification: ${strings.orEmpty(values.businessClassification)}`,
            `Tax Number:  ${strings.orEmpty(values.taxNumber)}`,
            `Signatory 1:  ${values.signatory1}`,
            `Signatory 2:  ${values.signatory2}`,
            `Certify Signatories:  ${values.signingAuthorityConfirm}`,
            `Consent:  ${values.organizationConsent}`,
            `<hr />`,
        ]
        return data

    },
    getClientSubmitted(values){
        var data=[
            `<b>Name:</b> ${values.clientName}`,
            `<b>Last Name:</b> ${values.clientLastName}`,
            `<b>DOB (DD/MM/YYYY):</b> ${values.clientDOB.getDate()}/${values.clientDOB.getMonth()}/${values.clientDOB.getFullYear()}`,
            `<b>Email:</b> ${values.clientEmail}`,
            `<b>Address1:</b> ${values.clientAddress1}`,
            `<b>Address2:</b> ${values.clientAddress2}`,
            `<b>Consent:</b> ${values.clientConsent}`,
        ]
        if (values.noOrgId){
            data.push(`<b>Organization Name:</b> ${strings.orEmpty(values.organizationNameM)}`)
        } else {
            data.push(`<b>Application Id:</b> ${strings.orEmpty(values.applicationId)}${strings.orEmpty(values.applicationIdM)}`)
        }
        return data

    }
}