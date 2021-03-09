import React from "react"
import { Link } from "react-router-dom"

class SongComponent extends React.Component{
    constructor(props){
        super(props)
        this.playAudio = this.playAudio.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handlePlaylist = this.handlePlaylist.bind(this)
        this.state = ({dropdown: "song_dropdown_false", playlistDropDown: "playlist_drop_false"})
        this.location = "";
        this.locationId = "";
        this.add = "";
        this.delete = "";
    }

    playAudio(songInfo){
        const audio = new Audio(this.props.song.audioUrl);
        songInfo.song = this.props.song
        songInfo.currentSong = audio;
        songInfo.artist = this.props.artist;
        this.props.receiveSong(songInfo)  
    }

    handleClick(e){
        debugger
        if(e.target.id === "song_options" || e.target.id === "modal"){
            if (this.state.dropdown === "song_dropdown_false"){
                this.setState({ dropdown: "song_dropdown_true"})
            } else{
                this.setState({ dropdown: "song_dropdown_false"})
            }
        } else if (e.target.id !== "song_artist_name") {
            this.playAudio({ location: this.location, locationId: this.locationId, song: this.props.song.id })
        }
    }

    handlePlaylist(pId, type){
        if(type === "add"){
            this.props.addSongToPlaylist({playlist_id: pId, song_id: this.props.song.id})
            this.setState({ dropdown: "song_dropdown_false" })
        }else{
            this.props.removeSong(this.props.sapId)
            this.setState({ dropdown: "song_dropdown_false" })
        }
    }

    titleizeName(){
        let titleName = "";
        let splitName = this.props.artist.name.split(" ");
        splitName.forEach(word => {
            titleName += word[0].toUpperCase() + word.slice(1) + " ";
        })
        return titleName;
    }

    render(){
        const info = this.props.location.pathname.split("/");
        this.location = info[1];
        this.locationId = Number(info[2]);

        if(this.props.sapId === undefined){
            this.add = "add"
            this.delete = "hidden"
        }else{
            this.delete = "delete"
            this.add = "hidden"
        }
        let titleName = this.titleizeName();
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
                            {titleName}
                        </Link>
                    </div>
                </div>
                <div className="song_component_right">
                    <button id="song_options">...</button>
                    <div id={this.state.dropdown}>
                       <div className={this.add} id="add_to_playlists">
                            <div id="add_playlist_header"> <div id="add_playlist_header_div">Add to playlist</div></div>
                            {this.props.playlists.map(playlist => {
                                return (<button key={playlist.id} id="add_to_playlist_list" onClick={() => this.handlePlaylist(playlist.id, "add")}>
                                    <div className="add_playlist_title">{playlist.title}</div>
                                </button>)
                            })}
                        </div>
                        <div className={this.delete}>
                            <div onClick={() => this.handlePlaylist(null, "delete")}>Remove From Playlist</div>
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