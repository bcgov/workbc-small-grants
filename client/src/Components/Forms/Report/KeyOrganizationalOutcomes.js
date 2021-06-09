import React, {Component} from 'react'
import {Field} from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class KeyOrganizationalOutcomesForm extends Component{
    

    
    
    render(){
        //else return indigenous form
        return (
            <div>
                <div className="form-group">
                    <h2 id="forms">Organizational Outcomes</h2>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="organizationOutcomesBenefitFromProgram">How did your organization benefit from participation in the program?
                    </label>
                    <small className="text-muted" id="organizationOutcomesBenefitFromProgram"> Please describe (500 characters max.) </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "organizationOutcomesBenefitFromProgram")}`}
                        id="organizationOutcomesBenefitFromProgram"
                        name="organizationOutcomesBenefitFromProgram"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.organizationOutcomesBenefitFromProgram.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "organizationOutcomesBenefitFromProgram")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="organizationOutcomesCommunityBenefit">Please describe any community benefit resulting from your organization’s participation in the WEOG.
                    </label>
                    <small className="text-muted" id="organizationOutcomesCommunityBenefit"> Please describe (500 characters max.) </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "organizationOutcomesCommunityBenefit")}`}
                        id="organizationOutcomesCommunityBenefit"
                        name="organizationOutcomesCommunityBenefit"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.organizationOutcomesCommunityBenefit.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "organizationOutcomesCommunityBenefit")}
                </div>
            </div>
        )
    }
}

export default KeyOrganizationalOutcomesForm