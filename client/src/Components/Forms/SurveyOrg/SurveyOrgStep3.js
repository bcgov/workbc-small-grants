import React, { Component } from 'react'
import { Field } from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class SurveyOrgStep3 extends Component {

    render() {
        if (this.props.currentStep !== 3) {
            return null
        }
        //else return step 3
        return (
            <div>
                <p>Thinking about your general experience, please rate the following:</p>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="likelyToParticipateInSimilarProgram">3a. How likely are you to participate in similar programs with WorkBC?<span style={{ color: "red" }}>*</span></label>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "likelyToParticipateInSimilarProgram")}`}
                            type="radio"
                            name="likelyToParticipateInSimilarProgram"
                            value="1highlyUnlikely"
                        />
                        <label className="form-check-label">1 (highly unlikely)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "likelyToParticipateInSimilarProgram")}`}
                            type="radio"
                            name="likelyToParticipateInSimilarProgram"
                            value="2unlikely"
                        />
                        <label className="form-check-label">2 (unlikely)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "likelyToParticipateInSimilarProgram")}
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "likelyToParticipateInSimilarProgram")}`}
                            type="radio"
                            name="likelyToParticipateInSimilarProgram"
                            value="3neitherLikelyOrUnlikely"
                        />
                        <label className="form-check-label">3 (neither likely or unlikely)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "likelyToParticipateInSimilarProgram")}
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "likelyToParticipateInSimilarProgram")}`}
                            type="radio"
                            name="likelyToParticipateInSimilarProgram"
                            value="4likely"
                        />
                        <label className="form-check-label">4 (likely)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "likelyToParticipateInSimilarProgram")}
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "likelyToParticipateInSimilarProgram")}`}
                            type="radio"
                            name="likelyToParticipateInSimilarProgram"
                            value="5highlyLikely"
                        />
                        <label className="form-check-label">5 (highly likely)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "likelyToParticipateInSimilarProgram")}
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="likelyToRecommendGrant">3b. How likely are you to recommend this grant to others?<span style={{ color: "red" }}>*</span></label>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "likelyToRecommendGrant")}`}
                            type="radio"
                            name="likelyToRecommendGrant"
                            value="1highlyUnlikely"
                        />
                        <label className="form-check-label">1 (highly unlikely)</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "likelyToRecommendGrant")}`}
                            type="radio"
                            name="likelyToRecommendGrant"
                            value="2unlikely"
                        />
                        <label className="form-check-label">2 (unlikely)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "likelyToRecommendGrant")}
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "likelyToRecommendGrant")}`}
                            type="radio"
                            name="likelyToRecommendGrant"
                            value="3neitherLikelyOrUnlikely"
                        />
                        <label className="form-check-label">3 (neither likely or unlikely)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "likelyToRecommendGrant")}
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "likelyToRecommendGrant")}`}
                            type="radio"
                            name="likelyToRecommendGrant"
                            value="4likely"
                        />
                        <label className="form-check-label">4 (likely)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "likelyToRecommendGrant")}
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "likelyToRecommendGrant")}`}
                            type="radio"
                            name="likelyToRecommendGrant"
                            value="5highlyLikely"
                        />
                        <label className="form-check-label">5 (highly likely)</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "likelyToRecommendGrant")}
                    </div>
                </div>
            </div>
        )
    }
}

export default SurveyOrgStep3