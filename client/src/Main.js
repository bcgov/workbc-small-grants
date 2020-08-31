import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Form from './Form'
import Thankyou from './Thankyou'

function Main() {
    return (
        <main role="main">
            <Router>
                <Switch>
                    <Route path="/form">
                        <Form />
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