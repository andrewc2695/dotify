import { connect } from "react-redux"
import PlaybarComponent from "./playbar_component"

const mapStateToProps = state =>{
    return{
        location: state.entities[state.currentSong.songInfo.location],
        locationId: state.currentSong.songInfo.locationId,
        songId: state.currentSong.songInfo.song,
        currentSong: state.currentSong.songInfo.currentSong,  
    }
}

const mapDispatchToProps = dispatch => {
    return{
        receiveSong: songInfo => dispatch(receiveCurrentSong(songInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaybarComponent)