import React, { Component } from 'react'
import { Field } from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class ParticipantsOutcomesForm extends Component {

    get getOtherParticipantOutcome() {
        if (this.props.values.numberOfParticipantsOther !== "0" && this.props.values.numberOfParticipantsOther !== "") {
            return (
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="numberOfParticipantsOtherDescribe">Please explain <span
                        style={{ color: "red" }}>*</span>
                    </label>
                    <small className="text-muted" id="numberOfParticipantsOtherDescribe"> 500 characters max</small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsOtherDescribe")}`}
                        id="numberOfParticipantsOtherDescribe"
                        name="numberOfParticipantsOtherDescribe"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.numberOfParticipantsOtherDescribe.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsOtherDescribe")}
                </div>
            )
        }
        return null
    }

    render() {
        //else return indigenous form
        return (
            <div>
                <div className="form-group">
                    <h2 id="forms">Participant Outcomes</h2>
                </div>
                <div className="form-group">
                    <p>To the best of your knowledge, please indicate any changes in participant employment status as a result of their participation in the Work Experience Opportunities Grant program. For each comment below, please indicate the number of participants that the comment relates to.</p>
                    <p>After the program concluded, how many:</p>
                </div>
                <div className="form-group">
                <label className="col-form-label control-label" htmlFor="numberOfParticipantsStayedInPosition">Participants stayed in their positions and were hired by my organization<span
                        style={{ color: "red" }}>*</span></label>
                </div>
                <div className="form-group mx-auto">
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsStayedInPosition")}`}
                                type="radio"
                                name="numberOfParticipantsStayedInPosition"
                                value="0"
                            />
                            <label className="form-check-label">0</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsStayedInPosition")}`}
                                type="radio"
                                name="numberOfParticipantsStayedInPosition"
                                value="1"
                            />
                            <label className="form-check-label">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsStayedInPosition")}`}
                                type="radio"
                                name="numberOfParticipantsStayedInPosition"
                                value="2"
                            />
                            <label className="form-check-label">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsStayedInPosition")}`}
                                type="radio"
                                name="numberOfParticipantsStayedInPosition"
                                value="3"
                            />
                            <label className="form-check-label">3</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsStayedInPosition")}`}
                                type="radio"
                                name="numberOfParticipantsStayedInPosition"
                                value="4"
                            />
                            <label className="form-check-label">4</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsStayedInPosition")}`}
                                type="radio"
                                name="numberOfParticipantsStayedInPosition"
                                value="5"
                            />
                            <label className="form-check-label">5</label>
                
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsStayedInPosition")}`}
                                type="radio"
                                name="numberOfParticipantsStayedInPosition"
                                value="6"
                            />
                            <label className="form-check-label">6</label>
                
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsStayedInPosition")}`}
                                type="radio"
                                name="numberOfParticipantsStayedInPosition"
                                value="7"
                            />
                            <label className="form-check-label">7</label>
                
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsStayedInPosition")}`}
                                type="radio"
                                name="numberOfParticipantsStayedInPosition"
                                value="8"
                            />
                            <label className="form-check-label">8</label>
                
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsStayedInPosition")}`}
                                type="radio"
                                name="numberOfParticipantsStayedInPosition"
                                value="9"
                            />
                            <label className="form-check-label">9</label>
                
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsStayedInPosition")}`}
                                type="radio"
                                name="numberOfParticipantsStayedInPosition"
                                value="10"
                            />
                            <label className="form-check-label">10</label> 
                            {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsStayedInPosition")}
                        </div>
                    {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsStayedInPosition")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="numberOfParticipantsHiredDifferentRole">Participants were hired by my organization into a new/different role<span
                        style={{ color: "red" }}>*</span></label>
                </div>
                <div className="form-group mx-auto">
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsHiredDifferentRole")}`}
                                type="radio"
                                name="numberOfParticipantsHiredDifferentRole"
                                value="0"
                            />
                            <label className="form-check-label">0</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsHiredDifferentRole")}`}
                                type="radio"
                                name="numberOfParticipantsHiredDifferentRole"
                                value="1"
                            />
                            <label className="form-check-label">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsHiredDifferentRole")}`}
                                type="radio"
                                name="numberOfParticipantsHiredDifferentRole"
                                value="2"
                            />
                            <label className="form-check-label">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsHiredDifferentRole")}`}
                                type="radio"
                                name="numberOfParticipantsHiredDifferentRole"
                                value="3"
                            />
                            <label className="form-check-label">3</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsHiredDifferentRole")}`}
                                type="radio"
                                name="numberOfParticipantsHiredDifferentRole"
                                value="4"
                            />
                            <label className="form-check-label">4</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsHiredDifferentRole")}`}
                                type="radio"
                                name="numberOfParticipantsHiredDifferentRole"
                                value="5"
                            />
                            <label className="form-check-label">5</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsHiredDifferentRole")}`}
                                type="radio"
                                name="numberOfParticipantsHiredDifferentRole"
                                value="6"
                            />
                            <label className="form-check-label">6</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsHiredDifferentRole")}`}
                                type="radio"
                                name="numberOfParticipantsHiredDifferentRole"
                                value="7"
                            />
                            <label className="form-check-label">7</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsHiredDifferentRole")}`}
                                type="radio"
                                name="numberOfParticipantsHiredDifferentRole"
                                value="8"
                            />
                            <label className="form-check-label">8</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsHiredDifferentRole")}`}
                                type="radio"
                                name="numberOfParticipantsHiredDifferentRole"
                                value="9"
                            />
                            <label className="form-check-label">9</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsHiredDifferentRole")}`}
                                type="radio"
                                name="numberOfParticipantsHiredDifferentRole"
                                value="10"
                            />
                            <label className="form-check-label">10</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsHiredDifferentRole")}
                        </div>
                    {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsHiredDifferentRole")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="numberOfParticipantsFoundEmploymentElsewhere">Participants found employment elsewhere<span
                        style={{ color: "red" }}>*</span></label>
                </div>
                <div className="form-group mx-auto">
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsFoundEmploymentElsewhere")}`}
                                type="radio"
                                name="numberOfParticipantsFoundEmploymentElsewhere"
                                value="0"
                            />
                            <label className="form-check-label">0</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsFoundEmploymentElsewhere")}`}
                                type="radio"
                                name="numberOfParticipantsFoundEmploymentElsewhere"
                                value="1"
                            />
                            <label className="form-check-label">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsFoundEmploymentElsewhere")}`}
                                type="radio"
                                name="numberOfParticipantsFoundEmploymentElsewhere"
                                value="2"
                            />
                            <label className="form-check-label">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsFoundEmploymentElsewhere")}`}
                                type="radio"
                                name="numberOfParticipantsFoundEmploymentElsewhere"
                                value="3"
                            />
                            <label className="form-check-label">3</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsFoundEmploymentElsewhere")}`}
                                type="radio"
                                name="numberOfParticipantsFoundEmploymentElsewhere"
                                value="4"
                            />
                            <label className="form-check-label">4</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsFoundEmploymentElsewhere")}`}
                                type="radio"
                                name="numberOfParticipantsFoundEmploymentElsewhere"
                                value="5"
                            />
                            <label className="form-check-label">5</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsFoundEmploymentElsewhere")}`}
                                type="radio"
                                name="numberOfParticipantsFoundEmploymentElsewhere"
                                value="6"
                            />
                            <label className="form-check-label">6</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsFoundEmploymentElsewhere")}`}
                                type="radio"
                                name="numberOfParticipantsFoundEmploymentElsewhere"
                                value="7"
                            />
                            <label className="form-check-label">7</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsFoundEmploymentElsewhere")}`}
                                type="radio"
                                name="numberOfParticipantsFoundEmploymentElsewhere"
                                value="8"
                            />
                            <label className="form-check-label">8</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsFoundEmploymentElsewhere")}`}
                                type="radio"
                                name="numberOfParticipantsFoundEmploymentElsewhere"
                                value="9"
                            />
                            <label className="form-check-label">9</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsFoundEmploymentElsewhere")}`}
                                type="radio"
                                name="numberOfParticipantsFoundEmploymentElsewhere"
                                value="10"
                            />
                            <label className="form-check-label">10</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsFoundEmploymentElsewhere")}
                        </div>
                    {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsFoundEmploymentElsewhere")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="numberOfParticipantsConnectedToWorkBC">Participants were connected to WorkBC to receive additional supports<span
                        style={{ color: "red" }}>*</span></label>
                </div>
                <div className="form-group mx-auto">
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsConnectedToWorkBC")}`}
                                type="radio"
                                name="numberOfParticipantsConnectedToWorkBC"
                                value="0"
                            />
                            <label className="form-check-label">0</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsConnectedToWorkBC")}`}
                                type="radio"
                                name="numberOfParticipantsConnectedToWorkBC"
                                value="1"
                            />
                            <label className="form-check-label">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsConnectedToWorkBC")}`}
                                type="radio"
                                name="numberOfParticipantsConnectedToWorkBC"
                                value="2"
                            />
                            <label className="form-check-label">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsConnectedToWorkBC")}`}
                                type="radio"
                                name="numberOfParticipantsConnectedToWorkBC"
                                value="3"
                            />
                            <label className="form-check-label">3</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsConnectedToWorkBC")}`}
                                type="radio"
                                name="numberOfParticipantsConnectedToWorkBC"
                                value="4"
                            />
                            <label className="form-check-label">4</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsConnectedToWorkBC")}`}
                                type="radio"
                                name="numberOfParticipantsConnectedToWorkBC"
                                value="5"
                            />
                            <label className="form-check-label">5</label>
                    
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsConnectedToWorkBC")}`}
                                type="radio"
                                name="numberOfParticipantsConnectedToWorkBC"
                                value="6"
                            />
                            <label className="form-check-label">6</label>
                    
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsConnectedToWorkBC")}`}
                                type="radio"
                                name="numberOfParticipantsConnectedToWorkBC"
                                value="7"
                            />
                            <label className="form-check-label">7</label>
                    
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsConnectedToWorkBC")}`}
                                type="radio"
                                name="numberOfParticipantsConnectedToWorkBC"
                                value="8"
                            />
                            <label className="form-check-label">8</label>
                    
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsConnectedToWorkBC")}`}
                                type="radio"
                                name="numberOfParticipantsConnectedToWorkBC"
                                value="9"
                            />
                            <label className="form-check-label">9</label>
                    
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsConnectedToWorkBC")}`}
                                type="radio"
                                name="numberOfParticipantsConnectedToWorkBC"
                                value="10"
                            />
                            <label className="form-check-label">10</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsConnectedToWorkBC")}
                        </div>
                    {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsConnectedToWorkBC")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg">Participants will continue to receive employment-related services and supports from my organization<span
                        style={{ color: "red" }}>*</span></label>
                </div>
                <div className="form-group mx-auto">
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg"
                                value="0"
                            />
                            <label className="form-check-label">0</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg"
                                value="1"
                            />
                            <label className="form-check-label">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg"
                                value="2"
                            />
                            <label className="form-check-label">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg"
                                value="3"
                            />
                            <label className="form-check-label">3</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg"
                                value="4"
                            />
                            <label className="form-check-label">4</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg"
                                value="5"
                            />
                            <label className="form-check-label">5</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg"
                                value="6"
                            />
                            <label className="form-check-label">6</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg"
                                value="7"
                            />
                            <label className="form-check-label">7</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg"
                                value="8"
                            />
                            <label className="form-check-label">8</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg"
                                value="9"
                            />
                            <label className="form-check-label">9</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg"
                                value="10"
                            />
                            <label className="form-check-label">10</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg")}
                        </div>
                    {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg">Participants will receive employment-related services and supports through another organization<span
                        style={{ color: "red" }}>*</span></label>
                </div>
                <div className="form-group mx-auto">
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg"
                                value="0"
                            />
                            <label className="form-check-label">0</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg"
                                value="1"
                            />
                            <label className="form-check-label">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg"
                                value="2"
                            />
                            <label className="form-check-label">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg"
                                value="3"
                            />
                            <label className="form-check-label">3</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg"
                                value="4"
                            />
                            <label className="form-check-label">4</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg"
                                value="5"
                            />
                            <label className="form-check-label">5</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg"
                                value="6"
                            />
                            <label className="form-check-label">6</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg"
                                value="7"
                            />
                            <label className="form-check-label">7</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg"
                                value="8"
                            />
                            <label className="form-check-label">8</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg"
                                value="9"
                            />
                            <label className="form-check-label">9</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg")}`}
                                type="radio"
                                name="numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg"
                                value="10"
                            />
                            <label className="form-check-label">10</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg")}
                        </div>
                    {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="numberOfParticipantsOther">Other<span
                        style={{ color: "red" }}>*</span></label>
                </div>
                <div className="form-group mx-auto">
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsOther")}`}
                                type="radio"
                                name="numberOfParticipantsOther"
                                value="0"
                            />
                            <label className="form-check-label">0</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsOther")}`}
                                type="radio"
                                name="numberOfParticipantsOther"
                                value="1"
                            />
                            <label className="form-check-label">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsOther")}`}
                                type="radio"
                                name="numberOfParticipantsOther"
                                value="2"
                            />
                            <label className="form-check-label">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsOther")}`}
                                type="radio"
                                name="numberOfParticipantsOther"
                                value="3"
                            />
                            <label className="form-check-label">3</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsOther")}`}
                                type="radio"
                                name="numberOfParticipantsOther"
                                value="4"
                            />
                            <label className="form-check-label">4</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsOther")}`}
                                type="radio"
                                name="numberOfParticipantsOther"
                                value="5"
                            />
                            <label className="form-check-label">5</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsOther")}`}
                                type="radio"
                                name="numberOfParticipantsOther"
                                value="6"
                            />
                            <label className="form-check-label">6</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsOther")}`}
                                type="radio"
                                name="numberOfParticipantsOther"
                                value="7"
                            />
                            <label className="form-check-label">7</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsOther")}`}
                                type="radio"
                                name="numberOfParticipantsOther"
                                value="8"
                            />
                            <label className="form-check-label">8</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsOther")}`}
                                type="radio"
                                name="numberOfParticipantsOther"
                                value="9"
                            />
                            <label className="form-check-label">9</label>
                            
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "numberOfParticipantsOther")}`}
                                type="radio"
                                name="numberOfParticipantsOther"
                                value="10"
                            />
                            <label className="form-check-label">10</label>
                            {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsOther")}
                        </div>
                    {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsOther")}
                </div>
                {this.getOtherParticipantOutcome}           
            </div>
        )
    }
}

export default ParticipantsOutcomesForm