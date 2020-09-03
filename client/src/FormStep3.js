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
                {console.log(this.props.applicants)}
                {this.generateParticipantsInfo()}
                <div className="form-group">
                    <h2 id="forms">Confirmations</h2>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="placementLength" name="placementLength" value="placementLength" />
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
                        <input type="checkbox" className="form-check-input" id="basedInBC" name="basedInBC" value="basedInBC" />
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
                        <input type="checkbox" className="form-check-input" id="insuranceCoverage" name="insuranceCoverage" value="insuranceCoverage" />
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
                        <input type="checkbox" className="form-check-input" id="monitorCommit" name="monitorCommit" value="monitorCommit" />
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
                        <input type="checkbox" className="form-check-input" id="applicantType" name="applicantType" value="applicantType" />
                        <label 
                            className="form-check-label" 
                            htmlFor="applicantType"
                        >
                        <span style={{ color: "red" }}>*</span>
                        I confirm that applicants are:
                        <ul>
                            <li>Receiving disability assistance</li>
                            <li>Receiving income assistance under the Persons with Persistent Multiple Barriers (PPMB) category</li>
                        </ul>
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="eligibleToWork" name="eligibleToWork" value="eligibleToWork" />
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
                    <input type="checkbox" className="form-check-input" id="consent"
                        name="consent" value="consent" />
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
