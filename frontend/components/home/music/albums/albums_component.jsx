import React from "react"

class AlbumComponent extends React.Component{

    render(){
        return(
            <div className="album_object_div">
                <div className="album_cover_pic">
                    <img className="album_image" src={this.props.album.photoUrl} />
                </div>
                <div className="album_title_div">
                    <div id="album_title">
                        {this.props.album.title}
                    </div>
                    <div id="album_year">   
                        {this.props.album.year}
                    </div>
                </div>
            </div>

        )
    }
}

export default AlbumComponent;