import React, { Component } from 'react'
import {Field} from 'formik'

class FormStep3 extends Component {

    
    generateParticipantsInfo(){
        let numberOfApplicants = this.props.applicants
        const applicantsInputs = []
        if (numberOfApplicants !== ''){
            let num = parseInt(numberOfApplicants,10)
            for (let i = 0; i < num; i++){
                applicantsInputs.push(
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="col-form-label control-label" htmlFor="firstName">First Name <span
                                style={{ color: "red" }}>*</span></label>
                            <input type="text" className="form-control" id="firstName" name="firstName" value={this.props.firstName} onChange={this.props.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="col-form-label control-label" htmlFor="lastName">Last Name <span
                                style={{ color: "red" }}>*</span></label>
                            <input type="text" className="form-control" id="lastName" name="lastName" value={this.props.lastName} onChange={this.props.handleChange}/>
                        </div>
                    </div> 
                )
            }
        }
        console.log(applicantsInputs)
        return applicantsInputs
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
        if (this.props.currentStep !== 3) {
            return null
        }


        //Else return step 2
        return (
            <div>
                <div className="form-group">
                    <h2 id="forms">Participants Information</h2>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="applicants">How many applicants are you applying for? <span
                        style={{ color: "red" }}>*</span></label>
                    <Field
                        as="select"
                        className="form-control" 
                        id="applicants" 
                        name="applicants" 
                    >
                        <option value="">Please select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Field>
                </div>
                {/*this.generateParticipantsInfo()*/}
                <div className="form-group">
                    <h2 id="forms">Financial Information</h2>
                </div>
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
                        <label className="form-check-label" htmlFor="existingSupplierNo">No/I don't know</label>
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
                    <Field className="form-control" id="signatory1" name="signatory1" />
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="signatory2">Signing Authority <span
                        style={{ color: "red" }}>*  </span></label>
                    <small className="text-muted" id="signatory2">Please enter the full name of the second organization signatory</small>
                    <Field className="form-control" id="signatory2" name="signatory2" />
                </div>
                <div className="form-group">
                    <h2 id="forms">Confirmations</h2>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <Field type="checkbox" className="form-check-input" id="signingAuthorityConfirm" name="signingAuthorityConfirm" />
                        <label 
                            className="form-check-label" 
                            htmlFor="signingAuthorityConfirm"
                        >
                        <span style={{ color: "red" }}>*</span>
                            I certify that the 2 individuals above are signing authority for the organization. 
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <Field type="checkbox" className="form-check-input" id="placementLength" name="placementLength" />
                        <label 
                            className="form-check-label" 
                            htmlFor="placementLength"
                        >
                        <span style={{ color: "red" }}>*</span>
                            I confirm that the placement is <b>12 weeks</b>.
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <Field type="checkbox" className="form-check-input" id="basedInBC" name="basedInBC"/>
                        <label 
                            className="form-check-label" 
                            htmlFor="basedInBC"
                        >
                        <span style={{ color: "red" }}>*</span>
                            I confirm that my organization is based in or operating in British Columbia.
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <Field type="checkbox" className="form-check-input" id="insuranceCoverage" name="insuranceCoverage"/>
                        <label 
                            className="form-check-label" 
                            htmlFor="insuranceCoverage"
                        >
                        <span style={{ color: "red" }}>*</span>
                        I have adequate <a href="https://www.worksafebc.com/en/insurance/need-coverage#%3A%7E%3Atext%3DWorkSafeBC%20insurance%20provides%20protection%20for%2Can%20occupational%20disease%20at%20work">
                                WorkSafe BC insurance coverage</a>  to meet the needs of the placement.
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <Field type="checkbox" className="form-check-input" id="monitorCommit" name="monitorCommit" />
                        <label 
                            className="form-check-label" 
                            htmlFor="monitorCommit"
                        >
                        <span style={{ color: "red" }}>*</span>
                        I commit to:
                        <ul>
                            <li>Monitor and support the participant for the duration of the project; and</li>
                            <li>Ensure that safe physical distancing practices and WorkSafeBC requirements are adhered to.</li>
                        </ul>
                        </label>
                    </div>
                </div>   
                <div className="form-group">
                    <div className="form-check">
                        <Field type="checkbox" className="form-check-input" id="applicantType" name="applicantType" />
                        <label 
                            className="form-check-label" 
                            htmlFor="applicantType"
                        >
                        <span style={{ color: "red" }}>*</span>
                        I confirm that applicants are:
                        <ul>
                            <li>Receiving disability assistance; OR</li>
                            <li>Receiving income assistance under the Persons with Persistent Multiple Barriers (PPMB) category</li>
                        </ul>
                        <p>Applicants must meet eligibility requirements, and verification is required before hiring.</p>
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <Field type="checkbox" className="form-check-input" id="eligibleToWork" name="eligibleToWork" />
                        <label 
                            className="form-check-label" 
                            htmlFor="eligibleToWork"
                        >
                        <span style={{ color: "red" }}>*</span>
                        I confirm that all participants are eligible to work in British Columbia.
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                    <Field type="checkbox" className="form-check-input" id="consent"
                        name="consent" />
                    <label className="form-check-label" htmlFor="consent"><span style={{color:"red"}}>*</span> I acknowledge and
                        understand that by clicking the "submit" icon, I am attaching my electronic signature to this form, and that
                        by doing so, I am providing the same consent as I would by manually signing a physical copy of this
                        form.</label>
                    </div>
                </div>
                <button className="btn btn-success btn-block" type="submit" style={{marginBottom: "2rem"}}>Submit</button>
            </div>


        )
    }
}

export default FormStep3
