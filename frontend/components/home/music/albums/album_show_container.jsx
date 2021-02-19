import { connect } from "react-redux"
import { thunkFetchAlbum } from "../../../../actions/album_actions"
import AlbumShowComponent from "./album_show_component"



const mapStateToProps = (state, ownProps) => {
    return{
        album: state.entities.albums[ownProps.match.params.albumId]
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchAlbum: albumId => dispatch(thunkFetchAlbum(albumId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShowComponent)