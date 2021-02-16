import React from "react"

import ArtistIndexObject from "./artist_index_object";

class ArtistIndexComponent extends React.Component{
    constructor(props){
        super(props);
        this.counter = 0;
    }

    componentDidMount(){
        this.props.fetchArtists();
    }

    render(){
       const { artists } = this.props;
       if (artists === {}) return null
       this.counter = 0;
        return(
            <div className="artist_index_div">
                <div className="index_objects_div">
                    <div className="index_title">Artists</div>
                    <div className="artist_profile_pic_div">
                        {artists.map(artist => {
                            this.counter += 1
                            console.log(this.counter)
                            if(this.counter <= 5){
                                return <ArtistIndexObject artist={artist} />
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default ArtistIndexComponent;