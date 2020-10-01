import React, { Component } from 'react'


class ThankyouOrg extends Component {
    render() {
        const applicationId = (this.props.location.state !== undefined ? this.props.location.state._id : '')
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Thank you, your application has been received</h1>
                        {console.log(this.props)}
                        {console.log(window.location.origin)}
                        <h3>Application ID: {this.props.location.state !== undefined && this.props.location.state._id}</h3>
                        <button className="btn btn-success d-print-none" onClick={() => window.print()}>Print Confirmation</button><br /><br />
                        <p>
                        Thank you. Your application for the Work Experience Opportunities Grant has been submitted. A verification email along with a copy of the application has been sent to the email addresses included on the form
                        </p>
                        <h4>Next Steps:</h4>
                        <p>Please provide your participants the following instructions:</p>
                        <div className="card">
                            <div className="card-body">
                                <p>Application ID: {this.props.location.state !== undefined && this.props.location.state._id}</p>
                                <p>Please visit the following URL in order to provide your consent to the Ministry.</p>
                                <p><a href={`${window.location.origin}/clientForm/${applicationId}`}>{`${window.location.origin}/clientForm/${applicationId}`}</a></p>
                                <p>If you prefer a PDF version of the form, one can be found here. Once complete please email it to (email).</p>
                            </div>
                        </div>
                        <p>
                            Note: you must get all your participants to complete the step above within the next 3 weeks.
                        </p>
                        <p>For more information on this grant opportunity, visit (include website link)</p>
                        <p>If you have additional questions or require assistance, please contact (who – email and phone number)</p>
                        <p>The following information was received:</p>
                        <hr />
                                <p>Application ID:  {this.props.location.state !== undefined && this.props.location.state._id}</p>
                                <p>Operating Name:  {this.props.location.state !== undefined && this.props.location.state.operatingName}</p>
                                <p>Legal Name:  {this.props.location.state !== undefined && this.props.location.state.legalName}</p>
                                <p>Mission Statement:  {this.props.location.state !== undefined && this.props.location.state.missionStatement}</p>
                                <p>Organization Website:  {this.props.location.state !== undefined && this.props.location.state.organizationWebsite}</p>
                                <p>Business Number:  {this.props.location.state !== undefined && this.props.location.state.businessNumber}</p>
                                <p>Non Profit:  {this.props.location.state !== undefined && this.props.location.state.confirmOrganizationNonProfit}</p>
                                <p>Non Profit Classification:  {this.props.location.state !== undefined && this.props.location.state.nonProfitClassification}</p>
                                <p>Non Profit SubClassification:  {this.props.location.state !== undefined && this.props.location.state.nonProfitSubClassification}</p>
                                <p>Non Profit Other SubClassification:  {this.props.location.state !== undefined && this.props.location.state.nonProfitSubClassificationOther}</p>
                                <p>Based In BC:  {this.props.location.state !== undefined && this.props.location.state.basedInBC}</p>
                                <p>Position Title:  {this.props.location.state !== undefined && this.props.location.state.positionTitle}</p>
                                <p>First Name:  {this.props.location.state !== undefined && this.props.location.state.firstName}</p>
                                <p>Last Name:  {this.props.location.state !== undefined && this.props.location.state.lastName}</p>
                                <p>Contact Email:  {this.props.location.state !== undefined && this.props.location.state.contactEmail}</p>
                                <p>Contact Phone:  {this.props.location.state !== undefined && this.props.location.state.contactPhone}</p>
                                <h5>Alternate Contact</h5>
                                <p>Position Title:  {this.props.location.state !== undefined && this.props.location.state.positionTitleAlternate}</p>
                                <p>First Name:  {this.props.location.state !== undefined && this.props.location.state.firstNameAlternate}</p>
                                <p>Last Name:  {this.props.location.state !== undefined && this.props.location.state.lastNameAlternate}</p>
                                <p>Email:  {this.props.location.state !== undefined && this.props.location.state.emailAlternate}</p>
                                <p>Phone:  {this.props.location.state !== undefined && this.props.location.state.phoneAlternate}</p>
                                <p>Contact Address 1:  {this.props.location.state !== undefined && this.props.location.state.contactAddress1}</p>
                                <p>contact Address 2:  {this.props.location.state !== undefined && this.props.location.state.contactAddress2}</p>
                                <p>Contact City:  {this.props.location.state !== undefined && this.props.location.state.contactCity}</p>
                                <p>Contact Postal:  {this.props.location.state !== undefined && this.props.location.state.contactPostal}</p>
                                <h5>Mailing Address (only if different from contact)</h5>
                                <p>Mailing Address Different:  {this.props.location.state !== undefined && this.props.location.state.otherMailingAddress}</p>
                                <p>Mailing Address1:  {this.props.location.state !== undefined && this.props.location.state.mailingAddress1}</p>
                                <p>Mailing Address2:  {this.props.location.state !== undefined && this.props.location.state.mailingAddress2}</p>
                                <p>Mailing City:  {this.props.location.state !== undefined && this.props.location.state.mailingCity}</p>
                                <p>Mailing Postal:  {this.props.location.state !== undefined && this.props.location.state.mailingPostal}</p>
                                <p>Number Of Applicants:  {this.props.location.state !== undefined && this.props.location.state.numberOfApplicants}</p>
                                <p>WorkSafeBC Insurance Coverage:  {this.props.location.state !== undefined && this.props.location.state.insuranceCoverage}</p>
                                <p>Commitment to monitor applicants:  {this.props.location.state !== undefined && this.props.location.state.monitorCommit}</p>
                                <p>Applicant eligibility confirmation:  {this.props.location.state !== undefined && this.props.location.state.applicantType}</p>
                                <p>Placement length confirmation:  {this.props.location.state !== undefined && this.props.location.state.placementLength}</p>
                                <p>Work Opportunity:</p>  
                                <p>{this.props.location.state !== undefined && this.props.location.state.participantActivities}</p>
                                <p>What will organization provide:  {this.props.location.state !== undefined && this.props.location.state.participantExperiences}</p>
                                <p>Other Experience:</p> 
                                <p>{this.props.location.state !== undefined && this.props.location.state.otherExperience}</p>
                                <p>Participants will gain:  {this.props.location.state !== undefined && this.props.location.state.participantSkills}</p>
                                <p>Other Skills: </p>
                                <p>{this.props.location.state !== undefined && this.props.location.state.otherSkill}</p>
                                <p>Additional Benefits: </p>
                                <p>{this.props.location.state !== undefined && this.props.location.state.additionalBenefits}</p>
                                <p>Stipend:  ${this.props.location.state !== undefined && this.props.location.state.participantStipend}</p>
                                <p>Has Existing Supplier Number:  {this.props.location.state !== undefined && this.props.location.state.existingSupplierNumber}</p>
                                <p>Supplier Number:{this.props.location.state !== undefined && this.props.location.state.supplierNumber}</p>
                                <p>Business Classification: {this.props.location.state !== undefined && this.props.location.state.businessClassification}</p>
                                <p>Tax Number:  {this.props.location.state !== undefined && this.props.location.state.taxNumber}</p>
                                <p>Signatory 1:  {this.props.location.state !== undefined && this.props.location.state.signatory1}</p>
                                <p>Signatory 2:  {this.props.location.state !== undefined && this.props.location.state.signatory2}</p>
                                <p>Certify Signatories:  {this.props.location.state !== undefined && this.props.location.state.signingAuthorityConfirm}</p>
                                <p>Consent:  {this.props.location.state !== undefined && this.props.location.state.organizationConsent}</p>
                        <hr />
                    </div>
                </div>
            </div>
        )
    }
}

export default ThankyouOrg