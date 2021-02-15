import React from "react"


class AlbumShowComponent extends React.Component{

    componentDidMount(){
        this.props.fetchAlbum(this.props.match.params.albumId)
    }

    render(){
        if(this.props.album === undefined) return null;
        if(this.props.album.album === undefined) return null
        const album = this.props.album.album;
        let songs = ""
        if (this.props.album.songs !== undefined){
            songs = Object.values(this.props.album.songs)
        }
        const artist = this.props.album.artist;
        debugger
        return(
            <div className="main_content_window" id="album_show_main_window">
                <div className="album_show_top">
                    <div className="album_show_pic">
                        <img id="album_show_pic" src={album.photoUrl}/>
                    </div>
                    <div className="album_show_info">
                        <div id="album_show_album">
                            Album
                        </div>
                        <div id="album_show_title">
                            {album.title}
                        </div>
                        <div id="album_show_info">
                            {artist.name}{album.year}
                        </div>
                    </div>
                </div>
                <div className="album_show_bottom">
                    <button className="green_play_button">

                    </button>
                    <div className="album_show_song_div">
                        {songs.map(song => {
                            return <SongComponent song={song}/>
                        })}
                    </div>

                </div>
            </div>
        )
    };
}

export default AlbumShowComponent;