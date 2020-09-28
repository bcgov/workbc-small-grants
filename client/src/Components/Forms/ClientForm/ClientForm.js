import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import '../../../utils/polyfills'
import ClientConsent from './ClientConsent'
import { ClientFormValidationSchema } from './ClientFormValidationSchema'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class ClientForm extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        <Formik
                            initialValues={{
                                applicationId: '',
                                clientName: '',
                                clientLastName: '',
                                clientSIN: '',
                                clientEmail: '',
                                clientAddress1: '',
                                clientAddress2: '',
                                clientConsent: false,
                            }}
                            validationSchema={ClientFormValidationSchema}
                            onSubmit={(values, actions) => {
                                //actions.setSubmitting(false);
                                this.props.history.push('/thankyou')
                            }}
                        >
                            {({errors, touched}) => (
                                <Form>
                                    
                                    <div className="form-group">
                                        <br /><h2 id="forms">Client Information</h2>
                                    </div>
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