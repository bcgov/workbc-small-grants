import React, {Component} from 'react'
import {Field} from 'formik'

class FormStep2 extends Component {
    render() {
        if (this.props.currentStep !== 2) {
            return null
        }
        //Else return step 2
        return (
            <div>
                <div className="form-group">
                    <h2 id="forms">Opportunity Details</h2>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="workExperience">Work Experience <span
                        style={{color:"red"}}>*</span>
                    </label>
                    <small className="text-muted" id="locations">Please describe in 250 words your organization’s proposal and what tasks will these individuals be doing?</small>
                    <Field
                        as="textarea"
                        className="form-control"
                        id="workExperience" 
                        name="workExperience"
                        rows="5"
                    />
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="stipend">What stipend amount are you providing to the individual?</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                        </div>
                        <Field
                            className="form-control"
                            id="stipend"
                            name="stipend"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default FormStep2