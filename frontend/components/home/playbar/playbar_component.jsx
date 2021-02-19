import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";

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
        debugger
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
    
        if(this.props.currentSong === undefined) return null
        let duration = this.convertTime(Math.floor(this.duration));
        const timePercent = (this.state.time/this.duration);
        const widthPercent = (575 * timePercent);
        // const playingSong = this.props.location[this.props.locationId].songs[this.props.songId];
        const playingSong = this.props.song;
        const imgPic = playingSong.photoUrl;
        const songTitle = playingSong.title;
        const songArtist = this.props.artist;
        let realTime = this.convertTime(this.state.time)
        if(realTime === "0:00"){
            realTime = "";
        }
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
                    <img className="current_song_pic" src={imgPic}/>
                    <div className="current_song_info">
                        <div id="song_title">{songTitle}</div>
                        <Link to={`/artists/${songArtist.id}`} id="song_artist">{songArtist.name}</Link> 
                    </div>
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