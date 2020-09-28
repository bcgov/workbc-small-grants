import React, { Component } from 'react'
import { useParams, withRouter } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import '../../../utils/polyfills'
import ClientConsent from './ClientConsent'
import { ClientFormValidationSchema } from './ClientFormValidationSchema'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'
import {FORM_URL} from '../../../constants/form'

class ClientForm extends Component {
    constructor() {
        super()
        this.state={
            _csrf: ''
        }
    }
    componentDidMount() {
        fetch(FORM_URL.clientForm,{
            credentials: "include"
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.csrfToken)
                    this.setState({
                        _csrf: result.csrfToken
                    })
                },
                (error) => {
                    console.log(error)
                }
            )
    }     


    handleApplicationId(id, hasId, errors, touched) {
        if (id === 'none' || id.length != 10) {
            //show non id handler
            return (
                <div>
                    <p>Please follow the link provided to you via email, or provide the organization ID below. Alternatively, check the box below and provide the organization name.</p>
                    <div className="form-group">
                        <div className="form-check">
                            <Field type="checkbox" className={`form-check-input ${feedBackClassName(errors, touched, "noOrgId")}`} id="noOrgId"
                                name="noOrgId" />
                            <label className="form-check-label" htmlFor="noOrgId">I don't have an organization ID.</label>
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
                                <label className="col-form-label control-label" htmlFor="applicationIdM">Organization ID <span
                                    style={{ color: "red" }}>*</span></label>
                                <small className="text-muted" id="clientAddress1"> Please provide the 10 character ID.</small>
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
                <p>Organization ID: {id}</p>
            )
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
                                applicationId: (typeof this.props.match.params.id !== 'undefined') ? this.props.match.params.id : 'none',
                                applicationIdM: '',
                                organizationNameM: '',
                                noOrgId: false,
                                clientName: '',
                                clientLastName: '',
                                clientSIN: '',
                                clientEmail: '',
                                clientAddress1: '',
                                clientAddress2: '',
                                clientConsent: false,
                            }}
                            enableReinitialize={true}
                            validationSchema={ClientFormValidationSchema}
                            onSubmit={(values, {resetForm, setErrors, setStatus, setSubmitting }) => {
                                
                                fetch(FORM_URL.clientForm, {
                                    method: "POST",
                                    credentials: 'include',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type' : 'application/json',
                                    },
                                    body: JSON.stringify(values),
                                })
                                
                                .then(res => res.json())
                                .then(
                                    (resp) => {
                                        console.log(resp)
                                        if (resp.err){
                                            console.log("errors")
                                            setErrors(resp.err)
                                        } else if (resp.ok){
                                            setSubmitting(false)
                                            this.props.history.push('/thankYouCl',values)
                                        }
                                    }
                                )
                                
                                
                            }}
                        >
                            {({ values, errors, touched }) => (
                                <Form>
                                    {console.log(this)}
                                    {console.log(values)}
                                    <div className="form-group">
                                        <br /><h2 id="forms">Client Information</h2>
                                    </div>
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
                                            <label className="col-form-label control-label" htmlFor="clientSIN">SIN <span
                                                style={{ color: "red" }}>*</span></label>
                                            <Field className={`form-control ${feedBackClassName(errors, touched, "clientSIN")}`} id="clientSIN" name="clientSIN" />
                                            {feedBackInvalid(errors, touched, "clientSIN")}
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
                                        <small className="text-muted" id="clientAddress1">  Street address, P.O. box, company name, c/o</small>
                                        <Field className={`form-control ${feedBackClassName(errors, touched, "clientAddress1")}`} id="clientAddress1" name="clientAddress1" />
                                        {feedBackInvalid(errors, touched, "clientAddress1")}
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label control-label" htmlFor="clientAddress2">Address 2</label>
                                        <small className="text-muted" id="clientAddress2">  Apartment, suite, unit, building, floor, etc.</small>
                                        <Field className={`form-control ${feedBackClassName(errors, touched, "clientAddress2")}`} id="clientAddress2" name="clientAddress2" />
                                        {feedBackInvalid(errors, touched, "clientAddress2")}
                                    </div>
                                    <ClientConsent />
                                    <div className="form-group">
                                        <div className="form-check">
                                            <Field type="checkbox" className={`form-check-input ${feedBackClassName(errors, touched, "clientConsent")}`} id="clientConsent"
                                                name="clientConsent" />
                                            <label className="form-check-label control-label" htmlFor="clientConsent"><span style={{ color: "red" }}>*</span> I acknowledge and
                                            understand that by clicking the "submit" icon, I am attaching my electronic signature to this form, and that
                                            by doing so, I am providing the same consent as I would by manually signing a physical copy of this
                                            form.
                                            </label>
                                            {feedBackInvalid(errors, touched, "clientConsent")}
                                        </div>
                                    </div>
                                    <button className="btn btn-success btn-block" type="submit" style={{ marginBottom: "2rem" }}>Submit</button>
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