import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones, faPlusSquare } from '@fortawesome/free-solid-svg-icons'


class SideBarTop extends React.Component {

    render(){
        return(
            <div id="sidebar_top_items">
                <div id="sidebar_top_logo">
                    <Link to="/"><FontAwesomeIcon icon={faHeadphones} rotation={90} />otify</Link>
                </div>
                <div id="sidebar_top_links">
                    <button>Home</button>
                    <button>Search</button>
                    <button>Library</button>
                </div>
                <div id="side_bar_top_playlists">
                    PLAYLISTS
                    <FontAwesomeIcon icon={faPlusSquare}/> Create Playlist
                </div>
            </div>
        )
    }
}

export default SideBarTop;