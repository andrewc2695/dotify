
export const addSongToPlaylist = pl_and_song_id => {
    return $.ajax({
        url: '/api/songs_on_playlists',
        method: 'POST',
        data: { song_on_playlist: pl_and_song_id }
    })
}