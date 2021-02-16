import React from "react"
import { Link } from "react-router-dom"

class PlaylistIndexComponent extends React.Component {

    render() {
        const { playlist } = this.props;
        return (
            <Link to={'/'} className="album_object_div">
                <div className="album_cover_pic">
                    <img className="album_image" />
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