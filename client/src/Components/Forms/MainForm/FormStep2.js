import React, { Component } from 'react'
import { Field } from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class FormStep2 extends Component {
    get otherExperienceField() {
        if (this.props.values.experiences.indexOf("Other") > -1) {
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
        if (this.props.values.skills.indexOf("Other") > -1) {
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
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "applicants")}`}
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
                    {feedBackInvalid(this.props.errors, this.props.touched, "applicants")}
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
                                <li>Monitor and support the participant for the duration of the project; and</li>
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
                        I understand that all participants must be eligible to work in British Columbia and that participants are:
                        <ul>
                                <li>Receiving disability assistance; OR</li>
                                <li>Receiving income assistance under the Persons with Persistent Multiple Barriers (PPMB) category</li>
                            </ul>
                            <p>Applicants must meet eligibility requirements, and verification is required before hiring.</p>
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
                    <label className="col-form-label control-label" htmlFor="participantActivities">Work Opportunity <span
                        style={{ color: "red" }}>*</span>
                    </label>
                    <small className="text-muted" id="participantActivities">Please describe the work experience opportunity (700 characters max.) </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "participantActivities")}`}
                        id="participantActivities"
                        name="participantActivities"
                        rows="4"
                        maxLength="700"
                    />
                    <small>{this.props.values.participantActivities.length}/700</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "participantActivities")}
                </div>
                <div className="form-group">
                    <label className="control-label">What will the organization provide to support the participant(s) during the work experience?
                        <span style={{ color: "red" }}>*</span>
                    </label>
                    <small className="text-muted"> Please select all that apply</small>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "experiences")}`} type="checkbox" name="experiences" value="Training" />
                        <label className="form-check-label" htmlFor="Training">Training</label>
                    </div>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "experiences")}`} type="checkbox" name="experiences" value="On the job coaching" />
                        <label className="form-check-label" htmlFor="On the job coaching">On the job coaching/supervision</label>
                    </div>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "experiences")}`} type="checkbox" name="experiences" value="Mentorship" />
                        <label className="form-check-label" htmlFor="Mentorship">Mentorship</label>
                    </div>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "experiences")}`} type="checkbox" name="experiences" value="Flexible working arrangements" />
                        <label className="form-check-label" htmlFor="Flexible working arrangements">Flexible working arrangements</label>
                    </div>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "experiences")}`} type="checkbox" name="experiences" value="Wrap around supports" />
                        <label className="form-check-label" htmlFor="Wrap around supports">Wrap around supports, such as personal protective equipment, childcare or transportation</label>
                    </div>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "experiences")}`} type="checkbox" name="experiences" value="Other" />
                        <label className="form-check-label" htmlFor="Other">Other</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "experiences")}
                    </div>
                </div>
                {this.otherExperienceField}
                <div className="form-group">
                    <label className="control-label">During the work experience participant(s) will gain:
                        <span style={{ color: "red" }}>*</span>
                    </label>
                    <small className="text-muted"> Please select all that apply</small>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "skills")}`} type="checkbox" name="skills" value="Essential Skills" />
                        <label className="form-check-label" htmlFor="Essential Skills">Essential Skills such as computer use, communications skills or literacy skills.</label>
                    </div>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "skills")}`} type="checkbox" name="skills" value="Life Skills" />
                        <label className="form-check-label" htmlFor="Life Skills">Life Skills such as time management</label>
                    </div>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "skills")}`} type="checkbox" name="skills" value="Training" />
                        <label className="form-check-label" htmlFor="Training">Training</label>
                    </div>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "skills")}`} type="checkbox" name="skills" value="Employment Experience" />
                        <label className="form-check-label" htmlFor="Employment Experience">Employment Experience</label>
                    </div>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "skills")}`} type="checkbox" name="skills" value="Self Employment Experience" />
                        <label className="form-check-label" htmlFor="Self Employment Experience">Self Employment Experience</label>
                    </div>
                    <div className="form-check">
                        <Field className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "skills")}`} type="checkbox" name="skills" value="Other" />
                        <label className="form-check-label" htmlFor="Other">Other</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "skills")}
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
                    <small>{this.props.values.additionalBenefits.length}/700</small>
                </div>
            </div>
        )
    }
}

export default FormStep2