import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import MainForm from './MainForm'
import Thankyou from './Thankyou'

function Main() {
    return (
        <main role="main">
            <Router>
                <Switch>
                    <Route path="/form">
                        <MainForm />
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