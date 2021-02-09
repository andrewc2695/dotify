import React from "react"
import { Link, Redirect, Route } from "react-router-dom"



class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: "", password: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCahnge(type){
        return (e => {
            this.setState({[type]: e.currentTarget.value})
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state);
        // conditional for if errors.
        this.props.history.push('/');

    }

    render(){
        const { formType, headerMsg, otherMsg, otherButtonMsg } = this.props
        return(
            //header
            <div id="session_div">
            <form onSubmit={this.handleSubmit} id="session_form">
                <h4 className="session_msg">{headerMsg}</h4> 
                    <hr className="thin" />

                    <label id="session_username" className="session_label"> Username:
                
                    <input 
                        id="session_user_input"
                        className="session_input"
                        type="text" value={this.state.username} 
                        onChange={this.handleCahnge("username")}
                        placeholder="Username"
                        />
                </label>
                <br/>
                <label id="session_password" className="session_label"> Password:
                
                    <input
                        id="session_password_input"
                        placeholder="Password"
                        className="session_input"
                        type="password" value={this.state.password}
                        onChange={this.handleCahnge("password")}
                    />
                </label>
                
                    <button type="submit" id="session_submit" className="session_button">
                    {formType}
                </button>
                <hr className="thin"/>
                <h3 className="session_msg" id="otherMsg">{otherMsg}</h3>
                <button className="session_button" id="session_switch">{otherButtonMsg}</button>
            </form>
            </div>
        )
    }
}

export default SessionForm;