import React from "react"
import { Link, Redirect, Route, Switch } from "react-router-dom"
import homeComponentContainer from "./home/home_compnent_container"
import signUpContainer from "./session/sign_up_container";
import logInContainer from "./session/log_in_container"
import { AuthRoute } from "../util/route_util"
import NotFoundPage from "./notfound/not_found";


const App = () => {
    return (
    <div>
        <Switch>
            <AuthRoute exact path="/signup" component={signUpContainer}/>
            <AuthRoute exact path="/login" component={logInContainer}/>
            <Route path="/" component={homeComponentContainer} />
        </Switch>
    </div>
    )
}

export default App;
