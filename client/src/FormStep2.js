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
                        rows="4"
                    />
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="stipend">Enter the total amount of stipend provided to the individual. </label>
                    <small className="text-muted" id="stipend"> A minimum of $3600 required. For additional details see the <a href="#guidelines">application guidelines.</a></small>
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
                <div className="form-group">
                    <h2 id="forms">Work Experiences</h2>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="experiences" value="option1" />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Experience 1</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="experiences" value="option2" />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Experience 2</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="experiences" value="option3" />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">Experience 3</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="experiences" value="option4" />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Experience 4</label>
                        </div>                   
                    </div>
                    <div className="form-group col-md-4">
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="experiences" value="option5" />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Experience 5</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="experiences" value="option6" />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Experience 6</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="experiences" value="option7" />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">Experience 7</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="experiences" value="option8" />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Experience 8</label>
                        </div>                   
                    </div>
                    <div className="form-group col-md-4">
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="experiences" value="option9" />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Experience 9</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="experiences" value="option10" />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Experience 10</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="experiences" value="option11" />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">Experience 11</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="experiences" value="option12" />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">Experience 12</label>
                        </div>                       
                    </div>
                </div>

            </div>
        )
    }
}

export default FormStep2