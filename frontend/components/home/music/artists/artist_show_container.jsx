import { connect } from "react-redux";
import { removeAlbums } from "../../../../actions/album_actions";
import ArtistShowComponent from "./artist_show_component";

const mapStateToProps = (state, ownProps) => {
    return{
        artist: state.entities.artists[ownProps.match.params.artistId],
        albums: Object.values(state.entities.albums)
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchArtist: artistId => dispatch(thunkFetchArtist(artistId)),
        removeAlbums: () => dispatch(removeAlbums()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShowComponent);