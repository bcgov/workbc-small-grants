import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Formik, Form} from 'formik'
import {generateAlert} from '../Shared/Alert'
import SurveyParticipantStep1 from './SurveyParticipantStep1'
import SurveyParticipantStep2 from './SurveyParticipantStep2'
import SurveyParticipantStep3 from './SurveyParticipantStep3'
import SurveyParticipantStep4 from './SurveyParticipantStep4'
import ProgressTracker from './ProgressTracker'


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
                                likelyToHirePeopleWithBarriersInFuture: '',
                                difficultyHiringPeopleWithBarriers: '',
                                //step 3
                                likelyToParticipateInSimilarProgram: '',
                                likelyToRecommendGrant: '',
                                //step 4
                                experienceBetterComments: '',
                            }}
                            enableReinitialize={true}
                            onSubmit={(values,{setErrors,setSubmitting}) => {
                                setSubmitting(false)
                                this.props.history.push('/thankYouSurveyParticipant',values)
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

