import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Formik, Form} from 'formik'
import '../../../utils/polyfills'
import {nanoid} from 'nanoid'


import FormStep1 from './FormStep1'
import FormStep2 from './FormStep2'
import FormStep3 from './FormStep3'
import ProgressTracker from './ProgressTracker'
import {MainFormValidationSchema} from './MainFormValidationSchema'

class MainForm extends Component {
    constructor(){
        super()
        this.state={
            currentStep: 1,
            _csrf: '',
            _id: nanoid(10)
        }
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
    }

    componentDidMount(){
        fetch("http://localhost:8000/form",{
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

    handleSubmit = (event) => {
        event.preventDefault()
        let fields = this.state
        fetch("http://localhost:8000/form", {
            method: "POST",
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(fields),
        })
        .then(res => res.json())
        .then(
            (resp) => {
                console.log(resp)
            }
        )
        //this.props.history.push('/thankyou')
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
                                            _csrf: this.state._csrf,
                                            _id: this.state._id,
                                            //step 1
                                            operatingName: '',
                                            legalName: '',
                                            missionStatement: '',
                                            website: '',
                                            businessNumber: '',
                                            confirmOrganizationNonProfit: '',
                                            nonProfitClassification: '',
                                            nonProfitSubClassification: '',
                                            nonProfitSubClassificationOther: '',
                                            basedInBC: false,
                                            positionTitle: '',
                                            firstName: '',
                                            lastName: '',
                                            email: '',
                                            phone: '',
                                            positionTitleAlternate: '',
                                            firstNameAlternate: '',
                                            lastNameAlternate: '',
                                            emailAlternate: '',
                                            phoneAlternate: '',
                                            otherMailingAddress: false,
                                            address1: '',
                                            address2: '',
                                            city: '',
                                            postal: '',
                                            mailingAddress1: '',
                                            mailingAddress2: '',
                                            mailingCity: '',
                                            mailingPostal: '',
                                            //step 2
                                            applicants: '',
                                            insuranceCoverage: false,
                                            monitorCommit: false,
                                            applicantType: false,
                                            eligibleToWork: false,
                                            placementLength: false,
                                            participantActivities: '',
                                            experiences: [],
                                            otherExperience: '',
                                            skills: [],
                                            otherSkill: '',
                                            additionalBenefits: '',
                                            //step 3
                                            stipend: '',
                                            existingSupplierNumber: '',
                                            supplierNumber: '',
                                            businessClassification: '',
                                            taxNumber: '',
                                            signatory1: '',
                                            signatory2: '',
                                            signingAuthorityConfirm: false,
                                            consent: false,
                            }}
                            enableReinitialize={true}
                            validationSchema={MainFormValidationSchema}
                            onSubmit={(values, actions) => {
                                fetch("http://localhost:8000/form", {
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
                                    }
                                )
                                //this.props.history.push('/thankyou')
                            }}
                        
                        >
                            {props => (
                                <Form>
                                    {console.log(props)}
                                    <FormStep1 
                                        currentStep={this.state.currentStep}
                                        {...props}
                                    />
                                    <FormStep2
                                        currentStep={this.state.currentStep}
                                        {...props}
                                    />
                                    <FormStep3
                                        currentStep={this.state.currentStep}
                                        {...props}
                                    />
                                    {this.previousButton}
                                    {this.nextButton}

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