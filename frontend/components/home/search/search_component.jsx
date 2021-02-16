import React from "react"
import SongComponent from "../music/songs/song_component";
import { Link } from "react-router-dom"
import ArtistIndexObject from "../music/artists/artist_index_object";

class SearchComponent extends React.Component{

    componentDidMount(){
        this.props.search(this.props.match.params.searchTerm)
    }

    render(){
        // if(this.props.searchRes === undefined) return null
        const { songs, albums, artists } = this.props;
        return(
            <div className="main_content_window" id="search_main_window">
                <div className="main_search_window">
                    <div className="index_object_div" id="song_search_div">
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
                    <div className="index_object_div" id="artist_search_div">
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
                                return <ArtistIndexObject artist={artist} />
                            })}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
} 

export default SearchComponent;