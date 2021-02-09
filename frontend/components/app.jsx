import React from "react"
import { Link, Redirect, Route, Switch } from "react-router-dom"
import homeComponent from "./home/home_component";
import signUpContainer from "./session/sign_up_container";
import logInContainer from "./session/log_in_container"


const App = () => {
    return (
    <div>
        <Switch>
            <Route path="/signup" component={signUpContainer}/>
            <Route path="/login" component={logInContainer}/>
            <Route path="/" component={homeComponent} />
        </Switch>
    </div>
    )
}

export default App;

        // <header>
        //     <h1>Welcome to dotify</h1>
        //     <button><Link to="/signup">Sign Up</Link></button> <button>Log In</button>
        // </header>
        // <Route exact path="/signup"><Redirect to="google.com"/></Route>