import * as ArtistApiUtil from "../util/artist_api_util.js"

export const thunkFetchArtist = artistId => ArtistApiUtil.fetchArtist(artistId)
    .then(artist => console.log(artist));