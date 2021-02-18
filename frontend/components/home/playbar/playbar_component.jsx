import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

class PlaybarComponent extends React.Component{
    constructor(props){
        super(props)
        this.playAudio = this.playAudio.bind(this);
    }

    componentDidUpdate(){
        debugger
        if(this.props.songId !== undefined){
            let currentSong = new Audio(this.props.location[this.props.locationId].songs[this.props.songId].audioUrl);
            this.playAudio(currentSong);
        }
    }

    playAudio(currentSong){
        currentSong.play();
    }

    render(){
        console.log("playbar_component")
        return(
            <div className="playbar_main">
                <div className="playbar_left">

                </div>
                <div className="playbar_mid">
                    <div className="playbar_top_buttons">
                        <button className="playbar_play_button">
                            <FontAwesomeIcon id="playbar_play" icon={faPlay} />
                        </button>
                        <div className="the_playbar">
                                
                        </div>
                    </div>
                </div>
                <div className="playbar_right">

                </div>

            </div>
        )
    }
}

export default PlaybarComponent;