import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
//import MainForm from './Components/Forms/MainFormDeprecated/MainForm'
import ThankyouOrg from './Components/Forms/MainFormIntake4/ThankyouOrg'
import ThankyouClient from './Components/Forms/ClientForm/ThankyouClient'
import ClientForm from './Components/Forms/ClientForm/ClientForm'
import FormUnavailable from './Components/Forms/ClientForm/FormUnavailable'
// import SurveyOrg from './Components/Forms/SurveyOrg/SurveyOrg'
// import ThankyouSurveyOrg from './Components/Forms/SurveyOrg/ThankYouSurveyOrg'
// import SurveyParticipant from './Components/Forms/SurveyParticipant/SurveyParticipant'
// import ThankyouSurveyParticipant from './Components/Forms/SurveyParticipant/ThankYouSurveyParticipant'
// import SurveyStartParticipant from './Components/Forms/SurveyParticipant/SurveyStartParticipant'
// import SurveyStartOrg from './Components/Forms/SurveyOrg/SurveyStartOrg'
import ReportForm from './Components/Forms/Report/ReportForm'
import ThankYouReport from './Components/Forms/Report/ThankYouReport'
import MainForm2 from './Components/Forms/MainFormIntake4/MainForm2'
import ReportFormUnavailable from './Components/Forms/Report/FormUnavailable'

function Main() {
    return (
        <main role="main">
            <Router>
                <Switch>
                    {/*<Route path="/form" component={MainForm2} />/*}
                    {/*<Route path="/formIntake2" component={MainForm2} />*/}
                    {/*<Route path="/intakeForm/0t2lzfoxkijzq8gfnftg7ap0eh6gmkswn4m0" component={MainForm} />*/}
                    <Route strict  path="/clientForm/:id?" component={FormUnavailable} />
                    <Route strict  path="/participantForm/2/:id?" component={FormUnavailable} />
                    <Route strict  path="/participantForm/3/:id?" component={FormUnavailable} />
                    <Route strict  path="/participantForm/4/:id?" component={ClientForm} />
                    <Route strict  path="/report/zetola5sn8" component={ReportForm} />
                    <Route strict  path="/report/:id" component={ReportFormUnavailable} />
                    <Route path="/thankyouOrg" component={ThankyouOrg} />
                    <Route path="/thankyouCl" component={ThankyouClient} />
                    <Route path="/thankyouReport" component={ThankYouReport} />
                    {/*
                    <Route path="/surveyOrg/1" component={SurveyOrg} />
                    <Route path="/surveyParticipant/1" component={SurveyParticipant} />
                    <Route path="/surveyParticipant/2" component={SurveyParticipant} />
                    <Route path="/surveyOrg/2" component={SurveyOrg} />
                    <Route path="/thankyouSurveyOrg" component={ThankyouSurveyOrg} />
                    <Route path="/thankyouSurveyParticipant" component={ThankyouSurveyParticipant} />
                    <Route path="/surveyLandingOrg/:intake?" component={SurveyStartOrg} />
                    <Route path="/surveyLandingParticipant/:intake?" component={SurveyStartParticipant} />
                    <Route path="/surveyOrg/3" component={SurveyOrg} />
                    <Route path="/surveyParticipant/3" component={SurveyParticipant} />
                    */}
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </main>
    )
    
}

export default Main