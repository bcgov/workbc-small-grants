import React, { Component } from 'react'

class ThankyouClient extends Component {
    get appIdOrOrgName(){
        if (this.props.location.state !== undefined){
            if (this.props.location.state.noOrgId){
                return <p><b>Organization Name:</b> {this.props.location.state.organizationNameM}</p>
            } else {
                return <p><b>Application ID:</b> {this.props.location.state.applicationId} {this.props.location.state.applicationIdM}</p>
            }
        }
        return null
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Thank you, your application has been received</h1>
                        <button className="btn btn-success d-print-none" onClick={() => window.print()}>Print Confirmation</button>
                        <p>A confirmation email has been sent to the email address provided.</p>
                        <p>
                            The following information was received:
                        </p>
                        <br />
                        <hr />
                        {console.log(this.props.location.state)}          
                        <p><b>Name:</b> {this.props.location.state !== undefined && this.props.location.state.clientName}</p>
                        <p><b>Last Name:</b> {this.props.location.state !== undefined && this.props.location.state.clientLastName}</p>
                        <p><b>DOB (DD/MM/YYYY):</b> {this.props.location.state !== undefined && (<span>{this.props.location.state.clientDOB.getDate()}/{this.props.location.state.clientDOB.getMonth()+1}/{this.props.location.state.clientDOB.getFullYear()}</span>)}</p>
                        <p><b>Email:</b> {this.props.location.state !== undefined && this.props.location.state.clientEmail}</p>
                        <p><b>Address1:</b> {this.props.location.state !== undefined && this.props.location.state.clientAddress1}</p>
                        <p><b>Address2:</b> {this.props.location.state !== undefined && this.props.location.state.clientAddress2}</p>
                        <p><b>Consent:</b> {this.props.location.state !== undefined && this.props.location.state.clientConsent.toString()}</p>
                        {this.appIdOrOrgName}  
                        <hr />
                    </div>
                </div>
            </div>
        )
    }
}

export default ThankyouClient