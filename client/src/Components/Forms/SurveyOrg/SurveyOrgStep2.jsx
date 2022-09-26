import { Field } from "formik"
import React, { Component } from "react"
import { feedBackClassName, feedBackInvalid } from "../Shared/ValidationMessages"

class SurveyOrgStep2 extends Component {
    get generateDifficultyHiring() {
        if (
            this.props.values.hiredPeopleWithBarriersBefore === "5stronglyAgree" ||
            this.props.values.hiredPeopleWithBarriersBefore === "4agree" ||
            this.props.values.hiredPeopleWithBarriersBefore === ""
        ) {
            return null
        }
        return (
            <div className="form-group">
                <label className="col-form-label control-label" htmlFor="difficultyHiringPeopleWithBarriersComment">
                    Which areas have you experienced difficulties in hiring people with barriers to employment?
                </label>
                <small className="text-muted" id="difficultyHiringPeopleWithBarriersComment">
                    {" "}
                    (1000 characters max.)
                </small>
                <Field
                    as="textarea"
                    className="form-control"
                    id="difficultyHiringPeopleWithBarriersComment"
                    name="difficultyHiringPeopleWithBarriersComment"
                    rows="4"
                    maxLength="1000"
                />
                <small>{this.props.values.difficultyHiringPeopleWithBarriersComment.length}/1000</small>
            </div>
        )
    }

    generateParticipantsExperience() {
        const numberOfApplicants = this.props.values.participantNumber
        const applicantsInputs = []
        if (numberOfApplicants !== "") {
            const num = parseInt(numberOfApplicants, 10)
            for (let i = 0; i < num; i += 1) {
                applicantsInputs.push(
                    <div className="form-group" key={`participant${i + 1}Experience`}>
                        <label className="col-form-label control-label" htmlFor={`participant${i + 1}Experience`}>
                            2c. How would you rate your overall experience with participant {i + 1}? <span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="form-check">
                            <Field
                                className={`form-check-input ${feedBackClassName(
                                    this.props.errors,
                                    this.props.touched,
                                    `participant${i + 1}Experience`
                                )}`}
                                type="radio"
                                name={`participant${i + 1}Experience`}
                                value="1stronglyDisagree"
                            />
                            <label className="form-check-label">1</label>
                        </div>
                        <div className="form-check">
                            <Field
                                className={`form-check-input ${feedBackClassName(
                                    this.props.errors,
                                    this.props.touched,
                                    `participant${i + 1}Experience`
                                )}`}
                                type="radio"
                                name={`participant${i + 1}Experience`}
                                value="2disagree"
                            />
                            <label className="form-check-label">2</label>
                        </div>
                        <div className="form-check">
                            <Field
                                className={`form-check-input ${feedBackClassName(
                                    this.props.errors,
                                    this.props.touched,
                                    `participant${i + 1}Experience`
                                )}`}
                                type="radio"
                                name={`participant${i + 1}Experience`}
                                value="3neitherAgreeNorDisagree"
                            />
                            <label className="form-check-label">3</label>
                        </div>
                        <div className="form-check">
                            <Field
                                className={`form-check-input ${feedBackClassName(
                                    this.props.errors,
                                    this.props.touched,
                                    `participant${i + 1}Experience`
                                )}`}
                                type="radio"
                                name={`participant${i + 1}Experience`}
                                value="4agree"
                            />
                            <label className="form-check-label">4</label>
                        </div>
                        <div className="form-check">
                            <Field
                                className={`form-check-input ${feedBackClassName(
                                    this.props.errors,
                                    this.props.touched,
                                    `participant${i + 1}Experience`
                                )}`}
                                type="radio"
                                name={`participant${i + 1}Experience`}
                                value="5stronglyAgree"
                            />
                            <label className="form-check-label">5</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, `participant${i + 1}Experience`)}
                        </div>
                    </div>
                )
            }
        }
        return applicantsInputs
    }

    render() {
        if (this.props.currentStep !== 2) {
            return null
        }
        // else return step 2
        return (
            <div>
                <p>
                    Thinking about the <b>participants in the program,</b> please rate your level of agreement with the following statements:
                </p>
                <p>
                    The rating scale used is as follows: 1 = strongly disagree, 2 = disagree, 3 = neither agree nor disagree, 4 = agree, 5 = strongly
                    agree.
                </p>
                <hr />
                <div className="form-group">
                    <div className="row">
                        <div className="col-6" />
                        <div className="col d-none d-md-block">
                            Strongly <br /> Disagree
                        </div>
                        <div className="col" />
                        <div className="col" />
                        <div className="col" />
                        <div className="col d-none d-md-block">
                            Strongly
                            <br /> Agree
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <label className="col-form-label control-label" htmlFor="participantContributionValuable">
                                The participant contribution was valuable to my organization.<span style={{ color: "red" }}>*</span>
                            </label>
                        </div>
                        <div className="form-check col">
                            <Field
                                className={`form-check-input ${feedBackClassName(
                                    this.props.errors,
                                    this.props.touched,
                                    "participantContributionValuable"
                                )}`}
                                type="radio"
                                name="participantContributionValuable"
                                value="1stronglyDisagree"
                            />
                            <label className="form-check-label">1</label>
                        </div>
                        <div className="form-check col">
                            <Field
                                className={`form-check-input ${feedBackClassName(
                                    this.props.errors,
                                    this.props.touched,
                                    "participantContributionValuable"
                                )}`}
                                type="radio"
                                name="participantContributionValuable"
                                value="2disagree"
                            />
                            <label className="form-check-label">2</label>
                        </div>
                        <div className="form-check col">
                            <Field
                                className={`form-check-input ${feedBackClassName(
                                    this.props.errors,
                                    this.props.touched,
                                    "participantContributionValuable"
                                )}`}
                                type="radio"
                                name="participantContributionValuable"
                                value="3neitherAgreeNorDisagree"
                            />
                            <label className="form-check-label">3</label>
                        </div>
                        <div className="form-check col">
                            <Field
                                className={`form-check-input ${feedBackClassName(
                                    this.props.errors,
                                    this.props.touched,
                                    "participantContributionValuable"
                                )}`}
                                type="radio"
                                name="participantContributionValuable"
                                value="4agree"
                            />
                            <label className="form-check-label">4</label>
                        </div>
                        <div className="form-check col">
                            <Field
                                className={`form-check-input ${feedBackClassName(
                                    this.props.errors,
                                    this.props.touched,
                                    "participantContributionValuable"
                                )}`}
                                type="radio"
                                name="participantContributionValuable"
                                value="5stronglyAgree"
                            />
                            <label className="form-check-label">5</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, "participantContributionValuable")}
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <label className="col-form-label control-label" htmlFor="hiredPeopleWithBarriersBefore">
                                Prior to participating in this program, my organization has hired people with barriers to employment.
                                <span style={{ color: "red" }}>*</span>
                            </label>
                        </div>
                        <div className="form-check col">
                            <Field
                                className={`form-check-input ${feedBackClassName(
                                    this.props.errors,
                                    this.props.touched,
                                    "hiredPeopleWithBarriersBefore"
                                )}`}
                                type="radio"
                                name="hiredPeopleWithBarriersBefore"
                                value="1stronglyDisagree"
                            />
                            <label className="form-check-label">1</label>
                        </div>
                        <div className="form-check col">
                            <Field
                                className={`form-check-input ${feedBackClassName(
                                    this.props.errors,
                                    this.props.touched,
                                    "hiredPeopleWithBarriersBefore"
                                )}`}
                                type="radio"
                                name="hiredPeopleWithBarriersBefore"
                                value="2disagree"
                            />
                            <label className="form-check-label">2</label>
                        </div>
                        <div className="form-check col">
                            <Field
                                className={`form-check-input ${feedBackClassName(
                                    this.props.errors,
                                    this.props.touched,
                                    "hiredPeopleWithBarriersBefore"
                                )}`}
                                type="radio"
                                name="hiredPeopleWithBarriersBefore"
                                value="3neitherAgreeNorDisagree"
                            />
                            <label className="form-check-label">3</label>
                        </div>
                        <div className="form-check col">
                            <Field
                                className={`form-check-input ${feedBackClassName(
                                    this.props.errors,
                                    this.props.touched,
                                    "hiredPeopleWithBarriersBefore"
                                )}`}
                                type="radio"
                                name="hiredPeopleWithBarriersBefore"
                                value="4agree"
                            />
                            <label className="form-check-label">4</label>
                        </div>
                        <div className="form-check col">
                            <Field
                                className={`form-check-input ${feedBackClassName(
                                    this.props.errors,
                                    this.props.touched,
                                    "hiredPeopleWithBarriersBefore"
                                )}`}
                                type="radio"
                                name="hiredPeopleWithBarriersBefore"
                                value="5stronglyAgree"
                            />
                            <label className="form-check-label">5</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, "hiredPeopleWithBarriersBefore")}
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <label className="col-form-label control-label" htmlFor="hirePeopleWithBarriersFuture">
                                Based on this experience, my organization will hire people with barriers to employment in the future.
                                <span style={{ color: "red" }}>*</span>
                            </label>
                        </div>
                        <div className="form-check col">
                            <Field
                                className={`form-check-input ${feedBackClassName(
                                    this.props.errors,
                                    this.props.touched,
                                    "hirePeopleWithBarriersFuture"
                                )}`}
                                type="radio"
                                name="hirePeopleWithBarriersFuture"
                                value="1stronglyDisagree"
                            />
                            <label className="form-check-label">1</label>
                        </div>
                        <div className="form-check col">
                            <Field
                                className={`form-check-input ${feedBackClassName(
                                    this.props.errors,
                                    this.props.touched,
                                    "hirePeopleWithBarriersFuture"
                                )}`}
                                type="radio"
                                name="hirePeopleWithBarriersFuture"
                                value="2disagree"
                            />
                            <label className="form-check-label">2</label>
                        </div>
                        <div className="form-check col">
                            <Field
                                className={`form-check-input ${feedBackClassName(
                                    this.props.errors,
                                    this.props.touched,
                                    "hirePeopleWithBarriersFuture"
                                )}`}
                                type="radio"
                                name="hirePeopleWithBarriersFuture"
                                value="3neitherAgreeNorDisagree"
                            />
                            <label className="form-check-label">3</label>
                        </div>
                        <div className="form-check col">
                            <Field
                                className={`form-check-input ${feedBackClassName(
                                    this.props.errors,
                                    this.props.touched,
                                    "hirePeopleWithBarriersFuture"
                                )}`}
                                type="radio"
                                name="hirePeopleWithBarriersFuture"
                                value="4agree"
                            />
                            <label className="form-check-label">4</label>
                        </div>
                        <div className="form-check col">
                            <Field
                                className={`form-check-input ${feedBackClassName(
                                    this.props.errors,
                                    this.props.touched,
                                    "hirePeopleWithBarriersFuture"
                                )}`}
                                type="radio"
                                name="hirePeopleWithBarriersFuture"
                                value="5stronglyAgree"
                            />
                            <label className="form-check-label">5</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, "hirePeopleWithBarriersFuture")}
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="experienceWithWorkParticipantsComments">
                        Please provide any additional details or comments about your organization’s experience with the work experience participants.
                    </label>
                    <small className="text-muted" id="experienceWithWorkParticipantsComments">
                        {" "}
                        (1000 characters max.)
                    </small>
                    <Field
                        as="textarea"
                        className="form-control"
                        id="experienceWithWorkParticipantsComments"
                        name="experienceWithWorkParticipantsComments"
                        rows="4"
                        maxLength="1000"
                    />
                    <small>{this.props.values.experienceWithWorkParticipantsComments.length}/1000</small>
                </div>
            </div>
        )
    }
}

export default SurveyOrgStep2
