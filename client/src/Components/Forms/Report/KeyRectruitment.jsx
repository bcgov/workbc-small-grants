import React, { Component } from "react"
import { Field } from "formik"
import { feedBackClassName, feedBackInvalid } from "../Shared/ValidationMessages"

class KeyRecruitmentForm extends Component {
    render() {
        // else return indigenous form
        return (
            <div>
                <div className="form-group">
                    <h2 id="forms">Recruitment</h2>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="recruitmentChallengesFindingParticipant">
                        Did you encounter any challenges in finding and recruiting participants? If so, what were they?
                    </label>
                    <small className="text-muted" id="recruitmentChallengesFindingParticipant">
                        {" "}
                        Please describe (500 characters max.){" "}
                    </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(
                            this.props.errors,
                            this.props.touched,
                            "recruitmentChallengesFindingParticipant"
                        )}`}
                        id="recruitmentChallengesFindingParticipant"
                        name="recruitmentChallengesFindingParticipant"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.recruitmentChallengesFindingParticipant.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "recruitmentChallengesFindingParticipant")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="recruitmentReceivedAssistanceFromWorkBC">
                        Did you have assistance from a WorkBC Office to find eligible participants? If so, how was this experience?
                    </label>
                    <small className="text-muted" id="recruitmentReceivedAssistanceFromWorkBC">
                        {" "}
                        Please describe (500 characters max.){" "}
                    </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(
                            this.props.errors,
                            this.props.touched,
                            "recruitmentReceivedAssistanceFromWorkBC"
                        )}`}
                        id="recruitmentReceivedAssistanceFromWorkBC"
                        name="recruitmentReceivedAssistanceFromWorkBC"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.recruitmentReceivedAssistanceFromWorkBC.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "recruitmentReceivedAssistanceFromWorkBC")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="recruitmentChallengesWithEligibility">
                        Did you experience any challenges with participant eligibility? If so, what were they?
                    </label>
                    <small className="text-muted" id="recruitmentChallengesWithEligibility">
                        {" "}
                        Please describe (500 characters max.){" "}
                    </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "recruitmentChallengesWithEligibility")}`}
                        id="recruitmentChallengesWithEligibility"
                        name="recruitmentChallengesWithEligibility"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.recruitmentChallengesWithEligibility.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "recruitmentChallengesWithEligibility")}
                </div>
            </div>
        )
    }
}

export default KeyRecruitmentForm
