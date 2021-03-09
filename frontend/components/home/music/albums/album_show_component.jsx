import React from "react"
import SongContainer from "../songs/song_container"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice, faPlay } from '@fortawesome/free-solid-svg-icons'


class AlbumShowComponent extends React.Component{
    constructor(props){
        super(props)
        this.buttonPush = this.buttonPush.bind(this)
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        this.props.fetchAlbum(this.props.match.params.albumId)
    }

    buttonPush(){
        const info = this.props.location.pathname.split("/");
        const location = info[1];
        const locationId = Number(info[2]);
        const song = Object.values(this.props.album.songs)[0]
        const songInfo = { location: location, locationId: locationId, song: song.id }
        const audio = new Audio(song.audioUrl);
        songInfo.song = song
        songInfo.currentSong = audio;
        songInfo.artist = this.props.album.artist;
        this.props.receiveSong(songInfo)
    }

    render(){
        let count = 0;
        if(this.props.album === undefined){
            return(
            <div className="null_content_window">
                <div id="null_results">
                    <div id="null_words">
                        
                    </div>
                </div> 
            </div> 
            )
        };
        if(this.props.album.album === undefined){
            return (
            <div>
                <div >
                    <div id="null_results">
                        
                    </div>
                </div> 
            </div > 
            )
        };

        const album = this.props.album.album;
        let songs = ""
        if (this.props.album.songs !== undefined){
            songs = Object.values(this.props.album.songs)
        }
        const artist = this.props.album.artist;
        let artistName = ""
        if(artist !== undefined){
            artistName = artist[album.artist_id].name
        }
        return(
            <div className="main_content_window" id="album_show_main_window">
                <div className="album_show_top">
                    <div className="album_show_pic">
                        <img id="album_show_pic"  src={album.photoUrl}/>
                    </div>
                    <div className="album_show_info">
                        <div id="album_show_album">
                            Album
                        </div>
                        <div id="album_show_title">
                            {album.title}
                        </div>
                        <div id="album_show_info">
                            {artistName} - {album.year}
                        </div>
                    </div>
                </div>
                <div className="album_show_bottom">
                    <button className="green_play_button" onClick={() => this.buttonPush()}>
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
                            count += 1;
                            return <div key={count} id="album_show_song"><SongContainer artist={artist[album.artist_id]} song={song}/></div>
                        })}
                    </div>

                </div>
            </div>
        )
    };
}

export default AlbumShowComponent;