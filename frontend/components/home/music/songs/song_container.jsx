import { connect } from "react-redux"
import { withRouter } from 'react-router-dom';
import { receiveCurrentSong } from "../../../../actions/song_actions";
import SongComponent from "./song_component"

const mapStateToProps = (state, ownProps) => {
    return{
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        receiveSong: songInfo => dispatch(receiveCurrentSong(songInfo))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongComponent))