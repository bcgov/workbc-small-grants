import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import '../../../utils/polyfills'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'
import { generateAlert } from '../Shared/Alert'
import { FORM_URL } from '../../../constants/form'
import ProgressTracker from './ProgressTracker'
import RecruitmentForm from './Recruitment'
import ParticipantForm from './Participants'
import FundingForm from './Funding'
import PlacementsForm from './Placements'
import ParticipantOutcomesForm from './ParticipantOutcomes'
import NarrativeForm from './Narrative'
import FollowUpForm from './FollowUp'
import ClientConsent from '../ClientForm/ClientConsent'
//import KeyRecruitmentForm from './KeyRectruitment'
//import KeyParticipantsForm from './KeyParticipants'
//import KeyPlacementsForm from './KeyPlacements'
//import KeyParticipantOutcomesForm from './KeyParticipantOutcomes'
//import KeyOrganizationalOutcomesForm from './KeyOrganizationalOutcomes'
//import KeyGeneralForm from './KeyGeneral'

class ReportForm extends Component {
    constructor() {
        super()
        this.state = {
            currentStep: 1,
            _csrf: '',
            _intake: '',
            hasError: false,
        }
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
    }
    componentDidMount() {
        fetch(FORM_URL.reportForm, {
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
        if (this.props.match.path === "/participantForm/2/:id?") {
            this.setState({ "_intake": "2" })
        } else if (this.props.match.path === "/participantForm/3/:id?") {
            this.setState({ "_intake": "3" })
        } else if (this.props.match.path === "/clientForm/:id?") {
            this.setState({ "_intake": "1" })
        }
    }

    _next() {
        this.setState(prevState => {
            return {
                currentStep: prevState.currentStep >= 4 ? 5 : prevState.currentStep + 1
            }
        })
    }

    _prev() {
        this.setState(prevState => {
            return {
                currentStep: prevState.currentStep <= 1 ? 1 : prevState.currentStep - 1
            }
        })
    }

    get previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
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

    get nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 5) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={this._next}
                    disabled={this.state.hasError}
                >
                    Next
                </button>
            )
        }
        return null;
    }


    handleApplicationId(id, hasId, errors, touched) {
        if (id === "" || id.length !== 10) {
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
                <p>Application ID: {id}</p>
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
                                _intake: this.state._intake,
                                applicationId: (typeof this.props.match.params.id !== 'undefined') ? this.props.match.params.id : '',
                                applicationIdM: '',
                                recruitmentParticipantsSource: '',
                                recruitmentOtherSourceExplain: '',
                                participantsHoursPerWeek: '',
                                participantsAllCompletedPlacement: '',
                                participantsNotAbleToComplete: '',
                                participantsAbleToFindNew: '',
                                participantsAbleToFindNewNoExplain: '',
                                fundingStipendAmount: '',
                                fundingSupportsAmount: '',
                                fundingAdministrationOperationalExpense: '',
                                fundingAdditional: '',
                                fundingAdditionalAmount: '',
                                fundingAdditionalUse: '',
                                placementDetailsChange: '',
                                placementDetailsChangeExplanation: '',
                                placementSupportsProvided: '',
                                placementSupportsProvidedOther: '',
                                numberOfParticipantsStayedInPosition: '',
                                numberOfParticipantsHiredDifferentRole: '',
                                numberOfParticipantsFoundEmploymentElsewhere: '',
                                numberOfParticipantsConnectedToWorkBC: '',
                                numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg: '',
                                numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg: '',
                                numberOfParticipantsOther: '',
                                numberOfParticipantsOtherDescribe: '',
                                narrativeParticipantSuccessStories: '',
                                narrativeOrganizationBenefit: '',
                                narrativeCommunityBenefit: '',
                                narrativeImproveAboutProgram: '',
                                followUpWillingToHavePhoneConversation: '',
                                followUpContactName: '',
                                followUpContactPhone: '',
                                /*
                                recruitmentChallengesFindingParticipant: '',
                                recruitmentReceivedAssistanceFromWorkBC: '',
                                recruitmentChallengesWithEligibility: '',
                                participantEncounterProblems: '',
                                participantsNotAbleToStartOrComplete: '',
                                placementSupportsUnableToProvide: '',
                                participantOutcomesOtherNonEmploymentReplated: '',
                                participantOutcomesSuccessStories: '',
                                organizationOutcomesBenefitFromProgram: '',
                                organizationOutcomesCommunityBenefit: '',
                                generalHowFindOut: '',
                                generalInterest: '',
                                generalParticipateAgain: '',
                                generalImproveAboutProgram: '',
                                */
                            }}
                            enableReinitialize={true}
                            onSubmit={(values, { resetForm, setErrors, setStatus, setSubmitting }) => {
                                fetch(FORM_URL.reportForm, {
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
                                            console.log(resp)
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
                                                this.props.history.push('/thankYouReport', values)
                                            }
                                        }
                                    )
                            }}
                        >
                            {props => (
                                <Form>
                                    <ProgressTracker currentStep={this.state.currentStep} />
                                    {this.state.hasError && (
                                        generateAlert("alert-danger", "An error has occurred, please refresh the page. If the error persists, please try again later.")
                                    )}
                                    <div className="form-group">
                                        <h1 id="forms">Work Experience Summary Report</h1>
                                    </div>
                                    {console.log(props.values)}
                                    {
                                        this.state.currentStep === 1 &&
                                        <div>
                                            {this.handleApplicationId(props.values.applicationId, props.values.noOrgId, props.errors, props.touched)}
                                            <RecruitmentForm {...props} />
                                            <ParticipantForm {...props} />
                                        </div>
                                    }
                                    {
                                        this.state.currentStep === 2 &&
                                        <div>
                                            <FundingForm {...props} />
                                            <PlacementsForm {...props} />
                                        </div>
                                    }
                                    {
                                        this.state.currentStep === 3 &&
                                        <div>
                                            <ParticipantOutcomesForm {...props} />
                                        </div>
                                    }
                                    {
                                        this.state.currentStep === 4 &&
                                        <div>
                                            <NarrativeForm {...props} />
                                        </div>
                                    }
                                    {
                                        this.state.currentStep === 5 &&
                                        <div>
                                            <FollowUpForm {...props} />
                                            <ClientConsent />
                                            <button
                                                className="btn btn-success btn-block"
                                                type="submit"
                                                style={{ marginBottom: "2rem" }}
                                                disabled={props.isSubmitting || this.state.hasError}
                                            >
                                                {
                                                    props.isSubmitting ?
                                                        <div>
                                                            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                                       Submitting...
                                                </div>
                                                        :
                                                        "Submit"

                                                }
                                            </button>
                                        </div>
                                    }

                                    {/*
                                    <div className="form-group">
                                        <h2 id="forms">Key Informant Questions</h2>
                                    </div>
                                    <KeyRecruitmentForm {...props} />
                                    <KeyParticipantsForm {...props} />
                                    <KeyPlacementsForm {...props} />
                                    <KeyParticipantOutcomesForm {...props} />
                                    <KeyOrganizationalOutcomesForm {...props} />
                                    <KeyGeneralForm {...props} />
                                    */}

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

export default withRouter(ReportForm)