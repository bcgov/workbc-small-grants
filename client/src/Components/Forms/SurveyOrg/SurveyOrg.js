import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Formik, Form} from 'formik'
import {generateAlert} from '../Shared/Alert'
import {customAlphabet} from 'nanoid'
import SurveyOrgStep1 from './SurveyOrgStep1'
import SurveyOrgStep2 from './SurveyOrgStep2'
import SurveyOrgStep3 from './SurveyOrgStep3'
import SurveyOrgStep4 from './SurveyOrgStep4'
import ProgressTracker from './ProgressTracker'
import {SurveyOrgValidationSchema} from './SurveyOrgValidationSchema'
import { FORM_URL } from '../../../constants/form'

class SurveyOrg extends Component {
    constructor(){
        super()
        const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz',5)
        this.state={
            currentStep: 1,
            _csrf: '',
            _id: nanoid(),
            hasError: false,
        }
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
    }

    componentDidMount() {
        fetch(FORM_URL.surveyOrg, {
            credentials: "include"
        })
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log(result)
                    this.setState({
                        _csrf: result.csrfToken,
                    })
                },
                (error) => {
                    //console.log(error)
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
                                _csrf: this.state._csrf,
                                _id: this.state._id,
                                //step 1
                                easeOfApplicationCompletion: '',
                                speedApplicationProcessed: '',
                                experienceOnlineApplicationComments: '',
                                //step 2
                                participantContributionValuable: '',
                                //participantNumber: '',
                                hiredPeopleWithBarriersBefore: '',
                                hirePeopleWithBarriersFuture: '',
                                experienceWithWorkParticipantsComments: '',
                                //difficultyHiringPeopleWithBarriersComment: '',
                                //step 3
                                receivedOtherWorkBCServicesOrPrograms: '',
                                likelyToParticipateInSimilarProgram: '',
                                likelyToRecommendGrant: '',
                                //step 4
                                bestPartOfProgramComments: '',
                                experienceBetterComments: '',
                            }}
                            enableReinitialize={true}
                            validationSchema={SurveyOrgValidationSchema}
                            onSubmit={(values, { resetForm, setErrors, setStatus, setSubmitting }) => {
                                fetch(FORM_URL.surveyOrg, {
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
                                                this.props.history.push('/thankYouSurveyOrg', values)
                                            }
                                        }
                                    )
                            }}
                        >
                        {props => (
                            <Form>
                                <SurveyOrgStep1
                                    currentStep={this.state.currentStep}
                                    {...props}
                                />
                                <SurveyOrgStep2
                                    currentStep={this.state.currentStep}
                                    {...props}
                                />
                                <SurveyOrgStep3
                                    currentStep={this.state.currentStep}
                                    {...props}
                                />
                                <SurveyOrgStep4
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

export default withRouter(SurveyOrg);

