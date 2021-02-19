import React from "react"
import { Link } from "react-router-dom"

class AlbumComponent extends React.Component{

    render(){
        const { album } = this.props;
        return(
            <Link to={`/albums/${album.id}`} className="album_object_div">
                <div className="album_cover_pic">
                    <img className="album_image" src={this.props.album.photoUrl} />
                </div>
                <div className="album_title_div">
                    <div id="album_title">
                        {album.title}
                    </div>
                    <div id="album_year">   
                        {album.artist.name}
                        <br/>
                        {album.year} 
                    </div>
                </div>
            </Link>
        )
    }
}

export default AlbumComponent;