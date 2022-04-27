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
                    <div className="form-group col-6">
                        <label className="col-form-label control-label" htmlFor="fundingStipendAmount">Participant stipend <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "fundingStipendAmount")}`} id="fundingStipendAmount" name="fundingStipendAmount" />
                        {feedBackInvalid(this.props.errors, this.props.touched, "fundingStipendAmount")}
                    </div>
                    <div className="form-group col-6">
                        <label className="col-form-label control-label" htmlFor="fundingSupportsAmount">Participants supports and Administration/Operational expenses <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "fundingSupportsAmount")}`} id="fundingSupportsAmount" name="fundingSupportsAmount" />
                        {feedBackInvalid(this.props.errors, this.props.touched, "fundingSupportsAmount")}
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
                                this.props.setFieldValue("fundingAdditionalAmount", "0")
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
                                this.props.setFieldValue("fundingAdditionalAmount", "0")
                                this.props.setFieldValue("fundingAdditionalUse", "")
                            }}
                        />
                        <label className="form-check-label" htmlFor="no">No</label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "fundingAdditional")}
                    </div>
                </div>
                {this.extraFunding}
                <div className="form-row mb-3">
                    <div className="ml-4">
                        <Field
                            className={`form-check-input ${feedBackClassName(this.props.errors, this.props.touched, "recipientCertified")}`}
                            type="checkbox"
                            name="recipientCertified"
                        />
                    </div>
                    <div className="ml-5">
                        <div>
                            <Field
                                className={`${feedBackClassName(this.props.errors, this.props.touched, "recipientCertifiedName")}`}
                                type="text"
                                name="recipientCertifiedName"
                                placeholder="Organization Name"
                            />
                            &nbsp; certify that all participants received a stipend of a minimum of $300 per week, and the hours of participation did not result in any participant receiving compensation below minimum wage.  
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default FundingForm