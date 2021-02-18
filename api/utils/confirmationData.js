var strings = require("./strings")

module.exports = {
    getOrgSubmitted(values){
        var data = [
            `<b>When can I expect notification?</b>`,
            `Applications may take approximately four weeks for processing. The Ministry will contact your organization once the application has been processed, or if further information is required. We will do our best to provide notification on decisions as quickly as possible; although, response times may vary throughout the intake period as applicant volumes fluctuate.`,
            `<b>Still have questions?</b>`,
            `For more information on this grant opportunity, visit <a href="https://workbc.ca/Employment-Services/Work-Experience-Opportunities-Grant.aspx" target="_blank" rel="noopener noreferrer">https://workbc.ca/Employment-Services/Work-Experience-Opportunities-Grant.aspx</a>`,
            `If you have additional questions or require assistance, please review the application guidelines <a href="https://www.workbc.ca/getmedia/b73c6c7b-40ec-4c10-ae94-13775d76abbc/Application-Guide-Work-Experience-Opportunities-Grant.aspx" target="_blank" rel="noopener noreferrer">here</a>, or contact <a href="mailto:WorkExperienceGrants@gov.bc.ca">WorkExperienceGrants@gov.bc.ca</a>`,
            `<hr />`,
            `The following information was received:`,
            `Application ID:  ${values._id}`,
            `Operating Name:  ${values.operatingName}`,
            `Legal Name:  ${values.legalName}`,
            `Mission Statement:  ${values.missionStatement}`,
            `Organization Website:  ${values.organizationWebsite}`,
            `Business Number:  ${values.businessNumber}`,
            `Organization Type:  ${values.confirmOrganizationNonProfit}`,
            `Registration ID (if non-profit):  ${strings.orEmpty(values.societyRegistrationID)}`,
            `Charity Registration Number (if charity): ${strings.orEmpty(values.charityRegistrationNumber)}`,
            `Non Profit Classification:  ${values.nonProfitClassification}`,
            `Non Profit SubClassification:  ${values.nonProfitSubClassification}`,
            `Non Profit Other SubClassification:  ${strings.orEmpty(values.nonProfitSubClassificationOther)}`,
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
            `Understanding on participant ineligibility: ${values.understandNotAvailableTo}`,
            `Grant administration understanding: ${values.administerGrantUnderstanding}`,
            `Placement length confirmation:  ${values.placementLength}`,
            `Work Opportunity:`,  
            `${values.participantActivities}`,
            `What will organization provide:  ${values.participantExperiences}`,
            `Other Experience:`, 
            `${strings.orEmpty(values.otherExperience)}`,
            `Work experience taking place at partnering business? ${values.workExperienceTakesPlaceElsewhere}`,
            `<h5>Partnering business information (only if work experience is taking place at partnering business.)</h5>`,
            `Partnering business name: ${strings.orEmpty(values.partneringBusinessName)}`,
            `Partnering business activities: ${strings.orEmpty(values.partneringBusinessActivities)}`,
            `Partnering business contact address 1: ${strings.orEmpty(values.partneringBusinessContactAddress1)}`,
            `Partnering business contact address 2: ${strings.orEmpty(values.partneringBusinessContactAddress2)}`,
            `Partnering business contact city: ${strings.orEmpty(values.partneringBusinessContactCity)}`,
            `Partnering business contact postal: ${strings.orEmpty(values.partneringBusinessContactPostal)} `,
            `Skill Development:  ${values.participantSkills}`,
            /*
            `Other Skills: `,
            `${strings.orEmpty(values.otherSkill)}`,
            */
            `Additional Benefits: `,
            `${strings.orEmpty(values.additionalBenefits)}`,
            `Stipend confirmation:  ${values.participantStipend}`,
            `Has Existing Supplier Number:  ${values.existingSupplierNumber}`,
            `Supplier Number:${strings.orEmpty(values.supplierNumber)}`,
            `Business Classification: ${strings.orEmpty(values.businessClassification)}`,
            //`Tax Number:  ${strings.orEmpty(values.taxNumber)}`,
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
            `<b>DOB (DD/MM/YYYY):</b> ${values.clientDOB.getDate()}/${values.clientDOB.getMonth()+1}/${values.clientDOB.getFullYear()}`,
            `<b>Email:</b> ${values.clientEmail}`,
            `<b>Address1:</b> ${values.clientAddress1}`,
            `<b>Address2:</b> ${strings.orEmpty(values.clientAddress2)}`,
            `<b>Consent:</b> ${values.clientConsent}`,
        ]
        if (values.noOrgId){
            data.push(`<b>Organization Name:</b> ${strings.orEmpty(values.organizationNameM)}`)
        } else {
            data.push(`<b>Application Id:</b> ${strings.orEmpty(values.applicationId)}${strings.orEmpty(values.applicationIdM)}`)
        }
        if (values._intake === "2") {
            data.push(
                `<h5>Indigenous Participants</h5>`,
                `<b>If Living On Reserve, Community Type:</b> ${strings.orEmpty(values.livingOnReserveCommunity)}`,
                `<b>If Receiving Assistance, From:</b> ${strings.orEmpty(values.receivingAssistanceFrom)}`,
                `<b>If PWD Designation, Organization:</b> ${strings.orEmpty(values.pwdDesignationOrganization)}`,
                `<b>If PPMB Designation, Organization:</b> ${strings.orEmpty(values.ppmbDesignationOrganization)}`
            )
        }
        return data

    },
    getSurveyOrgSubmitted(values){
        var data = [

        ]
        return data
    },
    getSurveyParticipantSubmitted(values){
        var data = [

        ]
        return data
    }
}