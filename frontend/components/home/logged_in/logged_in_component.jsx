import React from "react"
import { Link, Redirect, Route } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrinAlt } from '@fortawesome/free-solid-svg-icons'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'



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
                        <div className="website_header_div_div" id="logo_div">
                            <a href="/"><FontAwesomeIcon icon={faHeadphones} rotation={90} />otify</a>
                        </div>
                        <div className="website_header_div_div" id="user_profile_div">
                            <a className="personal_link" id="github" href="https://github.com/andrewc2695" target="_blank">Github</a>
                            <a className="personal_link" href="https://www.linkedin.com/in/andrew-curd-054997b1/" target="_blank">LinkedIn</a>
                            <button className="website_header_div_div" onClick={() => this.handleModal()}>
                                <FontAwesomeIcon icon={faGrinAlt} />
                                {this.props.currentUser.username}
                            </button>
                        </div>
                    </div>
                </header>
                <div className="logged_out_text_div">
                    <div className="logged_out_text" id="logged_out_big_text">
                            Welcome to Dotify, {this.props.currentUser.username}!
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