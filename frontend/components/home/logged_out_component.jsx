import React from "react"
import { Link, Redirect, Route } from "react-router-dom"


class LoggedOutComponet extends React.Component{
    

    render(){
        return(
            <div className="logged_out_div">
                <header className="website_header">
                    <div className="website_header_div">
                        <div className="website_header_div_div" id="logout_logo_div">
                            <h1>Dotify</h1>
                        </div>
                        <div className="website_header_div_div" id="logout_link_div">
                            <Link to="/signup">Sign Up</Link>
                            <Link to="login">Login</Link>
                        </div>
                        <div className="website_header_div_div" id="modal_button_div">
                            button
                        </div>
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
                    <div id="loggout_modal">
                        <div id="modal_content">
                            <div id="modal_link_div">
                                hi
                                <Link to="/signup">Sign Up</Link>
                                <Link to="login">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoggedOutComponet;