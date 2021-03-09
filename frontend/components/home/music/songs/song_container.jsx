import { connect } from "react-redux"
import { withRouter } from 'react-router-dom';
import { receiveCurrentSong } from "../../../../actions/song_actions";
import { thunkAddSongToPlaylist, thunkRemoveSongFromPlaylist } from "../../../../actions/songs_on_playlists_action";
import SongComponent from "./song_component"

const mapStateToProps = (state, ownProps) => {
    return{
        playlists: Object.values(state.entities.playlists)
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        receiveSong: songInfo => dispatch(receiveCurrentSong(songInfo)),
        addSongToPlaylist:  ids => dispatch(thunkAddSongToPlaylist(ids)),
        removeSong: sapId => dispatch(thunkRemoveSongFromPlaylist(sapId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongComponent))