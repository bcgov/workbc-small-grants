import React, { Component } from 'react'


class ThankyouSurveyParticipant extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Thank you, your information has been received.</h1>
                        <p>Thank you for taking the time to participate in this survey. Your answers have been submitted.</p>
                        <p>You can now close this page or continue to find out more about WorkBC services and programs for employers and organizations:</p>
                        <p>Discover job options and services designed to support British Columbians with disabilities by clicking <a href="https://www.workbc.ca/Resources-for/People-with-Disabilities.aspx" target="_blank" rel="noopener noreferrer"> here.</a></p>
                        <p>Do you know what are the Top 10 Trades with the highest demand in BC? Find out more by clicking <a href="https://www.workbc.ca/Labour-Market-Industry/Top-Demand-Trades.aspx" target="_blank" rel="noopener noreferrer"> here</a>.</p>
                        <p>Learn more about WorkBC Centres and how they can help you by clicking <a href="https://www.workbc.ca/Employment-Services/WorkBC-Centres.aspx" target="_blank" rel="noopener noreferrer"> here</a>.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThankyouSurveyParticipant