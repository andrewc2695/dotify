import React from "react"
import { Link, Redirect, Route } from "react-router-dom"



class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: "", password: ""};
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    render(){
        const { formType } = this.props
        return(
            <form onSubmit={this.handleSubmit} id="session_form">
                <h3>{formType}</h3>
                <label id="session_username"> Username:
                    <input 
                        type="text" value={this.state.username} 
                        onChange={this.handleCahnge("username")}
                        />
                </label>
                <label id="session_username"> Password:
                    <input
                        type="password" value={this.state.password}
                        onChange={this.handleCahnge("password")}
                    />
                </label>
                <button type="submit" id="session_submit">
                    {formType}
                </button>
            </form>
        )
    }
}

export default SessionForm;