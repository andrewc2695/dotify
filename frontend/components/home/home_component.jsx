import React from "react"
import { Link, Redirect, Route } from "react-router-dom"
import { login } from "../../util/session_api_util";
import HomeMainComponent from "./logged_in/home_main_component";
import LoggedInComponet from "./logged_in/logged_in_component";
import LoggedOutComponet from "./logged_out/logged_out_component.jsx";

class homeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const { currentUser, logout } = this.props;
        if(currentUser){
            return(
                <Redirect to="/home" currentUser={currentUser} logout={logout}/>
            )
        }else{
            return(
                <LoggedOutComponet />
            )
        }
    }
}

export default homeComponent;