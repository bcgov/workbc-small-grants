import React, { Component } from 'react'
import { Field } from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class FollowUpForm extends Component {

    get contactInformation() {
        if (this.props.values.followUpWillingToHavePhoneConversation === "yes") {
            return (
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="followUpContactName">Contact Name<span
                            style={{ color: "red" }}>*</span></label>
                        <Field className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "followUpContactName")}`} id="followUpContactName" name="followUpContactName" />
                        {feedBackInvalid(this.props.errors, this.props.touched, "followUpContactName")}
                    </div>
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="followUpContactPhone">Contact Phone<span
                            style={{ color: "red" }}>*</span></label>
                        <Field className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "followUpContactPhone")}`} id="followUpContactPhone" name="followUpContactPhone" />
                        {feedBackInvalid(this.props.errors, this.props.touched, "followUpContactPhone")}
                    </div>
                </div>
            )
        }
        return null
    }


    render() {
        //else return indigenous form
        return (
            <div>
                <div className="form-group">
                    <h2 id="forms">Feedback</h2>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="narrativeImproveAboutProgram">What would you improve about the program or process?
                    </label>
                    <small className="text-muted" id="narrativeImproveAboutProgram"> Please describe (5000 characters max.) </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "narrativeImproveAboutProgram")}`}
                        id="narrativeImproveAboutProgram"
                        name="narrativeImproveAboutProgram"
                        rows="4"
                        maxLength="5000"
                    />
                    <small>{this.props.values.narrativeImproveAboutProgram.length}/5000</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "narrativeImproveAboutProgram")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="followUpWillingToHavePhoneConversation">Would you be willing to have a brief telephone conversation to share additional insights into your experience with the WEOG? <span style={{ color: "red" }}>*</span></label>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "followUpWillingToHavePhoneConversation")}`}
                            type="radio"
                            name="followUpWillingToHavePhoneConversation"
                            value="yes"
                            onChange={e => {
                                this.props.handleChange(e)
                                this.props.setFieldValue("followUpContactInformation", "")
                            }}
                        />
                        <label className="form-check-label" htmlFor="yes">Yes</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "followUpWillingToHavePhoneConversation")}`}
                            type="radio"
                            name="followUpWillingToHavePhoneConversation"
                            value="no"
                            onChange={e => {
                                this.props.handleChange(e)
                                this.props.setFieldValue("followUpContactInformation", "")
                            }}
                        />
                        <label className="form-check-label" htmlFor="no">No</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "followUpWillingToHavePhoneConversation")}
                    </div>
                </div>
                {this.contactInformation}
            </div>
        )
    }
}

export default FollowUpForm