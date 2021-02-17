
export const fetchUsersPlaylists = (userId) => {
    return $.ajax({
        url: `api/playlists/user/${userId}`,
        method: 'GET'
    })
}

export const fetchPlaylist = playlistId => {
    return $.ajax({
        url: `api/playlists/${playlistId}`,
        method: 'GET'
    })
}