import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Formik, Form} from 'formik'
import {generateAlert} from '../Shared/Alert'
import SurveyParticipantStep1 from './SurveyParticipantStep1'
import SurveyParticipantStep2 from './SurveyParticipantStep2'
import SurveyParticipantStep3 from './SurveyParticipantStep3'
import SurveyParticipantStep4 from './SurveyParticipantStep4'
import ProgressTracker from './ProgressTracker'
import { SurveyParticipantValidationSchema } from './SurveyParticipantValidation'
import { FORM_URL } from '../../../constants/form'

class SurveyParticipant extends Component {
    constructor(){
        super()
        this.state={
            currentStep: 1,
            _csrf: '',
            hasError: false,
        }
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
    }

    componentDidMount() {
        fetch(FORM_URL.surveyParticipant, {
            credentials: "include"
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        _csrf: result.csrfToken,
                    })
                },
                (error) => {
                    console.log(error)
                    this.setState({
                        hasError: true
                    })
                }
            )
    }

    _next() {
        this.setState( prevState => {
            return {
                currentStep: prevState.currentStep >= 3 ? 4 : prevState.currentStep + 1
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
              type="button" onClick={this._prev}
            >
            Previous
            </button>
          )
        }
        return null;
    }

    get nextButton(){
        let currentStep = this.state.currentStep;

        if(currentStep < 4){
          return (
            <button 
              className="btn btn-primary float-right" 
              type="button" onClick={this._next}
            >
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
                        {this.state.hasError && (
                            generateAlert("alert-danger","An error has occurred, please refresh the page. If the error persists, please try again later.")
                        )}
                        <Formik
                            initialValues={{
                                //step 1
                                easeOfNavigatingWebsite: '',
                                //step 2
                                overallExperienceWithEmployer: '',
                                levelOfSupportsReceived: '',
                                increasedAbilityToParticipateInLM: '',
                                //step 3
                                likelyToParticipateInSimilarProgram: '',
                                likelyToRecommendGrant: '',
                                //step 4
                                experienceBetterComments: '',
                            }}
                            enableReinitialize={true}
                            validationSchema={SurveyParticipantValidationSchema}
                            onSubmit={(values, { resetForm, setErrors, setStatus, setSubmitting }) => {
                                fetch(FORM_URL.surveyParticipant, {
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
                                            } else if(resp.emailErr){
                                                setSubmitting(false)
                                                this.setState({
                                                    hasError: true
                                                })
                                            } else if (resp.ok) {
                                                setSubmitting(false)
                                                this.props.history.push('/thankYouSurveyParticipant', values)
                                            }
                                        }
                                    )
                            }}
                        >
                        {props => (
                            <Form>
                                <SurveyParticipantStep1
                                    currentStep={this.state.currentStep}
                                    {...props}
                                />
                                <SurveyParticipantStep2
                                    currentStep={this.state.currentStep}
                                    {...props}
                                />
                                <SurveyParticipantStep3
                                    currentStep={this.state.currentStep}
                                    {...props}
                                />
                                <SurveyParticipantStep4
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

export default withRouter(SurveyParticipant);
