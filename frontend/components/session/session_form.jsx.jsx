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
        this.props.history.push('/');

    }

    render(){
        const { formType } = this.props
        return(
            <div id="session_div">
            <form onSubmit={this.handleSubmit} id="session_form">
                <h3 className="session_row">{formType}</h3>
                    <label id="session_username" className="session_row"> Username:
                <br/>
                    <input 
                        id="session_user_input"
                        className="session_row"
                        type="text" value={this.state.username} 
                        onChange={this.handleCahnge("username")}
                        placeholder="Username"
                        />
                </label>
                <br/>
                <label id="session_password"> Password:
                <br/>
                    <input
                        id="session_password_input"
                        placeholder="Password"
                        className="session_row"
                        type="password" value={this.state.password}
                        onChange={this.handleCahnge("password")}
                    />
                </label>
                <br/>
                    <button type="submit" id="session_submit" className="session_row">
                    {formType}
                </button>
            </form>
            </div>
        )
    }
}

export default SessionForm;