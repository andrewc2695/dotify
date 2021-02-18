import React from "react"
import { Link } from "react-router-dom"

class SongComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {play: false}
        this.audio = new Audio(this.props.song.audioUrl)
    }

    playAudio(){
        // if(this.state.play === false){
        //     this.audio.play();
        //     this.setState({play: true});
        // }else{
        //     this.audio.pause();
        //     this.setState({play: false})
        // }
        
    }


    render(){
        return(
            <div className="song_component_div" id="song_search_div" onClick={() => this.playAudio()} >
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
                    1:00
                    {/* time will go here eventually */}
                </div>
            </div>
        )
    }
}

export default SongComponent