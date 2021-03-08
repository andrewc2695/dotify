json.artist do
    name = @artist.name.titleize
    json.extract! @artist, :id
    json.name name
    json.photoUrl url_for(@artist.photo)
    json.popular do 
        @artist.songs.limit(5).each do |song|
            title = song.title.titleize
            json.set! song.id do
                json.extract! song, :id, :album_id
                json.title title
                json.photoUrl url_for(song.album.photo)
                json.audioUrl url_for(song.audio.audio)
            end
        end
    end
end

json.albums do 
    @artist.albums.each do |album|
        artist = album.artist.name.titleize
        title = album.title.titleize
        json.set! album.id do
            json.extract! album, :id, :year
            json.artist artist
            json.title title
            json.photoUrl url_for(album.photo)
        end
    end
end


