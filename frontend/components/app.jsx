import React from "react"
import { Link, Redirect, Route, Switch } from "react-router-dom"
import homeComponentContainer from "./home/home_compnent_container"
import signUpContainer from "./session/sign_up_container";
import logInContainer from "./session/log_in_container"
import { AuthRoute, ProtcRoute } from "../util/route_util"
import homeMainComponent from "./home/logged_in/home_main_component";


const App = () => {
    return (
    <div>
        <Switch>
            <AuthRoute exact path="/signup" component={signUpContainer}/>
            <AuthRoute exact path="/login" component={logInContainer}/>
            <ProtcRoute path="/home" component={homeMainComponent}/>
            <Route exact path="/" component={homeComponentContainer} />
            <Route path="*">
                <Redirect to="/" />
            </Route>
        </Switch>
    </div>
    )
}

export default App;
