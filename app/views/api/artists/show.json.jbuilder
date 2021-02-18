json.artist do
    json.extract! @artist, :id, :name
    json.photoUrl url_for(@artist.photo)
    json.popular do 
        @artist.songs.limit(5).each do |song|
            json.set! song.id do
                json.extract! song, :id, :title, :album_id
                json.photoUrl url_for(song.album.photo)
                json.audioUrl url_for(song.audio.audio)
            end
        end
    end
end

json.albums do 
    @artist.albums.each do |album|
        artist = album.artist.name
        json.set! album.id do
            json.extract! album, :id, :title, :year, :artist
            json.photoUrl url_for(album.photo)
        end
    end
end


