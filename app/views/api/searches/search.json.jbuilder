json.search do   
    json.songs do 
        @songs.each do |song|
            title = song.title.titleize
            json.set! song.id do
                json.extract! song, :id, :album_id, :artist
                json.title title
                json.photoUrl url_for(song.album.photo)
                json.audioUrl url_for(song.audio.audio)
            end
        end
    end

    json.albums do 
        @albums.each do |album|
            title = album.title.titleize
            json.set! album.id do
                json.extract! album, :id, :year, :artist
                json.title title 
                json.photoUrl url_for(album.photo)
            end
        end
    end

    json.artists do
        @artists.each do |artist|
            name = artist.name.titleize
            json.set! artist.id do 
                json.extract! artist, :id
                json.name name
                json.photoUrl url_for(artist.photo)
            end
        end
    end
end