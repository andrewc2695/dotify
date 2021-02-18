import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

class PlaybarComponent extends React.Component{
    constructor(props){
        super(props)
        this.playAudio = this.playAudio.bind(this);
        this.pauseAudio = this.pauseAudio.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = { playing: true}
    }

    componentDidUpdate(previousProps){
        debugger
        if(this.props.currentSong !== undefined){
            if(previousProps.currentSong !== this.props.currentSong){
                this.setState({playing: true});
            }
            if(this.state.playing === true){
                this.playAudio(this.props.currentSong);
            }
            if(this.state.playing === false && this.props.currentSong !== undefined){
                debugger
                this.pauseAudio(this.props.currentSong);
            }
        };
    }

    playAudio(currentSong){
        currentSong.play();
    }

    pauseAudio(currentSong){
        // debugger
        currentSong.pause();
    }

    handleToggle(){
        if(this.state.playing){
            this.setState({playing: false})
        }else{
            this.setState({playing: true})
        }
    }

    render(){
        console.log("playbar_component")
        return(
            <div className="playbar_main">
                <div className="playbar_left">

                </div>
                <div className="playbar_mid">
                    <div className="playbar_top_buttons">
                        <button className="playbar_play_button" onClick={() => this.handleToggle()}>
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