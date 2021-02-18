
const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG"

const receiveCurrentSong = (songInfo) => {
    return{
        type: RECEIVE_CURRENT_SONG,
        songInfo
    }
}

