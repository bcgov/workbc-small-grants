import React, { Component } from 'react'
import {Field} from 'formik'
import NonProfitClassification from './NonProfitClassifications'

class FormStep1 extends Component {

    /*
    get socialEnterpriseForm() {
        let orgType = this.props.organizationType
        if (orgType === "socialEnterprise") {
            return (
                <div className="form-group" id="socialEnterpriseForm">
                    <label className="col-form-label control-label" htmlFor="socialEnterprise">Is your social enterprise registered as a:</label>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="socialEnterpriseType"
                            value="c3"
                        />
                        <label className="form-check-label" htmlFor="socialEnterpriseC3">Community Contribution Company (C3)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="socialEnterpriseType"
                            value="benefitCompany"
                        />
                        <label className="form-check-label" htmlFor="socialEnterpriseBenefitCompany">Benefit Company</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="socialEnterpriseType"
                            value="other"
                        />
                        <label className="form-check-label" htmlFor="socialEnterpriseOther">Other</label>
                    </div>
                </div>
            )
        }
        return null
    }
    */

    get mailingAddressForm() {
        if (this.props.otherMailingAddress){
            return (
                <div>
                    <div className="form-group">
                        <legend>Organization Mailing Address</legend>
                    </div>
                    <p className="text-danger">If your application is approved, funds will be issued via cheque to this address.</p>
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="mailingAddress">Street Address <span
                            style={{ color: "red" }}>*  </span></label>
                        <small className="text-muted" id="mailingAddress">  123 Main St.</small>
                        <Field className="form-control" id="mailingAddress" name="mailingAddress" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="col-form-label control-label" htmlFor="mailingCity">City <span
                                style={{ color: "red" }}>*</span></label>
                            <Field className="form-control" id="mailingCity" name="mailingCity" />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="col-form-label control-label" htmlFor="mailingPostal">Postal Code <span
                                style={{ color: "red" }}>*  </span></label>
                            <small className="text-muted" id="mailingPostal">  V0R2V5</small>
                            <Field className="form-control" id="mailingPostal" name="mailingPostal" />
                        </div>
                    </div>
                </div>
            )
        }
        return null
    }






    render() {
        if (this.props.currentStep !== 1) {
            return null
        }
        //Else return step 1
        return (
            <div>
                <div className="form-group">
                    <br /><h2 id="forms">Organization Information</h2>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="organizationName">Organization Name <span
                        style={{ color: "red" }}>*</span></label>
                    <Field className="form-control" id="organizationName" name="organizationName" />
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="missionStatement">Mission Statement <span
                        style={{ color: "red" }}>*  </span></label>
                    <Field className="form-control" id="missionStatement" name="missionStatement" />
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="website">Website <span
                        style={{ color: "red" }}>*  </span></label>
                    <small className="text-muted" id="website"> https://somewebsite.ca</small>
                    <Field className="form-control" id="website" name="website" />
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="businessNumber">Business Number<span
                        style={{ color: "red" }}>*</span></label>
                    <Field className="form-control" id="businessNumber" name="businessNumber" />
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="confirmOrganizationNonProfit">Can you confirm that your organization is a non-profit?<span style={{ color: "red" }}>*</span></label>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="confirmOrganizationNonProfit"
                            value="yes"
                        />
                        <label className="form-check-label" htmlFor="organizationNonProfit">Yes</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="confirmOrganizationNonProfit"
                            value="no"
                        />
                        <label className="form-check-label" htmlFor="organizationSocialEnterprise">No</label>
                        {
                            this.props.confirmOrganizationNonProfit === "no" &&
                            <div className="small text-muted"> This grant is designed only for non-profit organizations.</div>
                        }
                    </div>
                </div>
                <NonProfitClassification confirmOrganizationNonProfit={this.props.confirmOrganizationNonProfit} nonProfitClassification={this.props.nonProfitClassification}/>
                <div className="form-group">
                    <h2 id="forms">Organization Contact</h2>
                </div>
                <div className="form-group">
                    <legend>Main Contact</legend>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-2">
                        <label className="col-form-label control-label" htmlFor="positionTitle">Position Title<span
                            style={{ color: "red" }}>*</span></label>
                        <Field className="form-control" id="positionTitle" name="positionTitle" />
                    </div>
                    <div className="form-group col-md-5">
                        <label className="col-form-label control-label" htmlFor="firstName">First Name <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className="form-control" id="firstName" name="firstName" />
                    </div>
                    <div className="form-group col-md-5">
                        <label className="col-form-label control-label" htmlFor="lastName">Last Name <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className="form-control" id="lastName" name="lastName" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="email">Email Address<span
                            style={{ color: "red" }}>*</span></label>
                        <small className="text-muted" id="email">  someone@example.com</small>
                        <Field className="form-control" id="email" name="email" />
                    </div>
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="phone">Phone Number<span
                            style={{ color: "red" }}>*</span></label>
                        <small className="text-muted" id="phone">  250-555-5555</small>
                        <Field className="form-control" id="phone" name="phone" />
                    </div>
                </div>
                <div className="form-group">
                    <legend>Alternate Contact</legend>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-2">
                        <label className="col-form-label control-label" htmlFor="positionTitleAlternate">Position Title<span
                            style={{ color: "red" }}>*</span></label>
                        <Field className="form-control" id="positionTitleAlternate" name="positionTitleAlternate" />
                    </div>
                    <div className="form-group col-md-5">
                        <label className="col-form-label control-label" htmlFor="firstNameAlternate">First Name <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className="form-control" id="firstNameAlternate" name="firstNameAlternate" />
                    </div>
                    <div className="form-group col-md-5">
                        <label className="col-form-label control-label" htmlFor="lastNameAlternate">Last Name <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className="form-control" id="lastNameAlternate" name="lastNameAlternate" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="emailAlternate">Email Address<span
                            style={{ color: "red" }}>*</span></label>
                        <small className="text-muted" id="emailAlternate">  someone@example.com</small>
                        <Field className="form-control" id="emailAlternate" name="emailAlternate" />
                    </div>
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="phoneAlternate">Phone Number<span
                            style={{ color: "red" }}>*</span></label>
                        <small className="text-muted" id="phoneAlternate">  250-555-5555</small>
                        <Field className="form-control" id="phoneAlternate" name="phoneAlternate" />
                    </div>
                </div>
                <div className="form-group">
                    <legend>Organization Contact Address</legend>
                </div>
                {
                    !this.props.otherMailingAddress &&
                    <p className="text-danger">If your application is approved, funds will be issued via cheque to this address.</p>
                }
                <div className="form-group">
                    <div className="form-check">
                        <Field type="checkbox" className="form-check-input" id="otherMailingAddress" name="otherMailingAddress"/>
                        <label 
                            className="form-check-label" 
                            htmlFor="otherMailingAddress"
                        >
                        My organization's contact address is different than the organization's mailing address.
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="address">Street Address <span
                        style={{ color: "red" }}>*  </span></label>
                    <small className="text-muted" id="address">  123 Main St.</small>
                    <Field className="form-control" id="address" name="address" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="city">City <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="postal">Postal Code <span
                            style={{ color: "red" }}>*  </span></label>
                        <small className="text-muted" id="postal">  V0R2V5</small>
                        <Field className="form-control" id="postal" name="postal" />
                    </div>
                </div>
                {this.mailingAddressForm}
            </div>
        )
    }


}

export default FormStep1