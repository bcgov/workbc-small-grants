import React, { Component } from 'react'
import {Field} from 'formik'

class FormStep1 extends Component {
    constructor() {
        super()
        this.reset = this.reset.bind(this)
        this.display = this.display.bind(this)
        this.error = this.error.bind(this)
    }

    reset = () => {
        var SEForm = document.getElementById("socialEnterpriseForm");
        var message = document.getElementById("errorMessage");
        SEForm.style.display = "none";
        message.style.display = "none";
    }
    display = () => {
        var SEForm = document.getElementById("socialEnterpriseForm");
        var message = document.getElementById("errorMessage");
        message.style.display = "none";
        SEForm.style.display = "block";
    }
    error = () => {
        var SEForm = document.getElementById("socialEnterpriseForm");
        var message = document.getElementById("errorMessage");
        SEForm.style.display = "none";
        message.style.display = "block";

    }

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

    get supplierNumber() {
        let suppNum = this.props.existingSupplierNumber
        if (suppNum === "yes") {
            return (
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="supplierNumber">Supplier Number <span
                        style={{ color: "red" }}>*</span></label>
                    <Field className="form-control" id="supplierNumber" name="supplierNumber"/>
                </div>
            )
        } else if (suppNum === "no") {
            return (
                <div>
                    <p>These fields are required to allow the Provincial Government to release the Grant payment.</p>
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="dba">Doing Business As <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className="form-control" id="dba" name="dba"/>
                    </div>
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="businessClassification">Classification<span
                            style={{ color: "red" }}>*</span></label>
                        <Field
                            as="select" 
                            className="form-control" 
                            id="businessClassification" 
                            name="businessClassification" 
                        >
                            <option value="">Please select</option>
                            <option value="nonProfitAgency">Non-profit agency</option>
                            <option value="corporationOrPrivateSectorAgency">Corporation/Private sector agency</option>
                            <option value="publicSectorAgency">Public Sector agency</option>
                            <option value="otherAgency">Other agency</option>
                        </Field>
                    </div>
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="taxNumber">Tax Number <span
                            style={{ color: "red" }}>*  </span></label>
                        <Field className="form-control" id="taxNumber" name="taxNumber"/>
                    </div>
                    { /*
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="businessAddress">Business Address <span
                            style={{ color: "red" }}>*  </span></label>
                        <small className="text-muted" id="businessAddress"> This is the mailing address where the cheque will be sent.</small>
                        <input className="form-control" id="businessAddress" name="businessAddress" value={this.props.businessAddress} onChange={this.props.handleChange} />
                    </div> */ }
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
                    <h2 id="forms">Organization Contact</h2>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="firstName">First Name <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className="form-control" id="firstName" name="firstName" />
                    </div>
                    <div className="form-group col-md-6">
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
                    <label className="col-form-label control-label" htmlFor="address">Street Address <span
                        style={{ color: "red" }}>*  </span></label>
                    <small className="text-danger" id="address">  If your application is approved, funds will be issued via cheque to this address.</small>
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
                <div className="form-group">
                    <br /><h2 id="forms">Organization Information</h2>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="organizationName">Organization Name <span
                        style={{ color: "red" }}>*</span></label>
                    <Field className="form-control" id="organizationName" name="organizationName" />
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="businessNumber">Business Number<span
                        style={{ color: "red" }}>*</span></label>
                    <Field className="form-control" id="businessNumber" name="businessNumber" />
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="organizationType">Is your organization a non-profit or a social enterprise?</label>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="organizationType"
                            value="nonProfit"
                        />
                        <label className="form-check-label" htmlFor="organizationNonProfit">Non-Profit</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="organizationType"
                            value="socialEnterprise"
                        />
                        <label className="form-check-label" htmlFor="organizationSocialEnterprise">Social Enterprise</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="organizationType"
                            value="neither"
                        />
                        <label className="form-check-label" htmlFor="organizationNeither">Neither</label>
                        {
                            this.props.organizationType === "neither" &&
                            <div className="small text-muted"> More evaluation is needed, please submit the form and we will be in contact.</div>
                        }
                    </div>
                    {this.socialEnterpriseForm}
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="existingSupplierNumber">Does your organization have an existing supplier number? </label>
                        <div className="form-check">
                            <Field
                                className="form-check-input"
                                type="radio"
                                name="existingSupplierNumber"
                                value="yes"
                            />
                            <label className="form-check-label" htmlFor="existingSupplierYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <Field
                                className="form-check-input"
                                type="radio"
                                name="existingSupplierNumber"
                                value="no"
                            />
                            <label className="form-check-label" htmlFor="existingSupplierNo">No</label>
                        </div>
                    </div>
                    {console.log(this.props)}
                    {this.supplierNumber}
                </div>
            </div>
        )
    }


}

export default FormStep1