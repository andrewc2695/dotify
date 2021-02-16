import React from "react"
import SongComponent from "../music/songs/song_component";
import { Link } from "react-router-dom"
import ArtistIndexObject from "../music/artists/artist_index_object";
import AlbumComponent from "../music/albums/albums_component";

class SearchComponent extends React.Component{

    componentDidMount(){
        this.props.search(this.props.match.params.searchTerm)
    }

    render(){
        // if(this.props.searchRes === undefined) return null
        const { songs, albums, artists } = this.props;
        let songsHidden = ""
        let albumsHidden = ""
        let artistsHidden= ""
        if(songs.length === 0){
            songsHidden = "hidden"
        }
        if (albums.length === 0) {
            albumsHidden = "hidden"
        }
        if (artists.length === 0) {
            artistsHidden = "hidden"
        }
        return(
            <div className="main_content_window" id="search_main_window">
                <div className="main_search_window">

                    <div className="search_index_object_div" id="song_search_div" className={`${songsHidden}`}>
                        <div className="search_result_title">
                            <div id="search_result_title_left">
                                <Link>
                                    Songs
                                </Link>
                            </div>
                            <div id="search_result_title_right">
                                <Link>
                                    See All
                                </Link>
                            </div>
                        </div>
                        <div>
                            {songs.slice(0, 5).map(song => {
                                return(
                                    <div className="search_song_component">
                                        <img id="search_song_image" src={song.photoUrl} />
                                        <SongComponent artist={song.artist} song={song} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="index_object_div" id="artist_search_div" className={`${albumsHidden}`}>
                        <div className="search_result_title">
                            <div id="search_result_title_left">
                                <Link>
                                    Albums
                                </Link>
                            </div>
                            <div id="search_result_title_right">
                                <Link>
                                    See All
                                </Link>
                            </div>
                        </div>
                        <div className="search_results_row">
                            {albums.slice(0, 5).map(album => {
                                return <div><AlbumComponent album={album} /></div>
                            })}
                        </div>
                    </div>

                    <div className="index_object_div" id="artist_search_div" className={`${artistsHidden}`}>
                        <div className="search_result_title">
                            <div id="search_result_title_left">
                                <Link>
                                    Artists
                                </Link>
                            </div>
                            <div id="search_result_title_right">
                                <Link>
                                    See All
                                </Link>
                            </div>
                        </div>
                        <div className="search_results_row">
                            {artists.slice(0, 5).map(artist => {
                                return <div id="artist_object_div"><ArtistIndexObject artist={artist} /></div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default SearchComponent;