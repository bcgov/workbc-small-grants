import React, { Component } from 'react'
import { Field } from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class FundingForm extends Component {

    get extraFunding() {
        if (this.props.values.fundingAdditional === "yes") {
            return (
                <div>
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="fundingAdditionalAmount">How much additional funding was used?<span
                            style={{ color: "red" }}>*</span></label>
                        <Field className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "fundingAdditionalAmount")}`} id="fundingAdditionalAmount" name="fundingAdditionalAmount" />
                        {feedBackInvalid(this.props.errors, this.props.touched, "fundingAdditionalAmount")}
                    </div>
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="fundingAdditionalUse">How was the additional funding used?<span
                            style={{ color: "red" }}>*</span></label>
                        <Field className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "fundingAdditionalUse")}`} id="fundingAdditionalUse" name="fundingAdditionalUse" />
                        {feedBackInvalid(this.props.errors, this.props.touched, "fundingAdditionalUse")}
                    </div>
                </div>
            )
        }
        return null
    }


    render() {
        return (
            <div>
                <div className="form-group">
                    <h2 id="forms">Funding</h2>
                </div>
                <div className="form-group">
                    <p>Of the total grant funding received, what amount was allocated to:</p>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label className="col-form-label control-label" htmlFor="fundingStipendAmount">Participant stipend <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "fundingStipendAmount")}`} id="fundingStipendAmount" name="fundingStipendAmount" />
                        {feedBackInvalid(this.props.errors, this.props.touched, "fundingStipendAmount")}
                    </div>
                    <div className="form-group col-md-4">
                        <label className="col-form-label control-label" htmlFor="fundingSupportsAmount">Participants supports <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "fundingSupportsAmount")}`} id="fundingSupportsAmount" name="fundingSupportsAmount" />
                        {feedBackInvalid(this.props.errors, this.props.touched, "fundingSupportsAmount")}
                    </div>
                    <div className="form-group col-md-4">
                        <label className="col-form-label control-label" htmlFor="fundingAdministrationOperationalExpense">Administration/Operational expenses <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "fundingAdministrationOperationalExpense")}`} id="fundingAdministrationOperationalExpense" name="fundingAdministrationOperationalExpense" />
                        {feedBackInvalid(this.props.errors, this.props.touched, "fundingAdministrationOperationalExpense")}
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="fundingAdditional">Was additional funding beyond the grant used to support participants? <span style={{ color: "red" }}>*</span></label>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "fundingAdditional")}`}
                            type="radio"
                            name="fundingAdditional"
                            value="yes"
                            onChange={e => {
                                this.props.handleChange(e)
                                this.props.setFieldValue("fundingAdditionalAmount", "")
                                this.props.setFieldValue("fundingAdditionalUse", "")
                            }}
                        />
                        <label className="form-check-label" htmlFor="yes">Yes</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "fundingAdditional")}`}
                            type="radio"
                            name="fundingAdditional"
                            value="no"
                            onChange={e => {
                                this.props.handleChange(e)
                                this.props.setFieldValue("fundingAdditionalAmount", "")
                                this.props.setFieldValue("fundingAdditionalUse", "")
                            }}
                        />
                        <label className="form-check-label" htmlFor="no">No</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "fundingAdditional")}
                    </div>
                </div>
                {this.extraFunding}
            </div>
        )
    }
}

export default FundingForm