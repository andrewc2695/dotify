import { connect } from "react-redux";
import { removeAlbums } from "../../../../actions/album_actions";
import { receiveCurrentSong } from "../../../../actions/song_actions";
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
        receiveSong: songInfo => dispatch(receiveCurrentSong(songInfo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShowComponent);