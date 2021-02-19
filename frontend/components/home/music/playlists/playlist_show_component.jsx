import React from "react"
import SongContainer from "../songs/song_container"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'


class PlaylistShowComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = { dropdownButton: "playlist_dropdown_button_down", modal: "playlist_modal_hidden", playlistName: ""}
        this.handleDropDown = this.handleDropDown.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.buttonPush = this.buttonPush.bind(this);
        this.playlistModal = "playlist_modal_hidden"
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        setTimeout(() => {this.props.fetchPlaylist(this.props.match.params.playlistId)}, 400);
    }

    handleDropDown() {
        if (this.state.dropdownButton === "playlist_dropdown_button_down") {
            this.setState({ dropdownButton: "playlist_dropdown_button_up"});
        } else {
            this.setState({ dropdownButton: "playlist_dropdown_button_down"});
        }
    }

    handleModal() {
        console.log("hi")
        if (this.state.modal === "playlist_modal_hidden") {
            this.setState({ modal: "playlist_modal" })
            this.playlistModal = "playlist_modal_content"
        } else {
            this.setState({ modal: "playlist_modal_hidden" })
            this.playlistModal = "playlist_modal_hidden"
        }
    }

    deletePlaylist(){
        this.props.deletePlaylist(this.props.match.params.playlistId);
        this.props.history.push("/");
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updatePlaylist({ title: this.state.playlistName, id: this.props.playlist.id})
        this.playlistModal = "playlist_modal_hidden"
        this.setState({ modal: "playlist_modal_hidden"})
    }

    handleChange(e){
        this.setState({playlistName: e.currentTarget.value});
    }

    buttonPush() {
        const info = this.props.location.pathname.split("/");
        const location = info[1];
        const locationId = Number(info[2]);
        const song = Object.values(this.props.playlist.songs)[0]
        const songInfo = { location: location, locationId: locationId, song: song.id }
        const audio = new Audio(song.audioUrl);
        songInfo.song = song
        songInfo.currentSong = audio;
        songInfo.artist = song.artist;
        this.props.receiveSong(songInfo)
    }

    render() {
        let count = 0;
        if (this.props.playlist === undefined){
            return (
                <div className="null_content_window">
                    <div id="null_results">
                        <div id="null_words">

                        </div>
                    </div>
                </div>
            )
        };
        const { playlist } = this.props;
        let songs= [] 
        if(playlist.songs !== undefined){
            songs = Object.values(playlist.songs)
        }
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
                        <div className="playlist_cover_basic"  id={`${not_four}`}>
                            <FontAwesomeIcon icon={faMusic} />
                        </div>
                        <div className="playlist_show_cover" id={`${four}`}>
                            <img className="playlist_show_image" loading="lazy" src={`${song1}`} />
                            <img className="playlist_show_image" loading="lazy" src={`${song2}`} />
                            <img className="playlist_show_image" loading="lazy" src={`${song3}`} />
                            <img className="playlist_show_image" loading="lazy" src={`${song4}`} />
                        </div>
                    </div>
                    <div className="album_show_info">
                        <div id="album_show_title">
                            {playlist.title}
                        </div>
                        <form className={`${this.playlistModal}`} onSubmit={this.handleSubmit}>
                            <div id="new_playlist_name">New Playlist Name</div> 
                            <input type="text" className="rename_input" value={this.state.playlistName} 
                                onChange={this.handleChange}/>
                            <button className="rename_playlist_button" type="submit">Rename Playlist</button>
                        </form>
                        <div className="rename_playlist" onClick={() => this.handleModal()}>
                            Rename Playlist
                        </div>
                        <div className={`${this.state.modal}`} onClick={() => this.handleModal()}>

                        </div>
                    </div>
                </div>
                <div className="album_show_bottom">
                    <div className="playlist_top">
                        <button className="green_play_button" onClick={() => this.buttonPush()}>
                            <FontAwesomeIcon icon={faPlay} />
                        </button>
                        <div>
                            <button className="playlist_dots" onClick={() => this.handleDropDown()}>
                                ...
                            </button>
                            <div className={`${this.state.dropdownButton}`}>
                                <button onClick={() => this.handleModal()}>
                                    Rename Playlist
                                </button>
                                <button onClick={() => this.deletePlaylist()}>
                                    Delete Playlist
                                </button>
                            </div>
                        </div>
                    </div>
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
                                <SongContainer key={song.id} artist={song.artist} song={song} 
                                    playlist={this.props.playlist.id}/>
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