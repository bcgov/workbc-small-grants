var strings = require("./strings")

module.exports = {

    generateNotification: function (values) {

        var html = /*html*/`
        <h2>A grant application has been received - ${values._id}</h2>
        <p><b>applicationID:</b>  ${values._id}</p>
        <p><b>operatingName:</b>  ${values.operatingName}</p>
        <p><b>legalName:</b>  ${values.legalName}</p>
        <p><b>missionStatement:</b>  ${values.missionStatement}</p>
        <p><b>organizationWebsite:</b>  ${values.organizationWebsite}</p>
        <p><b>businessNumber:</b>  ${values.businessNumber}</p>
        <p><b>organizationType:</b>  ${values.confirmOrganizationNonProfit}</p>
        <p><b>abilityToSupportParticipant:</b> ${strings.orEmpty(values.abilityToSupportParticipant)}</p>
        <p><b>otherBusinessOrgSpecify:</b> ${strings.orEmpty(values.otherBusinessOrgSpecify)}</p>
        <p><b>nonProfitClassification:</b>  ${strings.orEmpty(values.nonProfitClassification)}</p>
        <p><b>nonProfitSubClassification:</b>  ${strings.orEmpty(values.nonProfitSubClassification)}</p>
        <p><b>nonProfitSubClassificationOther:</b>  ${strings.orEmpty(values.nonProfitSubClassificationOther)}</p>
        <p><b>basedInBC:</b>  ${values.basedInBC}</p>
        <p><b>positionTitle:</b>  ${values.positionTitle}</p>
        <p><b>firstName:</b>  ${values.firstName}</p>
        <p><b>lastName:</b>  ${values.lastName}</p>
        <p><b>contactEmail:</b>  ${values.contactEmail}</p>
        <p><b>contactPhone:</b>  ${values.contactPhone}</p>
        <p><b>positionTitleAlternate:</b>  ${values.positionTitleAlternate}</p>
        <p><b>firstNameAlternate:</b>  ${values.firstNameAlternate}</p>
        <p><b>lastNameAlternate:</b>  ${values.lastNameAlternate}</p>
        <p><b>emailAlternate:</b>  ${values.emailAlternate}</p>
        <p><b>phoneAlternate:</b>  ${values.phoneAlternate}</p>
        <p><b>otherMailingAddress:</b>  ${values.otherMailingAddress}</p>
        <p><b>contactAddress1:</b>  ${values.contactAddress1}</p>
        <p><b>contactAddress2:</b>  ${strings.orEmpty(values.contactAddress2)}</p>
        <p><b>contactCity:</b>  ${values.contactCity}</p>
        <p><b>contactPostal:</b>  ${values.contactPostal}</p>
        <p><b>mailingAddress1:</b>  ${strings.orEmpty(values.mailingAddress1)}</p>
        <p><b>mailingAddress2:</b>  ${strings.orEmpty(values.mailingAddress2)}</p>
        <p><b>mailingCity:</b>  ${strings.orEmpty(values.mailingCity)}</p>
        <p><b>mailingPostal:</b>  ${strings.orEmpty(values.mailingPostal)}</p>
        <p><b>numberOfApplicants:</b>  ${values.numberOfApplicants}</p>
        <p><b>insuranceCoverage:</b>  ${values.insuranceCoverage}</p>
        <p><b>monitorCommit:</b>  ${values.monitorCommit}</p>
        <p><b>applicantType:</b>  ${values.applicantType}</p>
        <p><b>understandNotAvailableTo:</b> ${values.understandNotAvailableTo}</p>
        <p><b>administerGrantUnderstanding:</b> ${values.administerGrantUnderstanding}</p>
        <p><b>placementLength:</b>  ${values.placementLength}</p>
        <p><b>workExperienceTakesPlaceElsewhere:</b> ${values.workExperienceTakesPlaceElsewhere}</p>
        <p><b>partneringBusinessName:</b> ${strings.orEmpty(values.partneringBusinessName)}</p>
        <p><b>partneringBusinessActivities:</b> ${strings.orEmpty(values.partneringBusinessActivities)}</p>
        <p><b>partneringBusinessContactAddress1:</b> ${strings.orEmpty(values.partneringBusinessContactAddress1)}</p>
        <p><b>partneringBusinessContactAddress2:</b> ${strings.orEmpty(values.partneringBusinessContactAddress2)}</p>
        <p><b>partneringBusinessContactCity:</b> ${strings.orEmpty(values.partneringBusinessContactCity)}</p>
        <p><b>partneringBusinessContactPostal:</b> ${strings.orEmpty(values.partneringBusinessContactPostal)}</p>        
        <p><b>participantActivities:</b>  ${values.participantActivities}</p>
        <p><b>participantExperiences:</b>  ${values.participantExperiences}</p>
        <p><b>otherExperience:</b>  ${strings.orEmpty(values.otherExperience)}</p>
        <p><b>participantSkills:</b>  ${values.participantSkills}</p>
        <p><b>otherSkill:</b>  ${strings.orEmpty(values.otherSkill)}</p>
        <p><b>additionalBenefits:</b>  ${strings.orEmpty(values.additionalBenefits)}</p>
        <p><b>participantStipendConfirmation:</b>  ${values.participantStipend}</p>
        <p><b>existingSupplierNumber:</b>  ${values.existingSupplierNumber}</p>
        <p><b>supplierNumber:</b>  ${strings.orEmpty(values.supplierNumber)}</p>
        <p><b>businessClassification:</b>  ${strings.orEmpty(values.businessClassification)}</p>
        <p><b>signatory1:</b>  ${values.signatory1}</p>
        <p><b>signatory2:</b>  ${values.signatory2}</p>
        <p><b>signingAuthorityConfirm:</b>  ${values.signingAuthorityConfirm}</p>
        <p><b>organizationConsent:</b>  ${values.organizationConsent}</p>

    
    `
        return html
    },

    generateListNotification: function(values) {
        var html = `
applicationID ${values._id}
operatingName ${values.operatingName}
legalName ${values.legalName}
missionStatement ${values.missionStatement}
organizationWebsite ${values.organizationWebsite}
businessNumber ${values.businessNumber}
confirmOrganizationNonProfit ${values.confirmOrganizationNonProfit}
nonProfitClassification ${strings.orEmpty(values.nonProfitClassification)}
nonProfitSubClassification ${strings.orEmpty(values.nonProfitSubClassification)}
nonProfitSubClassificationOther ${strings.orEmpty(values.nonProfitSubClassificationOther)}
basedInBC ${values.basedInBC}
positionTitle ${values.positionTitle}
firstName ${values.firstName}
lastName ${values.lastName}
contactEmail ${values.contactEmail}
contactPhone ${values.contactPhone}
positionTitleAlternate ${values.positionTitleAlternate}
firstNameAlternate ${values.firstNameAlternate}
lastNameAlternate ${values.lastNameAlternate}
emailAlternate ${values.emailAlternate}
phoneAlternate ${values.phoneAlternate}
otherMailingAddress ${values.otherMailingAddress}
contactAddress1 ${values.contactAddress1}
contactAddress2 ${strings.orEmpty(values.contactAddress2)}
contactCity ${values.contactCity}
contactPostal ${values.contactPostal}
mailingAddress1 ${strings.orEmpty(values.mailingAddress1)}
mailingAddress2 ${strings.orEmpty(values.mailingAddress2)}
mailingCity ${strings.orEmpty(values.mailingCity)}
mailingPostal ${strings.orEmpty(values.mailingPostal)}
numberOfApplicants ${values.numberOfApplicants}
insuranceCoverage ${values.insuranceCoverage}
monitorCommit ${values.monitorCommit}
applicantType ${values.applicantType}
placementLength ${values.placementLength}
participantActivities ${values.participantActivities}
participantExperiences ${values.participantExperiences}
otherExperience ${strings.orEmpty(values.otherExperience)}
participantSkills ${values.participantSkills}
otherSkill ${strings.orEmpty(values.otherSkill)}
additionalBenefits ${strings.orEmpty(values.additionalBenefits)}
participantStipend ${values.participantStipend}
existingSupplierNumber ${values.existingSupplierNumber}
supplierNumber ${strings.orEmpty(values.supplierNumber)}
businessClassification ${strings.orEmpty(values.businessClassification)}
taxNumber ${strings.orEmpty(values.taxNumber)}
signatory1 ${values.signatory1}
signatory2 ${values.signatory2}
signingAuthorityConfirm ${values.signingAuthorityConfirm}
organizationConsent ${values.organizationConsent}
abilityToSupportParticipant ${strings.orEmpty(values.abilityToSupportParticipant)}
otherBusinessOrgSpecify ${strings.orEmpty(values.otherBusinessOrgSpecify)}
understandNotAvailableTo ${values.understandNotAvailableTo}
administerGrantUnderstanding ${values.administerGrantUnderstanding}
workExperienceTakesPlaceElsewhere ${values.workExperienceTakesPlaceElsewhere}
partneringBusinessName ${strings.orEmpty(values.partneringBusinessName)}
partneringBusinessActivities ${strings.orEmpty(values.partneringBusinessActivities)}
partneringBusinessContactAddress1 ${strings.orEmpty(values.partneringBusinessContactAddress1)}
partneringBusinessContactAddress2 ${strings.orEmpty(values.partneringBusinessContactAddress2)}
partneringBusinessContactCity ${strings.orEmpty(values.partneringBusinessContactCity)}
partneringBusinessContactPostal ${strings.orEmpty(values.partneringBusinessContactPostal)}  
`
        return html;
    },

    generateClientNotification: function (values){
        var html = /*html*/`
            <h2>A client grant application has been received</h2>
            <p><b>applicationId:</b> ${strings.orEmpty(values.applicationId)}</p>
            <p><b>applicationId (manual):</b> ${strings.orEmpty(values.applicationIdM)}</p>
            <p><b>organizationName (no ID):</b> ${strings.orEmpty(values.organizationNameM)}</p>
            <p><b>noOrgId:</b> ${values.noOrgId}</p>
            <p><b>clientName:</b> ${values.clientName}</p>
            <p><b>clientLastName:</b> ${values.clientLastName}</p>
            <p><b>clientDOB (DD/MM/YYYY):</b> ${values.clientDOB.getDate()}/${values.clientDOB.getMonth()+1}/${values.clientDOB.getFullYear()}</p>
            <p><b>clientEmail:</b> ${values.clientEmail}</p>
            <p><b>clientAddress1:</b> ${values.clientAddress1}</p>
            <p><b>clientAddress2:</b> ${strings.orEmpty(values.clientAddress2)}</p>
            <p><b>clientConsent:</b> ${values.clientConsent}</p>
            <p><b>livingOnReserveCommunity:</b> ${strings.orEmpty(values.livingOnReserveCommunity)}</p>
            <p><b>receivingAssistanceFrom:</b> ${strings.orEmpty(values.receivingAssistanceFrom)}</p>
            <p><b>pwdDesignationOrganization:</b> ${strings.orEmpty(values.pwdDesignationOrganization)}</p>
            <p><b>ppmbDesignationOrganization:</b> ${strings.orEmpty(values.ppmbDesignationOrganization)}</p>
        `

        return html       
    },

    generateClientListNotification: function(values){
        var html = `
applicationId ${strings.orEmpty(values.applicationId)}
applicationIdM ${strings.orEmpty(values.applicationIdM)}
organizationNameM ${strings.orEmpty(values.organizationNameM)}
noOrgId ${values.noOrgId}
clientName ${values.clientName}
clientLastName ${values.clientLastName}
clientDOB ${values.clientDOB.getDate()}/${values.clientDOB.getMonth()+1}/${values.clientDOB.getFullYear()}
clientEmail ${values.clientEmail}
clientAddress1 ${values.clientAddress1}
clientAddress2 ${strings.orEmpty(values.clientAddress2)}
clientConsent ${values.clientConsent}
        `
        if (values._intake === "2" || values._intake === "3"){
            html += `
livingOnReserveCommunity ${strings.orEmpty(values.livingOnReserveCommunity)}
receivingAssistanceFrom ${strings.orEmpty(values.receivingAssistanceFrom)}
pwdDesignationOrganization ${strings.orEmpty(values.pwdDesignationOrganization)}
ppmbDesignationOrganization ${strings.orEmpty(values.ppmbDesignationOrganization)}
`
        }
        return html
    },

    generateSurveyOrgNotification: function(values){
        var html = /*html*/`
            <h2>An organization survey response has been received</h2>
            <p><b>easeOfApplicationCompletion: </b> ${values.easeOfApplicationCompletion}</p>
            <p><b>speedApplicationProcessed: </b> ${values.speedApplicationProcessed}</p>
            <p><b>satisfactionSpeedOfService: </b> ${values.satisfactionSpeedOfService}</p>
            <p><b>participantContributionValuable: </b> ${values.participantContributionValuable}</p>
            <p><b>participantNumber: </b> ${values.participantNumber}</p>
            <p><b>participant1Experience: </b> ${strings.orEmpty(values.participant1Experience)}</p>
            <p><b>participant2Experience: </b> ${strings.orEmpty(values.participant2Experience)}</p>
            <p><b>participant3Experience: </b> ${strings.orEmpty(values.participant3Experience)}</p>
            <p><b>participant4Experience: </b> ${strings.orEmpty(values.participant4Experience)}</p>
            <p><b>participant5Experience: </b> ${strings.orEmpty(values.participant5Experience)}</p>
            <p><b>hiredPeopleWithBarriersBefore: </b> ${values.hiredPeopleWithBarriersBefore}</p>
            <p><b>difficultyHiringPeopleWithBarriersComment: </b> ${strings.orEmpty(values.difficultyHiringPeopleWithBarriersComment)}</p>
            <p><b>likelyToParticipateInSimilarProgram: </b> ${values.likelyToParticipateInSimilarProgram}</p>
            <p><b>likelyToRecommendGrant: </b> ${values.likelyToRecommendGrant}</p>
            <p><b>experienceBetterComments: </b> ${strings.orEmpty(values.experienceBetterComments)}</p>
        `
        return html
    },

    generateSurveyOrgListNotification: function(values){
        var html = `
            easeOfApplicationCompletion ${strings.orEmpty(values.easeOfApplicationCompletion)}
            speedApplicationProcessed ${strings.orEmpty(values.speedApplicationProcessed)}
            experienceOnlineApplicationComments ${strings.orEmpty(values.experienceOnlineApplicationComments)}
            participantContributionValuable ${strings.orEmpty(values.participantContributionValuable)}
            hiredPeopleWithBarriersBefore ${strings.orEmpty(values.hiredPeopleWithBarriersBefore)}
            hirePeopleWithBarriersFuture ${strings.orEmpty(values.hirePeopleWithBarriersFuture)}
            experienceWithWorkParticipantsComments ${strings.orEmpty(experienceWithWorkParticipantsComments)}
            receivedOtherWorkBCServicesOrPrograms ${strings.orEmpty(receivedOtherWorkBCServicesOrPrograms)}
            experienceWithWorkParticipantsComments ${strings.orEmpty(experienceWithWorkParticipantsComments)}
            likelyToParticipateInSimilarProgram ${strings.orEmpty(likelyToParticipateInSimilarProgram)}
            likelyToRecommendGrant ${strings.orEmpty(likelyToRecommendGrant)}
            bestPartOfProgramComments ${strings.orEmpty(bestPartOfProgramComments)}
            experienceBetterComments ${strings.orEmpty(values.experienceBetterComments)}
        `
        return html
    },

    generateSurveyParticipantNotification: function(values){
        var html = /*html*/`
            <h2>A participant survey response has been received</h2>
            <p><b>easeOfApplicationCompletion: </b> ${values.easeOfApplicationCompletion}</p>
            <p><b>overallExperienceWithEmployer: </b> ${values.overallExperienceWithEmployer}</p>
            <p><b>levelOfSupportsReceived: </b> ${values.levelOfSupportsReceived}</p>
            <p><b>increasedAbilityToParticipateInLM: </b> ${values.increasedAbilityToParticipateInLM}</p>
            <p><b>likelyToParticipateInSimilarProgram: </b> ${values.likelyToParticipateInSimilarProgram}</p>
            <p><b>likelyToRecommendGrant: </b> ${values.likelyToRecommendGrant}</p>
            <p><b>experienceBetterComments: </b> ${strings.orEmpty(values.experienceBetterComments)}</p>
        `
        return html
    },

    generateSurveyParticipantListNotification: function(values){
        var html = `
            easeOfApplicationCompletion ${strings.orEmpty(values.easeOfApplicationCompletion)}
            experienceOnlineApplicationComments ${strings.orEmpty(experienceOnlineApplicationComments)}
            overallExperienceWithOrganization ${strings.orEmpty(overallExperienceWithOrganization)}
            levelOfSupportsReceived ${strings.orEmpty(levelOfSupportsReceived)}
            increasedAbilityGettingAndKeepingJob ${strings.orEmpty(increasedAbilityGettingAndKeepingJob)}
            organizationAndExperienceComments ${strings.orEmpty(organizationAndExperienceComments)}
            receivedOtherWorkBCServicesOrPrograms ${strings.orEmpty(receivedOtherWorkBCServicesOrPrograms)}
            receivedOtherWorkBCServicesOrPrograms ${strings.orEmpty(receivedOtherWorkBCServicesOrPrograms)}
            likelyToRecommendGrant ${strings.orEmpty(likelyToRecommendGrant)}
            bestPartOfTheProgramComments ${strings.orEmpty(bestPartOfTheProgramComments)}
            experienceBetterComments ${strings.orEmpty(values.experienceBetterComments)}
        `
        return html
    }

}