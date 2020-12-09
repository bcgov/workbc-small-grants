import React, { Component } from 'react'

class SurveyStartParticipant extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>
                            You have been directed to a secure external site and your responses are anonymous. This survey is optional, and you can decide if you want to take part. Your responses are not linked to your file in any way and we will not record any information that can be used to identify you. Please do not provide any personal or confidential information as you respond to the questions.
                        </p>
                        <p>
                            The information from this survey is being collected under the authority of the Freedom of Information and Protection of Privacy Act, Section 26(e) (<a href="https://www.bclaws.ca/civix/document/id/complete/statreg/96165_03#section26" target="_blank" rel="noopener noreferrer">https://www.bclaws.ca/civix/document/id/complete/statreg/96165_03#section26</a>). If you have any questions about the collection or use of this information, please contact the Manager of Stakeholder and Client Engagement (<a href="mailto:elms.stakeholders@gov.bc.ca">elms.stakeholders@gov.bc.ca</a>), Ministry of Social Development and Poverty Reduction.
                        </p>
                        <p>
                            You must use the buttons at the bottom of the page to move through the survey as using the Internet browser buttons will cause you to lose your progress. Please complete the survey in one sitting as your answers will not be saved until you click on the "Submit" button at the end of the survey.
                        </p>
                        <p>
                            If you are using assistive technology programs (such as JAWS or Dragon), please use your navigation keys/commands to complete the survey. You can use the keyboard space bar on the “Back”, “Reset”, “Next” and “Submit” buttons to navigate through the survey.
                        </p>
                        <p>
                            It will take about 10 minutes to complete this survey.
                        </p>
                        <p>
                            Thank you for your participation.
                        </p>
                        <p><a href="/surveyParticipant" className="btn btn-lg btn-primary">Start</a><br /></p>
                    </div>
                </div>

            </div>
        )
    }
}

export default SurveyStartParticipant