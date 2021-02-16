import React from "react"

import ArtistIndexObject from "./artist_index_object";

class ArtistIndexComponent extends React.Component{
    constructor(props){
        super(props);
        this.counter = 0;
    }
    componentDidMount(){
        this.props.fetchArtists();
        this.props.fetchPlaylists(this.props.currentUser)
    }

    render(){
        debugger
       const { artists } = this.props;
       if (artists === {}) return null
        return(
            <div>
                <div className="index_objects_div">
                    <div className="index_title">Artists</div>
                    <div className="artist_profile_pic_div">
                        {artists.map(artist => {
                            if(this.counter <= 5){
                                return <ArtistIndexObject artist={artist} />
                            }
                        })}
                    </div>
                </div>
            <div className="artist_index_div">
                <div className="index_objects_div">
                    <div className="index_title">Artists</div>
                    <div className="artist_profile_pic_div">
                        {artists.map(artist => {
                                return <ArtistIndexObject artist={artist} />
                        })}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ArtistIndexComponent;