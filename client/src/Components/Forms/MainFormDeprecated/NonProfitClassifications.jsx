import React, { Component } from "react"
import { Field } from "formik"
import { feedBackClassName, feedBackInvalid } from "../Shared/ValidationMessages"

class NonProfitClassification extends Component {
    get cultureAndRecreationOptions() {
        return (
            <div className="form-group">
                <label className="col-form-label control-label" htmlFor="nonProfitSubClassification">
                    What is your subclassification? <span style={{ color: "red" }}>*</span>
                </label>
                <Field
                    as="select"
                    className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "nonProfitSubClassification")}`}
                    id="nonProfitSubClassification"
                    name="nonProfitSubClassification"
                >
                    <option value="">Please select</option>
                    <option value="artsAndCulture">Arts and Culture</option>
                    <option value="recreation">Recreation</option>
                    <option value="serviceClubsOrOrganizations">Service Clubs/Organizations</option>
                </Field>
                {feedBackInvalid(this.props.errors, this.props.touched, "nonProfitSubClassification")}
            </div>
        )
    }

    get educationOptions() {
        return (
            <div className="form-group">
                <label className="col-form-label control-label" htmlFor="nonProfitSubClassification">
                    What is your subclassification? <span style={{ color: "red" }}>*</span>
                </label>
                <Field
                    as="select"
                    className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "nonProfitSubClassification")}`}
                    id="nonProfitSubClassification"
                    name="nonProfitSubClassification"
                >
                    <option value="">Please select</option>
                    <option value="primaryAndSecondaryEducation">Primary and Secondary Education</option>
                    <option value="higherEducation">Higher Education</option>
                    <option value="otherEducation">Other Education</option>
                    <option value="research">Research</option>
                </Field>
                {feedBackInvalid(this.props.errors, this.props.touched, "nonProfitSubClassification")}
            </div>
        )
    }

    get healthAndServicesOptions() {
        return (
            <div className="form-group">
                <label className="col-form-label control-label" htmlFor="nonProfitSubClassification">
                    What is your subclassification? <span style={{ color: "red" }}>*</span>
                </label>
                <Field
                    as="select"
                    className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "nonProfitSubClassification")}`}
                    id="nonProfitSubClassification"
                    name="nonProfitSubClassification"
                >
                    <option value="">Please select</option>
                    <option value="hospitalsAndRehabilitation">Hospitals and Rehabilitation</option>
                    <option value="nursingHomes">Nursing Homes</option>
                    <option value="mentalHealthAndCrisisIntervention">Mental Health and Crisis Intervention</option>
                    <option value="otherHealthServices">Other Health Services</option>
                </Field>
                {feedBackInvalid(this.props.errors, this.props.touched, "nonProfitSubClassification")}
            </div>
        )
    }

    get socialServicesOptions() {
        return (
            <div className="form-group">
                <label className="col-form-label control-label" htmlFor="nonProfitSubClassification">
                    What is your subclassification? <span style={{ color: "red" }}>*</span>
                </label>
                <Field
                    as="select"
                    className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "nonProfitSubClassification")}`}
                    id="nonProfitSubClassification"
                    name="nonProfitSubClassification"
                >
                    <option value="">Please select</option>
                    <option value="socialServices">Social Services</option>
                    <option value="emergencyAndRefugees">Emergency and Refugees</option>
                    <option value="incomeSupportAndMaintenance">Income Support and Maintenance</option>
                </Field>
                {feedBackInvalid(this.props.errors, this.props.touched, "nonProfitSubClassification")}
            </div>
        )
    }

    get environmentOptions() {
        return (
            <div className="form-group">
                <label className="col-form-label control-label" htmlFor="nonProfitSubClassification">
                    What is your subclassification? <span style={{ color: "red" }}>*</span>
                </label>
                <Field
                    as="select"
                    className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "nonProfitSubClassification")}`}
                    id="nonProfitSubClassification"
                    name="nonProfitSubClassification"
                >
                    <option value="">Please select</option>
                    <option value="environment">Environment</option>
                    <option value="animals">Animals</option>
                </Field>
                {feedBackInvalid(this.props.errors, this.props.touched, "nonProfitSubClassification")}
            </div>
        )
    }

    get developmentAndHousingOptions() {
        return (
            <div className="form-group">
                <label className="col-form-label control-label" htmlFor="nonProfitSubClassification">
                    What is your subclassification? <span style={{ color: "red" }}>*</span>
                </label>
                <Field
                    as="select"
                    className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "nonProfitSubClassification")}`}
                    id="nonProfitSubClassification"
                    name="nonProfitSubClassification"
                >
                    <option value="Economic Social and Community Development">Economic, Social and Community Development</option>
                    <option value="Housing">Housing</option>
                    <option value="Employment and Training">Employment and Training</option>
                </Field>
                {feedBackInvalid(this.props.errors, this.props.touched, "nonProfitSubClassification")}
            </div>
        )
    }

    get lawAndAdvocacyOptions() {
        return (
            <div className="form-group">
                <label className="col-form-label control-label" htmlFor="nonProfitSubClassification">
                    What is your subclassification? <span style={{ color: "red" }}>*</span>
                </label>
                <Field
                    as="select"
                    className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "nonProfitSubClassification")}`}
                    id="nonProfitSubClassification"
                    name="nonProfitSubClassification"
                >
                    <option value="">Please select</option>
                    <option value="Civic and Advocacy Organizations">Civic and Advocacy Organizations</option>
                    <option value="Law and Legal Services">Law and Legal Services</option>
                </Field>
                {feedBackInvalid(this.props.errors, this.props.touched, "nonProfitSubClassification")}
            </div>
        )
    }

    get religiousOrganizationsOptions() {
        return (
            /*
            <div className="form-group">
                <label className="col-form-label control-label" htmlFor="nonProfitSubClassification">What is your non-profit classification? <span
                    style={{ color: "red" }}>*</span></label>
                <Field
                    as="select"
                    className="form-control" 
                    id="nonProfitSubClassification" 
                    name="nonProfitSubClassification" 
                >
                    <option value="">Please select</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </Field>
            </div> */
            <div />
        )
    }

    get otherField() {
        return (
            <div className="form-group">
                <label className="col-form-label control-label" htmlFor="nonProfitSubClassificationOther">
                    Please specify <span style={{ color: "red" }}>* </span>
                </label>
                <Field
                    className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "nonProfitSubClassificationOther")}`}
                    id="nonProfitSubClassificationOther"
                    name="nonProfitSubClassificationOther"
                />
                {feedBackInvalid(this.props.errors, this.props.touched, "nonProfitSubClassificationOther")}
            </div>
        )
    }

    get charityRegistrationNumber() {
        return (
            <div className="form-group">
                <label className="col-form-label control-label" htmlFor="charityRegistrationNumber">
                    Please enter your charity registration number from the Canada Revenue Agency.
                </label>
                <small className="text-muted">
                    {" "}
                    This number is comprised of your business number, program identifier and reference number. This number will be in the format
                    123456789-RR-0001 or 123456789RR0001.
                </small>
                <Field
                    className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "charityRegistrationNumber")}`}
                    id="charityRegistrationNumber"
                    name="charityRegistrationNumber"
                />
                {feedBackInvalid(this.props.errors, this.props.touched, "charityRegistrationNumber")}
            </div>
        )
    }

    get societyRegistrationID() {
        return (
            <div className="form-group">
                <label className="col-form-label control-label" htmlFor="societyRegistrationID">
                    Please enter your registration ID under the BC Societies Act.
                </label>
                <small className="text-muted"> This number will have the format S1234567 or XS1234567</small>
                <Field
                    className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "societyRegistrationID")}`}
                    id="societyRegistrationID"
                    name="societyRegistrationID"
                />
                {feedBackInvalid(this.props.errors, this.props.touched, "societyRegistrationID")}
            </div>
        )
    }

    get nonProfitClassificationForm() {
        const isNonProfit = this.props.confirmOrganizationNonProfit
        const moreInfo = ""
        let subClassificationOptions = ""
        if (this.props.nonProfitClassification === "cultureAndRecreation") {
            subClassificationOptions = this.cultureAndRecreationOptions
        } else if (this.props.nonProfitClassification === "education") {
            subClassificationOptions = this.educationOptions
        } else if (this.props.nonProfitClassification === "healthServices") {
            subClassificationOptions = this.healthAndServicesOptions
        } else if (this.props.nonProfitClassification === "socialServices") {
            subClassificationOptions = this.socialServicesOptions
        } else if (this.props.nonProfitClassification === "environment") {
            subClassificationOptions = this.environmentOptions
        } else if (this.props.nonProfitClassification === "developerAndHousing") {
            subClassificationOptions = this.developmentAndHousingOptions
        } else if (this.props.nonProfitClassification === "lawAndAdvocacy") {
            subClassificationOptions = this.lawAndAdvocacyOptions
        } else if (this.props.nonProfitClassification === "religiousOrganizations") {
            subClassificationOptions = this.religiousOrganizationsOptions
        } else if (this.props.nonProfitClassification === "other") {
            subClassificationOptions = this.otherField
        }
        if (isNonProfit === "federallyRegisteredCharity") {
            // moreInfo = this.charityRegistrationNumber
        } else if (isNonProfit === "incorporatedNonProfit") {
            // moreInfo = this.societyRegistrationID
        }
        if (isNonProfit === "federallyRegisteredCharity" || isNonProfit === "incorporatedNonProfit") {
            return (
                <div>
                    {moreInfo}
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="nonProfitClassification">
                            What is your non-profit or charity classification? <span style={{ color: "red" }}>*</span>
                        </label>
                        <Field
                            as="select"
                            className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "nonProfitClassification")}`}
                            id="nonProfitClassification"
                            name="nonProfitClassification"
                            onChange={(e) => {
                                this.props.handleChange(e)
                                this.props.setFieldValue("nonProfitSubClassification", "")
                            }}
                        >
                            <option value="">Please select</option>
                            <option value="cultureAndRecreation">Culture and Recreation</option>
                            <option value="education">Education</option>
                            <option value="healthServices">Health Services</option>
                            <option value="socialServices">Social Services</option>
                            <option value="environment">Environment</option>
                            <option value="developerAndHousing">Development and Housing</option>
                            <option value="lawAndAdvocacy">Law and Advocacy</option>
                            <option value="religiousOrganizations">Religious Organizations</option>
                            <option value="other">Other</option>
                        </Field>
                        {feedBackInvalid(this.props.errors, this.props.touched, "nonProfitClassification")}
                    </div>
                    {subClassificationOptions}
                </div>
            )
        }
        return null
    }

    render() {
        return <div>{this.nonProfitClassificationForm}</div>
    }
}

export default NonProfitClassification
