import React from 'react'

function Home() {
    return (
        <div className="container">
            <div className="row">

                <div className="col-md-12">
                    
                    <div className="alert alert-primary" role="alert">
                        <p><b>The Work Experience Opportunities Grant application window is now closed. Thanks for your interest in this funding opportunity. Check back to learn about how many participants and organizations were supported through this program as well as potential future funding opportunities.</b></p>
                        <p></p>
                        <hr />
                        <p className="mb-0">If you have questions, please contact the ministry at <a href="mailto:workexperiencegrants@gov.bc.ca">workexperiencegrants@gov.bc.ca</a></p>
                    </div>
                    <p>For more information please click <a href="https://www.workbc.ca/Employment-Services/Work-Experience-Opportunities-Grant.aspx" target="_blank" rel="noopener noreferrer">here.</a></p>   
                </div>
            </div> 
                { /*
                    <h1>Work Experience Opportunities Grant Program</h1>
                    <p>Welcome to the Work Experience Opportunities Grant Program application. Please click "start" below to get started. </p>
                    <p>For more information please click <a href="https://www.workbc.ca/Employment-Services/Work-Experience-Opportunities-Grant.aspx" target="_blank" rel="noopener noreferrer">here.</a></p>
                </div>
            
            <div className="row">
                <div className="col-md-12">
                    <h2>Get Started</h2>
                    <p><a href="/form" className="btn btn-lg btn-primary">Start</a><br /></p>
                </div>
            </div>
            */}
        </div>
    )
}

export default Home;