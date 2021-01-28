import React, { Component } from 'react'
import { Field } from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class SurveyParticipantStep1 extends Component {

    render() {
        if (this.props.currentStep !== 1) {
            return null
        }
        //else return step 1
        return (
            <div>
                <p>Thinking back about the application process, please rate the following:</p>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="easeOfApplicationCompletion">1a. Ease of navigating the website and forms.<span style={{ color: "red" }}>*</span></label>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfApplicationCompletion")}`}
                            type="radio"
                            name="easeOfApplicationCompletion"
                            value="1poor"
                        />
                        <label className="form-check-label">1 (poor)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfApplicationCompletion")}`}
                            type="radio"
                            name="easeOfApplicationCompletion"
                            value="2fair"
                        />
                        <label className="form-check-label">2 (fair)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfApplicationCompletion")}`}
                            type="radio"
                            name="easeOfApplicationCompletion"
                            value="3good"
                        />
                        <label className="form-check-label">3 (good)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfApplicationCompletion")}`}
                            type="radio"
                            name="easeOfApplicationCompletion"
                            value="4veryGood"
                        />
                        <label className="form-check-label">4 (very good)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfApplicationCompletion")}`}
                            type="radio"
                            name="easeOfApplicationCompletion"
                            value="5excellent"
                        />
                        <label className="form-check-label">5 (excellent)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "easeOfApplicationCompletion")}
                    </div>
                </div>
            </div>
        )
    }
}

export default SurveyParticipantStep1