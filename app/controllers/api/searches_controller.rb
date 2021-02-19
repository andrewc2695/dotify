class Api::SearchesController < ApplicationController
    def search
        search_term = params[:search].downcase
        @songs = Song.where("title LIKE ?", "%#{search_term}%")
        @albums = Album.where("title LIKE ?", "%#{search_term}%")
        @artists = Artist.where("name LIKE ?", "%#{search_term}%")
    end
end