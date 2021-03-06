class Api::PlaylistsController < ApplicationController
    def show_user
        @playlists = User.find(params[:id]).playlists
        render :show_user
    end

    def show
        @playlist = Playlist.find(params[:id])
        @songs = @playlist.songs_on_playlist
        render :show
    end

    def create
        @playlist = Playlist.new(playlist_params)
        @songs = @playlist.songs_on_playlist
        if @playlist.save!
            render :show
        end
    end

    def destroy
        @playlist = Playlist.find(params[:id])
        if(current_user.id == @playlist.user_id)
            @playlist.destroy
        end
    end

    def update
        @playlist = Playlist.find(params[:id])
        if(current_user.id == @playlist.user_id)
            @songs = @playlist.songs_on_playlist
            if @playlist.update!({title: playlist_params[:title]})
                render :show
            end
        end
    end

    private
    def playlist_params
        params.require(:playlist).permit(:title, :user_id)
    end
end