import React, { Component } from "react"
import { Field } from "formik"
import { feedBackClassName, feedBackInvalid } from "../Shared/ValidationMessages"

class PlacementsForm extends Component {
    get otherExperienceField() {
        if (this.props.values.placementSupportsProvided.indexOf("other") > -1) {
            return (
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="placementSupportsProvidedOther">
                        Please Describe <span style={{ color: "red" }}>*</span>
                    </label>
                    <small className="text-muted" id="placementSupportsProvidedOther">
                        {" "}
                        500 characters max.
                    </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "placementSupportsProvidedOther")}`}
                        id="placementSupportsProvidedOther"
                        name="placementSupportsProvidedOther"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.placementSupportsProvidedOther.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "placementSupportsProvidedOther")}
                </div>
            )
        }
        return null
    }

    get detailChangeExplain() {
        if (this.props.values.placementDetailsChange === "yes") {
            return (
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="placementDetailsChangeExplanation">
                        Please describe <span style={{ color: "red" }}>*</span>
                    </label>
                    <small className="text-muted" id="placementDetailsChangeExplanation">
                        {" "}
                        500 characters max.
                    </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "placementDetailsChangeExplanation")}`}
                        id="placementDetailsChangeExplanation"
                        name="placementDetailsChangeExplanation"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.placementDetailsChangeExplanation.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "placementDetailsChangeExplanation")}
                </div>
            )
        }
        return null
    }

    render() {
        // else return indigenous form
        return (
            <div>
                <div className="form-group">
                    <h2 id="forms">Placements</h2>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="placementDetailsChange">
                        Did the details of the work experience placement (participant duties, responsibilities, etc) change from what you submitted in
                        your application?<span style={{ color: "red" }}>*</span>
                    </label>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "placementDetailsChange")}`}
                            type="radio"
                            name="placementDetailsChange"
                            value="yes"
                            onChange={(e) => {
                                this.props.handleChange(e)
                                this.props.setFieldValue("placementDetailsChangeExplanation", "")
                            }}
                        />
                        <label className="form-check-label" htmlFor="yes">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "placementDetailsChange")}`}
                            type="radio"
                            name="placementDetailsChange"
                            value="no"
                            onChange={(e) => {
                                this.props.handleChange(e)
                                this.props.setFieldValue("placementDetailsChangeExplanation", "")
                            }}
                        />
                        <label className="form-check-label" htmlFor="no">
                            No
                        </label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "placementDetailsChange")}
                    </div>
                </div>
                {this.detailChangeExplain}
                <div className="form-group">
                    <label className="control-label">
                        Please indicate the supports you provided to participants to help them succeed in their placements
                        <span style={{ color: "red" }}>*</span>
                    </label>
                    <small className="text-muted"> Please select all that apply</small>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "placementSupportsProvided")}`}
                            type="checkbox"
                            name="placementSupportsProvided"
                            value="Essential work clothing, supplies, tools or equipment"
                        />
                        <label className="form-check-label" htmlFor="Essential work clothing, supplies, tools or equipment">
                            Essential work clothing, supplies, tools or equipment
                        </label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "placementSupportsProvided")}`}
                            type="checkbox"
                            name="placementSupportsProvided"
                            value="Personal protective equipment"
                        />
                        <label className="form-check-label" htmlFor="Personal protective equipment">
                            Personal protective equipment
                        </label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "placementSupportsProvided")}`}
                            type="checkbox"
                            name="placementSupportsProvided"
                            value="Assistive technology"
                        />
                        <label className="form-check-label" htmlFor="Assistive technology">
                            Assistive technology
                        </label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "placementSupportsProvided")}`}
                            type="checkbox"
                            name="placementSupportsProvided"
                            value="On-the-job training"
                        />
                        <label className="form-check-label" htmlFor="On-the-job training">
                            On-the-job training
                        </label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "placementSupportsProvided")}`}
                            type="checkbox"
                            name="placementSupportsProvided"
                            value="Job coaching/mentorship"
                        />
                        <label className="form-check-label" htmlFor="Job coaching/mentorship">
                            Job coaching/mentorship
                        </label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "placementSupportsProvided")}`}
                            type="checkbox"
                            name="placementSupportsProvided"
                            value="Entry-level certification"
                        />
                        <label className="form-check-label" htmlFor="Entry-level certification">
                            Entry-level certification (such as FOODSAFE)
                        </label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "placementSupportsProvided")}`}
                            type="checkbox"
                            name="placementSupportsProvided"
                            value="Transportation"
                        />
                        <label className="form-check-label" htmlFor="Transportation">
                            Transportation
                        </label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "placementSupportsProvided")}`}
                            type="checkbox"
                            name="placementSupportsProvided"
                            value="Childcare"
                        />
                        <label className="form-check-label" htmlFor="Childcare">
                            Childcare
                        </label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "placementSupportsProvided")}`}
                            type="checkbox"
                            name="placementSupportsProvided"
                            value="other"
                        />
                        <label className="form-check-label" htmlFor="Other">
                            Other
                        </label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "placementSupportsProvided")}
                    </div>
                </div>
                {this.otherExperienceField}
            </div>
        )
    }
}

export default PlacementsForm
