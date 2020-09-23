import React, { Component } from 'react'
import {Field} from 'formik'
import {feedBackClassName, feedBackInvalid} from '../Shared/ValidationMessages'

class FormStep3 extends Component {

    get supplierNumber() {
        let suppNum = this.props.values.existingSupplierNumber
        if (suppNum === "yes") {
            return (
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="supplierNumber">Supplier Number <span
                        style={{ color: "red" }}>*</span></label>
                    <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"supplierNumber")}`} id="supplierNumber" name="supplierNumber"/>
                    {feedBackInvalid(this.props.errors,this.props.touched,"supplierNumber")}
                </div>
            )
        } else if (suppNum === "no") {
            return (
                <div>
                    <p>These fields are required to allow the Provincial Government to release the Grant payment.</p>
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="businessClassification">Classification<span
                            style={{ color: "red" }}>*</span></label>
                        <Field
                            as="select" 
                            className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"businessClassification")}`} 
                            id="businessClassification" 
                            name="businessClassification" 
                        >
                            <option value="">Please select</option>
                            <option value="nonProfitAgency">Non-profit agency</option>
                            <option value="corporationOrPrivateSectorAgency">Corporation/Private sector agency</option>
                            <option value="publicSectorAgency">Public Sector agency</option>
                            <option value="otherAgency">Other agency</option>
                        </Field>
                        {feedBackInvalid(this.props.errors,this.props.touched,"businessClassification")}
                    </div>
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="taxNumber">Tax Number <span
                            style={{ color: "red" }}>*  </span></label>
                        <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"taxNumber")}`} id="taxNumber" name="taxNumber"/>
                        {feedBackInvalid(this.props.errors,this.props.touched,"taxNumber")}
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
        if (this.props.currentStep !== 3) {
            return null
        }


        //Else return step 3
        return (
            <div>
                {console.log(this.props)}
                {/*this.generateParticipantsInfo()*/}
                <div className="form-group">
                    <h2 id="forms">Financial Information</h2>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="stipend">Enter the total amount of stipend provided to the individual.  <span
                        style={{ color: "red" }}>*  </span></label>
                    <small className="text-muted" id="stipend"> A minimum of $3600 required. For additional details see the <a href="#guidelines">application guidelines.</a></small>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                        </div>
                        <Field
                            className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"stipend")}`}
                            id="stipend"
                            name="stipend"
                            
                        />
                        {feedBackInvalid(this.props.errors,this.props.touched,"stipend")}
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="existingSupplierNumber">Does your organization have an existing supplier number?  <span
                        style={{ color: "red" }}>*  </span></label>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "existingSupplierNumber")}`}
                            type="radio"
                            name="existingSupplierNumber"
                            value="yes"
                        />
                        <label className="form-check-label" htmlFor="existingSupplierYes">Yes</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "existingSupplierNumber")}`}
                            type="radio"
                            name="existingSupplierNumber"
                            value="no"
                        />
                        <label className="form-check-label" htmlFor="existingSupplierNo">No/I don't know</label>
                        {feedBackInvalid(this.props.errors,this.props.touched,"existingSupplierNumber")}
                    </div>
                </div>
                {this.supplierNumber}
                <div className="form-group">
                    <h2 id="forms">Organization Signatories</h2>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="signatory1">Signing Authority <span
                        style={{ color: "red" }}>*  </span></label>
                    <small className="text-muted" id="signatory1">Please enter the full name of the first organization signatory</small>
                    <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"signatory1")}`} id="signatory1" name="signatory1" />
                    {feedBackInvalid(this.props.errors,this.props.touched,"signatory1")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="signatory2">Signing Authority <span
                        style={{ color: "red" }}>*  </span></label>
                    <small className="text-muted" id="signatory2">Please enter the full name of the second organization signatory</small>
                    <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"signatory2")}`} id="signatory2" name="signatory2" />
                    {feedBackInvalid(this.props.errors,this.props.touched,"signatory2")}
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <Field type="checkbox" className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "signingAuthorityConfirm")}`} id="signingAuthorityConfirm" name="signingAuthorityConfirm" />
                        <label 
                            className="form-check-label" 
                            htmlFor="signingAuthorityConfirm"
                        >
                        <span style={{ color: "red" }}>*</span>
                            I certify that the 2 individuals above are signing authority for the organization. 
                        </label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "signingAuthorityConfirm")}
                    </div>
                </div>
                <div className="form-group">
                    <h2 id="forms">Consent</h2>
                </div>
                <div className="form-group">
                    <div className="form-check">
                    <Field type="checkbox" className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "consent")}`} id="consent"
                        name="consent" />
                    <label className="form-check-label" htmlFor="consent"><span style={{color:"red"}}>*</span> I acknowledge and understand that by clicking the "submit" icon, 
                        I am attaching my electronic signature to this form. 
                        I am authorized to act and to enter into this Agreement on behalf of the Organization. 
                        On the Organization's behalf, I do hereby accept and agree to the terms and conditions of this Agreement</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "consent")}
                    </div>
                </div>
                <button className="btn btn-success btn-block" type="submit" style={{marginBottom: "2rem"}}>Submit</button>
            </div>


        )
    }
}

export default FormStep3
