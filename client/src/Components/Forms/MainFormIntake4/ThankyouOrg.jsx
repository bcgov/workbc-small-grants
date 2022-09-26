import React, { Component } from "react"

class ThankyouOrg extends Component {
    render() {
        const applicationId = this.props.location.state !== undefined ? this.props.location.state._id : ""
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-success d-print-none float-right" onClick={() => window.print()}>
                            Print Confirmation
                        </button>
                        <br />
                        <br />
                        <h1>Thank you, your information has been received.</h1>
                        <h3>Application ID: 2022-{this.props.location.state !== undefined && this.props.location.state._id}</h3>
                        <p>
                            Your application for the Work Experience Opportunities Grant has been successfully submitted. A confirmation email has
                            been sent to the email addresses included on the form, which includes a copy of the application details, and the
                            application ID reference number.
                        </p>
                        <h3>Here are your required next steps:</h3>
                        <p>
                            Your participants' application form will be reviewed by the ministry on a rolling basis. Participants need to be verified
                            before work can commence. Participant applications should be submitted as soon as possible to get this process started.
                            September 12, 2022 is the deadline for submitting your participant application forms.
                        </p>
                        <p>
                            Participant forms can be submitted in two ways; participants can submit an online form, or complete and email PDF version
                            of the form.
                        </p>
                        <p>
                            Organizations can contact their nearest{" "}
                            <a
                                href="https://www.workbc.ca/Employment-Services/WorkBC-Centres/Find-Your-WorkBC-Centre.aspx"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WorkBC Centre
                            </a>{" "}
                            to help with the recruitment of eligible participants.
                        </p>
                        <h4>Please provide your participants the following instructions:</h4>
                        <div className="card border-dark">
                            <div className="card-body">
                                <p>Application ID: 2022-{this.props.location.state !== undefined && this.props.location.state._id}</p>
                                <p>Please visit the following URL in order to provide your consent to the Ministry.</p>
                                <p>
                                    <a
                                        href={`${window.location.origin}/participantForm/4/2022-${applicationId}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >{`${window.location.origin}/participantForm/4/2022-${applicationId}`}</a>
                                </p>
                                <p>
                                    If you prefer a PDF version of the form, one can be found{" "}
                                    <a href="/pdf/ParticipantConsentForm.pdf" target="_blank">
                                        here
                                    </a>
                                    . Once complete please email it to{" "}
                                    <a href="mailto:WorkExperienceGrants@gov.bc.ca">WorkExperienceGrants@gov.bc.ca</a>.
                                </p>
                            </div>
                        </div>
                        <br />
                        <h3>When can I expect notification?</h3>
                        <p>
                            Applications may take approximately four weeks for processing. The Ministry will contact your organization once the
                            application has been processed, or if further information is required. We will do our best to provide notification on
                            decisions as quickly as possible; although, response times may vary throughout the intake period as applicant volumes
                            fluctuate.
                        </p>
                        <h3>Still have questions?</h3>
                        <p>
                            For more information on this grant opportunity, visit{" "}
                            <a
                                href="https://workbc.ca/Employment-Services/Work-Experience-Opportunities-Grant.aspx"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://workbc.ca/Employment-Services/Work-Experience-Opportunities-Grant.aspx
                            </a>
                        </p>
                        <p>
                            If you have additional questions or require assistance, please review the application guidelines{" "}
                            <a
                                href="https://www.workbc.ca/getmedia/b73c6c7b-40ec-4c10-ae94-13775d76abbc/Application-Guide-Work-Experience-Opportunities-Grant.aspx"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                here
                            </a>
                            , or contact <a href="mailto:WorkExperienceGrants@gov.bc.ca">WorkExperienceGrants@gov.bc.ca</a>
                        </p>
                        <hr />
                        <p>The following information was received:</p>
                        <p>Application ID: {this.props.location.state !== undefined && this.props.location.state._id}</p>
                        <p>Operating Name: {this.props.location.state !== undefined && this.props.location.state.operatingName}</p>
                        <p>Legal Name: {this.props.location.state !== undefined && this.props.location.state.legalName}</p>
                        <p>Mission Statement: {this.props.location.state !== undefined && this.props.location.state.missionStatement}</p>
                        <p>Organization Website: {this.props.location.state !== undefined && this.props.location.state.organizationWebsite}</p>
                        <p>Business Number: {this.props.location.state !== undefined && this.props.location.state.businessNumber}</p>
                        <p>Organization Type: {this.props.location.state !== undefined && this.props.location.state.confirmOrganizationNonProfit}</p>
                        <p>
                            Registration ID (if non-profit):{" "}
                            {this.props.location.state !== undefined && this.props.location.state.societyRegistrationID}
                        </p>
                        <p>
                            Charity Registration Number (if charity):{" "}
                            {this.props.location.state !== undefined && this.props.location.state.charityRegistrationNumber}
                        </p>
                        <p>
                            Non Profit Classification: {this.props.location.state !== undefined && this.props.location.state.nonProfitClassification}
                        </p>
                        <p>
                            Non Profit SubClassification:{" "}
                            {this.props.location.state !== undefined && this.props.location.state.nonProfitSubClassification}
                        </p>
                        <p>
                            Non Profit Other SubClassification:{" "}
                            {this.props.location.state !== undefined && this.props.location.state.nonProfitSubClassificationOther}
                        </p>
                        <p>Based In BC: {this.props.location.state !== undefined && this.props.location.state.basedInBC.toString()}</p>
                        <p>Position Title: {this.props.location.state !== undefined && this.props.location.state.positionTitle}</p>
                        <p>First Name: {this.props.location.state !== undefined && this.props.location.state.firstName}</p>
                        <p>Last Name: {this.props.location.state !== undefined && this.props.location.state.lastName}</p>
                        <p>Contact Email: {this.props.location.state !== undefined && this.props.location.state.contactEmail}</p>
                        <p>Contact Phone: {this.props.location.state !== undefined && this.props.location.state.contactPhone}</p>
                        <h5>Alternate Contact</h5>
                        <p>Position Title: {this.props.location.state !== undefined && this.props.location.state.positionTitleAlternate}</p>
                        <p>First Name: {this.props.location.state !== undefined && this.props.location.state.firstNameAlternate}</p>
                        <p>Last Name: {this.props.location.state !== undefined && this.props.location.state.lastNameAlternate}</p>
                        <p>Email: {this.props.location.state !== undefined && this.props.location.state.emailAlternate}</p>
                        <p>Phone: {this.props.location.state !== undefined && this.props.location.state.phoneAlternate}</p>
                        <p>Contact Address 1: {this.props.location.state !== undefined && this.props.location.state.contactAddress1}</p>
                        <p>contact Address 2: {this.props.location.state !== undefined && this.props.location.state.contactAddress2}</p>
                        <p>Contact City: {this.props.location.state !== undefined && this.props.location.state.contactCity}</p>
                        <p>Contact Postal: {this.props.location.state !== undefined && this.props.location.state.contactPostal}</p>
                        <h5>Mailing Address (only if different from contact)</h5>
                        <p>
                            Mailing Address Different:{" "}
                            {this.props.location.state !== undefined && this.props.location.state.otherMailingAddress.toString()}
                        </p>
                        <p>Mailing Address1: {this.props.location.state !== undefined && this.props.location.state.mailingAddress1}</p>
                        <p>Mailing Address2: {this.props.location.state !== undefined && this.props.location.state.mailingAddress2}</p>
                        <p>Mailing City: {this.props.location.state !== undefined && this.props.location.state.mailingCity}</p>
                        <p>Mailing Postal: {this.props.location.state !== undefined && this.props.location.state.mailingPostal}</p>
                        <p>Number Of Applicants: {this.props.location.state !== undefined && this.props.location.state.numberOfApplicants}</p>
                        <p>
                            WorkSafeBC Insurance Coverage:{" "}
                            {this.props.location.state !== undefined && this.props.location.state.insuranceCoverage.toString()}
                        </p>
                        <p>
                            Commitment to monitor applicants:{" "}
                            {this.props.location.state !== undefined && this.props.location.state.monitorCommit.toString()}
                        </p>
                        <p>
                            Applicant eligibility confirmation:{" "}
                            {this.props.location.state !== undefined && this.props.location.state.applicantType.toString()}
                        </p>
                        <p>
                            Understanding on participant ineligibility:{" "}
                            {this.props.location.state !== undefined && this.props.location.state.understandNotAvailableTo.toString()}
                        </p>
                        <p>
                            Grant administration understanding:{" "}
                            {this.props.location.state !== undefined && this.props.location.state.administerGrantUnderstanding.toString()}
                        </p>
                        {/* <p>Placement length confirmation:  {this.props.location.state !== undefined && this.props.location.state.placementLength.toString()}</p> */}
                        <p>Work Opportunity:</p>
                        <p>{this.props.location.state !== undefined && this.props.location.state.participantActivities}</p>
                        <p>
                            What will organization provide:{" "}
                            {this.props.location.state !== undefined && this.props.location.state.participantExperiences}
                        </p>
                        <p>Other Experience:</p>
                        <p>{this.props.location.state !== undefined && this.props.location.state.otherExperience}</p>
                        <p>
                            Work experience taking place at partnering business?{" "}
                            {this.props.location.state !== undefined && this.props.location.state.workExperienceTakesPlaceElsewhere}
                        </p>
                        <h5>Partnering business information (only if work experience is taking place at partnering business.)</h5>
                        <p>Partnering business name: {this.props.location.state !== undefined && this.props.location.state.partneringBusinessName}</p>
                        <p>Partnering business activities:</p>
                        <p>{this.props.location.state !== undefined && this.props.location.state.partneringBusinessActivities}</p>
                        {/* <p>Partnering business affiliation: {this.props.location.state !== undefined && this.props.location.state.partneringBusinessAffiliation}</p> */}
                        <p>
                            Partnering business contact address 1:{" "}
                            {this.props.location.state !== undefined && this.props.location.state.partneringBusinessContactAddress1}
                        </p>
                        <p>
                            Partnering business contact address 2:{" "}
                            {this.props.location.state !== undefined && this.props.location.state.partneringBusinessContactAddress2}
                        </p>
                        <p>
                            Partnering business contact city:{" "}
                            {this.props.location.state !== undefined && this.props.location.state.partneringBusinessContactCity}
                        </p>
                        <p>
                            Partnering business contact Postal:{" "}
                            {this.props.location.state !== undefined && this.props.location.state.partneringBusinessContactPostal}
                        </p>
                        <p>Skill development:</p>
                        <p>{this.props.location.state !== undefined && this.props.location.state.participantSkills}</p>
                        {/*
                                <p>Other Skills: </p>
                                <p>{this.props.location.state !== undefined && this.props.location.state.otherSkill}</p>
                                */}
                        <p>Additional Benefits: </p>
                        <p>{this.props.location.state !== undefined && this.props.location.state.additionalBenefits}</p>
                        {/* <p>Stipend confirmation:  {this.props.location.state !== undefined && this.props.location.state.participantStipend.toString()}</p> */}
                        <p>
                            Has Existing Supplier Number:{" "}
                            {this.props.location.state !== undefined && this.props.location.state.existingSupplierNumber.toString()}
                        </p>
                        <p>Supplier Number:{this.props.location.state !== undefined && this.props.location.state.supplierNumber}</p>
                        <p>Business Classification: {this.props.location.state !== undefined && this.props.location.state.businessClassification}</p>
                        {/* <p>Tax Number:  {this.props.location.state !== undefined && this.props.location.state.taxNumber}</p> */}
                        <p>Signatory 1: {this.props.location.state !== undefined && this.props.location.state.signatory1}</p>
                        <p>Signatory 2: {this.props.location.state !== undefined && this.props.location.state.signatory2}</p>
                        <p>
                            Certify Signatories:{" "}
                            {this.props.location.state !== undefined && this.props.location.state.signingAuthorityConfirm.toString()}
                        </p>
                        <p>Consent: {this.props.location.state !== undefined && this.props.location.state.organizationConsent.toString()}</p>
                        <hr />
                    </div>
                </div>
            </div>
        )
    }
}

export default ThankyouOrg
