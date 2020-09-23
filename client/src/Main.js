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
                    <Route path="/form" component={MainForm} />
                    <Route path="/clientForm" component={ClientForm} />
                    <Route path="/thankyou" component={Thankyou} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </main>
    )
    
}

export default Main