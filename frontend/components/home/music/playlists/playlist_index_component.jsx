import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

class PlaylistIndexComponent extends React.Component {

    render() {
        // const colors = ["red", "orange", "green", "yellow", "blue", "pink", "purple"]
        // const color = colors[Math.floor(Math.random() * colors.length)]
        const { playlist } = this.props;
        let songs = "";
        let one = "hidden";
        let four= "hidden";
        let not_four = "";
        let song1 = "";
        let song2 = "";
        let song3 = "";
        let song4 = "";
        if(playlist.songs !== undefined){
            songs = Object.values(playlist.songs);
            if (songs.length > 0 && songs.length < 4) {
                song1 = songs[0].photoUrl;
                one = "one";
                four = "hidden";
                not_four = "hidden";
            }
            if(songs.length > 3){
                song1 = songs[0].photoUrl;
                song2 = songs[1].photoUrl;
                song3 = songs[2].photoUrl;
                song4 = songs[3].photoUrl;
                four = "";
                one = "hidden";
                not_four = "hidden";
            }
        }
        return (
            <Link to={`playlists/${playlist.id}`} className="album_object_div" id="playlist_index_object">
                <div className="album_cover_pic">
                    <div className="playlist_cover" className="not_four" id={`${not_four}`}>
                        <FontAwesomeIcon icon={faMusic} />
                    </div>
                    <div className="playlist_cover" id={`${one}`}>
                        <img className="playlist_one_image" src={`${song1}`} />
                    </div>
                    <div className="playlist_cover" id={`${four}`}>
                        <img className="playlist_cover_image"  src={`${song1}`}/>
                        <img className="playlist_cover_image" src={`${song2}`} />
                        <img className="playlist_cover_image" src={`${song3}`} />
                        <img className="playlist_cover_image" src={`${song4}`} />
                    </div>
                </div>
                <div className="album_title_div">
                    <div id="album_title">
                        {playlist.title}
                    </div>
                </div>
            </Link>
        )
    }
}

export default PlaylistIndexComponent;