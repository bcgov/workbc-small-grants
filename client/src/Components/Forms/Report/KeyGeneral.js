import React, {Component} from 'react'
import {Field} from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class KeyGeneralForm extends Component{
    

    
    
    render(){
        //else return indigenous form
        return (
            <div>
                <div className="form-group">
                    <h2 id="forms">General</h2>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="generalHowFindOut">How did you find out about the WEOG?
                    </label>
                    <small className="text-muted" id="generalHowFindOut"> Please describe (500 characters max.) </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "generalHowFindOut")}`}
                        id="generalHowFindOut"
                        name="generalHowFindOut"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.generalHowFindOut.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "generalHowFindOut")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="generalInterest">What interested you in the WEOG?  Why did your organization choose to participate?
                    </label>
                    <small className="text-muted" id="generalInterest"> Please describe (500 characters max.) </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "generalInterest")}`}
                        id="generalInterest"
                        name="generalInterest"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.generalInterest.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "generalInterest")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="generalParticipateAgain">Would you participate again?
                    </label>
                    <small className="text-muted" id="generalParticipateAgain"> Please describe (500 characters max.) </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "generalParticipateAgain")}`}
                        id="generalParticipateAgain"
                        name="generalParticipateAgain"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.generalParticipateAgain.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "generalParticipateAgain")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="generalImproveAboutProgram">What would you improve about the program or process?
                    </label>
                    <small className="text-muted" id="generalImproveAboutProgram"> Please describe (500 characters max.) </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "generalImproveAboutProgram")}`}
                        id="generalImproveAboutProgram"
                        name="generalImproveAboutProgram"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.generalImproveAboutProgram.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "generalImproveAboutProgram")}
                </div>
            </div>
        )
    }
}

export default KeyGeneralForm