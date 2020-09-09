import React, {Component} from 'react'
import {Field} from 'formik'

class NonProfitClassification extends Component {

    get cultureAndRecreationOptions() {
        return (
            <div className="form-group">
                <label className="col-form-label control-label" htmlFor="nonProfitSubClassification">What is your subclassification? <span
                    style={{ color: "red" }}>*</span></label>
                <Field
                    as="select"
                    className="form-control" 
                    id="nonProfitSubClassification" 
                    name="nonProfitSubClassification" 
                >
                    <option value="">Please select</option>
                    <option value="artsAndCulture">Arts and Culture</option>
                    <option value="recreation">Recreation</option>
                    <option value="serviceClubsOrOrganizations">Service Clubs/Organizations</option>
                </Field>
            </div>            
        )
    }


    get educationOptions() {
        return (
            <div className="form-group">
                <label className="col-form-label control-label" htmlFor="nonProfitSubClassification">What is your subclassification? <span
                    style={{ color: "red" }}>*</span></label>
                <Field
                    as="select"
                    className="form-control" 
                    id="nonProfitSubClassification" 
                    name="nonProfitSubClassification" 
                >
                    <option value="">Please select</option>
                    <option value="primaryAndSecondaryEducation">Primary and Secondary Education</option>
                    <option value="higherEducation">Higher Education</option>
                    <option value="otherEducation">Other Education</option>
                    <option value="research">Research</option>
                </Field>
            </div>            
        )
    }

    get healthAndServicesOptions(){
        return (
            <div className="form-group">
                <label className="col-form-label control-label" htmlFor="nonProfitSubClassification">What is your subclassification? <span
                    style={{ color: "red" }}>*</span></label>
                <Field
                    as="select"
                    className="form-control" 
                    id="nonProfitSubClassification" 
                    name="nonProfitSubClassification" 
                >
                    <option value="">Please select</option>
                    <option value="hospitalsAndRehabilitation">Hospitals and Rehabilitation</option>
                    <option value="nursingHomes">Nursing Homes</option>
                    <option value="mentalHealthAndCrisisIntervention">Mental Health and Crisis Intervention</option>
                    <option value="otherHealthServices">Other Health Services</option>
                </Field>
            </div>            
        )
    }

    get socialServicesOptions() {
        return (
            <div className="form-group">
                <label className="col-form-label control-label" htmlFor="nonProfitSubClassification">What is your subclassification? <span
                    style={{ color: "red" }}>*</span></label>
                <Field
                    as="select"
                    className="form-control" 
                    id="nonProfitSubClassification" 
                    name="nonProfitSubClassification" 
                >
                    <option value="">Please select</option>
                    <option value="socialServices">Social Services</option>
                    <option value="emergencyAndRefugees">Emergency and Refugees</option>
                    <option value="incomeSupportAndMaintenance">Income Support and Maintenance</option>
                </Field>
            </div>            
        )
    }

    get environmentOptions(){
        return (
            <div className="form-group">
                <label className="col-form-label control-label" htmlFor="nonProfitSubClassification">What is your subclassification? <span
                    style={{ color: "red" }}>*</span></label>
                <Field
                    as="select"
                    className="form-control" 
                    id="nonProfitSubClassification" 
                    name="nonProfitSubClassification" 
                >
                    <option value="">Please select</option>
                    <option value="environment">Environment</option>
                    <option value="animals">Animals</option>
                </Field>
            </div>            
        )
    }

    get developmentAndHousingOptions(){
        return (
            <div className="form-group">
                <label className="col-form-label control-label" htmlFor="nonProfitSubClassification">What is your subclassification? <span
                    style={{ color: "red" }}>*</span></label>
                <Field
                    as="select"
                    className="form-control" 
                    id="nonProfitSubClassification" 
                    name="nonProfitSubClassification" 
                >
                    <option value="Economic Social and Community Development">Economic, Social and Community Development</option>
                    <option value="Housing">Housing</option>
                    <option value="Employment and Training">Employment and Training</option>
                </Field>
            </div>            
        )
    }

    get lawAndAdvocacyOptions() {
        return (
            <div className="form-group">
                <label className="col-form-label control-label" htmlFor="nonProfitSubClassification">What is your subclassification? <span
                    style={{ color: "red" }}>*</span></label>
                <Field
                    as="select"
                    className="form-control" 
                    id="nonProfitSubClassification" 
                    name="nonProfitSubClassification" 
                >
                    <option value="">Please select</option>
                    <option value="Civic and Advocacy Organizations">Civic and Advocacy Organizations</option>
                    <option value="Law and Legal Services">Law and Legal Services</option>
                </Field>
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
            </div>*/
            <div></div>           
        )
    }

    get otherField() {
        return (
            <div className="form-group">
                <label className="col-form-label control-label" htmlFor="nonProfitSubClassification">Please specify <span
                style={{ color: "red" }}>*  </span></label>
                <Field className="form-control" id="nonProfitSubClassification" name="nonProfitSubClassification" />
            </div>      
        )        
    }

    get nonProfitClassificationForm () {
        let isNonProfit = this.props.confirmOrganizationNonProfit
        let subClassificationOptions = ""
        if (this.props.nonProfitClassification === "cultureAndRecreation"){
            subClassificationOptions = this.cultureAndRecreationOptions
        } else if (this.props.nonProfitClassification === "education"){
            subClassificationOptions = this.educationOptions
        } else if (this.props.nonProfitClassification === "healthServices"){
            subClassificationOptions = this.healthAndServicesOptions
        } else if (this.props.nonProfitClassification === "socialServices"){
            subClassificationOptions = this.socialServicesOptions
        } else if (this.props.nonProfitClassification === "environment"){
            subClassificationOptions = this.environmentOptions
        } else if (this.props.nonProfitClassification === "developerAndHousing"){
            subClassificationOptions = this.developmentAndHousingOptions
        } else if (this.props.nonProfitClassification === "lawAndAdvocacy"){
            subClassificationOptions = this.lawAndAdvocacyOptions
        } else if (this.props.nonProfitClassification === "religiousOrganizations"){
            subClassificationOptions = this.religiousOrganizationsOptions
        } else if (this.props.nonProfitClassification === "other"){
            subClassificationOptions = this.otherField
        }
        if (isNonProfit === "yes"){
        return (
            <div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="nonProfitClassification">What is your non-profit classification? <span
                        style={{ color: "red" }}>*</span></label>
                    <Field
                        as="select"
                        className="form-control" 
                        id="nonProfitClassification" 
                        name="nonProfitClassification" 
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
                </div>
                {subClassificationOptions}
            </div>
        )
        }
        return null
    }

    render(){
        return (
            <div>
                {this.nonProfitClassificationForm}
            </div>
        )
    }

}

export default NonProfitClassification