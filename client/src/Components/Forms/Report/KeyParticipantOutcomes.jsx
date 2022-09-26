import React, { Component } from "react"
import { Field } from "formik"
import { feedBackClassName, feedBackInvalid } from "../Shared/ValidationMessages"

class KeyParticipantOutcomesForm extends Component {
    render() {
        // else return indigenous form
        return (
            <div>
                <div className="form-group">
                    <h2 id="forms">Participant Outcomes</h2>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="participantOutcomesOtherNonEmploymentReplated">
                        <p>
                            In your WEOG Summary Report, you indicated the following changes in participant employment status as a result of
                            participation in the WEOG:
                        </p>
                        <ul>
                            {this.props.values.numberOfParticipantsStayedInPosition !== "0" &&
                                this.props.values.numberOfParticipantsStayedInPosition !== "" && (
                                    <li>Participants stayed in their positions and were hired by my organization</li>
                                )}
                            {this.props.values.numberOfParticipantsHiredDifferentRole !== "0" &&
                                this.props.values.numberOfParticipantsHiredDifferentRole !== "" && (
                                    <li>Participants were hired by my organization into a new/different role</li>
                                )}
                            {this.props.values.numberOfParticipantsFoundEmploymentElsewhere !== "0" &&
                                this.props.values.numberOfParticipantsFoundEmploymentElsewhere !== "" && (
                                    <li>Participants found employment elsewhere</li>
                                )}
                            {this.props.values.numberOfParticipantsConnectedToWorkBC !== "0" &&
                                this.props.values.numberOfParticipantsConnectedToWorkBC !== "" && (
                                    <li>Participants were connected to WorkBC to receive additional supports</li>
                                )}
                            {this.props.values.numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg !== "0" &&
                                this.props.values.numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg !== "" && (
                                    <li>Participants will continue to receive employment-related services and supports from my organization </li>
                                )}
                            {this.props.values.numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg !== "0" &&
                                this.props.values.numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg !== "" && (
                                    <li>Participants will receive employment-related services and supports through another organization</li>
                                )}
                            {this.props.values.numberOfParticipantsOther !== "0" && this.props.values.numberOfParticipantsOther !== "" && (
                                <li>Other</li>
                            )}
                        </ul>
                        <p>
                            Were there any other non-employment related outcomes for participants, such as increased community connection, increased
                            social skills, self-confidence, etc.
                        </p>
                    </label>
                    <small className="text-muted" id="participantOutcomesOtherNonEmploymentReplated">
                        {" "}
                        Please describe (500 characters max.){" "}
                    </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(
                            this.props.errors,
                            this.props.touched,
                            "participantOutcomesOtherNonEmploymentReplated"
                        )}`}
                        id="participantOutcomesOtherNonEmploymentReplated"
                        name="participantOutcomesOtherNonEmploymentReplated"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.participantOutcomesOtherNonEmploymentReplated.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "participantOutcomesOtherNonEmploymentReplated")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="participantOutcomesSuccessStories">
                        Are there any participant success stories you can share?
                    </label>
                    <small className="text-muted" id="participantOutcomesSuccessStories">
                        {" "}
                        Please describe (500 characters max.){" "}
                    </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "participantOutcomesSuccessStories")}`}
                        id="participantOutcomesSuccessStories"
                        name="participantOutcomesSuccessStories"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.participantOutcomesSuccessStories.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "participantOutcomesSuccessStories")}
                </div>
            </div>
        )
    }
}

export default KeyParticipantOutcomesForm
