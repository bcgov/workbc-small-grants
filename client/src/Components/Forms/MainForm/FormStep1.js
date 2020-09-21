import React, { Component } from 'react'
import {Field} from 'formik'
import NonProfitClassification from './NonProfitClassifications'
import {feedBackClassName, feedBackInvalid} from '../Shared/ValidationMessages'

class FormStep1 extends Component {

    get mailingAddressForm() {
        if (this.props.values.otherMailingAddress){
            return (
                <div>
                    <div className="form-group">
                        <legend>Mailing Address</legend>
                    </div>
                    <p className="text-danger">If your application is approved, funds will be issued via cheque to this address.</p>
                    <div className="form-group">
                        <label className="control-label" htmlFor="mailingAddress1">Address 1 <span
                            style={{ color: "red" }}>*  </span></label>
                        <small className="text-muted" id="mailingAddress1">  Street address, P.O. box, company name, c/o</small>
                        <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"mailingAddress1")}`} id="mailingAddress1" name="mailingAddress1" />
                        {feedBackInvalid(this.props.errors,this.props.touched,"mailingAddress1")}
                    </div>
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="mailingAddress2">Address 2</label>
                        <small className="text-muted" id="mailingAddress2">  Apartment, suite, unit, building, floor, etc.</small>
                        <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"mailingAddress2")}`} id="mailingAddress2" name="mailingAddress2" />
                        {feedBackInvalid(this.props.errors,this.props.touched,"mailingAddress2")}
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="col-form-label control-label" htmlFor="mailingCity">City <span
                                style={{ color: "red" }}>*</span></label>
                            <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"mailingCity")}`} id="mailingCity" name="mailingCity" />
                            {feedBackInvalid(this.props.errors,this.props.touched,"mailingCity")}
                        </div>
                        <div className="form-group col-md-6">
                            <label className="col-form-label control-label" htmlFor="mailingPostal">Postal Code <span
                                style={{ color: "red" }}>*  </span></label>
                            <small className="text-muted" id="mailingPostal">  V0R2V5</small>
                            <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"mailingPostal")}`} id="mailingPostal" name="mailingPostal" />
                            {feedBackInvalid(this.props.errors,this.props.touched,"mailingPostal")}
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
                    <label className="col-form-label control-label" htmlFor="operatingName">Operating Name <span
                        style={{ color: "red" }}>*</span></label>
                    <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"operatingName")}`} id="operatingName" name="operatingName" />
                    {feedBackInvalid(this.props.errors,this.props.touched,"operatingName")}
                </div>
                
                <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="legalName">Legal Name <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"legalName")}`} id="legalName" name="legalName"/>
                        {feedBackInvalid(this.props.errors,this.props.touched,"legalName")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="missionStatement">Mission Statement <span
                        style={{ color: "red" }}>*  </span></label>
                    <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"missionStatement")}`} id="missionStatement" name="missionStatement" />
                    {feedBackInvalid(this.props.errors,this.props.touched,"missionStatement")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="website">Website <span
                        style={{ color: "red" }}>*  </span></label>
                    <small className="text-muted" id="website"> https://somewebsite.ca</small>
                    <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"website")}`} id="website" name="website" />
                    {feedBackInvalid(this.props.errors,this.props.touched,"website")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="businessNumber">Business Number<span
                        style={{ color: "red" }}>*</span></label>
                    <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"businessNumber")}`} id="businessNumber" name="businessNumber" />
                    {feedBackInvalid(this.props.errors,this.props.touched,"businessNumber")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="confirmOrganizationNonProfit">Is your organization an incorporated non-profit (society) under the BC Societies Act?<span style={{ color: "red" }}>*</span></label>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="confirmOrganizationNonProfit"
                            value="yes"
                        />
                        <label className="form-check-label" htmlFor="organizationNonProfitYes">Yes</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="confirmOrganizationNonProfit"
                            value="no"
                        />
                        <label className="form-check-label" htmlFor="organizationNonProfitNo">No</label>
                        {
                            this.props.confirmOrganizationNonProfit === "no" &&
                            <small className="text-danger"> - This grant is intended for non-profit organizations. Please review grant <a href="#requirements">eligibility requirements</a> for more information.</small>
                        }
                    </div>
                    <small className="text-muted" id="confirmOrganizationNonProfit">  Registered non-profit organizations that own, operate or administer a social enterprise are also eligible to apply</small>
                </div>
                <NonProfitClassification 
                    confirmOrganizationNonProfit={this.props.values.confirmOrganizationNonProfit} 
                    nonProfitClassification={this.props.values.nonProfitClassification}
                    {...this.props}
                />
                <div className="form-group">
                    <div className="form-check">
                        <Field type="checkbox" className={`form-check-input ${feedBackClassName(this.props.errors,this.props.touched,"basedInBC")}`} id="basedInBC" name="basedInBC"/>
                        <label 
                            className="form-check-label" 
                            htmlFor="basedInBC"
                        >
                        <span style={{ color: "red" }}>*</span>
                            I confirm that my organization is based in or operating in British Columbia.
                        </label>
                        {feedBackInvalid(this.props.errors,this.props.touched,"basedInBC")}
                    </div>
                </div>
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
                        <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"positionTitle")}`} id="positionTitle" name="positionTitle" />
                        {feedBackInvalid(this.props.errors,this.props.touched,"positionTitle")}
                    </div>
                    <div className="form-group col-md-5">
                        <label className="col-form-label control-label" htmlFor="firstName">First Name <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"firstName")}`} id="firstName" name="firstName" />
                        {feedBackInvalid(this.props.errors,this.props.touched,"firstName")}
                    </div>
                    <div className="form-group col-md-5">
                        <label className="col-form-label control-label" htmlFor="lastName">Last Name <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"lastName")}`} id="lastName" name="lastName" />
                        {feedBackInvalid(this.props.errors,this.props.touched,"lastName")}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="email">Email Address<span
                            style={{ color: "red" }}>*</span></label>
                        <small className="text-muted" id="email">  someone@example.com</small>
                        <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"email")}`} id="email" name="email" />
                        {feedBackInvalid(this.props.errors,this.props.touched,"email")}
                    </div>
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="phone">Phone Number<span
                            style={{ color: "red" }}>*</span></label>
                        <small className="text-muted" id="phone">  250-555-5555</small>
                        <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"phone")}`} id="phone" name="phone" />
                        {feedBackInvalid(this.props.errors,this.props.touched,"phone")}
                    </div>
                </div>
                <div className="form-group">
                    <legend>Alternate Contact</legend>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-2">
                        <label className="col-form-label control-label" htmlFor="positionTitleAlternate">Position Title<span
                            style={{ color: "red" }}>*</span></label>
                        <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"positionTitleAlternate")}`} id="positionTitleAlternate" name="positionTitleAlternate" />
                        {feedBackInvalid(this.props.errors,this.props.touched,"positionTitleAlternate")}
                    </div>
                    <div className="form-group col-md-5">
                        <label className="col-form-label control-label" htmlFor="firstNameAlternate">First Name <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"firstNameAlternate")}`} id="firstNameAlternate" name="firstNameAlternate" />
                        {feedBackInvalid(this.props.errors,this.props.touched,"firstNameAlternate")}
                    </div>
                    <div className="form-group col-md-5">
                        <label className="col-form-label control-label" htmlFor="lastNameAlternate">Last Name <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"lastNameAlternate")}`} id="lastNameAlternate" name="lastNameAlternate" />
                        {feedBackInvalid(this.props.errors,this.props.touched,"lastNameAlternate")}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="emailAlternate">Email Address<span
                            style={{ color: "red" }}>*</span></label>
                        <small className="text-muted" id="emailAlternate">  someone@example.com</small>
                        <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"emailAlternate")}`} id="emailAlternate" name="emailAlternate" />
                        {feedBackInvalid(this.props.errors,this.props.touched,"emailAlternate")}
                    </div>
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="phoneAlternate">Phone Number<span
                            style={{ color: "red" }}>*</span></label>
                        <small className="text-muted" id="phoneAlternate">  250-555-5555</small>
                        <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"phoneAlternate")}`} id="phoneAlternate" name="phoneAlternate" />
                        {feedBackInvalid(this.props.errors,this.props.touched,"phoneAlternate")}
                    </div>
                </div>
                <div className="form-group">
                    <legend>Contact Address</legend>
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
                    <label className="col-form-label control-label" htmlFor="address1">Address 1 <span
                        style={{ color: "red" }}>*  </span></label>
                    <small className="text-muted" id="address1">  Street address, P.O. box, company name, c/o</small>
                    <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"address1")}`} id="address1" name="address1" />
                    {feedBackInvalid(this.props.errors,this.props.touched,"address1")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="address2">Address 2</label>
                    <small className="text-muted" id="address2">  Apartment, suite, unit, building, floor, etc.</small>
                    <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"address2")}`} id="address2" name="address2" />
                    {feedBackInvalid(this.props.errors,this.props.touched,"address2")}
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="city">City <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"city")}`} id="city" name="city" />
                        {feedBackInvalid(this.props.errors,this.props.touched,"city")}
                    </div>
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="postal">Postal Code <span
                            style={{ color: "red" }}>*  </span></label>
                        <small className="text-muted" id="postal">  V0R2V5</small>
                        <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"postal")}`} id="postal" name="postal" />
                        {feedBackInvalid(this.props.errors,this.props.touched,"postal")}
                    </div>
                </div>
                {this.mailingAddressForm}
            </div>
        )
    }


}

export default FormStep1