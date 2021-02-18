import { connect } from "react-redux"
import { thunkFetchArtist } from "../../../actions/artist_actions"
import { removeSearch, thunkSearch } from "../../../actions/search_actions"
import { resetState, thunkLogout } from "../../../actions/session_actions"
import HomeMainComponent from "./home_main_component"
import { withRouter } from 'react-router-dom';
import { thunkCreatePlaylist, thunkFetchUsersPlaylist } from "../../../actions/playlist_actions"


const mapStateToProps = (state, ownProps) => {
    return{
        currentUser: state.entities.users[state.session.id],
        artists: Object.values(state.entities.artists),
        playlists: Object.values(state.entities.playlists),
        currentSong: state.currentSong.songInfo.currentSong,  
    }
}

const mapDispatchToProps = dispatch => {
    return{
        logout: () => dispatch(thunkLogout()),
        fetchArtist: artistId => dispatch(thunkFetchArtist(artistId)),
        fetchArtists: () => dispatch(thunkFetchArtists()),
        search: searchTerm => dispatch(thunkSearch(searchTerm)),
        removeSearch: () => dispatch(removeSearch()),
        resetState: () => dispatch(resetState()),
        fetchPlaylists: userId => dispatch(thunkFetchUsersPlaylist(userId)),
        createPlaylist: playlist => dispatch(thunkCreatePlaylist(playlist)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeMainComponent));