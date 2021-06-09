import React, {Component} from 'react'
import {Field} from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class NarrativeForm extends Component{
    

    
    
    render(){
        //else return indigenous form
        return (
            <div>
                <div className="form-group">
                    <h2 id="forms">Optional Narrative Questions</h2>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="narrativeParticipantSuccessStories">Are there any participant success stories you can share?
                    </label>
                    <small className="text-muted" id="narrativeParticipantSuccessStories"> Please describe (500 characters max.) </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "narrativeParticipantSuccessStories")}`}
                        id="narrativeParticipantSuccessStories"
                        name="narrativeParticipantSuccessStories"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.narrativeParticipantSuccessStories.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "narrativeParticipantSuccessStories")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="narrativeOrganizationBenefit">How did your organization benefit from participation in the program 
                    </label>
                    <small className="text-muted" id="narrativeOrganizationBenefit"> Please describe (500 characters max.) </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "narrativeOrganizationBenefit")}`}
                        id="narrativeOrganizationBenefit"
                        name="narrativeOrganizationBenefit"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.narrativeOrganizationBenefit.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "narrativeOrganizationBenefit")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="narrativeCommunityBenefit">Please describe any community benefit resulting from your organization’s participation in the WEOG.
                    </label>
                    <small className="text-muted" id="narrativeCommunityBenefit"> Please describe (500 characters max.) </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "narrativeCommunityBenefit")}`}
                        id="narrativeCommunityBenefit"
                        name="narrativeCommunityBenefit"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.narrativeCommunityBenefit.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "narrativeCommunityBenefit")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="narrativeImproveAboutProgram">What would you improve about the program or process?
                    </label>
                    <small className="text-muted" id="narrativeImproveAboutProgram"> Please describe (500 characters max.) </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "narrativeImproveAboutProgram")}`}
                        id="narrativeImproveAboutProgram"
                        name="narrativeImproveAboutProgram"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.narrativeImproveAboutProgram.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "narrativeImproveAboutProgram")}
                </div>
            </div>
        )
    }
}

export default NarrativeForm