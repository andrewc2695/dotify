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
                <h3>{formType}</h3>
                <label id="session_username"> Username:
                <br/>
                    <input 
                        type="text" value={this.state.username} 
                        onChange={this.handleCahnge("username")}
                        />
                </label>
                <br/>
                <label id="session_username"> Password:
                <br/>
                    <input
                        type="password" value={this.state.password}
                        onChange={this.handleCahnge("password")}
                    />
                </label>
                <br/>
                <button type="submit" id="session_submit">
                    {formType}
                </button>
            </form>
            </div>
        )
    }
}

export default SessionForm;