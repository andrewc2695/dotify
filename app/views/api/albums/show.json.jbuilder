json.album do
    title = @album.title.titleize
    json.extract! @album, :id, :artist_id, :year
    json.title title
    json.photoUrl url_for(@album.photo)
end

json.songs do 
    artist = @album.artist
    @album.songs_on_album.each do |song|
        title = song.title.titleize
        json.set! song.id do
            json.extract! song, :id, :album_id, :ORD
            json.title title
            json.audioUrl url_for(song.audio.audio)
            json.photoUrl url_for(song.album.photo)
        end
    end
end

json.artist do 
    name = @album.artist.name.titleize
    json.set! @album.artist.id do
        json.extract! @album.artist, :id
        json.name name
    end
end