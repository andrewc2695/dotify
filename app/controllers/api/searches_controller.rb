class Api::SearchesController < ApplicationController
    def search
        @songs = Song.where("title LIKE ?", "%#{params[:search]}%")
        @albums = Album.where("title LIKE ?", "%#{params[:search]}%")
        @artists = Artist.where("name LIKE ?", "%#{params[:search]}%")
    end
end