import React from "react"
import { Link, Redirect, Route } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faSearch, faGrin, 
          faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'


class HeaderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = { dropdownButton: "header_dropdown_button_down", sort: faSortDown};
        this.userProfile = "header_users_div";
        this.handleDropDown = this.handleDropDown.bind(this);
    }

    handleDropDown(){
        if (this.state.dropdownButton === "header_dropdown_button_down"){
            this.setState({ dropdownButton: "header_dropdown_button_up", sort: faSortUp});
            this.userProfile = "header_users_div_up";
        }else{
            this.setState({ dropdownButton: "header_dropdown_button_down", sort: faSortDown});
            this.userProfile = "header_users_div";
        }
    }

    render(){
  
        return(
            <div id="header_component">
                <div className="header_buttons_and_search">
                    <button className="header_history" id="header_back_button">
                        <FontAwesomeIcon icon={faChevronLeft} className="history_icon" />
                    </button>
                    <button className="header_history"id="header_forward_button">
                        <FontAwesomeIcon icon={faChevronRight} className="history_icon" />
                    </button>
                    <div id="header_search_bar">
                        <div id="search_icon">
                            <FontAwesomeIcon icon={faSearch} className="search_icon" />
                        </div>
                        <input type="text" placeholder="Search" id="header_search"/>
                    </div>
                </div>
                <div id={`${this.userProfile}`}>
                    <div id="header_profile">
                        <FontAwesomeIcon icon={faGrin} className="profile_icon" />

                    </div>
                    <div id="header_user_name">
                        {this.props.currentUser}
                    </div>
                    <button id="header_dropdown_button" onClick={this.handleDropDown}>
                        <FontAwesomeIcon icon={this.state.sort} className={this.state.dropdownButton} />
                    </button>
                </div>
                <div id={this.state.dropdownButton}>
                    <Link to="" className="drop_down_div"></Link>
                    <Link to="" className="drop_down_div"></Link>
                    <button className="drop_down_div" onClick={() => this.props.logout()}>
                        Log Out
                    </button>
                </div>
            </div>
        )
    }
}

export default HeaderComponent;