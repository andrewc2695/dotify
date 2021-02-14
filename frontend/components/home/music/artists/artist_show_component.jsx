import React from "react"
import AlbumComponent from "../albums/albums_component"

class ArtistShowComponent extends React.Component{

    componentDidMount(){
        this.props.fetchArtist(this.props.match.params.artistId);
    }

    render(){
        debugger
        if (this.props.artist === undefined){
            return null;
        }
        const  artist  = this.props.artist;
        return(
            <div className="main_content_window">
                <div className="artist_show_pic">
                    <img id="show_profile_pic" src={artist.photoUrl} /> 
                    
                </div>
                <div className="artist_show_div">
                    <div className="artist_show_name">
                        {artist.name}
                    </div>
                    <div className="artist_music_div">
                        <div>
                            <button className="green_play_button"></button>
                        </div>
                        <div className="artist_popular_div">

                        </div>
                        <div className="artist_album_div">
                            <div id="artist_album_div_title">
                                Discography
                            </div>
                            <div id="aritst_album_div_album">
                                {this.props.albums.map(album => {
                                    return (
                                        <AlbumComponent album={album} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArtistShowComponent;