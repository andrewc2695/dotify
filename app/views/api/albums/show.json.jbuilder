
json.album do
    json.extract! @album, :id, :title, :artist_id
    json.photoUrl url_for(@album.photo)
end

json.songs do 
    @album.songs_on_album.each do |song|
        json.set! song.id do
            json.extract! song, :id, :title, :album_id, :ORD
        end
    end
end