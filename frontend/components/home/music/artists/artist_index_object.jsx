import React from "react"
import { Link } from "react-router-dom";

class ArtistIndexObject extends React.Component{


    render(){
        const { artist } = this.props;
        return(
            <Link to={`/artists/${artist.id}`} className="profile_object" >
                <div>
                    <img className="profile_pic" src={artist.photoUrl} />
                </div>
                <div className="profile_name">
                    <div>{artist.name}</div>
                    <div id="profile_description">Artist</div>
                </div>

            </Link>
        )
    }  
};


export default ArtistIndexObject


