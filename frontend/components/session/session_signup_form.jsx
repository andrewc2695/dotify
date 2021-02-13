import React from "react"
import { Link, Redirect, Route } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'




class SessionSignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: "", password: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.usernameErrors = "username_errors_hidden";
        this.passwordErrors = "password_errors_hidden";
        this.usernameTaken = "";
        this.usernameErrorMsg = "This appears on your profile.";
        this.passwordErrorMsg = "";
        this.passwordInput = "signup_session_input";
        this.usernameInput = "signup_session_input";

    }

    handleCahnge(type){
        return (e => {
            this.setState({[type]: e.currentTarget.value});
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.removeErrors()
        this.props.action({ username: this.state.username.trim(), password: this.state.password });
        this.usernameErrors = "username_errors_hidden";
        this.passwordErrors = "password_errors_hidden";
        this.usernameTaken = "";
        this.usernameErrorMsg = "";
        this.passwordErrorMsg = "";
        this.passwordInput = "signup_session_input";
        this.usernameInput = "signup_session_input";

    }

    render(){
        const { formType, headerMsg, otherMsg, otherButtonMsg, errors, removeErrors } = this.props;
        errors.forEach(error => {
            if (error.split(" ")[0] === "Username") {
                this.usernameErrors = "username_errors_displayed";
                this.usernameInput = "username_input_errors";
                this.usernameErrorMsg = error;
                if (error === "Username has already been taken") {
                    this.usernameTaken = <Link to="/login"
                    onClick={() => removeErrors()}> 
                        . Log in?
                    </Link>;
                };
            } else if (error.split(" ")[0] === "Password") {
                this.passwordErrors = "password_errors_displayed";
                this.passwordInput = "password_input_errors";
                this.passwordErrorMsg = error;
            };
            if (this.usernameErrors !== "username_errors_displayed" ){
                this.usernameErrorMsg = "This appears on your profile."
            };
        });
        return(
            <div id="session_div">
            <header>
                <div className="logo_div">
                        <Link to="/" className="dotify_logo" onClick={() => removeErrors()}>
                            <FontAwesomeIcon icon={faHeadphones} rotation={90} />otify
                        </Link>
                </div>
            </header>
                <form onSubmit={this.handleSubmit} id="signup_session_form">
                <h4 className="signup_session_msg" id="signup_top_msg">{headerMsg}</h4> 
                    <hr className="thin" />

                    <label id="signup_session_username" className="signup_session_label"> What should we call you?
                
                    <input 
                        id="signup_session_user_input"
                        className={"signup_session_input"}
                        className={this.usernameInput}
                        type="text" value={this.state.username} 
                        onChange={this.handleCahnge("username")}
                        placeholder="Username"
                        />
                </label>
                <div className="signup_session_label" className={this.usernameErrors} id="under_username">{this.usernameErrorMsg}{this.usernameTaken}</div>
                
                <label id="signup_session_password" className="signup_session_label"> Create a password
                    <input
                        id="signup_session_password_input"
                        placeholder="Password"
                        className={"signup_session_input"}
                        className={this.passwordInput}
                        type="password" value={this.state.password}
                        onChange={this.handleCahnge("password")}
                    />
                </label>

                <div className="signup_session_label" className={this.passwordErrors} id="under_password">{this.passwordErrorMsg}</div>

                <div className="button_div">
                    <button type="submit" id="signup_session_submit" className="signup_session_button">
                        {formType}
                    </button>
                </div>

                <div className="otherDiv">
                    <h5 className="signup_session_msg" id="signup_otherMsg">{otherMsg}</h5>
                    <Link className="signup_session_link" id="signup_session_switch" 
                        to={this.props.otherLink} onClick={() => removeErrors()}>
                        {otherButtonMsg}
                    </Link>
                </div>
            </form>
            <div className="session_color">
            
            </div>
            </div>
        )
    }
}

export default SessionSignupForm;