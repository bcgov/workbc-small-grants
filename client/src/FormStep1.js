import React, { Component } from 'react'

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
                        <input
                            className="form-check-input"
                            type="radio"
                            name="socialEnterpriseType"
                            value="c3"
                            checked={this.props.socialEnterpriseType === "c3"}
                            onChange={this.props.handleChange}
                        />
                        <label className="form-check-label" htmlFor="socialEnterpriseC3">Community Contribution Company (C3)</label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="socialEnterpriseType"
                            value="benefitCompany"
                            checked={this.props.socialEnterpriseType === "benefitCompany"}
                            onChange={this.props.handleChange}
                        />
                        <label className="form-check-label" htmlFor="socialEnterpriseBenefitCompany">Benefit Company</label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="socialEnterpriseType"
                            value="other"
                            checked={this.props.socialEnterpriseType === "other"}
                            onChange={this.props.handleChange}
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
                    <input type="text" className="form-control" id="supplierNumber" name="supplierNumber" onChange={this.props.handleChange} value={this.props.supplierNumber} />
                </div>
            )
        } else if (suppNum === "no") {
            return (
                <div>
                    <p>These fields are required to allow the Provincial Government to release the Grant payment.</p>
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="dba">Doing Business As <span
                            style={{ color: "red" }}>*</span></label>
                        <input type="text" className="form-control" id="dba" name="dba" value={this.props.dba} onChange={this.props.handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="businessClassification">Classification<span
                            style={{ color: "red" }}>*</span></label>
                        <select 
                            className="form-control" 
                            id="businessClassification" 
                            name="businessClassification" 
                            value={this.props.businessClassification} 
                            onChange={this.props.handleChange}
                        >
                            <option value="">Please select</option>
                            <option value="nonProfitAgency">Non-profit agency</option>
                            <option value="corporationOrPrivateSectorAgency">Corporation/Private sector agency</option>
                            <option value="publicSectorAgency">Public Sector agency</option>
                            <option value="otherAgency">Other agency</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="taxNumber">Tax Number <span
                            style={{ color: "red" }}>*  </span></label>
                        <input type="text" className="form-control" id="taxNumber" name="taxNumber" value={this.props.taxNumber} onChange={this.props.handleChange} />
                    </div>
                    { /*
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="businessAddress">Business Address <span
                            style={{ color: "red" }}>*  </span></label>
                        <small className="text-muted" id="businessAddress"> This is the mailing address where the cheque will be sent.</small>
                        <input type="text" className="form-control" id="businessAddress" name="businessAddress" value={this.props.businessAddress} onChange={this.props.handleChange} />
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
                        <input type="text" className="form-control" id="firstName" name="firstName" value={this.props.firstName} onChange={this.props.handleChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="lastName">Last Name <span
                            style={{ color: "red" }}>*</span></label>
                        <input type="text" className="form-control" id="lastName" name="lastName" value={this.props.lastName} onChange={this.props.handleChange} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="email">Email Address<span
                            style={{ color: "red" }}>*</span></label>
                        <small className="text-muted" id="email">  someone@example.com</small>
                        <input type="text" className="form-control" id="email" name="email" value={this.props.email} onChange={this.props.handleChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="phone">Phone Number<span
                            style={{ color: "red" }}>*</span></label>
                        <small className="text-muted" id="phone">  250-555-5555</small>
                        <input type="text" className="form-control" id="phone" name="phone" value={this.props.phone} onChange={this.props.handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="address">Street Address <span
                        style={{ color: "red" }}>*  </span></label>
                    <small className="text-muted" id="address">  This is the mailing address where the cheque will be sent.</small>
                    <input type="text" className="form-control" id="address" name="address" value={this.props.address} onChange={this.props.handleChange} />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="city">City <span
                            style={{ color: "red" }}>*</span></label>
                        <input type="text" className="form-control" id="city" name="city" value={this.props.city} onChange={this.props.handleChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="postal">Postal Code <span
                            style={{ color: "red" }}>*  </span></label>
                        <small className="text-muted" id="postal">  V0R2V5</small>
                        <input type="text" className="form-control" id="postal" name="postal" value={this.props.postal} onChange={this.props.handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <br /><h2 id="forms">Organization Information</h2>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="organizationName">Organization Name <span
                        style={{ color: "red" }}>*</span></label>
                    <input type="text" className="form-control" id="organizationName" name="organizationName" onChange={this.props.handleChange} value={this.props.organizationName} />
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="businessNumber">Business Number<span
                        style={{ color: "red" }}>*</span></label>
                    <input type="text" className="form-control" id="businessNumber" name="businessNumber" onChange={this.props.handleChange} value={this.props.businessNumber} />
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="organizationType">Is your organization a non-profit or a social enterprise?</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="organizationType"
                            value="nonProfit"
                            checked={this.props.organizationType === "nonProfit"}
                            onChange={this.props.handleChange}
                        />
                        <label className="form-check-label" htmlFor="organizationNonProfit">Non-Profit</label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="organizationType"
                            value="socialEnterprise"
                            checked={this.props.organizationType === "socialEnterprise"}
                            onChange={this.props.handleChange}
                        />
                        <label className="form-check-label" htmlFor="organizationSocialEnterprise">Social Enterprise</label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="organizationType"
                            value="neither"
                            checked={this.props.organizationType === "neither"}
                            onChange={this.props.handleChange}
                        />
                        <label className="form-check-label" htmlFor="organizationNeither">Neither</label>
                        {
                            this.props.organizationType === "neither" &&
                            <div class="small text-muted"> More evaluation is needed, please submit the form and we will be in contact.</div>
                        }
                    </div>
                    {this.socialEnterpriseForm}
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="existingSupplierNumber">Does your organization have an existing supplier number </label>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="existingSupplierNumber"
                                value="yes"
                                checked={this.props.existingSupplierNumber === "yes"}
                                onChange={this.props.handleChange}
                            />
                            <label className="form-check-label" htmlFor="existingSupplierYes">Yes</label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="existingSupplierNumber"
                                value="no"
                                checked={this.props.existingSupplierNumber === "no"}
                                onChange={this.props.handleChange}
                            />
                            <label className="form-check-label" htmlFor="existingSupplierNo">No</label>
                        </div>
                    </div>
                    {this.supplierNumber}
                </div>
            </div>
        )
    }


}

export default FormStep1