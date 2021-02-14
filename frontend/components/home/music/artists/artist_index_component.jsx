import React from "react"

import ArtistIndexObject from "./artist_index_object";

class ArtistIndexComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchArtists();
    }

    render(){
       const { artists } = this.props;
       if (artists === {}) return null
        return(
            <div className="artist_index_div">
                <div className="artist_index_objects_div">
                    <div className="index_title">Artists</div>
                    <div className="artist_profile_pic_div">
                        {artists.map(artist => {
                            return <ArtistIndexObject artist={artist} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default ArtistIndexComponent;