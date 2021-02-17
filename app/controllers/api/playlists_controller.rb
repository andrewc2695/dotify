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

    def post
        @playlist = Playlist.new(playlist_params)
        if @playlist.save!
            render :show
        end
    end

    private
    def playlist_params
        params.require(:param).permit(:title, :user_id)
    end
end