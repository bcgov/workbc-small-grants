import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Formik, Form} from 'formik'

import FormStep1 from './FormStep1'
import FormStep2 from './FormStep2'
import FormStep3 from './FormStep3'
import ProgressTracker from './ProgressTracker'

class MainForm extends Component {
    constructor(){
        super()
        this.state={
            currentStep: 1,
            /*
            //step 1
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            postal: '',
            organizationName: '',
            businessNumber: '',
            sectorInformation: '',
            organizationType: '',
            socialEnterpriseType: '',
            existingSupplierNumber: '',
            supplierNumber: '',
            legalName: '',
            dba: '',
            businessClassification: '',
            taxNumber: '',
            website: '',
            businessAddress: '',
            //step 2
            workExperience: '',
            stipend: '',
            //step 3
            applicants: ''
            */
        }
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.history.push('/thankyou')
    }

    _next() {
        this.setState( prevState => {
            return {
                currentStep: prevState.currentStep >= 2 ? 3 : prevState.currentStep + 1
            }
        })
    }

    _prev() {
        this.setState( prevState => {
            return {
                currentStep: prevState.currentStep <= 1 ? 1 : prevState.currentStep - 1 
            } 
        })
    }

    get previousButton(){
        let currentStep = this.state.currentStep;
        if(currentStep !== 1){
          return (
            <button 
              className="btn btn-secondary" 
              type="button" onClick={this._prev}>
            Previous
            </button>
          )
        }
        return null;
    }

    get nextButton(){
        let currentStep = this.state.currentStep;

        if(currentStep < 3){
          return (
            <button 
              className="btn btn-primary float-right" 
              type="button" onClick={this._next}>
            Next
            </button>        
          )
        }
        return null;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ProgressTracker currentStep={this.state.currentStep}/>
                        <Formik
                            initialValues= {{
                                            //step 1
                                            positionTitle: '',
                                            firstName: '',
                                            lastName: '',
                                            email: '',
                                            phone: '',
                                            firstNameAlternate: '',
                                            lastNameAlternate: '',
                                            emailAlternate: '',
                                            phoneAlternate: '',
                                            otherMailingAddress: false,
                                            mailingAddress: '',
                                            mailingCity: '',
                                            mailingPostal: '',
                                            address: '',
                                            city: '',
                                            postal: '',
                                            website: '',
                                            organizationName: '',
                                            missionStatement: '',
                                            businessNumber: '',
                                            sectorInformation: '',
                                            confirmOrganizationNonProfit: '',
                                            nonProfitClassification: '',
                                            nonProfitSubClassification: '',
                                            socialEnterpriseType: '',
                                            existingSupplierNumber: '',
                                            supplierNumber: '',
                                            legalName: '',
                                            dba: '',
                                            businessClassification: '',
                                            taxNumber: '',
                                            businessAddress: '',
                                            //step 2
                                            workExperience: '',
                                            experiences: [],
                                            stipend: '',
                                            //step 3
                                            applicants: '',
                                            signatory1: '',
                                            signatory2: '',
                                            signingAuthorityConfirm: false,
                                            placementLength: false,
                                            basedInBC: false,
                                            insuranceCoverage: false,
                                            monitorCommit: false,
                                            applicantType: false,
                                            eligibleToWork: false,
                                            consent: false,


                            }}
                            onSubmit={(values, actions) => {
                                actions.setSubmitting(false);
                                this.props.history.push('/thankyou')
                            }}
                        
                        >
                            {({values}) => (
                                <Form>
                                    {console.log(values)}
                                    <FormStep1 
                                        currentStep={this.state.currentStep}
                                        {...values}
                                    />
                                    <FormStep2
                                        currentStep={this.state.currentStep}
                                        {...values}
                                    />
                                    <FormStep3
                                        currentStep={this.state.currentStep}
                                        {...values}
                                    />
                                    {this.previousButton}
                                    {this.nextButton}

                                    {/*<div className="form-actions">
                                        <button className="btn btn-primary" id="submitWorkBCWageSubsidy" type="submit">Submit
                                        </button>
                                    </div>*/}
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>


            )
        }
}
export default withRouter(MainForm);