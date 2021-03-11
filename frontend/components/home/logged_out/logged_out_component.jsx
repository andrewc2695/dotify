import React from "react"
import { Link, Redirect, Route } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'





class LoggedOutComponet extends React.Component{
    constructor(props){
        super(props)
        this.state = {modal: "loggout_modal_hidden"}
    }


handleModal(){
    if (this.state.modal === "loggout_modal_hidden"){
        this.setState({modal: "loggout_modal"})
    }else{
        this.setState({modal: "loggout_modal_hidden"})
    }
}

    render(){
        return(
            <div className="logged_out_div">
                <header className="website_header">
                    <div className="website_header_div">
                        <div className="website_header_div_div" id="logo_div">
                            <a href="/"><FontAwesomeIcon icon={faHeadphones} rotation={90} />otify</a>
                        </div>
                        <div className="website_header_div_div" id="logout_link_div">
                            <a className="personal_link" id="github" href="https://github.com/andrewc2695">Github</a>
                            <a className="personal_link" id="linkedin" href="https://www.linkedin.com/in/andrew-curd-054997b1/">LinkedIn</a>
                                <Link className="non_personal_link" to="/signup">Sign Up</Link>
                                <Link className="non_personal_link" to="login">Login</Link>
                        </div>
                        <button className="website_header_div_div" id="modal_button_div"
                            onClick={() => this.handleModal()}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </header>
                <div className="logged_out_div">
                    <div className="logged_out_text_div">
                        <div className="logged_out_text" id="logged_out_big_text">
                            Listening is 
                            <br/>
                            Everything
                        </div>
                        <div className="logged_out_text" id="logged_out_small_text">
                            Plenty of music, all for free.
                        </div>
                        <Link to="/signup" className="logged_out_text" 
                            id="logged_out_button">
                            Sign Up
                        </Link>
                    </div>
                    <div id={this.state.modal} onClick={() => this.handleModal()}>
                        <div className="website_header_div_div" id="modal_content">
                            <button id="modal_close" onClick={() => this.handleModal()}><FontAwesomeIcon icon={faWindowClose} /></button>
                            <div id="modal_links">
                                <Link className="non_personal_link" to="/signup">Sign Up</Link>
                                <Link className="non_personal_link" to="login">Login</Link>
                                <hr id="modal_line" />
                                <a className="personal_link" id="github" href="https://github.com/andrewc2695">Github</a>
                                <a className="personal_link"  href="https://www.linkedin.com/in/andrew-curd-054997b1/">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    music: <a href="https://www.bensound.com">https://www.bensound.com</a>
                </div>
            </div>
        )
    }
}

export default LoggedOutComponet;