import React, { Component } from 'react'
import { Field } from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class FormStep2 extends Component {
    get otherExperienceField() {
        if (this.props.values.participantExperiences.indexOf("Other") > -1) {
            return (
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="otherExperience">Other <span
                        style={{ color: "red" }}>*</span>
                    </label>
                    <small className="text-muted" id="otherExperience"> Please explain (500 characters max.) </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "otherExperience")}`}
                        id="otherExperience"
                        name="otherExperience"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.otherExperience.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "otherExperience")}
                </div>
            )
        }
        return null
    }

    get otherSkillField() {
        if (this.props.values.participantSkills.indexOf("Other") > -1) {
            return (
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="otherSkill">Other <span
                        style={{ color: "red" }}>*</span>
                    </label>
                    <small className="text-muted" id="otherSkill"> Please explain (500 characters max.) </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "otherSkill")}`}
                        id="otherSkill"
                        name="otherSkill"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.otherExperience.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "otherSkill")}
                </div>
            )
        }
        return null
    }

    get partneringBusiness(){
        if (this.props.values.workExperienceTakesPlaceElsewhere === "yes"){
            return (
                <div>
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="partneringBusinessName">What is the name of the business? <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"partneringBusinessName")}`} id="partneringBusinessName" name="partneringBusinessName" />
                        {feedBackInvalid(this.props.errors,this.props.touched,"partneringBusinessName")}
                    </div>
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="partneringBusinessActivities">Please provide a brief description of the business activities  <span
                            style={{ color: "red" }}>*</span></label>
                        <Field
                            as="textarea" 
                            className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"partneringBusinessActivities")}`} 
                            id="partneringBusinessActivities" 
                            name="partneringBusinessActivities"
                            rows="2"
                            maxLength="250" 
                        />
                        <small>{this.props.values.partneringBusinessActivities.length}/250</small>
                        {feedBackInvalid(this.props.errors,this.props.touched,"partneringBusinessActivities")}
                    </div>
                    <div className="form-group">
                        <p><b>Please provide contact information for the partnering business</b></p>
                    </div>
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="partneringBusinessContactAddress1">Address 1 <span
                            style={{ color: "red" }}>*  </span></label>
                        <small className="text-muted" id="partneringBusinessContactAddress1">  Street address, P.O. box, company name, c/o</small>
                        <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"partneringBusinessContactAddress1")}`} id="partneringBusinessContactAddress1" name="partneringBusinessContactAddress1" />
                        {feedBackInvalid(this.props.errors,this.props.touched,"partneringBusinessContactAddress1")}
                    </div>
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="partneringBusinessContactAddress2">Address 2</label>
                        <small className="text-muted" id="partneringBusinessContactAddress2">  Apartment, suite, unit, building, floor, etc.</small>
                        <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"partneringBusinessContactAddress2")}`} id="partneringBusinessContactAddress2" name="partneringBusinessContactAddress2" />
                        {feedBackInvalid(this.props.errors,this.props.touched,"partneringBusinessContactAddress2")}
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="col-form-label control-label" htmlFor="partneringBusinessContactCity">City <span
                                style={{ color: "red" }}>*</span></label>
                            <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"partneringBusinessContactCity")}`} id="partneringBusinessContactCity" name="partneringBusinessContactCity" />
                            {feedBackInvalid(this.props.errors,this.props.touched,"partneringBusinessContactCity")}
                        </div>
                        <div className="form-group col-md-6">
                            <label className="col-form-label control-label" htmlFor="partneringBusinessContactPostal">Postal Code <span
                                style={{ color: "red" }}>*  </span></label>
                            <small className="text-muted" id="partneringBusinessContactPostal">  V0R2V5</small>
                            <Field className={`form-control ${feedBackClassName(this.props.errors,this.props.touched,"partneringBusinessContactPostal")}`} id="partneringBusinessContactPostal" name="partneringBusinessContactPostal" />
                            {feedBackInvalid(this.props.errors,this.props.touched,"partneringBusinessContactPostal")}
                        </div>
                    </div>
                    <hr></hr>
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
                    <label className="col-form-label control-label" htmlFor="numberOfApplicants"> How many work experience participants are you applying for? <span
                        style={{ color: "red" }}>*</span></label>
                    <Field
                        as="select"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "numberOfApplicants")}`}
                        id="numberOfApplicants"
                        name="numberOfApplicants"
                    >
                        <option value="">Please select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Field>
                    <p>Participants must meet all eligibility requirements.  Eligibility will be verified by the ministry prior to disbursement of grant funds.</p>
                    {feedBackInvalid(this.props.errors, this.props.touched, "numberOfApplicants")}
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <Field type="checkbox" className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "insuranceCoverage")}`} id="insuranceCoverage" name="insuranceCoverage" />
                        <label
                            className="form-check-label"
                            htmlFor="insuranceCoverage"
                        >
                            <span style={{ color: "red" }}>*</span>
                        I have adequate <a href="https://www.worksafebc.com/en/insurance/need-coverage#%3A%7E%3Atext%3DWorkSafeBC%20insurance%20provides%20protection%20for%2Can%20occupational%20disease%20at%20work">
                                WorkSafe BC insurance coverage</a>  to meet the needs of the placement.
                        </label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "insuranceCoverage")}
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <Field type="checkbox" className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "monitorCommit")}`} id="monitorCommit" name="monitorCommit" />
                        <label
                            className="form-check-label"
                            htmlFor="monitorCommit"
                        >
                            <span style={{ color: "red" }}>*</span>
                        I commit to:
                        <ul>
                                <li>Supervise and support the participant for the duration of the project; and</li>
                                <li>Ensure that safe physical distancing practices and WorkSafeBC requirements are adhered to.</li>
                            </ul>
                        </label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "monitorCommit")}
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <Field type="checkbox" className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "applicantType")}`} id="applicantType" name="applicantType" />
                        <label
                            className="form-check-label"
                            htmlFor="applicantType"
                        >
                            <span style={{ color: "red" }}>*</span>
                        I understand that all work experience participants must be eligible to work in British Columbia and that participants are:
                        <ul>
                                <li>Designated under the Employment and Assistance for Persons with Disabilities Act as a person with disabilities; OR</li>
                                <li>Qualified to receive assistance under the Employment and Assistance Act as a person with persistent multiple barriers; OR</li>
                                <li>Indigenous peoples on reserve who have the equivalent federal designation; AND</li>
                                <li>Work experience participants cannot be participating in other provincial programs such as WorkBC Wage Subsidy or Community Employment Partnerships (CEP).</li>
                            </ul>
                        </label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "applicantType")}
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <Field type="checkbox" className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "placementLength")}`} id="placementLength" name="placementLength" />
                        <label
                            className="form-check-label"
                            htmlFor="placementLength"
                        >
                            <span style={{ color: "red" }}>*</span>
                            I confirm that the placement is <b>12 weeks</b>.
                        </label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "placementLength")}
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="workExperienceTakesPlaceElsewhere">Will the work experience take place at a partnering business in the community other than the non-profit organization listed on step 1 of the application form?<span style={{ color: "red" }}>*</span></label>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors,this.props.touched,"workExperienceTakesPlaceElsewhere")}`}
                            type="radio"
                            name="workExperienceTakesPlaceElsewhere"
                            value="yes"
                        />
                        <label className="form-check-label" htmlFor="organizationNonProfitYes">Yes</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors,this.props.touched,"workExperienceTakesPlaceElsewhere")}`}
                            type="radio"
                            name="workExperienceTakesPlaceElsewhere"
                            value="no"
                        />
                        <label className="form-check-label" htmlFor="organizationNonProfitNo">No</label>
                        {feedBackInvalid(this.props.errors,this.props.touched,"workExperienceTakesPlaceElsewhere")}
                    </div>
                </div>
                {this.partneringBusiness}
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="participantActivities">Work Opportunity <span
                        style={{ color: "red" }}>*</span>
                    </label>
                    <small className="text-muted" id="participantActivities"> What will participants be doing? Details such as packing boxes in a food bank, sorting items at a thrift store, working a cash register at a shop, doing data entry, maintaining trails or doing invasive species removal in a park, etc. Please describe the work experience opportunity in more detail. (1000 characters max.) </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "participantActivities")}`}
                        id="participantActivities"
                        name="participantActivities"
                        rows="4"
                        maxLength="1000"
                    />
                    <small>{this.props.values.participantActivities.length}/1000</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "participantActivities")}
                </div>
                <div className="form-group">
                    <label className="control-label">What will the organization provide to support the participant(s) during the work experience?
                        <span style={{ color: "red" }}>*</span>
                    </label>
                    <small className="text-muted"> Please select all that apply</small>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "participantExperiences")}`} type="checkbox" name="participantExperiences" value="Training" />
                        <label className="form-check-label" htmlFor="Training">Training</label>
                    </div>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "participantExperiences")}`} type="checkbox" name="participantExperiences" value="On the job coaching" />
                        <label className="form-check-label" htmlFor="On the job coaching">On the job coaching/supervision</label>
                    </div>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "participantExperiences")}`} type="checkbox" name="participantExperiences" value="Mentorship" />
                        <label className="form-check-label" htmlFor="Mentorship">Mentorship</label>
                    </div>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "participantExperiences")}`} type="checkbox" name="participantExperiences" value="Flexible working arrangements" />
                        <label className="form-check-label" htmlFor="Flexible working arrangements">Flexible working arrangements</label>
                    </div>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "participantExperiences")}`} type="checkbox" name="participantExperiences" value="Wrap around supports" />
                        <label className="form-check-label" htmlFor="Wrap around supports">Wrap around supports, such as personal protective equipment, childcare or transportation</label>
                    </div>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "participantExperiences")}`} type="checkbox" name="participantExperiences" value="Other" />
                        <label className="form-check-label" htmlFor="Other">Other</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "participantExperiences")}
                    </div>
                </div>
                {this.otherExperienceField}
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="participantSkills">Skill Development <span
                        style={{ color: "red" }}>*</span>
                    </label>
                    <small className="text-muted" id="participantSkills"> What essential skills will participants gain through the work experience? Skills such as computer use, communication skills, literacy skills, time management, training, employment experience, etc. Please describe the skills in more detail. (1000 characters max.)</small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "participantSkills")}`}
                        id="participantSkills"
                        name="participantSkills"
                        rows="4"
                        maxLength="1000"
                    />
                    <small>{this.props.values.participantSkills.length}/1000</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "participantSkills")}
                </div>
                {/*
                <div className="form-group">
                    <label className="control-label">During the work experience participant(s) will gain:
                        <span style={{ color: "red" }}>*</span>
                    </label>
                    <small className="text-muted"> Please select all that apply</small>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "participantSkills")}`} type="checkbox" name="participantSkills" value="Essential Skills" />
                        <label className="form-check-label" htmlFor="Essential Skills">Essential Skills such as computer use, communications skills or literacy skills.</label>
                    </div>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "participantSkills")}`} type="checkbox" name="participantSkills" value="Life Skills" />
                        <label className="form-check-label" htmlFor="Life Skills">Life Skills such as time management</label>
                    </div>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "participantSkills")}`} type="checkbox" name="participantSkills" value="Training" />
                        <label className="form-check-label" htmlFor="Training">Training</label>
                    </div>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "participantSkills")}`} type="checkbox" name="participantSkills" value="Employment Experience" />
                        <label className="form-check-label" htmlFor="Employment Experience">Employment Experience</label>
                    </div>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "participantSkills")}`} type="checkbox" name="participantSkills" value="Self Employment Experience" />
                        <label className="form-check-label" htmlFor="Self Employment Experience">Self Employment Experience</label>
                    </div>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "participantSkills")}`} type="checkbox" name="participantSkills" value="Other" />
                        <label className="form-check-label" htmlFor="Other">Other</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "participantSkills")}
                    </div>
                </div>
                {this.otherSkillField*/}
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
                        maxLength="1000"
                    />
                    <small>{this.props.values.additionalBenefits.length}/1000</small>
                </div>
            </div>
        )
    }
}

export default FormStep2