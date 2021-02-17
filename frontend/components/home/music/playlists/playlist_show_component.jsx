import React from "react"
import SongComponent from "../songs/song_component"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


class PlaylistShowComponent extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.fetchPlaylist(this.props.match.params.playlistId)
    }

    render() {
        debugger
        if (this.props.playlist === undefined) return null;
        const { playlist } = this.props;
        let songs = []
        if (this.props.playlist.songs !== undefined) {
            songs = Object.values(playlist.songs)
        }
        return (
            <div className="main_content_window" id="album_show_main_window">
                <div className="album_show_top">
                    <div className="album_show_pic">
                        {/* <img id="album_show_pic" src={album.photoUrl} /> */}
                    </div>
                    <div className="album_show_info">
                        <div id="album_show_title">
                            {playlist.title}
                        </div>
                    </div>
                </div>
                <div className="album_show_bottom">
                    <button className="green_play_button">
                        <FontAwesomeIcon icon={faPlay} />
                    </button>
                    <div className="album_show_song_div">
                        <div className="song_component_left" id="hash_and_title">
                            <div className="ord_div">
                                #
                            </div>
                            <div className="song_info">
                                TITLE
                            </div>
                        </div>
                        {songs.map(song => {
                            return( 
                                <div className="search_song_component">
                                <img id="search_song_image" src={song.photoUrl} />
                                <SongComponent artist={song.artist.name} song={song} />
                            </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        )
    };
}

export default PlaylistShowComponent;