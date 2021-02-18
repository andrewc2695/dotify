import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

class PlaybarComponent extends React.Component{
    constructor(props){
        super(props)
        this.playAudio = this.playAudio.bind(this);
        this.pauseAudio = this.pauseAudio.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = { playing: true, time: 0}
    }

    componentDidUpdate(previousProps){
        //double clicking song cause couter to go twice
        if(this.props.currentSong !== undefined){
            if(previousProps.currentSong !== this.props.currentSong){
                this.setState({playing: true, time: 0});
            }else if(this.state.playing === true){
                    if(this.state.time){
                    this.playAudio(this.props.currentSong);
                    }
                    console.log(this.state.time)
                    let newTime = this.state.time + 1;
                    setTimeout(() => {
                        if(newTime - this.state.time === 1){
                            this.setState({ time: newTime });
                        }
                    }, 1000)
                }
            }
        if(this.state.playing === false && this.props.currentSong !== undefined){
            this.pauseAudio(this.props.currentSong);
        }
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
        const timePercent = this.state.time/128;
        const widthPercent = (575 * timePercent);
        const myStyle = {
            width: widthPercent
        }
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
                                {this.state.time}
                                <div id="the_playbar" style={myStyle}>

                                </div>
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