import React from 'react'

function FormUnavailable() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-primary" role="alert">
                        <p><b>Participant Form Currently Unavailable.</b></p>
                        <p>Thank you for your interest in submitting participant information for the Work Experience Opportunities Grant. The participant form is undergoing a quick update and is currently unavailable. Please check back shortly and we apologize about any inconvenience this may have caused.</p>
                        <hr />
                        <p className="mb-0">If you have questions, please contact the ministry at <a href="mailto:workexperiencegrants@gov.bc.ca">workexperiencegrants@gov.bc.ca</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormUnavailable