import React, { Component } from 'react'
import { Field } from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class SurveyOrgStep1 extends Component {

    render() {
        if (this.props.currentStep !== 1) {
            return null
        }
        //else return step 1
        return (
            <div>
                <p>Thinking back about the overall application process, please rate the following:</p>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="easeOfNavigatingWebsite">1a. Ease of navigating the website and forms.<span style={{ color: "red" }}>*</span></label>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfNavigatingWebsite")}`}
                            type="radio"
                            name="easeOfNavigatingWebsite"
                            value="1poor"
                        />
                        <label className="form-check-label">1 (poor)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfNavigatingWebsite")}`}
                            type="radio"
                            name="easeOfNavigatingWebsite"
                            value="2fair"
                        />
                        <label className="form-check-label">2 (fair)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfNavigatingWebsite")}`}
                            type="radio"
                            name="easeOfNavigatingWebsite"
                            value="3good"
                        />
                        <label className="form-check-label">3 (good)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfNavigatingWebsite")}`}
                            type="radio"
                            name="easeOfNavigatingWebsite"
                            value="4veryGood"
                        />
                        <label className="form-check-label">4 (very good)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfNavigatingWebsite")}`}
                            type="radio"
                            name="easeOfNavigatingWebsite"
                            value="5excellent"
                        />
                        <label className="form-check-label">5 (excellent)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "easeOfNavigatingWebsite")}
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="easeOfUnderstandingAppGuide">1b. Ease of understanding the application guide.<span style={{ color: "red" }}>*</span></label>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfUnderstandingAppGuide")}`}
                            type="radio"
                            name="easeOfUnderstandingAppGuide"
                            value="1poor"
                        />
                        <label className="form-check-label">1 (poor)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfUnderstandingAppGuide")}`}
                            type="radio"
                            name="easeOfUnderstandingAppGuide"
                            value="2fair"
                        />
                        <label className="form-check-label">2 (fair)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfUnderstandingAppGuide")}`}
                            type="radio"
                            name="easeOfUnderstandingAppGuide"
                            value="3good"
                        />
                        <label className="form-check-label">3 (good)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfUnderstandingAppGuide")}`}
                            type="radio"
                            name="easeOfUnderstandingAppGuide"
                            value="4veryGood"
                        />
                        <label className="form-check-label">4 (very good)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfUnderstandingAppGuide")}`}
                            type="radio"
                            name="easeOfUnderstandingAppGuide"
                            value="5excellent"
                        />
                        <label className="form-check-label">5 (excellent)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "easeOfUnderstandingAppGuide")}
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="satisfactionSpeedOfService">1c. Satisfaction about the speed of service.<span style={{ color: "red" }}>*</span></label>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "satisfactionSpeedOfService")}`}
                            type="radio"
                            name="satisfactionSpeedOfService"
                            value="1poor"
                        />
                        <label className="form-check-label">1 (poor)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "satisfactionSpeedOfService")}`}
                            type="radio"
                            name="satisfactionSpeedOfService"
                            value="2fair"
                        />
                        <label className="form-check-label">2 (fair)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "satisfactionSpeedOfService")}`}
                            type="radio"
                            name="satisfactionSpeedOfService"
                            value="3good"
                        />
                        <label className="form-check-label">3 (good)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "satisfactionSpeedOfService")}`}
                            type="radio"
                            name="satisfactionSpeedOfService"
                            value="4veryGood"
                        />
                        <label className="form-check-label">4 (very good)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "satisfactionSpeedOfService")}`}
                            type="radio"
                            name="satisfactionSpeedOfService"
                            value="5excellent"
                        />
                        <label className="form-check-label">5 (excellent)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "satisfactionSpeedOfService")}
                    </div>
                </div>
            </div>

        )
    }
}

export default SurveyOrgStep1