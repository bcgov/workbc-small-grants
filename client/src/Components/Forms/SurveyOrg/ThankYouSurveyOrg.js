import React, { Component } from 'react'


class ThankyouSurveyOrg extends Component {
    render() {
        const applicationId = (this.props.location.state !== undefined ? this.props.location.state._id : '')
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Thank you, your information has been received.</h1>
                        <p>Thank you for taking the time to participate in this survey. Your answers have been submitted.</p>
                        <p>You can now close this page or continue to find out more about WorkBC services and programs for employers and organizations:</p>
                        <p>The Wage Subsidy program covers a part of employee wages so employers can hire job seekers. Find out more by clicking <a href="https://www.workbc.ca/Employment-Services/Wage-Subsidy.aspx" target="_blank" rel="no-opener no-referrer"> here.</a></p>
                        <p>Learn more about all the resources available to employers through WorkBC by clicking <a href="https://www.workbc.ca/Employer-Resources.aspx" target="_blank" rel="no-opener no-referrer"> here</a>.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThankyouSurveyOrg