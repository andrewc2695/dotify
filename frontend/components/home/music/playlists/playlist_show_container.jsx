import { connect } from "react-redux"
import { thunkDeletePlaylist, thunkFetchPlaylist, thunkUpdatePlaylist } from "../../../../actions/playlist_actions"
import PlaylistShowComponent from "./playlist_show_component"

const mapStateToProps = (state, ownProps) => {
    return{
        playlist: state.entities.playlists[ownProps.match.params.playlistId]
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchPlaylist : playlistId => dispatch(thunkFetchPlaylist(playlistId)),
        deletePlaylist: playlistId => dispatch(thunkDeletePlaylist(playlistId)),
        updatePlaylist: playlist => dispatch(thunkUpdatePlaylist(playlist))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShowComponent)