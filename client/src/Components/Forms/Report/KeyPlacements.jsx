import React, { Component } from "react"
import { Field } from "formik"
import { feedBackClassName, feedBackInvalid } from "../Shared/ValidationMessages"

class KeyPlacementsForm extends Component {
    render() {
        // else return indigenous form
        return (
            <div>
                <div className="form-group">
                    <h2 id="forms">Placements</h2>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="placementSupportsUnableToProvide">
                        Were there any supports that could have assisted participants that you were unable to provide? If so, what and why?
                    </label>
                    <small className="text-muted" id="placementSupportsUnableToProvide">
                        {" "}
                        Please describe (500 characters max.){" "}
                    </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "placementSupportsUnableToProvide")}`}
                        id="placementSupportsUnableToProvide"
                        name="placementSupportsUnableToProvide"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.placementSupportsUnableToProvide.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "placementSupportsUnableToProvide")}
                </div>
            </div>
        )
    }
}

export default KeyPlacementsForm
