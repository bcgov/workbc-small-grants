import { Field } from "formik"
import React, { Component } from "react"
import { feedBackClassName, feedBackInvalid } from "../Shared/ValidationMessages"

class IndigenousForm extends Component {
    render() {
        if (this.props.intake < 2) {
            return null
        }
        // else return indigenous form
        return (
            <div>
                <div className="form-group">
                    <h2 id="forms">For Indigenous Participants Only</h2>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="livingOnReserveCommunity">
                        If you are a person living on a reserve in one of British Columbia’s First Nation communities, is the community:{" "}
                    </label>
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
                    <label className="col-form-label control-label" htmlFor="receivingAssistanceFrom">
                        If you are receiving financial assistance on a regular basis, are you receiving it from:{" "}
                    </label>
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
                        <label className="form-check-label">
                            Provincially – Ministry of Social Development and Poverty Reduction - BC Employment Assistance
                        </label>
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
                    <label className="col-form-label control-label" htmlFor="pwdDesignationOrganization">
                        Do you have Persons With Disabilities (PWD) designation? If yes, through which organization:{" "}
                    </label>
                    <Field
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "pwdDesignationOrganization")}`}
                        id="pwdDesignationOrganization"
                        name="pwdDesignationOrganization"
                    />
                    {feedBackInvalid(this.props.errors, this.props.touched, "pwdDesignationOrganization")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="ppmbDesignationOrganization">
                        Do you have designation as a Person with Persistent Multiple Barriers to employment (PPMB)? If yes, through which
                        organization:{" "}
                    </label>
                    <Field
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "ppmbDesignationOrganization")}`}
                        id="ppmbDesignationOrganization"
                        name="ppmbDesignationOrganization"
                    />
                    {feedBackInvalid(this.props.errors, this.props.touched, "ppmbDesignationOrganization")}
                </div>
                <small>
                    The Ministry of Social Development and Poverty Reduction (“SDPR”) may need to collect, use and disclose your personal information
                    to determine whether you are eligible for the Work Experience Opportunities Grant Program.
                </small>
            </div>
        )
    }
}

export default IndigenousForm
