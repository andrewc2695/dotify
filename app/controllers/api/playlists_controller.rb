class Api::PlaylistsController < ApplicationController
    def show_user
        @playlists = User.find(params[:id]).playlists
        render :show_user
    end

    def show
        @playlist = Playlist.find(params[:id])
        @songs = @playlist.songs
        render :show
    end
end