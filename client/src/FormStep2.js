import React, {Component} from 'react'
import {Field} from 'formik'

class FormStep2 extends Component {
    get otherExperienceField(){
        if (this.props.experiences.includes("Other")){
            return(
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="otherExperience">Other <span
                        style={{color:"red"}}>*</span>
                    </label>
                    <small className="text-muted" id="otherExperience"> Please explain (500 characters max.) </small>
                    <Field
                        as="textarea"
                        className="form-control"
                        id="otherExperience" 
                        name="otherExperience"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.otherExperience.length}/500</small>
                </div>
            )            
        }
        return null
    }

    get otherSkillField(){
        if (this.props.skills.includes("Other")){
            return(
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="otherSkill">Other <span
                        style={{color:"red"}}>*</span>
                    </label>
                    <small className="text-muted" id="otherSkill"> Please explain (500 characters max.) </small>
                    <Field
                        as="textarea"
                        className="form-control"
                        id="otherSkill" 
                        name="otherSkill"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.otherExperience.length}/500</small>
                </div>
            )            
        }
        return null
    }
    
    render() {
        if (this.props.currentStep !== 2) {
            return null
        }
        //Else return step 2
        return (
            <div>
                <div className="form-group">
                    <h2 id="forms">Opportunity Details</h2>
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
                    <label className="col-form-label control-label" htmlFor="participantActivities">Participant activities <span
                        style={{color:"red"}}>*</span>
                    </label>
                    <small className="text-muted" id="participantActivities">Please describe the activities the participants will be doing (700 characters max.) </small>
                    <Field
                        as="textarea"
                        className="form-control"
                        id="participantActivities" 
                        name="participantActivities"
                        rows="4"
                        maxLength="700"
                    />
                    <small>{this.props.participantActivities.length}/700</small>
                </div>
                <div className="form-group">
                    <label className="control-label">What will the organization provide to support the participant during the work experience? 
                        <span style={{color:"red"}}>*</span>
                    </label>
                    <small className="text-muted"> Please select all that apply</small>
                </div>
                <div className="form-group">
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="experiences" value="Training" />
                            <label className="form-check-label" htmlFor="Training">Training</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="experiences" value="On the job coaching/supervision" />
                            <label className="form-check-label" htmlFor="On the job coaching/supervision">On the job coaching/supervision</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="experiences" value="Mentorship" />
                            <label className="form-check-label" htmlFor="Mentorship">Mentorship</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="experiences" value="Flexible working arrangements" />
                            <label className="form-check-label" htmlFor="Flexible working arrangements">Flexible working arrangements</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="experiences" value="Wrap around supports" />
                            <label className="form-check-label" htmlFor="Wrap around supports">Wrap around supports</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="experiences" value="Other" />
                            <label className="form-check-label" htmlFor="Other">Other</label>
                        </div>                                          
                </div>
                {this.otherExperienceField}
                <div className="form-group">
                    <label className="control-label">What will participants receive during the work experience?
                        <span style={{color:"red"}}>*</span>
                    </label>
                    <small className="text-muted"> Please select all that apply</small>
                </div>
                <div className="form-group">
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="skills" value="Self Employment Experience" />
                            <label className="form-check-label" htmlFor="Self Employment Experience">Self Employment Experience</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="skills" value="Essential Skills" />
                            <label className="form-check-label" htmlFor="Essential Skills">Essential Skills such as computer use, communications skills or literacy skills.</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="skills" value="Life Skills" />
                            <label className="form-check-label" htmlFor="Life Skills">Life Skills such as time management</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="skills" value="Retraining or new training" />
                            <label className="form-check-label" htmlFor="Retraining or new training">Retraining or new training</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="skills" value="Job Readiness Supports or Skills" />
                            <label className="form-check-label" htmlFor="Job Readiness Supports and or Skills">Job Readiness Supports and/or Skills</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="skills" value="Other" />
                            <label className="form-check-label" htmlFor="Other">Other</label>
                        </div>                                          
                </div>
                {this.otherSkillField}
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="additionalBenefits">Additional benefits
                    </label>
                    <small className="text-muted" id="additionalBenefits"> Please describe any additional benefits to the participant (700 characters max.)</small>
                    <Field
                        as="textarea"
                        className="form-control"
                        id="additionalBenefits" 
                        name="additionalBenefits"
                        rows="4"
                    />
                    <small>{this.props.additionalBenefits.length}/700</small>
                </div>
            </div>
        )
    }
}

export default FormStep2