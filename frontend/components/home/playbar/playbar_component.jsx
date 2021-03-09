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
        this.time = 0
        this.playInterval = undefined;
        this.duration
        this.button = faPlay;
    }

    componentDidUpdate(previousProps){
        //double clicking song cause couter to go twice
        if(this.props.currentSong !== undefined){
            this.duration = this.props.currentSong.duration;
            if(previousProps.currentSong !== this.props.currentSong){
                this.button = faPause;
                this.setState({playing: true, time: 0});
                this.time = 0;
            }else if(this.state.playing === true){
                    this.playAudio(this.props.currentSong);
                    if(this.playInterval === undefined){
                        this.playInterval = setInterval(() => {
                            this.setState({ time: this.state.time + 100});
                            if(this.state.time % 1000 === 0){
                                this.time += 1
                            }
                            if (this.state.time === Math.floor(this.duration) * 1000) {
                                this.setState({ playing: false, time: 0 });
                                this.pauseAudio(this.props.currentSong);
                                clearInterval(this.playInterval);
                                this.playInterval = undefined;
                            }
                        }, 100)
                    }
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
        clearInterval(this.playInterval);
        this.playInterval = undefined;
        currentSong.pause();
    }

    handleToggle(){
        if(this.state.playing){
            this.button = faPlay;
            this.setState({playing: false})
        }else{
            this.button = faPause;
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
    
        if(this.props.currentSong === undefined){
            return(
                <div className="playbar_mid">
                    <div className="playbar_top_buttons">
                        <button className="playbar_play_button" onClick={() => this.handleToggle()}>
                            <FontAwesomeIcon id="playbar_play" className={`${this.button}`} icon={this.button} />
                        </button>
                    </div>
                    <div className="the_playbar" id="no_playing">

                    </div>
                </div>
            )
        }
        let duration = ""
        if(this.duration > 0){
            duration = this.convertTime(Math.floor(this.duration));
        }
        const timePercent = (this.state.time/(this.duration * 1000));
        const widthPercent = (575 * timePercent);
        const playingSong = this.props.song;
        const imgPic = playingSong.photoUrl;
        const songTitle = playingSong.title;
        const songArtist = this.props.artist;
        let realTime = this.convertTime(this.time);
        if(duration === "0:00"){
            duration = ""
        }
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
                            <FontAwesomeIcon id="playbar_play" className={`${this.button}`} icon={this.button}/>
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