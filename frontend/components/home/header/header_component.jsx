import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons'


class HeaderComponent extends React.Component{
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
                    <div id="header_users">

                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderComponent;