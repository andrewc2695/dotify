import React from "react"
import { Link } from "react-router-dom";
class SidebarBottom extends React.Component{

    render(){
        const { playlists } = this.props
        return(
            <div className="sidebar_bottom">
                {playlists.map(playlist => {
                    return <Link to={`/playlists/${playlist.id}`} key={playlist.id} id="sidebar_playlist">{playlist.title}</Link> 
                })}
            </div>
        )
    }
}

export default SidebarBottom;