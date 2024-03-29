import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import '../../../utils/polyfills'
import ClientConsent from './ClientConsent'
import { ClientFormValidationSchema } from './ClientFormValidationSchema'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'
import { generateAlert } from '../Shared/Alert'
import { DatePickerField } from '../Shared/DatePickerField'
import { FORM_URL } from '../../../constants/form'
//import IndigenousForm from './IndigenousForm'

class ClientForm extends Component {
    constructor() {
        super()
        this.state = {
            _csrf: '',
            _intake: '',
            _date: new Date().toDateString(),
            hasError: false,
        }
    }
    componentDidMount() {
        fetch(FORM_URL.clientForm, {
            credentials: "include"
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        _csrf: result.csrfToken,
                    })
                },
                (error) => {
                    this.setState({
                        hasError: true
                    })
                }
            )
        if (this.props.match.path === "/participantForm/4/:id?") {
            this.setState({ "_intake": "4" })
        } else if (this.props.match.path === "/participantForm/2/:id?") {
            this.setState({ "_intake": "2" })
        } else if (this.props.match.path === "/participantForm/3/:id?") {
            this.setState({ "_intake": "3" })
        } else if (this.props.match.path === "/clientForm/:id?") {
            this.setState({ "_intake": "1" })
        }
    }


    handleApplicationId(id, hasId, errors, touched) {
        console.log(id.length)
        if (id === "" || (id.length !== 10 && id.length !== 15)) {
            //show non id handler
            return (
                <div>
                    <p>Please follow the link provided to you via email, or provide the application ID below. Alternatively, check the box below and provide the organization name.</p>
                    <div className="form-group">
                        <div className="form-check">
                            <Field type="checkbox" className={`form-check-input ${feedBackClassName(errors, touched, "noOrgId")}`} id="noOrgId"
                                name="noOrgId" />
                            <label className="form-check-label" htmlFor="noOrgId">I don't have an application ID.</label>
                        </div>
                    </div>
                    {hasId ?
                        (
                            <div className="form-group">
                                <label className="col-form-label control-label" htmlFor="organizationNameM">Organization Name <span
                                    style={{ color: "red" }}>*</span></label>
                                <small className="text-muted" id="clientAddress1"> Please provide the full organization name.</small>
                                <Field className={`form-control ${feedBackClassName(errors, touched, "organizationNameM")}`} id="organizationNameM" name="organizationNameM" />
                                {feedBackInvalid(errors, touched, "organizationNameM")}
                            </div>
                        )
                        :
                        (
                            <div className="form-group">
                                <label className="col-form-label control-label" htmlFor="applicationIdM">Application ID <span
                                    style={{ color: "red" }}>*</span></label>
                                <small className="text-muted" id="clientAddress1"> Please provide the 10 or 15 character ID.</small>
                                <Field className={`form-control ${feedBackClassName(errors, touched, "applicationIdM")}`} id="applicationIdM" name="applicationIdM" />
                                {feedBackInvalid(errors, touched, "applicationIdM")}
                            </div>
                        )
                    }


                </div>
            )
        } else {
            //display the id
            return (
                <p>Application ID: {id}</p>
            )
        }
    }

    showErrors(errors, submitCount) {
        if (submitCount > 0) {
            return (
                <div>
                    <p>Please correct the following errors:</p>
                    <ul>
                        {Object.values(errors).map((error, i) => (
                            <li key={i}>{error}</li>
                        ))}
                    </ul>
                </div>
            )
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        <Formik
                            initialValues={{
                                _csrf: this.state._csrf,
                                _intake: this.state._intake,
                                _savedToSP: false,
                                _date: this.state._date,
                                applicationId: (typeof this.props.match.params.id !== 'undefined') ? this.props.match.params.id : '',
                                applicationIdM: '',
                                organizationNameM: '',
                                noOrgId: false,
                                clientName: '',
                                clientLastName: '',
                                clientDOB: '',
                                clientEmail: '',
                                clientAddress1: '',
                                clientAddress2: '',
                                approximateHours: '',
                                receivingAssistanceFromFirstNationOrTribalCouncil: '',
                                estimatedStartDate: '',
                                clientConsent: false,
                                /*
                                livingOnReserveCommunity: '',
                                receivingAssistanceFrom: '',
                                pwdDesignationOrganization: '',
                                ppmbDesignationOrganization: '',
                                clientConsent: false,
                                */
                            }}
                            enableReinitialize={true}
                            validationSchema={ClientFormValidationSchema}
                            onSubmit={(values, { resetForm, setErrors, setStatus, setSubmitting }) => {
                                fetch(FORM_URL.clientForm, {
                                    method: "POST",
                                    credentials: 'include',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(values),
                                })
                                    .then(res => res.json())
                                    .then(
                                        (resp) => {
                                            if (resp.err) {
                                                setErrors(resp.err)
                                                setSubmitting(false)
                                            } else if (resp.emailErr) {
                                                setSubmitting(false)
                                                this.setState({
                                                    hasError: true
                                                })
                                            } else if (resp.ok) {
                                                setSubmitting(false)
                                                this.props.history.push('/thankYouCl', values)
                                            }
                                        }
                                    )
                            }}
                        >
                            {({ values, errors, touched, isSubmitting, setFieldValue, submitCount }) => (
                                <Form>
                                    {this.state.hasError && (
                                        generateAlert("alert-danger", "An error has occurred, please refresh the page. If the error persists, please try again later.")
                                    )}
                                    <div className="form-group">
                                        <h2 id="forms">Participant Information</h2>
                                    </div>
                                    <ClientConsent />
                                    {console.log(values)}
                                    {this.handleApplicationId(values.applicationId, values.noOrgId, errors, touched)}
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label className="col-form-label control-label" htmlFor="clientName">First Name <span
                                                style={{ color: "red" }}>*</span></label>
                                            <Field className={`form-control ${feedBackClassName(errors, touched, "clientName")}`} id="clientName" name="clientName" />
                                            {feedBackInvalid(errors, touched, "clientName")}
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="col-form-label control-label" htmlFor="clientLastName">Last Name <span
                                                style={{ color: "red" }}>*</span></label>
                                            <Field className={`form-control ${feedBackClassName(errors, touched, "clientLastName")}`} id="clientLastName" name="clientLastName" />
                                            {feedBackInvalid(errors, touched, "clientLastName")}
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label className="col-form-label control-label" htmlFor="clientDOB">Date of birth <span
                                                style={{ color: "red" }}>*</span></label>
                                            <DatePickerField
                                                name="clientDOB"
                                                className={`form-control ${feedBackClassName(errors, touched, "clientDOB")}`}
                                            />
                                            {feedBackInvalid(errors, touched, "clientDOB")}
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="col-form-label control-label" htmlFor="clientEmail">Email <span
                                                style={{ color: "red" }}>*</span></label>
                                            <Field className={`form-control ${feedBackClassName(errors, touched, "clientEmail")}`} id="clientEmail" name="clientEmail" />
                                            {feedBackInvalid(errors, touched, "clientEmail")}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label control-label" htmlFor="clientAddress1">Address 1 <span
                                            style={{ color: "red" }}>*  </span></label>
                                        <small className="text-muted" id="clientAddress1">  Street address, P.O. box, c/o</small>
                                        <Field className={`form-control ${feedBackClassName(errors, touched, "clientAddress1")}`} id="clientAddress1" name="clientAddress1" />
                                        {feedBackInvalid(errors, touched, "clientAddress1")}
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label control-label" htmlFor="clientAddress2">Address 2</label>
                                        <small className="text-muted" id="clientAddress2">  Apartment, suite, unit, building, floor, etc.</small>
                                        <Field className={`form-control ${feedBackClassName(errors, touched, "clientAddress2")}`} id="clientAddress2" name="clientAddress2" />
                                        {feedBackInvalid(errors, touched, "clientAddress2")}
                                    </div>
                                    {values._intake >= 2 &&
                                        <>
                                            <div className="form-group">
                                                <label className="col-form-label control-label" htmlFor="approximateHours">Approximately how many hours per week will you participate in work experience?<span style={{ color: "red" }}>*</span></label>
                                                <div className="form-check">
                                                    <Field
                                                        className={`form-check-input ${feedBackClassName(errors, touched, "approximateHours")}`}
                                                        type="radio"
                                                        name="approximateHours"
                                                        value="10hours"
                                                    />
                                                    <label className="form-check-label" htmlFor="approximateHours10">Approximately 10 hours per week</label>
                                                </div>
                                                <div className="form-check">
                                                    <Field
                                                        className={`form-check-input ${feedBackClassName(errors, touched, "approximateHours")}`}
                                                        type="radio"
                                                        name="approximateHours"
                                                        value="20hours"
                                                    />
                                                    <label className="form-check-label" htmlFor="approximateHours20">Approximately 20 hours per week</label>
                                                    {feedBackInvalid(errors, touched, "approximateHours")}
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label control-label" htmlFor="estimatedStartDate">Estimated start date of your work experience <span
                                                    style={{ color: "red" }}>*  </span></label>
                                                <small className="text-muted" id="estimatedStartDate">  Approximate</small>
                                                <DatePickerField
                                                    maxDate={null}
                                                    minDate={new Date()}
                                                    name="estimatedStartDate"
                                                    className={`form-control ${feedBackClassName(errors, touched, "clientDOB")}`}
                                                />
                                                {feedBackInvalid(errors, touched, "estimatedStartDate")}
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label control-label" htmlFor="receivingAssistanceFromFirstNationOrTribalCouncil">Are you currently receiving income assistance or disability assistance from a First Nation or Tribal Council?<span style={{ color: "red" }}>*</span></label>
                                                <div className="form-check">
                                                    <Field
                                                        className={`form-check-input ${feedBackClassName(errors, touched, "receivingAssistanceFromFirstNationOrTribalCouncil")}`}
                                                        type="radio"
                                                        name="receivingAssistanceFromFirstNationOrTribalCouncil"
                                                        value="yes"
                                                    />
                                                    <label className="form-check-label" htmlFor="receivingAssistanceFromFirstNationOrTribalCouncilYes">Yes</label>
                                                </div>
                                                <div className="form-check">
                                                    <Field
                                                        className={`form-check-input ${feedBackClassName(errors, touched, "receivingAssistanceFromFirstNationOrTribalCouncil")}`}
                                                        type="radio"
                                                        name="receivingAssistanceFromFirstNationOrTribalCouncil"
                                                        value="no"
                                                    />
                                                    <label className="form-check-label" htmlFor="receivingAssistanceFromFirstNationOrTribalCouncilNo">No</label>
                                                    {feedBackInvalid(errors, touched, "receivingAssistanceFromFirstNationOrTribalCouncil")}
                                                </div>
                                            </div>
                                        </>
                                    }
                                    <hr></hr>
                                    <div className="form-group">
                                        {this.showErrors(errors, submitCount)}
                                    </div>
                                    <div className="form-group">
                                        <h2>For All Participants</h2>
                                        <p>By clicking on the “submit” icon below, you:</p>
                                        <ul>
                                            <li>Confirm that the information you have provided on this form is true and accurate to the best of your knowledge; and</li>
                                            <li>Provide your consent for SDPR to disclose your personal information to, and collect your personal information from, the BC Aboriginal Network on Disability Society for that purpose.</li>
                                        </ul>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-check">
                                            <Field type="checkbox" className={`form-check-input ${feedBackClassName(errors, touched, "clientConsent")}`} id="clientConsent"
                                                name="clientConsent" />
                                            <label className="form-check-label control-label" htmlFor="clientConsent"><span style={{ color: "red" }}>*</span>
                                                I acknowledge and understand that by clicking the "submit" icon, I am attaching my electronic signature to this form, and that the effect of doing so is the same as if I were to manually sign a physical copy of this form.
                                            </label>
                                            {feedBackInvalid(errors, touched, "clientConsent")}
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-success btn-block"
                                        type="submit"
                                        style={{ marginBottom: "2rem" }}
                                        disabled={isSubmitting || this.state.hasError}
                                    >
                                        {
                                            isSubmitting ?
                                                <div>
                                                    <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                                    Submitting...
                                                </div>
                                                :
                                                "Submit"

                                        }
                                    </button>
                                </Form>

                            )}


                        </Formik>

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ClientForm)