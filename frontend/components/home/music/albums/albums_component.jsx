import React from "react"
import { Link } from "react-router-dom"

class AlbumComponent extends React.Component{

    titleizeName() {
        let titleName = "";
        let splitName = this.props.album.artist.name.split(" ");
        splitName.forEach(word => {
            titleName += word[0].toUpperCase() + word.slice(1) + " ";
        })
        return titleName;
    }

    render(){
        const { album } = this.props;
        
        let titleName = "";
        if(album.artist.name !== undefined){
            this.titleizeName();
        }
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
                        {titleName}
                        <br/>
                        {album.year} 
                    </div>
                </div>
            </Link>
        )
    }
}

export default AlbumComponent;