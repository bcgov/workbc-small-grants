import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import '../../../utils/polyfills'
import ClientConsent from './ClientConsent'

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
                                consent: false,
                            }}
                            onSubmit={(values, actions) => {
                                actions.setSubmitting(false);
                                this.props.history.push('/thankyou')
                            }}
                        >
                            <Form>
                                <div className="form-group">
                                    <br /><h2 id="forms">Client Information</h2>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label className="col-form-label control-label" htmlFor="clientName">First Name <span
                                            style={{ color: "red" }}>*</span></label>
                                        <Field className="form-control" id="clientName" name="clientName" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="col-form-label control-label" htmlFor="clientLastName">Last Name <span
                                            style={{ color: "red" }}>*</span></label>
                                        <Field className="form-control" id="clientLastName" name="clientLastName" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label className="col-form-label control-label" htmlFor="clientSIN">SIN <span
                                            style={{ color: "red" }}>*</span></label>
                                        <Field className="form-control" id="clientSIN" name="clientSIN" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="col-form-label control-label" htmlFor="clientEmail">Email <span
                                            style={{ color: "red" }}>*</span></label>
                                        <Field className="form-control" id="clientEmail" name="clientEmail" />
                                    </div>
                                </div>
                                <ClientConsent />
                                <div className="form-group">
                                    <div className="form-check">
                                        <Field type="checkbox" className="form-check-input" id="consent"
                                            name="consent" />
                                        <label className="form-check-label control-label" htmlFor="consent"><span style={{ color: "red" }}>*</span> I acknowledge and
                                            understand that by clicking the "submit" icon, I am attaching my electronic signature to this form, and that
                                            by doing so, I am providing the same consent as I would by manually signing a physical copy of this
                                            form.
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn-success btn-block" type="submit" style={{marginBottom: "2rem"}}>Submit</button>
                            </Form>



                        </Formik>

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ClientForm)