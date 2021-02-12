import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faSearch, faGrin, 
          faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'


class HeaderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = { dropdownButton: "header_dropdown_button_down", sort: faSortDown}
        this.handleDropDown = this.handleDropDown.bind(this);
    }

    handleDropDown(){
        if (this.state.dropdownButton === "header_dropdown_button_down"){
            this.setState({ dropdownButton: "header_dropdown_button_up", sort: faSortUp})
        }else{
            this.setState({ dropdownButton: "header_dropdown_button_down", sort: faSortDown})
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
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div id="header_users_div">
                    <div id="header_profile">
                        <FontAwesomeIcon icon={faGrin} className="profile_icon" />

                    </div>
                    <div id="header_user_name">
                        AndrewCurd
                    </div>
                    <button id="header_dropdown_button" onClick={this.handleDropDown}>
                        <FontAwesomeIcon icon={this.state.sort} className={this.state.dropdownButton} />
                    </button>
                </div>
                <div id="dropdown_menue_visable">

                </div>
            </div>
        )
    }
}

export default HeaderComponent;