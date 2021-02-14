import React from "react"
import { Link, Redirect, Route, Switch } from "react-router-dom"
import homeComponentContainer from "./home/home_compnent_container"
import signUpContainer from "./session/sign_up_container";
import logInContainer from "./session/log_in_container"
import { AuthRoute, ProtcRoute } from "../util/route_util"
import HomeMainContainer from "./home/logged_in/home_main_container";
import ArtistIndexContainer from "./home/music/artists/artists_index_container"


const App = () => {
    return (
    <div>
            <AuthRoute exact path="/signup" component={signUpContainer}/>
            <AuthRoute exact path="/login" component={logInContainer}/>
            <ProtcRoute path="/home/main" component={ArtistIndexContainer} />
            <ProtcRoute path="/home" component={HomeMainContainer}/>
            <Route exact path="/" component={homeComponentContainer} />
            <Route path="*">
                <Redirect to="/" />
            </Route>
    </div>
    )
}

export default App;
