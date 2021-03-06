import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import MainForm from './Components/Forms/MainForm/MainForm'
import ThankyouOrg from './Components/Forms/MainForm/ThankyouOrg'
import ThankyouClient from './Components/Forms/ClientForm/ThankyouClient'
import ClientForm from './Components/Forms/ClientForm/ClientForm'
//import FormUnavailable from './Components/Forms/ClientForm/FormUnavailable'
import SurveyOrg from './Components/Forms/SurveyOrg/SurveyOrg'
import ThankyouSurveyOrg from './Components/Forms/SurveyOrg/ThankYouSurveyOrg'
import SurveyParticipant from './Components/Forms/SurveyParticipant/SurveyParticipant'
import ThankyouSurveyParticipant from './Components/Forms/SurveyParticipant/ThankYouSurveyParticipant'
import SurveyStartParticipant from './Components/Forms/SurveyParticipant/SurveyStartParticipant'
import SurveyStartOrg from './Components/Forms/SurveyOrg/SurveyStartOrg'

function Main() {
    return (
        <main role="main">
            <Router>
                <Switch>
                    <Route path="/form" component={Home} />
                    <Route path="/intakeForm/0t2lzfoxkijzq8gfnftg7ap0eh6gmkswn4m0" component={MainForm} />
                    <Route strict  path="/clientForm/:id?" component={ClientForm} />
                    <Route strict  path="/participantForm/2/:id?" component={ClientForm} />
                    <Route strict  path="/participantForm/3/:id?" component={ClientForm} />
                    <Route path="/thankyouOrg" component={ThankyouOrg} />
                    <Route path="/thankyouCl" component={ThankyouClient} />
                    <Route path="/surveyOrg/1" component={SurveyOrg} />
                    <Route path="/thankyouSurveyOrg" component={ThankyouSurveyOrg} />
                    <Route path="/surveyParticipant/1" component={SurveyParticipant} />
                    <Route path="/thankyouSurveyParticipant" component={ThankyouSurveyParticipant} />
                    <Route path="/surveyLandingOrg/:intake?" component={SurveyStartOrg} />
                    <Route path="/surveyLandingParticipant/:intake?" component={SurveyStartParticipant} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </main>
    )
    
}

export default Main