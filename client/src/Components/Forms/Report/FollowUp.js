import React, {Component} from 'react'
import {Field} from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class FollowUpForm extends Component{
    
    get contactInformation() {
        if (this.props.values.fundingAdditional === "yes") {
            return (
                <div>
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="followUpContactInformation">Contact Phone<span
                            style={{ color: "red" }}>*</span></label>
                        <Field className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "followUpContactInformation")}`} id="followUpContactInformation" name="followUpContactInformation" />
                        {feedBackInvalid(this.props.errors, this.props.touched, "followUpContactInformation")}
                    </div>
                </div>
            )
        }
        return null
    }
    
    
    render(){
        //else return indigenous form
        return (
            <div>
                <div className="form-group">
                    <h2 id="forms">Follow-Up</h2>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="followUpWillingToHavePhoneConversation">Would you be willing to have a brief telephone conversation to share additional insights into your experience with the WEOG?? <span style={{ color: "red" }}>*</span></label>
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
            </div>
        )
    }
}

export default FollowUpForm