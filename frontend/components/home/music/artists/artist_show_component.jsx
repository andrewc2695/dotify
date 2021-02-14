import React from "react"

class ArtistShowComponent extends React.Component{

    componentDidMount(){
        this.props.fetchArtist(this.props.match.params.artistId);
    }

    render(){
        if (this.props.artist === undefined){
            return null;
        }
        debugger
        const { artist } = this.props;
        return(
            <div className="main_content_window">
                <div className="artist_show_pic">
                    <img id="show_profile_pic" src={artist.photoUrl} /> 
                    
                </div>
                <div className="artist_show_div">
                    <div className="artist_show_name">
                        {artist.name}
                    </div>
                    <div className="artist_music_div">
                        <div>
                            <button className="green_play_button"></button>
                        </div>
                        <div className="artist_popular_div">

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ArtistShowComponent;