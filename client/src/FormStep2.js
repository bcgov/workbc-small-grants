import React, {Component} from 'react'

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
                    <textarea
                        className="form-control"
                        id="workExperience" 
                        name="workExperience"
                        rows="5"
                        onChange={this.props.handleChange}
                        value={this.props.workExperience}
                    />
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="stipend">What stipend amount are you providing to the individual?</label>
                    <input 
                        type="text" 
                        className="form-control"
                        id="stipend"
                        name="stipend"
                        onChange={this.props.handleChange}
                        value={this.props.stipend}
                    />
                </div>
            </div>
        )
    }
}

export default FormStep2