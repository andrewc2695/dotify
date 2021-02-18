import React from "react"
import { Link, Redirect } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones, faPlusSquare, faHome, faSearch, faBookOpen } from '@fortawesome/free-solid-svg-icons'


class SideBarTop extends React.Component {
    constructor(props){
        super(props);
        this.createPlaylist = this.createPlaylist.bind(this);
        this.state = {create: false}
    }

    createPlaylist(){
        const num = this.props.playlists.length + 1
        this.props.createPlaylist({title: `My Playlist #${num}`,
                                         user_id: this.props.currentUser.id});
    }

    componentDidMount(){
        if(this.props.playlists.length === 0 ){
            this.props.fetchPlaylists(this.props.currentUser.id)
        }
        // if(this.state.create === true){
        //     const playlistId = this.props.playlists[this.props.playlists.length - 1].id
        //     this.props.history.push(`/playlists/${playlistId}`)
        // }
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
                        <Link to="/search/a" className="sidebar_content">
                            <FontAwesomeIcon icon={faSearch} className="sidebar_link_icon"/> 
                            Search
                        </Link>
                    </div>
                    <div className="sidebar_link">
                        <button className="sidebar_content">
                            <FontAwesomeIcon icon={faBookOpen} className="sidebar_link_icon"/> 
                            Library
                        </button>
                    </div>
                </div>
                <button id="sidebar_top_playlists" onClick={() => this.createPlaylist()}>
                    <div className="sidebar_static">PLAYLISTS</div>
                    <div className="sidebar_content" id="playlist_create">
                        <FontAwesomeIcon icon={faPlusSquare} id="playlist_create_icon"/> 
                        Create Playlist
                    </div>
                </button>
            </div>
        )
    }
}

export default SideBarTop;