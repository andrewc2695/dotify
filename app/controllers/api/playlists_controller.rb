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

    def create
        @playlist = Playlist.new(playlist_params)
        @songs = @playlist.songs
        if @playlist.save!
            render :show
        end
    end

    private
    def playlist_params
        params.require(:playlist).permit(:title, :user_id)
    end
end