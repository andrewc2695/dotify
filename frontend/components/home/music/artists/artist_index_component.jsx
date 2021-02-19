import React from "react"

import ArtistIndexObject from "./artist_index_object";
import PlaylistIndexComponent from "../playlists/playlist_index_component";
import { Link } from "react-router-dom";

class ArtistIndexComponent extends React.Component{
    constructor(props){
        super(props);
        this.counter = 0;
    }
    componentDidMount(){
        window.scrollTo(0, 0)
        this.props.fetchArtists();
        // this.props.fetchPlaylists(this.props.currentUser)
    }

    render(){
       const { artists, playlists } = this.props;
        if (artists === {}) return null
        let noPlaylists = ""
        if (playlists.length === 0){
            noPlaylists = "hidden"
        }
        return(
            <div className="artist_index_div" id="playlists" >
                <div className={`${noPlaylists}`}>
                    <div className="index_objects_div">
                        <div className="index_title">Playlists</div>
                        <div className="artist_profile_pic_div">
                            {playlists.map(playlist => {
                                return <PlaylistIndexComponent key={playlist.id} playlist={playlist} />
                                // return <ArtistIndexObject artist={artist} />
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="index_objects_div" id="artist_index_div">
                        <div id="artist_index_title_see_all">
                        <div className="index_title">Artists</div>
                        <div id="artist_index_see_all">
                            <Link to="/searches/undefined/artists">See All</Link>
                        </div>
                        </div>
                        <div className="artist_profile_pic_div">
                            <div id="aritst_profile_pic_div_div">
                                {artists.slice(1,6).map(artist => {
                                    return <ArtistIndexObject key={artist.id} artist={artist} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}

export default ArtistIndexComponent;