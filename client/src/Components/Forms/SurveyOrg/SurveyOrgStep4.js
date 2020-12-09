import React, { Component } from 'react'
import { Field } from 'formik'

class SurveyOrgStep4 extends Component {

    render() {
        if (this.props.currentStep !== 4) {
            return null
        }
        //else return step 4
        return (
            <div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="experienceBetterComments">4a. How can we make your experience better? Please feel free to include any other comments or feedback. 
                </label>
                    <small className="text-muted" id="experienceBetterComments"> (1000 characters max.)</small>
                    <Field
                        as="textarea"
                        className="form-control"
                        id="experienceBetterComments"
                        name="experienceBetterComments"
                        rows="4"
                        maxLength="1000"
                    />
                    <small>{this.props.values.experienceBetterComments.length}/1000</small>
                </div>
                <button
                    className="btn btn-success btn-block"
                    type="submit"
                    style={{ marginBottom: "2rem" }}
                    disabled={this.props.isSubmitting || this.props.hasError}
                >
                    {
                    this.props.isSubmitting ?
                        <div>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                              Submitting...
                        </div>
                        :
                        "Submit"

                    }                      
                
                </button>
            </div>
        )
    }
}

export default SurveyOrgStep4