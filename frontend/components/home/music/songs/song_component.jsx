import React from "react"
import { Link } from "react-router-dom"

class SongComponent extends React.Component{

    render(){
        return(
            <div className="song_component_div">
                <div className="song_component_left">
                    <div className="ord_div">
                        {this.props.song.ORD}
                    </div>
                    <div className="song_info">
                        <div className="song_component_title_div">
                            {this.props.song.title}
                        </div>
                        <Link to={`/artist/${this.props.artist.id}`} id="song_artist_name">
                            {this.props.artist.name}
                        </Link>
                    </div>
                </div>
                <div className="song_component_right">
                    1:00
                    {/* time will go here eventually */}
                </div>
            </div>
        )
    }
}

export default SongComponent