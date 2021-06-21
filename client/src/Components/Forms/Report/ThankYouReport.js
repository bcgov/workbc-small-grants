import React, { Component } from 'react'


class ThankYouReport extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-success d-print-none float-right" onClick={() => window.print()}>Print Confirmation</button><br /><br />
                        <h1>Thank you, your information has been received.</h1>
                        <h3>Reference ID: {this.props.location.state !== undefined && this.props.location.state._referenceID}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThankYouReport