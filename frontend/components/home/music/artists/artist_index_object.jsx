import React from "react"

class ArtistIndexObject extends React.Component{

    render(){
        const { artist } = this.props;
        return(
            <div className="profile_object" >
                <div>
                    <img className="profile_pic" src={artist.photoUrl} />
                </div>
                <div className="profile_name">
                    <div>{artist.name}</div>
                    <div id="profile_description">Artist</div>
                </div>

            </div>
        )
    }  
};


export default ArtistIndexObject


