import * as AlbumAPIUtil from "../util/album_api_util"
export const RECEIVE_ALBUM = "RECEIVE_ALBUM"

const receiveAlbum = (album) => {
    return{
        type: RECEIVE_ALBUM,
        album
    };
}

export const thunkFetchAlbum = albumId => dispatch => AlbumAPIUtil.fetchAlbum(albumId)
    .then(album => dispatch(receiveAlbum(album)));
