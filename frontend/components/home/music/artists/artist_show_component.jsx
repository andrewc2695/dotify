import React from "react"
import AlbumComponent from "../albums/albums_component"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import SongContainer from "../songs/song_container"


class ArtistShowComponent extends React.Component{

    componentDidMount(){
        window.scrollTo(0, 0)
        this.props.fetchArtist(this.props.match.params.artistId);
    }

    componentWillUnmount(){
        this.props.removeAlbums();
    }

    render(){
        if (this.props.artist === undefined){
            return (
                <div className="null_content_window">
                    <div id="null_results">
                        <div id="null_words">

                        </div>
                    </div>
                </div>
            )
        };
        const  artist  = this.props.artist;
        const albums = this.props.albums;
        let popular = []
        if(artist.popular !== undefined){
            popular = (Object.values(artist.popular));
        }

        let popOrder = 0
        return(
            <div className="main_content_window" id="artist_main_div">
                <div className="artist_show_pic">
                    <img id="show_profile_pic" loading="lazy" src={artist.photoUrl} /> 
                    
                </div>
                <div className="artist_show_div">
                    <div className="artist_show_name">
                        {artist.name}
                    </div>
                    <div className="artist_music_div">
                        <div>
                            <button className="green_play_button">
                                <FontAwesomeIcon icon={faPlay} />
                            </button>
                        </div>
                        <div className="artist_popular_div">
                            <div id="artist_album_div_title">
                                Popular
                            </div>
                            <div className="artist_popular_div">
                                {popular.map(song => {
                                    popOrder += 1;
                                    return(
                                        <div className="search_song_component">
                                            <div>{popOrder}</div>
                                            <img id="search_song_image" src={song.photoUrl} />
                                            <SongContainer key={song.id} artist={artist} song={song} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="artist_album_div">
                            <div id="artist_album_div_title">
                                Discography
                            </div>
                            <div id="aritst_album_div_album">
                                {albums.map(album => {
                                    return (
                                        <AlbumComponent key={album.id} album={album} />
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