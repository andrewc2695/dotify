class Api::PlaylistsController < ApplicationController
    def show_user
        debugger
        @playlists = User.find(params[:id]).playlists
        render :show_user
    end
end