import React, { Component } from 'react'
import { Field } from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class ParticipantsOutcomesForm extends Component {

    get getOtherParticipantOutcome() {
        if (this.props.values.numberOfParticipantsOther !== "0" || this.props.values.numberOfParticipantsOther !== "") {
            return (
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="numberOfParticipantsOtherDescribe">Other <span
                        style={{ color: "red" }}>*</span>
                    </label>
                    <small className="text-muted" id="numberOfParticipantsOtherDescribe"> Please describe (500 characters max.) </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsOtherDescribe")}`}
                        id="numberOfParticipantsOtherDescribe"
                        name="numberOfParticipantsOtherDescribe"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.numberOfParticipantsOtherDescribe.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsOtherDescribe")}
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
                    <h2 id="forms">Participant Outcomes</h2>
                </div>
                <div className="form-group">
                    <p>To the best of your knowledge, please indicate any changes in participant employment status as a result of their participation in the Work Experience Opportunities Grant program. For each comment below, please indicate the number of participants that the comment relates to.</p>
                    <p>After the program concluded, how many:</p>
                </div>
                <div className="form-group">
                <label className="col-form-label control-label" htmlFor="numberOfParticipantsStayedInPosition">Participants stayed in their positions and were hired by my organization<span
                        style={{ color: "red" }}>*</span></label>
                </div>
                <div className="form-group mx-auto">
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "speedApplicationProcessed")}`}
                                type="radio"
                                name="speedApplicationProcessed"
                                value="0"
                            />
                            <label className="form-check-label">0</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "speedApplicationProcessed")}`}
                                type="radio"
                                name="speedApplicationProcessed"
                                value="1"
                            />
                            <label className="form-check-label">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "speedApplicationProcessed")}`}
                                type="radio"
                                name="speedApplicationProcessed"
                                value="2"
                            />
                            <label className="form-check-label">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "speedApplicationProcessed")}`}
                                type="radio"
                                name="speedApplicationProcessed"
                                value="3"
                            />
                            <label className="form-check-label">3</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "speedApplicationProcessed")}`}
                                type="radio"
                                name="speedApplicationProcessed"
                                value="4"
                            />
                            <label className="form-check-label">4</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "speedApplicationProcessed")}`}
                                type="radio"
                                name="speedApplicationProcessed"
                                value="5"
                            />
                            <label className="form-check-label">5</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, "speedApplicationProcessed")}
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "speedApplicationProcessed")}`}
                                type="radio"
                                name="speedApplicationProcessed"
                                value="6"
                            />
                            <label className="form-check-label">6</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, "speedApplicationProcessed")}
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "speedApplicationProcessed")}`}
                                type="radio"
                                name="speedApplicationProcessed"
                                value="7"
                            />
                            <label className="form-check-label">7</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, "speedApplicationProcessed")}
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "speedApplicationProcessed")}`}
                                type="radio"
                                name="speedApplicationProcessed"
                                value="8"
                            />
                            <label className="form-check-label">8</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, "speedApplicationProcessed")}
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "speedApplicationProcessed")}`}
                                type="radio"
                                name="speedApplicationProcessed"
                                value="9"
                            />
                            <label className="form-check-label">9</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, "speedApplicationProcessed")}
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "speedApplicationProcessed")}`}
                                type="radio"
                                name="speedApplicationProcessed"
                                value="10"
                            />
                            <label className="form-check-label">10</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, "speedApplicationProcessed")}
                        </div>
                    {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsStayedInPosition")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="numberOfParticipantsHiredDifferentRole">Participants were hired by my organization into a new/different role<span
                        style={{ color: "red" }}>*</span></label>
                    <Field
                        as="select"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsHiredDifferentRole")}`}
                        id="numberOfParticipantsHiredDifferentRole"
                        name="numberOfParticipantsHiredDifferentRole"
                    >
                        <option value="">Please select</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </Field>
                    {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsHiredDifferentRole")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="numberOfParticipantsFoundEmploymentElsewhere">Participants found employment elsewhere<span
                        style={{ color: "red" }}>*</span></label>
                    <Field
                        as="select"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsFoundEmploymentElsewhere")}`}
                        id="numberOfParticipantsFoundEmploymentElsewhere"
                        name="numberOfParticipantsFoundEmploymentElsewhere"
                    >
                        <option value="">Please select</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </Field>
                    {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsFoundEmploymentElsewhere")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="numberOfParticipantsConnectedToWorkBC">Participants were connected to WorkBC to receive additional supports<span
                        style={{ color: "red" }}>*</span></label>
                    <Field
                        as="select"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsConnectedToWorkBC")}`}
                        id="numberOfParticipantsConnectedToWorkBC"
                        name="numberOfParticipantsConnectedToWorkBC"
                    >
                        <option value="">Please select</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </Field>
                    {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsConnectedToWorkBC")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg">Participants will continue to receive employment-related services and supports from my organization<span
                        style={{ color: "red" }}>*</span></label>
                    <Field
                        as="select"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg")}`}
                        id="numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg"
                        name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg"
                    >
                        <option value="">Please select</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </Field>
                    {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg">Participants will receive employment-related services and supports through another organization<span
                        style={{ color: "red" }}>*</span></label>
                    <Field
                        as="select"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg")}`}
                        id="numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg"
                        name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg"
                    >
                        <option value="">Please select</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </Field>
                    {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="numberOfParticipantsOther">Other<span
                        style={{ color: "red" }}>*</span></label>
                    <Field
                        as="select"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsOther")}`}
                        id="numberOfParticipantsOther"
                        name="numberOfParticipantsOther"
                    >
                        <option value="">Please select</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </Field>
                    {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsOther")}
                </div>                 
            </div>
        )
    }
}

export default ParticipantsOutcomesForm