import React from "react"
import SongComponent from "../songs/song_component"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'


class PlaylistShowComponent extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.fetchPlaylist(this.props.match.params.playlistId)
    }

    render() {
        debugger
        let count = 0;
        if (this.props.playlist === undefined) return null;
        const { playlist } = this.props;
        const songs = Object.values(playlist.songs)
        let four = "hidden"
        let not_four = ""
        let song1 = ""
        let song2 = ""
        let song3 = ""
        let song4 = ""
        if (songs.length > 3) {
            song1 = songs[0].photoUrl
            song2 = songs[1].photoUrl
            song3 = songs[2].photoUrl
            song4 = songs[3].photoUrl
            four = ""
            not_four = "hidden"
        }
        return (
            <div className="main_content_window" id="album_show_main_window">
                <div className="album_show_top">
                    <div className="playlis_cover_pic">
                        <div className="playlist_cover" className="not_four" id={`${not_four}`}>
                            <FontAwesomeIcon icon={faMusic} />
                        </div>
                        <div className="playlist_show_cover" id={`${four}`}>
                            <img className="playlist_show_image" src={`${song1}`} />
                            <img className="playlist_show_image" src={`${song2}`} />
                            <img className="playlist_show_image" src={`${song3}`} />
                            <img className="playlist_show_image" src={`${song4}`} />
                        </div>
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
                            <div className="song_info" id="playlist_song_title">
                                TITLE
                            </div>
                        </div>
                        {songs.map(song => {
                            count += 1
                            return( 
                            <div className="search_song_component">
                                <div>{count}</div>
                                <img id="search_song_image" src={song.photoUrl} />
                                <SongComponent artist={song.artist} song={song} />
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