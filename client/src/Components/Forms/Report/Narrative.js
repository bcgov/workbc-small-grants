import React, {Component} from 'react'
import {Field} from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class NarrativeForm extends Component{
    

    
    
    render(){
        //else return indigenous form
        return (
            <div>
                <div className="form-group">
                    <h2 id="forms">Other Outcomes</h2>
                </div>
                <div className="form-group">
                    <p>These questions are optional but will help us understand the success of the program.</p>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="narrativeParticipantSuccessStories">Are there any participant success stories you can share?
                    </label>
                    <small className="text-muted" id="narrativeParticipantSuccessStories"> Please describe (5000 characters max.) </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "narrativeParticipantSuccessStories")}`}
                        id="narrativeParticipantSuccessStories"
                        name="narrativeParticipantSuccessStories"
                        rows="4"
                        maxLength="5000"
                    />
                    <small>{this.props.values.narrativeParticipantSuccessStories.length}/5000</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "narrativeParticipantSuccessStories")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="narrativeOrganizationBenefit">How did your organization benefit from participation in the program 
                    </label>
                    <small className="text-muted" id="narrativeOrganizationBenefit"> Please describe (5000 characters max.) </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "narrativeOrganizationBenefit")}`}
                        id="narrativeOrganizationBenefit"
                        name="narrativeOrganizationBenefit"
                        rows="4"
                        maxLength="5000"
                    />
                    <small>{this.props.values.narrativeOrganizationBenefit.length}/5000</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "narrativeOrganizationBenefit")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="narrativeCommunityBenefit">Please describe any community benefit resulting from your organization’s participation in the WEOG.
                    </label>
                    <small className="text-muted" id="narrativeCommunityBenefit"> Please describe (5000 characters max.) </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "narrativeCommunityBenefit")}`}
                        id="narrativeCommunityBenefit"
                        name="narrativeCommunityBenefit"
                        rows="4"
                        maxLength="5000"
                    />
                    <small>{this.props.values.narrativeCommunityBenefit.length}/5000</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "narrativeCommunityBenefit")}
                </div>
            </div>
        )
    }
}

export default NarrativeForm