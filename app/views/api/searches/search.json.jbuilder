json.search do 
    json.songs do 
        @songs.each do |song|
            artist = song.artist.name
            json.set! song.id do
                json.extract! song, :id, :title, :album_id, :artist
                json.photoUrl url_for(song.album.photo)
            end
        end
    end

    json.albums do 
        @albums.each do |album|
            json.set! album.id do
                json.extract! album, :id, :title, :year 
                album.artist.name
                json.photoUrl url_for(album.photo)
            end
        end
    end

    json.artists do
        @artists.each do |artist|
            json.set! artist.id do 
                json.extract! artist, :id, :name
                json.photoUrl url_for(artist.photo)
            end
        end
    end
end