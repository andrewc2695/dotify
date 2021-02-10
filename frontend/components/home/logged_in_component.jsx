import React from "react"
import { Link, Redirect, Route } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrinAlt } from '@fortawesome/free-solid-svg-icons'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'


class LoggedInComponet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {modal: "loggin_modal_hidden"}
    }

    handleModal() {
        if (this.state.modal === "loggin_modal_hidden") {
            this.setState({ modal: "loggin_modal" })
        } else {
            this.setState({ modal: "loggin_modal_hidden" })
        }
    }

    render() {
        return (
            <div className="logged_out_div">
                <header className="website_header">
                    <div className="website_header_div">
                        <div className="website_header_div_div">
                            <h1>Dotify</h1>
                        </div>
                        <button className="website_header_div_div" id="user_profile_div" onClick={() => this.handleModal()}>
                            <FontAwesomeIcon icon={faGrinAlt} /> 
                            {this.props.currentUser.username}
                        </button>
                    </div>
                </header>
                <div className="logged_out_text_div">
                    <div className="logged_out_text" id="logged_out_big_text">
                            Welcome to Dotify, {this.props.currentUser.username}
                    </div>
                </div>
                <div id={this.state.modal} onClick={() => this.handleModal()}>
                    <div className="website_header_div_div" id="modal_content">
                        <button id="modal_close" onClick={() => this.handleModal()}><FontAwesomeIcon icon={faWindowClose} /></button>
                        <div id="modal_links">
                            <button onClick={() => this.props.logout()}>Log out</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoggedInComponet;