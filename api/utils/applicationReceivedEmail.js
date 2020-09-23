module.exports = {

    generateNotification: function (values) {

        var html = /*html*/`
        <h2>A grant application has been received - ${values._id}</h2>
        <p><b>applicationID:</b>  ${values._id}</p>
        <p><b>operatingName:</b>  ${values.operatingName}</p>
        <p><b>legalName:</b>  ${values.legalName}</p>
        <p><b>missionStatement:</b>  ${values.missionStatement}</p>
        <p><b>website:</b>  ${values.website}</p>
        <p><b>businessNumber:</b>  ${values.businessNumber}</p>
        <p><b>confirmOrganizationNonProfit:</b>  ${values.confirmOrganizationNonProfit}</p>
        <p><b>nonProfitClassification:</b>  ${values.nonProfitClassification}</p>
        <p><b>nonProfitSubClassification:</b>  ${values.nonProfitSubClassification}</p>
        <p><b>nonProfitSubClassificationOther:</b>  ${values.nonProfitSubClassificationOther}</p>
        <p><b>basedInBC:</b>  ${values.basedInBC}</p>
        <p><b>positionTitle:</b>  ${values.positionTitle}</p>
        <p><b>firstName:</b>  ${values.firstName}</p>
        <p><b>lastName:</b>  ${values.lastName}</p>
        <p><b>email:</b>  ${values.email}</p>
        <p><b>phone:</b>  ${values.phone}</p>
        <p><b>positionTitleAlternate:</b>  ${values.positionTitleAlternate}</p>
        <p><b>firstNameAlternate:</b>  ${values.firstNameAlternate}</p>
        <p><b>lastNameAlternate:</b>  ${values.lastNameAlternate}</p>
        <p><b>emailAlternate:</b>  ${values.emailAlternate}</p>
        <p><b>phoneAlternate:</b>  ${values.phoneAlternate}</p>
        <p><b>otherMailingAddress:</b>  ${values.otherMailingAddress}</p>
        <p><b>address1:</b>  ${values.address1}</p>
        <p><b>address2:</b>  ${values.address2}</p>
        <p><b>city:</b>  ${values.city}</p>
        <p><b>postal:</b>  ${values.postal}</p>
        <p><b>mailingAddress1:</b>  ${values.mailingAddress1}</p>
        <p><b>mailingAddress2:</b>  ${values.mailingAddress2}</p>
        <p><b>mailingCity:</b>  ${values.mailingCity}</p>
        <p><b>mailingPostal:</b>  ${values.mailingPostal}</p>
        <p><b>applicants:</b>  ${values.applicants}</p>
        <p><b>insuranceCoverage:</b>  ${values.insuranceCoverage}</p>
        <p><b>monitorCommit:</b>  ${values.monitorCommit}</p>
        <p><b>applicantType:</b>  ${values.applicantType}</p>
        <p><b>eligibleToWork:</b>  ${values.eligibleToWork}</p>
        <p><b>placementLength:</b>  ${values.placementLength}</p>
        <p><b>participantActivities:</b>  ${values.participantActivities}</p>
        <p><b>experiences:</b>  ${values.experiences}</p>
        <p><b>otherExperience:</b>  ${values.otherExperience}</p>
        <p><b>skills:</b>  ${values.skills}</p>
        <p><b>otherSkill:</b>  ${values.otherSkill}</p>
        <p><b>additionalBenefits:</b>  ${values.additionalBenefits}</p>
        <p><b>stipend:</b>  ${values.stipend}</p>
        <p><b>existingSupplierNumber:</b>  ${values.existingSupplierNumber}</p>
        <p><b>supplierNumber:</b>  ${values.supplierNumber}</p>
        <p><b>businessClassification:</b>  ${values.businessClassification}</p>
        <p><b>taxNumber:</b>  ${values.taxNumber}</p>
        <p><b>signatory1:</b>  ${values.signatory1}</p>
        <p><b>signatory2:</b>  ${values.signatory2}</p>
        <p><b>signingAuthorityConfirm:</b>  ${values.signingAuthorityConfirm}</p>
        <p><b>consent:</b>  ${values.consent}</p>

    
    `
        return html
    },

    generateListNotification: function(values) {
        var html = `
            applicationID ${values._id}
            operatingName ${values.operatingName}
            legalName ${values.legalName}
            missionStatement ${values.missionStatement}
            website ${values.website}
            businessNumber ${values.businessNumber}
            confirmOrganizationNonProfit ${values.confirmOrganizationNonProfit}
            nonProfitClassification ${values.nonProfitClassification}
            nonProfitSubClassification ${values.nonProfitSubClassification}
            nonProfitSubClassificationOther ${values.nonProfitSubClassificationOther}
            basedInBC ${values.basedInBC}
            positionTitle ${values.positionTitle}
            firstName ${values.firstName}
            lastName ${values.lastName}
            email ${values.email}
            phone ${values.phone}
            positionTitleAlternate ${values.positionTitleAlternate}
            firstNameAlternate ${values.firstNameAlternate}
            lastNameAlternate ${values.lastNameAlternate}
            emailAlternate ${values.emailAlternate}
            phoneAlternate ${values.phoneAlternate}
            otherMailingAddress ${values.otherMailingAddress}
            address1 ${values.address1}
            address2 ${values.address2}
            city ${values.city}
            postal ${values.postal}
            mailingAddress1 ${values.mailingAddress1}
            mailingAddress2 ${values.mailingAddress2}
            mailingCity ${values.mailingCity}
            mailingPostal ${values.mailingPostal}
            applicants ${values.applicants}
            insuranceCoverage ${values.insuranceCoverage}
            monitorCommit ${values.monitorCommit}
            applicantType ${values.applicantType}
            eligibleToWork ${values.eligibleToWork}
            placementLength ${values.placementLength}
            participantActivities ${values.participantActivities}
            experiences ${values.experiences}
            otherExperience ${values.otherExperience}
            skills ${values.skills}
            otherSkill ${values.otherSkill}
            additionalBenefits ${values.additionalBenefits}
            stipend ${values.stipend}
            existingSupplierNumber ${values.existingSupplierNumber}
            supplierNumber ${values.supplierNumber}
            businessClassification ${values.businessClassification}
            taxNumber ${values.taxNumber}
            signatory1 ${values.signatory1}
            signatory2 ${values.signatory2}
            signingAuthorityConfirm ${values.signingAuthorityConfirm}
            consent ${values.consent}        
        `
        return html;
    }

}