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
        this.duration = "";
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
                    let newTime = this.state.time + 1;
                    setTimeout(() => {
                        if(newTime - this.state.time === 1){
                            this.setState({ time: newTime });
                        }
                        if (this.state.time === Math.floor(this.duration)) {
                            console.log("hi")
                            this.setState({ playing: false, time: 0})
                            this.pauseAudio(this.props.currentSong)
                        }
                    }, 1000)
                }
            }
        if(this.state.playing === false && this.props.currentSong !== undefined){
            this.pauseAudio(this.props.currentSong);
        }
    }

    playAudio(currentSong){
        if(this.duration !== currentSong.duration){
            this.duration = currentSong.duration;
        }
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

    convertTime(time){
        let minutes = Math.floor(time/60);
        let seconds = time - (minutes * 60)
        if(seconds < 10){
            seconds = '0' + seconds
        }
        return minutes + ':' + seconds
    }

    render(){
        let duration = this.convertTime(Math.floor(this.duration))
        const timePercent = (this.state.time/this.duration)
        const widthPercent = (575 * timePercent);
        // debugger
        const realTime = this.convertTime(this.state.time)
        if(duration === "0:00"){
            duration = ""
        }
        console.log(widthPercent)
        const myStyle = {
            width: widthPercent,
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
                            <div className="left_progress">
                                {realTime}
                                <div id="the_playbar_container">
                                    <div className="progress" style={myStyle}>

                                    </div>
                                </div>
                            </div>
                                {duration}
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