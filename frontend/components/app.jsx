import React from "react"
import { Link, Redirect, Route, Switch } from "react-router-dom"
import homeComponent from "./home/home_component";
import signupComponent from "./signup/sign_up_component"

const App = () => {
    return (
    <div>
        <Switch>
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