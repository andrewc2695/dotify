import React from "react"
import { Link, Redirect, Route } from "react-router-dom"



class SessionSignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: "", password: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.usernameErrors = "username_errors_hidden";
        this.passwordErrors = "password_errors_hidden";
        this.usernameTaken = "username_taken_hidden";
        this.usernameErrorMsg = "This appears on your profile.";
        this.passwordErrorMsg = "";
        this.passWordInput = "";
        this.usernameInput = "";

    }

    handleCahnge(type){
        return (e => {
            this.setState({[type]: e.currentTarget.value});
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state);
        this.usernameErrors = "username_errors_hidden";
        this.passwordErrors = "password_errors_hidden";
        this.usernameTaken = "username_taken_hidden";
        this.usernameErrorMsg = "This appears on your profile.";
        this.passwordErrorMsg = "";
        this.passWordInput = "";
        this.usernameInput = "";

    }

    render(){
        const { formType, headerMsg, otherMsg, otherButtonMsg, errors, removeErrors } = this.props;
        errors.forEach(error => {
            if (error.split(" ")[0] === "Username") {
                this.usernameErrors = "username_errors_displayed";
                this.usernameInput = "username_input_errors";
                this.usernameErrorMsg = error;
                if (error === "Username has already been taken") {
                    this.usernameTaken = "username_taken_displayed";
                }
            } else if (error.split(" ")[0] === "Password") {
                this.passwordErrors = "password_errors_displayed";
                this.passwordInput = "password_input_errors";
                this.passwordErrorMsg = error;
            }
        });
        debugger
        let inputClass = "signup_session_input"
        return(
            <div id="signup_session_div">
            <header>
                <h2 className="dotify_logo">Dotify</h2>
            </header>
                <form onSubmit={this.handleSubmit} id="signup_session_form">
                <h4 className="signup_session_msg" id="signup_top_msg">{headerMsg}</h4> 
                    <hr className="thin" />

                    <label id="signup_session_username" className="signup_session_label"> What should we call you?
                
                    <input 
                        id="signup_session_user_input"
                        className={this.usernameInput}
                        className={"signup_session_input"}
                        type="text" value={this.state.username} 
                        onChange={this.handleCahnge("username")}
                        placeholder="Username"
                        />
                </label>
                <div className="signup_session_label" className={this.usernameErrors} id="under_username">{this.usernameErrorMsg}</div>
                <br/>
                <label id="signup_session_password" className="signup_session_label"> Create a password
                
                    <input
                        id="signup_session_password_input"
                        placeholder="Password"
                        className={this.passwordInput}
                        className={"signup_session_input"}
                        type="password" value={this.state.password}
                        onChange={this.handleCahnge("password")}
                    />
                </label>
                <div className="signup_session_label" className={this.passwordErrors} id="under_password">{this.passwordErrorMsg}</div>

                
                    <button type="submit" id="signup_session_submit" className="signup_session_button" onClick={() => removeErrors()}>
                    {formType}
                </button>
                <div className="otherDiv">
                    <h5 className="signup_session_msg" id="signup_otherMsg">{otherMsg}</h5>
                    <Link className="signup_session_link" id="signup_session_switch" 
                        to={this.props.otherLink} onClick={() => removeErrors()}>
                        {otherButtonMsg}
                    </Link>
                </div>
            </form>
            </div>
        )
    }
}

export default SessionSignupForm;