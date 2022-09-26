import React, { Component } from "react"
import { Field } from "formik"
import { feedBackClassName, feedBackInvalid } from "../Shared/ValidationMessages"

class RecruitmentForm extends Component {
    get otherRecruitmentSource() {
        if (this.props.values.recruitmentParticipantsSource.indexOf("other") > -1) {
            return (
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="recruitmentOtherSourceExplain">
                        Other <span style={{ color: "red" }}>*</span>
                    </label>
                    <small className="text-muted" id="recruitmentOtherSourceExplain">
                        {" "}
                        Please describe (500 characters max.){" "}
                    </small>
                    <Field
                        as="textarea"
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "recruitmentOtherSourceExplain")}`}
                        id="recruitmentOtherSourceExplain"
                        name="recruitmentOtherSourceExplain"
                        rows="4"
                        maxLength="500"
                    />
                    <small>{this.props.values.recruitmentOtherSourceExplain.length}/500</small>
                    {feedBackInvalid(this.props.errors, this.props.touched, "recruitmentOtherSourceExplain")}
                </div>
            )
        }
        return null
    }

    render() {
        // else return indigenous form
        return (
            <div>
                <div className="form-group">
                    <h2 id="forms">Recruitment</h2>
                </div>
                <div className="form-group">
                    <label className="control-label">
                        Where did you find participants:
                        <span style={{ color: "red" }}>*</span>
                    </label>
                    <small className="text-muted"> Please select all that apply</small>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(
                                this.props.errors,
                                this.props.touched,
                                "recruitmentParticipantsSource"
                            )}`}
                            type="checkbox"
                            name="recruitmentParticipantsSource"
                            value="Own Client Rosters"
                        />
                        <label className="form-check-label" htmlFor="Own Client Rosters">
                            Your own client rosters/contact lists
                        </label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(
                                this.props.errors,
                                this.props.touched,
                                "recruitmentParticipantsSource"
                            )}`}
                            type="checkbox"
                            name="recruitmentParticipantsSource"
                            value="Postings in the community"
                        />
                        <label className="form-check-label" htmlFor="Postings in the community">
                            Postings in the community
                        </label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(
                                this.props.errors,
                                this.props.touched,
                                "recruitmentParticipantsSource"
                            )}`}
                            type="checkbox"
                            name="recruitmentParticipantsSource"
                            value="Social media"
                        />
                        <label className="form-check-label" htmlFor="Social media">
                            Social media
                        </label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(
                                this.props.errors,
                                this.props.touched,
                                "recruitmentParticipantsSource"
                            )}`}
                            type="checkbox"
                            name="recruitmentParticipantsSource"
                            value="Networking with other organizations"
                        />
                        <label className="form-check-label" htmlFor="Networking with other organizations">
                            Networking with other organizations
                        </label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(
                                this.props.errors,
                                this.props.touched,
                                "recruitmentParticipantsSource"
                            )}`}
                            type="checkbox"
                            name="recruitmentParticipantsSource"
                            value="Recruitment assistance from WorkBC"
                        />
                        <label className="form-check-label" htmlFor="Recruitment assistance from WorkBC">
                            Recruitment assistance from WorkBC
                        </label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(
                                this.props.errors,
                                this.props.touched,
                                "recruitmentParticipantsSource"
                            )}`}
                            type="checkbox"
                            name="recruitmentParticipantsSource"
                            value="other"
                        />
                        <label className="form-check-label" htmlFor="Other">
                            Other
                        </label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "recruitmentParticipantsSource")}
                    </div>
                </div>
                {this.otherRecruitmentSource}
                {/*
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="livingOnReserveCommunity">Where did you find participants (please select all that apply): </label>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "livingOnReserveCommunity")}`}
                            type="radio"
                            name="livingOnReserveCommunity"
                            value="treaty"
                        />
                        <label className="form-check-label">Treaty</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "livingOnReserveCommunity")}`}
                            type="radio"
                            name="livingOnReserveCommunity"
                            value="nonTreaty"
                        />
                        <label className="form-check-label">Non Treaty</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "livingOnReserveCommunity")}
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="receivingAssistanceFrom">If you are receiving financial assistance on a regular basis, are you receiving it from: </label>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "receivingAssistanceFrom")}`}
                            type="radio"
                            name="receivingAssistanceFrom"
                            value="federally"
                        />
                        <label className="form-check-label">Federally - Indigenous Services Canada</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "receivingAssistanceFrom")}`}
                            type="radio"
                            name="receivingAssistanceFrom"
                            value="provincially"
                        />
                        <label className="form-check-label">Provincially – Ministry of Social Development and Poverty Reduction - BC Employment Assistance</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "receivingAssistanceFrom")}`}
                            type="radio"
                            name="receivingAssistanceFrom"
                            value="other"
                        />
                        <label className="form-check-label">Other</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "receivingAssistanceFrom")}
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="pwdDesignationOrganization">Do you have Persons With Disabilities (PWD) designation? If yes, through which organization: </label>
                    <Field className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "pwdDesignationOrganization")}`} id="pwdDesignationOrganization" name="pwdDesignationOrganization" />
                    {feedBackInvalid(this.props.errors, this.props.touched, "pwdDesignationOrganization")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="ppmbDesignationOrganization">Do you have designation as a Person with Persistent Multiple Barriers to employment (PPMB)? If yes, through which organization: </label>
                    <Field className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "ppmbDesignationOrganization")}`} id="ppmbDesignationOrganization" name="ppmbDesignationOrganization" />
                    {feedBackInvalid(this.props.errors, this.props.touched, "ppmbDesignationOrganization")}
                </div>
                <small>The Ministry of Social Development and Poverty Reduction (“SDPR”) may need to collect, use and disclose your personal information to determine whether you are eligible for the Work Experience Opportunities Grant Program.</small>
                */}
            </div>
        )
    }
}

export default RecruitmentForm
