import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import MainForm from './Components/Forms/MainForm/MainForm'
import Thankyou from './Thankyou'
import ClientForm from './Components/Forms/ClientForm/ClientForm'

function Main() {
    return (
        <main role="main">
            <Router>
                <Switch>
                    <Route path="/form">
                        <MainForm />
                    </Route>
                    <Route path="/clientForm">
                        <ClientForm />
                    </Route>
                    <Route path="/thankyou">
                        <Thankyou />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </main>
    )
    
}

export default Main