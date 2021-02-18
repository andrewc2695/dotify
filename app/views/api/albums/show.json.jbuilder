
json.album do
    json.extract! @album, :id, :title, :artist_id, :year
    json.photoUrl url_for(@album.photo)
end

json.songs do 
    @album.songs_on_album.each do |song|
        json.set! song.id do
            json.extract! song, :id, :title, :album_id, :ORD
            json.audioUrl url_for(song.audio.audio)
        end
    end
end

json.artist do 
    json.set! @album.artist.id do
        json.extract! @album.artist, :id, :name
    end
end