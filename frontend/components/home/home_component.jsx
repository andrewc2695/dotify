import React from "react"
import { Link, Redirect, Route } from "react-router-dom"
import { login } from "../../util/session_api_util";
import LoggedInComponet from "./logged_in_component";
import LoggedOutComponet from "./logged_out_component.jsx";

class homeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const { currentUser, logout } = this.props;
        if(currentUser){
            return(
                <LoggedInComponet currentUser={currentUser} logout={logout}/>
            )
        }else{
            return(
                <LoggedOutComponet />
            )
        }
    }
}

export default homeComponent;