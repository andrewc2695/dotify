import React from "react"
import { Link } from "react-router-dom"

class SongComponent extends React.Component{
    constructor(props){
        super(props)
        // this.audio = new Audio(this.props.song.audioUrl);
        this.playAudio = this.playAudio.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handlePlaylist = this.handlePlaylist.bind(this)
        this.state = ({dropdown: "song_dropdown_false", playlistDropDown: "playlist_drop_false"})
        this.location = "";
        this.locationId = "";
    }

    playAudio(songInfo){
        // if(this.state.play === false){
        //     this.audio.play();
        //     this.setState({play: true});
        // }else{
        //     this.audio.pause();
        //     this.setState({play: false})
        // }
        const audio = new Audio(this.props.song.audioUrl);
        songInfo.song = this.props.song
        songInfo.currentSong = audio;
        songInfo.artist = this.props.artist;
        this.props.receiveSong(songInfo)
        
    }
    handleClick(e){
        if (e.target.id === "song_search_div"){
            this.playAudio({ location: this.location, locationId: this.locationId, song: this.props.song.id })
        } else if (e.target.id === "song_options" || e.target.id === "modal"){
            if (this.state.dropdown === "song_dropdown_false"){
                this.setState({ dropdown: "song_dropdown_true"})
            } else{
                this.setState({ dropdown: "song_dropdown_false"})
            }
        }else{
            
        }
    }

    handlePlaylist(pId, type){
        if(type === "add"){
            this.props.addSongToPlaylist({playlist_id: pId, song_id: this.props.song.id})
            this.setState({ dropdown: "song_dropdown_false" })
        }
    }

    render(){
        const info = this.props.location.pathname.split("/");
        this.location = info[1];
        this.locationId = Number(info[2]);
        let options = "add"
        // if(this.props.playlist !== undefined){
        //     options = "delete"
        // }
        return(
            <div className="song_component_div" id="song_search_div" 
                onClick={this.handleClick}>
                <div className="song_component_left">
                    <div className="ord_div">
                        {this.props.song.ORD}
                    </div>
                    <div className="song_info">
                        <div className="song_component_title_div">
                            {this.props.song.title}
                        </div>
                        <Link to={`/artists/${this.props.artist.id}`} id="song_artist_name">
                            {this.props.artist.name}
                        </Link>
                    </div>
                </div>
                <div className="song_component_right">
                    <button id="song_options">...</button>
                    <div id={this.state.dropdown}>
                        <div className={options} id="add_to_playlists">
                            <div id="add_playlist_header"> Add to playlist</div>
                        {this.props.playlists.map(playlist => {
                            return (<button key={playlist.id} id="add_to_playlist_list" onClick={() => this.handlePlaylist(playlist.id, "add")}>
                                {playlist.title}
                            </button>)
                        })}
                        </div>
                    </div>
                    <div>2:07</div>
                </div>
                <div className={this.state.dropdown} id="modal" onClick={this.handleClick}>
                    
                </div>
            </div>
        )
    }
}

export default SongComponent