import React from "react"
import { Link, Redirect, Route } from "react-router-dom"
import { login } from "../../util/session_api_util";

class homeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const { currentUser, logout } = this.props;
        if(currentUser){
            return(
                <header>
                    <h1>Welcome to dotify, {currentUser.username}</h1>
                    <button onClick={() => logout()}>Logout</button>
                </header>
            )
        }else{
            return(
                <div>
                    <header>
                        <h1>Welcome to dotify</h1>
                        <button><Link to="/signup">Sign Up</Link></button>
                        <button><Link to="login">Login</Link></button>
                    </header>
                </div>
            )
        }
    }
}

export default homeComponent;