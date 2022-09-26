import React, { Component } from "react"

class ThankyouClient extends Component {
    get appIdOrOrgName() {
        if (this.props.location.state !== undefined) {
            if (this.props.location.state.noOrgId) {
                return (
                    <p>
                        <b>Organization Name:</b> {this.props.location.state.organizationNameM}
                    </p>
                )
            }
            return (
                <p>
                    <b>Application ID:</b> {this.props.location.state.applicationId} {this.props.location.state.applicationIdM}
                </p>
            )
        }
        return null
    }

    get indigenousInformation() {
        if (this.props.location.state !== undefined) {
            if (this.props.location.state._intake >= 2) {
                return (
                    <div>
                        <h5>Indigenous Participants</h5>
                        <p>
                            <b>If Living On Reserve, Community Type:</b> {this.props.location.state.livingOnReserveCommunity}
                        </p>
                        <p>
                            <b>If Receiving Assistance, From:</b> {this.props.location.state.receivingAssistanceFrom}
                        </p>
                        <p>
                            <b>If PWD Designation, Organization:</b> {this.props.location.state.pwdDesignationOrganization}
                        </p>
                        <p>
                            <b>If PPMB Designation, Organization:</b> {this.props.location.state.ppmbDesignationOrganization}
                        </p>
                    </div>
                )
            }
            return null
        }
        return null
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Thank you, your information has been received</h1>
                        <button className="btn btn-success d-print-none" onClick={() => window.print()}>
                            Print Confirmation
                        </button>
                        <br />
                        <br />
                        <p>
                            Your participant information for the Work Experience Opportunities Grant has been successfully submitted. A confirmation
                            email, along with a copy of the submission details have been sent to the email address provided.
                        </p>
                        <p>
                            Applications may take approximately four weeks for processing. The Ministry will contact your organization once the
                            application has been processed, or if further information is required.
                        </p>
                        <h3>Income Reporting</h3>
                        <p>
                            Participants of the Work Experience Opportunities Grant project will be receiving financial supports (money) for
                            participating. Money received from this project will not be deducted from income assistance or disability assistance;
                            however, participants must still report it to the ministry. More information on how to report this income can be found{" "}
                            <a
                                href="https://www.workbc.ca/getmedia/4e24032a-c75d-44d3-809d-964a2dec8896/Income-Reporting-Guidelines.aspx"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                here
                            </a>
                            . For additional help with submitting the monthly report, please contact the ministry at 1-866-866-0800.
                        </p>
                        <h3>For more information</h3>
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
                        <p>
                            <b>Name:</b> {this.props.location.state !== undefined && this.props.location.state.clientName}
                        </p>
                        <p>
                            <b>Last Name:</b> {this.props.location.state !== undefined && this.props.location.state.clientLastName}
                        </p>
                        <p>
                            <b>DOB (DD/MM/YYYY):</b>{" "}
                            {this.props.location.state !== undefined && (
                                <span>
                                    {this.props.location.state.clientDOB.getDate()}/{this.props.location.state.clientDOB.getMonth() + 1}/
                                    {this.props.location.state.clientDOB.getFullYear()}
                                </span>
                            )}
                        </p>
                        <p>
                            <b>Email:</b> {this.props.location.state !== undefined && this.props.location.state.clientEmail}
                        </p>
                        <p>
                            <b>Address1:</b> {this.props.location.state !== undefined && this.props.location.state.clientAddress1}
                        </p>
                        <p>
                            <b>Address2:</b> {this.props.location.state !== undefined && this.props.location.state.clientAddress2}
                        </p>
                        <p>
                            <b>Address2:</b> {this.props.location.state !== undefined && this.props.location.state.clientAddress2}
                        </p>
                        <p>
                            <b>Approximate Hours:</b> {this.props.location.state !== undefined && this.props.location.state.approximateHours}
                        </p>
                        <p>
                            <b>Estimated Start Date:</b>{" "}
                            {this.props.location.state !== undefined && this.props.location.state.estimatedStartDate.getDate()}/
                            {this.props.location.state.estimatedStartDate.getMonth() + 1}/{this.props.location.state.estimatedStartDate.getFullYear()}
                        </p>
                        <p>
                            <b>Receiving Assistance From First Nation Or Tribal Council:</b>{" "}
                            {this.props.location.state !== undefined && this.props.location.state.receivingAssistanceFromFirstNationOrTribalCouncil}
                        </p>
                        <p>
                            <b>Consent:</b> {this.props.location.state !== undefined && this.props.location.state.clientConsent.toString()}
                        </p>

                        {this.appIdOrOrgName}
                        <hr />
                    </div>
                </div>
            </div>
        )
    }
}

export default ThankyouClient
