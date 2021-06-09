import React, {Component} from 'react'
import {Field} from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class KeyParticipantsForm extends Component{
    

    
    
    render(){
        //else return indigenous form
        return (
            <div>
                <div className="form-group">
                    <h2 id="forms">Participants</h2>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="participantEncounterProblems">Did participants encounter problems or difficulties in their placements?  If so, what were they, and how did you help solve them?
                    </label>
                    <small className="text-muted" id="participantEncounterProblems"> Please describe (500 characters max.) </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "participantEncounterProblems")}`}
                        id="participantEncounterProblems"
                        name="participantEncounterProblems"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.participantEncounterProblems.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "participantEncounterProblems")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="participantsNotAbleToStartOrComplete">If participants were not able to start or complete their placements, please explain why.
                    </label>
                    <small className="text-muted" id="participantsNotAbleToStartOrComplete"> Please describe (500 characters max.) </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "participantsNotAbleToStartOrComplete")}`}
                        id="participantsNotAbleToStartOrComplete"
                        name="participantsNotAbleToStartOrComplete"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.participantsNotAbleToStartOrComplete.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "participantsNotAbleToStartOrComplete")}
                </div>
            </div>
        )
    }
}

export default KeyParticipantsForm