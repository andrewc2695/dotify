import React from "react"
import { Link, Redirect, Route } from "react-router-dom"



class SessionSignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: "", password: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCahnge(type){
        return (e => {
            this.setState({[type]: e.currentTarget.value});
            if(type === "username"){
                this.username = true;
            }else if(type === "password"){
                this.password = true;
            }
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state);
        // conditional for if errors.
        // this.props.history.push('/');

    }

    componentDidUpdate(){

    }

    render(){
        const { formType, headerMsg, otherMsg, otherButtonMsg, errors } = this.props;
        let errorsClass = "signup_errors_hidden";
        let inputClass = "signup_session_input"
        if(errors.length){
            errorsClass = "signup_errors_visable"
            inputClass = "signup_session_input_errors"
        }
        return(
            <div id="signup_session_div">
            <header>
                <h2 className="dotify_logo">Dotify</h2>
            </header>
                <form onSubmit={this.handleSubmit} id="signup_session_form">
                <h4 className="signup_session_msg" id="signup_top_msg">{headerMsg}</h4> 
                <div className={errorsClass}>{errors[0]}</div>
                    <hr className="thin" />

                    <label id="signup_session_username" className="signup_session_label"> What should we call you?
                
                    <input 
                        id="signup_session_user_input"
                        className={inputClass}
                        type="text" value={this.state.username} 
                        onChange={this.handleCahnge("username")}
                        placeholder="Username"
                        onClick={() => inputClass = "signup_session_input"}
                        />
                </label>
                <div className="signup_session_label" id="under_username">This appears on your profile.</div>
                <br/>
                <label id="signup_session_password" className="signup_session_label"> Create a password
                
                    <input
                        id="signup_session_password_input"
                        placeholder="Password"
                        className={inputClass}
                        type="password" value={this.state.password}
                        onChange={this.handleCahnge("password")}
                    />
                </label>
                
                    <button type="submit" id="signup_session_submit" className="signup_session_button">
                    {formType}
                </button>
                <div class="otherDiv">
                    <h5 className="signup_session_msg" id="signup_otherMsg">{otherMsg}</h5>
                    <Link className="signup_session_link" id="signup_session_switch" to={this.props.otherLink}>{otherButtonMsg}</Link>
                </div>
            </form>
            </div>
        )
    }
}

export default SessionSignupForm;