import React, { Component } from 'react'
import { Field } from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class SurveyOrgStep2 extends Component {

    generateParticipantsExperience() {
        let numberOfApplicants = this.props.values.participantNumber
        const applicantsInputs = []
        if (numberOfApplicants !== '') {
            let num = parseInt(numberOfApplicants, 10)
            for (let i = 0; i < num; i++) {
                applicantsInputs.push(
                    <div className="form-group" key={`participant${i + 1}Experience`}>
                        <label className="col-form-label control-label" htmlFor={`participant${i + 1}Experience`}>2c. How would you rate your overall experience with participant {i + 1}? <span style={{ color: "red" }}>*</span></label>
                        <div className="form-check">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, `participant${i + 1}Experience`)}`}
                                type="radio"
                                name={`participant${i + 1}Experience`}
                                value="1poor"
                            />
                            <label className="form-check-label">1 (poor)</label>
                        </div>
                        <div className="form-check">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, `participant${i + 1}Experience`)}`}
                                type="radio"
                                name={`participant${i + 1}Experience`}
                                value="2fair"
                            />
                            <label className="form-check-label">2 (fair)</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, `participant${i + 1}Experience`)}
                        </div>
                        <div className="form-check">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, `participant${i + 1}Experience`)}`}
                                type="radio"
                                name={`participant${i + 1}Experience`}
                                value="3good"
                            />
                            <label className="form-check-label">3 (good)</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, `participant${i + 1}Experience`)}
                        </div>
                        <div className="form-check">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, `participant${i + 1}Experience`)}`}
                                type="radio"
                                name={`participant${i + 1}Experience`}
                                value="4veryGood"
                            />
                            <label className="form-check-label">4 (very good)</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, `participant${i + 1}Experience`)}
                        </div>
                        <div className="form-check">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, `participant${i + 1}Experience`)}`}
                                type="radio"
                                name={`participant${i + 1}Experience`}
                                value="5excellent"
                            />
                            <label className="form-check-label">5 (excellent)</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, `participant${i + 1}Experience`)}
                        </div>
                    </div>
                )
            }
        }
        return applicantsInputs
    }
    get generateDifficultyHiring() {
        if (this.props.values.likelyToHirePeopleWithBarriersInFuture === "5highlyLikely" || this.props.values.likelyToHirePeopleWithBarriersInFuture === "4likely" || this.props.values.likelyToHirePeopleWithBarriersInFuture === '') {
            return null
        } else {
            return (
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="difficultyHiringPeopleWithBarriersComment">Which areas have you experienced difficulties in hiring people with barriers to employment?
                </label>
                    <small className="text-muted" id="difficultyHiringPeopleWithBarriersComment"> (1000 characters max.)</small>
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
    }

    render() {
        if (this.props.currentStep !== 2) {
            return null
        }
        //else return step 2
        return (
            <div>
                <p>Thinking about the participants in the program, please rate the following:</p>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="valueOfProgram">2a. Value of the program.<span style={{ color: "red" }}>*</span></label>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "valueOfProgram")}`}
                            type="radio"
                            name="valueOfProgram"
                            value="1poor"
                        />
                        <label className="form-check-label">1 (poor)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "valueOfProgram")}`}
                            type="radio"
                            name="valueOfProgram"
                            value="2fair"
                        />
                        <label className="form-check-label">2 (fair)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "valueOfProgram")}
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "valueOfProgram")}`}
                            type="radio"
                            name="valueOfProgram"
                            value="3good"
                        />
                        <label className="form-check-label">3 (good)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "valueOfProgram")}
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "valueOfProgram")}`}
                            type="radio"
                            name="valueOfProgram"
                            value="4veryGood"
                        />
                        <label className="form-check-label">4 (very good)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "valueOfProgram")}
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "valueOfProgram")}`}
                            type="radio"
                            name="valueOfProgram"
                            value="5excellent"
                        />
                        <label className="form-check-label">5 (excellent)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "valueOfProgram")}
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="participantNumber"> 2b. How many participants did you have? <span
                        style={{ color: "red" }}>*</span></label>
                    <Field
                        as="select"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "participantNumber")}`}
                        id="participantNumber"
                        name="participantNumber"
                    >
                        <option value="">Please select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Field>
                    {feedBackInvalid(this.props.errors, this.props.touched, "participantNumber")}
                </div>
                {this.generateParticipantsExperience()}
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="likelyToHirePeopleWithBarriersInFuture">2d. How likely are you to hire people with barriers to employment in the future?<span style={{ color: "red" }}>*</span></label>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "likelyToHirePeopleWithBarriersInFuture")}`}
                            type="radio"
                            name="likelyToHirePeopleWithBarriersInFuture"
                            value="1highlyUnlikely"
                        />
                        <label className="form-check-label">1 (highly unlikely)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "likelyToHirePeopleWithBarriersInFuture")}`}
                            type="radio"
                            name="likelyToHirePeopleWithBarriersInFuture"
                            value="2unlikely"
                        />
                        <label className="form-check-label">2 (unlikely)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "likelyToHirePeopleWithBarriersInFuture")}
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "likelyToHirePeopleWithBarriersInFuture")}`}
                            type="radio"
                            name="likelyToHirePeopleWithBarriersInFuture"
                            value="3neitherLikelyOrUnlikely"
                        />
                        <label className="form-check-label">3 (neither likely or unlikely)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "likelyToHirePeopleWithBarriersInFuture")}
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "likelyToHirePeopleWithBarriersInFuture")}`}
                            type="radio"
                            name="likelyToHirePeopleWithBarriersInFuture"
                            value="4likely"
                        />
                        <label className="form-check-label">4 (likely)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "likelyToHirePeopleWithBarriersInFuture")}
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "likelyToHirePeopleWithBarriersInFuture")}`}
                            type="radio"
                            name="likelyToHirePeopleWithBarriersInFuture"
                            value="5highlyLikely"
                        />
                        <label className="form-check-label">5 (highly likely)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "likelyToHirePeopleWithBarriersInFuture")}
                    </div>
                </div>
                {this.generateDifficultyHiring}
            </div>
        )
    }
}

export default SurveyOrgStep2