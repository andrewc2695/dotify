import React from "react"

import ArtistIndexObject from "./artist_index_object";
import PlaylistIndexComponent from "../playlists/playlist_index_component";

class ArtistIndexComponent extends React.Component{
    constructor(props){
        super(props);
        this.counter = 0;
    }
    componentDidMount(){
        window.scrollTo(0, 0)
        this.props.fetchArtists();
        this.props.fetchPlaylists(this.props.currentUser)
    }

    render(){
       const { artists, playlists } = this.props;
        if (artists === {} || playlists === {}) return null
        return(
            <div className="artist_index_div">
                <div>
                    <div className="index_objects_div">
                        <div className="index_title">Playlists</div>
                        <div className="artist_profile_pic_div">
                            {playlists.map(playlist => {
                                return <PlaylistIndexComponent playlist={playlist} />
                                // return <ArtistIndexObject artist={artist} />
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="index_objects_div" id="artist_index_div">
                        <div className="index_title">Artists</div>
                        <div className="artist_profile_pic_div">
                            <div id="aritst_profile_pic_div_div">
                                {artists.map(artist => {
                                    return <ArtistIndexObject artist={artist} />
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