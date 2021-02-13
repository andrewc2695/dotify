import React from "react"

class ArtistIndexObject extends React.Component{

    render(){
        const { artist } = this.props;
        return(
            <div className="artist_profile_object" >
                <img className="artist_profile_pic" src={artist.photoUrl} />
                <div>{artist.name}</div>
            </div>
        )
    }  
};


export default ArtistIndexObject


