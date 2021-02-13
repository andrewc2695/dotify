import * as ArtistApiUtil from "../util/artist_api_util.js"


export const RECEIVE_ARTIST = "RECEIVE_ARTIST"
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS"

const receiveArtist = (artist) => {
    return{
        type: RECEIVE_ARTIST,
        artist
    }
}

const receiveArtists = (artists) => {
    return{
        type: RECEIVE_ARTISTS,
        artists
    }
}

export const thunkFetchArtists = () => ArtistApiUtil.fetchArtists()
    .then(artists => dispatch(receiveArtists(artists)))

export const thunkFetchArtist = artistId => ArtistApiUtil.fetchArtist(artistId)
    .then(artist => dispatch(receiveArtist(artist)));