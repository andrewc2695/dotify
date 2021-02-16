
export const fetchUsersPlaylists = (userId) => {
    return $.ajax({
        url: `api/playlists/user/${userId}`,
        method: 'GET'
    })
}