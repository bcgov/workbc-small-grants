import React, { Component } from 'react'


class ThankyouSurveyParticipant extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Thank you, your information has been received.</h1>
                        <p>Thank you for providing your feedback and taking the time to help make the Work Experience Opportunities Grant program better. As a participant in the program, your views are very valuable and your contribution is much appreciated.</p>
                        <p>To find out more about WorkBC programs and services, check out these links below highlighting some of our great programs for both employers and jobseekers:</p>
                        <ul>
                            <li>Discover job options and services designed to support British Columbians with disabilities by clicking <a href="https://www.workbc.ca/Resources-for/People-with-Disabilities.aspx" target="_blank" rel="noopener noreferrer" onclick="_paq.push(['trackEvent', 'ThankYouParticipant', 'Discover']);"> here.</a></li>
                            <li>The Wage Subsidy program covers a part of employee wages so employers can hire job seekers. Find out more by clicking <a href="https://www.workbc.ca/Employment-Services/Wage-Subsidy.aspx" target="_blank" rel="noopener noreferrer" onclick="_paq.push(['trackEvent', 'ThankYouParticipant', 'WageSubsidy']);">here</a>.</li>
                            <li>Do you know what are the Top 10 Trades with the highest demand in BC? Find out more by clicking <a href="https://www.workbc.ca/Labour-Market-Industry/Top-Demand-Trades.aspx" target="_blank" rel="noopener noreferrer" onclick="_paq.push(['trackEvent', 'ThankYouParticipant', 'Top10Trades']);"> here</a>.</li>
                            <li>Learn more about WorkBC Centres and how they can help you by clicking <a href="https://www.workbc.ca/Employment-Services/WorkBC-Centres.aspx" target="_blank" rel="noopener noreferrer" onclick="_paq.push(['trackEvent', 'ThankYouParticipant', 'LearnMore']);"> here</a>.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThankyouSurveyParticipant