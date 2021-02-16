import { connect } from "react-redux"
import { thunkFetchArtists } from "../../../../actions/artist_actions"
import { thunkFetchUsersPlaylist } from "../../../../actions/playlist_actions"
import ArtistIndexComponent from "./artist_index_component"



const mapStateToProps = state => {
    return {
        artists: Object.values(state.entities.artists),
        playlists: Object.values(state.entities.playlists),
        currentUser: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchArtists: () => dispatch(thunkFetchArtists()),
        fetchPlaylists: userId => dispatch(thunkFetchUsersPlaylist(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndexComponent)