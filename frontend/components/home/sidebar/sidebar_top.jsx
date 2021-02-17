import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones, faPlusSquare, faHome, faSearch, faBookOpen } from '@fortawesome/free-solid-svg-icons'


class SideBarTop extends React.Component {
    constructor(props){
        super(props)
    }

    createPlaylist(){
        
    }

    render(){
        return(
            <div id="sidebar_top_items">
                <div id="sidebar_top_logo">
                    <Link id="sidebar_logo" to="/">
                        <FontAwesomeIcon icon={faHeadphones} rotation={90} />otify
                    </Link>
                </div>
                <div id="sidebar_top_links">
                    <div className="sidebar_link">
                        <Link to="/" className="sidebar_content">
                            <FontAwesomeIcon icon={faHome} className="sidebar_link_icon"/> 
                            Home
                        </Link>
                    </div>
                    <div className="sidebar_link">
                        <button className="sidebar_content">
                            <FontAwesomeIcon icon={faSearch} className="sidebar_link_icon"/> 
                            Search
                        </button>
                    </div>
                    <div className="sidebar_link">
                        <button className="sidebar_content" onClick={this.createPlaylist}>
                            <FontAwesomeIcon icon={faBookOpen} className="sidebar_link_icon"/> 
                            Library
                        </button>
                    </div>
                </div>
                <div id="sidebar_top_playlists">
                    <div className="sidebar_static">PLAYLISTS</div>
                    <div className="sidebar_content" id="playlist_create">
                        <FontAwesomeIcon icon={faPlusSquare} id="playlist_create_icon"/> 
                        Create Playlist
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBarTop;