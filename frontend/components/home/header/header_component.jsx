import React from "react"
import { Link, Redirect, Route } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faSearch, faGrin, 
          faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'


class HeaderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {dropdownButton: "header_dropdown_button_down", sort: faSortDown, search: ""};
        this.userProfile = "header_users_div";
        this.handleDropDown = this.handleDropDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
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

    handleSearch(e){
        e.preventDefault();
        this.props.removeSearch();
        this.props.search(this.state.search);
        this.props.history.push(`/searches/${this.state.search}`)  
    }

    handleChange(e){
        this.setState({search: e.currentTarget.value});
    }

    handleLogout(){
        debugger
        if(this.props.currentSong !== undefined){
            this.props.currentSong.pause();
        }
        this.props.resetState();
        this.props.logout();
    }

    render(){
        debugger
        return(
            <div id="header_component">
                <div className="header_buttons_and_search">
                    <button className="header_history" id="header_back_button" 
                        onClick={() => this.props.history.goBack()}>
                        <FontAwesomeIcon icon={faChevronLeft} className="history_icon" />
                    </button>
                    <button className="header_history"id="header_forward_button"
                        onClick={() => this.props.history.goForward()}>
                        <FontAwesomeIcon icon={faChevronRight} className="history_icon" />
                    </button>
                    <form id="header_search_bar" onSubmit={this.handleSearch}>
                        <div id="search_icon">
                            <FontAwesomeIcon icon={faSearch} className="search_icon" />
                        </div>
                            <input type="text" placeholder="Search" autoComplete="off"
                                value={this.state.search} id="header_search"
                                onChange={this.handleChange}
                            />
                    </form>
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
                    <a className="drop_down_div" href="https://github.com/andrewc2695">Github</a>
                    <a className="drop_down_div" href="https://www.linkedin.com/in/andrew-curd-054997b1/">LinkedIn</a>
                    <button className="drop_down_div" onClick={() => this.handleLogout()}>
                        Log Out
                    </button>
                </div>
            </div>
        )
    }
}

export default HeaderComponent;