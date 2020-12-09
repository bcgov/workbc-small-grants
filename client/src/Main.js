import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import MainForm from './Components/Forms/MainForm/MainForm'
import ThankyouOrg from './Components/Forms/MainForm/ThankyouOrg'
import ThankyouClient from './Components/Forms/ClientForm/ThankyouClient'
import ClientForm from './Components/Forms/ClientForm/ClientForm'
import SurveyOrg from './Components/Forms/SurveyOrg/SurveyOrg'
import ThankyouSurveyOrg from './Components/Forms/SurveyOrg/ThankYouSurveyOrg'
import SurveyParticipant from './Components/Forms/SurveyParticipant/SurveyParticipant'

function Main() {
    return (
        <main role="main">
            <Router>
                <Switch>
                    <Route path="/form" component={MainForm} />
                    <Route strict  path="/clientForm/:id?" component={ClientForm} />
                    <Route path="/thankyouOrg" component={ThankyouOrg} />
                    <Route path="/thankyouCl" component={ThankyouClient} />
                    <Route path="/surveyOrg" component={SurveyOrg} />
                    <Route path="/thankyouSurveyOrg" component={ThankyouSurveyOrg} />
                    <Route path="/surveyParticipant" component={SurveyParticipant} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </main>
    )
    
}

export default Main