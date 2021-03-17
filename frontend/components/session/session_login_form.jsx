import React from "react"
import { Link, Redirect, Route } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'



class SessionLoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = props.formInfo;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.props.removeErrors();

    }

    handleCahnge(type){
        return (e => {
            this.setState({[type]: e.currentTarget.value});
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action({username: this.state.username.trim(), password: this.state.password});
        // conditional for if errors.
        // this.props.history.push('/');

    }


    render(){
        const { formType, headerMsg, otherMsg, otherButtonMsg, errors, removeErrors } = this.props;
        let errorsClass = "errors_hidden";
        let inputClass = "session_input"
        if(errors.length){
            errorsClass = "errors_visable"
            inputClass = "session_input_errors"
        }
        return(
            <div id="session_div">
            <header>
                <div className="logo_div">
                        <Link to="/" className="dotify_logo">
                            <FontAwesomeIcon icon={faHeadphones} rotation={90} />otify
                        </Link>
                </div>
            </header>
            <form onSubmit={this.handleSubmit} id="session_form">
                <h4 className="session_msg" id="top_msg">{headerMsg}</h4> 
                <div className={errorsClass}>{errors[0]}</div>
                    <hr className="thin" />

                    <label id="session_username" className="session_label"> Username:
                
                    <input 
                        id="session_user_input"
                        className={inputClass}
                        type="text" value={this.state.username} 
                        onChange={this.handleCahnge("username")}
                        placeholder="Username"
                        onClick={() => inputClass = "session_input"}
                        />
                </label>
                
                <label id="session_password" className="session_label"> Password:
                
                    <input
                        id="session_password_input"
                        placeholder="Password"
                        className={inputClass}
                        type="password" value={this.state.password}
                        onChange={this.handleCahnge("password")}
                    />
                </label>
                
                <button type="submit" id="session_submit" className="session_button">
                    {formType}
                </button>

                <button type="submit" id="demo_submit" className="session_button"
                    onClick={() => this.setState({username: "Demo", password: '123456'})}>
                    DEMO LOG IN
                </button>
                <hr className="thin"/>
                <h3 className="session_msg" id="otherMsg">{otherMsg}</h3>
                <Link className="session_button" id="session_switch" 
                    to={this.props.otherLink} onClick={() => removeErrors()}>
                        {otherButtonMsg}
                </Link>
            </form>
            </div>
        )
    }
}

export default SessionLoginForm;

{/* <button className="session_button" id="session_switch" onClick={this.handleSwitch}>
    <Link to={this.props.otherLink}>{otherButtonMsg}</Link>
</button> */}

//123456