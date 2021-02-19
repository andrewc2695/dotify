import { connect } from "react-redux"
import { thunkFetchAlbum } from "../../../../actions/album_actions"
import AlbumShowComponent from "./album_show_component"
import { receiveCurrentSong } from "../../../../actions/song_actions"



const mapStateToProps = (state, ownProps) => {
    return{
        album: state.entities.albums[ownProps.match.params.albumId]
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchAlbum: albumId => dispatch(thunkFetchAlbum(albumId)),
        receiveSong: songInfo => dispatch(receiveCurrentSong(songInfo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShowComponent)