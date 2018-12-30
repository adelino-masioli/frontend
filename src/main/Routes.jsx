import React from 'react'
import { Switch, Route, Redirect } from 'react-router'


import Dashboard from '../screens/dashboard/Dashboard'
import User from '../screens/user/User'

class Routes extends React.Component {
    render() {
        return(
        <Switch>
            <Route 
                exact 
                path='/' 
                component={Dashboard}
            />
            <Route 
                exact 
                path='/users' 
                component={User}
            />
            <Redirect from='/*' to='/' />
        </Switch>
        )
    }
}

export default Routes
