import React from 'react'

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Work Experience Opportunities Grant Program</h1>
                    <p>Welcome to the Work Experience Opportunities Grant Program application. Please click "start" below to get started. </p>
                    <p>For more information please click <a href="https://www.workbc.ca/Employment-Services/Work-Experience-Opportunities-Grant.aspx" target="_blank" rel="noopener noreferrer">here.</a></p>       
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h2>Get Started</h2>
                    <p><a href="/form" className="btn btn-lg btn-primary">Start</a><br/></p>
                </div>
            </div>
        </div>
    )
}

export default Home;