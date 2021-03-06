class Api::SongsOnPlaylistsController < ApplicationController

    def create
        @songs_on_playlist = SongsOnPlaylist.new(songs_on_playlists_params)
        @songs_on_playlist.save!
        @playlist = Playlist.find_by(id: params[:song_on_playlist][:playlist_id])
        @songs = @playlist.songs_on_playlist
        render :show
    end

    def destroy
        @song_on_playlist = SongsOnPlaylist.find(params[:id])
        @playlist = @song_on_playlist.playlist
        @song_on_playlist.destroy
        @songs = @playlist.songs_on_playlist
        render :show
    end
    
    def songs_on_playlists_params
        params.require(:song_on_playlist).permit(:playlist_id, :song_id)
    end
end