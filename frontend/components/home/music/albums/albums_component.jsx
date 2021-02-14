import React from "react"

class AlbumComponent extends React.Component{

    render(){
        return(
            <div>
                <div>
                    {this.props.album.title}
                </div>
                <img src={this.props.album.photoUrl} />
            </div>

        )
    }
}

export default AlbumComponent;