import React, { Component } from 'react'
import { Field } from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class SurveyParticipantStep2 extends Component {

    render() {
        if (this.props.currentStep !== 2) {
            return null
        }
        //else return step 2
        return (
            <div>
                <p>Thinking about this opportunity, please rate the following:</p>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="overallExperienceWithEmployer">2a. Overall experience with your employer.<span style={{ color: "red" }}>*</span></label>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "overallExperienceWithEmployer")}`}
                            type="radio"
                            name="overallExperienceWithEmployer"
                            value="1poor"
                        />
                        <label className="form-check-label">1 (poor)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "overallExperienceWithEmployer")}`}
                            type="radio"
                            name="overallExperienceWithEmployer"
                            value="2fair"
                        />
                        <label className="form-check-label">2 (fair)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "overallExperienceWithEmployer")}
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "overallExperienceWithEmployer")}`}
                            type="radio"
                            name="overallExperienceWithEmployer"
                            value="3good"
                        />
                        <label className="form-check-label">3 (good)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "overallExperienceWithEmployer")}
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "overallExperienceWithEmployer")}`}
                            type="radio"
                            name="overallExperienceWithEmployer"
                            value="4veryGood"
                        />
                        <label className="form-check-label">4 (very good)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "overallExperienceWithEmployer")}
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "overallExperienceWithEmployer")}`}
                            type="radio"
                            name="overallExperienceWithEmployer"
                            value="5excellent"
                        />
                        <label className="form-check-label">5 (excellent)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "overallExperienceWithEmployer")}
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="levelOfSupportsReceived">2b. Level of supports you have received (such as training, mentorship, flexible work arrangements, etc.)<span style={{ color: "red" }}>*</span></label>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "levelOfSupportsReceived")}`}
                            type="radio"
                            name="levelOfSupportsReceived"
                            value="1poor"
                        />
                        <label className="form-check-label">1 (poor)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "levelOfSupportsReceived")}`}
                            type="radio"
                            name="levelOfSupportsReceived"
                            value="2fair"
                        />
                        <label className="form-check-label">2 (fair)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "levelOfSupportsReceived")}
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "levelOfSupportsReceived")}`}
                            type="radio"
                            name="levelOfSupportsReceived"
                            value="3good"
                        />
                        <label className="form-check-label">3 (good)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "levelOfSupportsReceived")}
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "levelOfSupportsReceived")}`}
                            type="radio"
                            name="levelOfSupportsReceived"
                            value="4veryGood"
                        />
                        <label className="form-check-label">4 (very good)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "levelOfSupportsReceived")}
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "levelOfSupportsReceived")}`}
                            type="radio"
                            name="levelOfSupportsReceived"
                            value="5excellent"
                        />
                        <label className="form-check-label">5 (excellent)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "levelOfSupportsReceived")}
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="increasedAbilityToParticipateInLM">2c. Increased ability to participate in the labour market as a result of this work experience<span style={{ color: "red" }}>*</span></label>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "increasedAbilityToParticipateInLM")}`}
                            type="radio"
                            name="increasedAbilityToParticipateInLM"
                            value="1poor"
                        />
                        <label className="form-check-label">1 (poor)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "increasedAbilityToParticipateInLM")}`}
                            type="radio"
                            name="increasedAbilityToParticipateInLM"
                            value="2fair"
                        />
                        <label className="form-check-label">2 (fair)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "increasedAbilityToParticipateInLM")}
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "increasedAbilityToParticipateInLM")}`}
                            type="radio"
                            name="increasedAbilityToParticipateInLM"
                            value="3good"
                        />
                        <label className="form-check-label">3 (good)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "increasedAbilityToParticipateInLM")}
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "increasedAbilityToParticipateInLM")}`}
                            type="radio"
                            name="increasedAbilityToParticipateInLM"
                            value="4veryGood"
                        />
                        <label className="form-check-label">4 (very good)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "increasedAbilityToParticipateInLM")}
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "increasedAbilityToParticipateInLM")}`}
                            type="radio"
                            name="increasedAbilityToParticipateInLM"
                            value="5excellent"
                        />
                        <label className="form-check-label">5 (excellent)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "increasedAbilityToParticipateInLM")}
                    </div>
                </div>
            </div>
        )
    }
}

export default SurveyParticipantStep2