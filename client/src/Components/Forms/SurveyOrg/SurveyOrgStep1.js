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
                <p>Thinking back about the <b>online application process,</b> please rate your level of agreement with the following statements:</p>
                <p>The rating scale used is as follows: 1 = strongly disagree, 2 = disagree, 3 = neither agree nor disagree, 4 = agree, 5 = strongly agree.</p>
                <hr/>
                <div className="form-group row">
                    <label className="col-form-label control-label col-md-5" htmlFor="easeOfNavigatingWebsite">Ease of navigating the website and forms.<span style={{ color: "red" }}>*</span></label>
                    <div className="col-md-7">
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfNavigatingWebsite")}`}
                                type="radio"
                                name="easeOfNavigatingWebsite"
                                value="1stronglyDisagree"
                            />
                            <label className="form-check-label">1 (strongly disagree)</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfNavigatingWebsite")}`}
                                type="radio"
                                name="easeOfNavigatingWebsite"
                                value="2disagree"
                            />
                            <label className="form-check-label">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfNavigatingWebsite")}`}
                                type="radio"
                                name="easeOfNavigatingWebsite"
                                value="3neitherAgreeNorDisagree"
                            />
                            <label className="form-check-label">3 (neither)</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfNavigatingWebsite")}`}
                                type="radio"
                                name="easeOfNavigatingWebsite"
                                value="4agree"
                            />
                            <label className="form-check-label">4</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfNavigatingWebsite")}`}
                                type="radio"
                                name="easeOfNavigatingWebsite"
                                value="5stronglyAgree"
                            />
                            <label className="form-check-label">5 (strongly agree)</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, "easeOfNavigatingWebsite")}
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label control-label col-md-5" htmlFor="easeOfUnderstandingAppGuide">Ease of understanding the application guide.<span style={{ color: "red" }}>*</span></label>
                    <div className="col-md-7">
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfUnderstandingAppGuide")}`}
                                type="radio"
                                name="easeOfUnderstandingAppGuide"
                                value="1stronglyDisagree"
                            />
                            <label className="form-check-label">1 (strongly disagree)</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfUnderstandingAppGuide")}`}
                                type="radio"
                                name="easeOfUnderstandingAppGuide"
                                value="2disagree"
                            />
                            <label className="form-check-label">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfUnderstandingAppGuide")}`}
                                type="radio"
                                name="easeOfUnderstandingAppGuide"
                                value="3neitherAgreeNorDisagree"
                            />
                            <label className="form-check-label">3 (neither)</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfUnderstandingAppGuide")}`}
                                type="radio"
                                name="easeOfUnderstandingAppGuide"
                                value="4agree"
                            />
                            <label className="form-check-label">4</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "easeOfUnderstandingAppGuide")}`}
                                type="radio"
                                name="easeOfUnderstandingAppGuide"
                                value="5stronglyAgree"
                            />
                            <label className="form-check-label">5 (strongly agree)</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, "easeOfUnderstandingAppGuide")}
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label control-label col-md-5" htmlFor="satisfactionSpeedOfService">Satisfaction about the speed of service.<span style={{ color: "red" }}>*</span></label>
                    <div className="col-md-7">
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "satisfactionSpeedOfService")}`}
                                type="radio"
                                name="satisfactionSpeedOfService"
                                value="1stronglyDisagree"
                            />
                            <label className="form-check-label">1 (strongly disagree)</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "satisfactionSpeedOfService")}`}
                                type="radio"
                                name="satisfactionSpeedOfService"
                                value="2disagree"
                            />
                            <label className="form-check-label">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "satisfactionSpeedOfService")}`}
                                type="radio"
                                name="satisfactionSpeedOfService"
                                value="3neitherAgreeNorDisagree"
                            />
                            <label className="form-check-label">3 (neither)</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "satisfactionSpeedOfService")}`}
                                type="radio"
                                name="satisfactionSpeedOfService"
                                value="4agree"
                            />
                            <label className="form-check-label">4</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "satisfactionSpeedOfService")}`}
                                type="radio"
                                name="satisfactionSpeedOfService"
                                value="5stronglyAgree"
                            />
                            <label className="form-check-label">5 (strongly agree)</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, "satisfactionSpeedOfService")}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default SurveyOrgStep1