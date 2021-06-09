import React, {Component} from 'react'
import {Field} from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class ParticipantsForm extends Component{
    

    get participantsNotAbleToComplete() {
        if (this.props.values.participantsAllCompletedPlacement === "no") {
            return (
                <div>
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="participantsNotAbleToComplete">How many participants were not able to complete their placements?<span
                            style={{ color: "red" }}>*</span></label>
                        <Field
                            as="select"
                            className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "participantsNotAbleToComplete")}`}
                            id="participantsNotAbleToComplete"
                            name="participantsNotAbleToComplete"
                        >
                            <option value="">Please select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </Field>
                        {feedBackInvalid(this.props.errors, this.props.touched, "participantsNotAbleToComplete")}
                    </div>
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="participantsAbleToFindNew">Were you able to find new participants to complete the remainder of the placement?: <span style={{ color: "red" }}>*</span></label>
                        <div className="form-check">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "participantsAbleToFindNew")}`}
                                type="radio"
                                name="participantsAbleToFindNew"
                                value="yes"
                                onChange={e => {
                                    this.props.handleChange(e)

                                }}
                            />
                            <label className="form-check-label" htmlFor="yes">Yes</label>
                        </div>
                        <div className="form-check">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "participantsAbleToFindNew")}`}
                                type="radio"
                                name="participantsAbleToFindNew"
                                value="no"
                                onChange={e => {
                                    this.props.handleChange(e)

                                }}
                            />
                            <label className="form-check-label" htmlFor="no">No</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, "participantsAbleToFindNew")}
                        </div>
                    </div> 
                </div>
            )
        }
        return null
    }

    get participantNotAbleToFindNew() {
        if (this.props.values.participantsAbleToFindNew === "no") {
            return (
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="participantsAbleToFindNewNoExplain">Please explain <span
                        style={{ color: "red" }}>*</span></label>
                    <Field className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "participantsAbleToFindNewNoExplain")}`} id="participantsAbleToFindNewNoExplain" name="participantsAbleToFindNewNoExplain" />
                    {feedBackInvalid(this.props.errors, this.props.touched, "participantsAbleToFindNewNoExplain")}
                </div>
            )
        }
        return null
    }
    
    
    render(){
        return (
            <div>
                <div className="form-group">
                    <h2 id="forms">Participants</h2>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="participantsHoursPerWeek">On average, how many hours per week were participants able to participate in the work experience placement? <span
                        style={{ color: "red" }}>*</span></label>
                    <Field className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "participantsHoursPerWeek")}`} id="participantsHoursPerWeek" name="participantsHoursPerWeek" />
                    {feedBackInvalid(this.props.errors, this.props.touched, "participantsHoursPerWeek")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="participantsAllCompletedPlacement">Were all participants who began a work experience placement able to complete it?: <span style={{ color: "red" }}>*</span></label>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "participantsAllCompletedPlacement")}`}
                            type="radio"
                            name="participantsAllCompletedPlacement"
                            value="yes"
                            onChange={e => {
                                this.props.handleChange(e)
                                this.props.setFieldValue("participantsNotAbleToComplete", "")
                                this.props.setFieldValue("participantsAbleToFindNew", "")
                                this.props.setFieldValue("participantsAbleToFindNewNoExplain", "")
                            }}
                        />
                        <label className="form-check-label" htmlFor="yes">Yes</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "participantsAllCompletedPlacement")}`}
                            type="radio"
                            name="participantsAllCompletedPlacement"
                            value="no"
                            onChange={e => {
                                this.props.handleChange(e)
                                this.props.setFieldValue("participantsNotAbleToComplete", "")
                                this.props.setFieldValue("participantsAbleToFindNew", "")
                                this.props.setFieldValue("participantsAbleToFindNewNoExplain", "")
                            }}
                        />
                        <label className="form-check-label" htmlFor="no">No</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "participantsAllCompletedPlacement")}
                    </div>
                </div>   
                {this.participantsNotAbleToComplete}
                {this.participantNotAbleToFindNew}          
            </div>
        )
    }
}

export default ParticipantsForm