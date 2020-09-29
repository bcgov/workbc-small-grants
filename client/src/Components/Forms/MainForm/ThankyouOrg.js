import React, { Component } from 'react'


class ThankyouOrg extends Component {
    render() {
        const applicationId = (this.props.location.state !== undefined ? this.props.location.state._id : '')
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Thank you, your application has been received</h1>
                        {console.log(this.props)}
                        {console.log(window.location.origin)}
                        <h3>Application ID: {this.props.location.state !== undefined && this.props.location.state._id}</h3>
                        
                        <p>
                            Your application has been successfully received. You can print this page for your records. A confirmation email has also been sent to the two contacts provided on the form.
                        </p>
                        <h4>Next Steps:</h4>
                        <p>Please provide your participants the following instructions:</p>
                        <div className="card">
                            <div className="card-body">
                                <p>Application ID: {this.props.location.state !== undefined && this.props.location.state._id}</p>
                                <p>Please visit the following URL in order to provide your consent to the Ministry.</p>
                                <p><a href={`${window.location.origin}/clientForm/${applicationId}`}>{`${window.location.origin}/clientForm/${applicationId}`}</a></p>
                                <p>If you prefer a PDF version of the form, one can be found here. Once complete please email it to (email).</p>
                            </div>
                        </div>
                        <p>
                            Note: you must get all your participants to complete the step above within the next 3 weeks.
                        </p>
                        <button className="btn btn-success d-print-none" onClick={() => window.print()}>Print Confirmation</button><br />
                    </div>
                </div>
            </div>
        )
    }
}

export default ThankyouOrg