import React from 'react'

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Work Experience Opportunities Grant Program</h1>
                    <div className="alert alert-primary" role="alert">
                            <p><b>The Work Experience Opportunities Grant application window is closed. The good news is that we’re offering a second intake in January 2021. Stay tuned!</b></p>
                            <p>Thanks for your interest in the Work Experience Opportunities Grant. Applications are no longer being accepted for the first intake period. A review is being conducted and several modifications to the program are being considered. Once finalized, a second intake will be available in January 2021. Please check back to stay informed of when the second intake period will be available.</p>
                            <hr/>
                            <p className="mb-0">If you have questions, please contact the ministry at workexperiencegrants@gov.bc.ca</p>
                    </div>
                    <p>For more information please click <a href="https://www.workbc.ca/Employment-Services/Work-Experience-Opportunities-Grant.aspx" target="_blank" rel="noopener noreferrer">here.</a></p>       
                </div>
            </div>
        </div>
    )
}

export default Home;