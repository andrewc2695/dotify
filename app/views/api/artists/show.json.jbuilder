json.artist do
    json.extract! @artist, :id, :name
    json.photoUrl url_for(@artist.photo)
end

json.albums do 
    @artist.albums.each do |album|
        json.set! album.id do
            json.extract! album, :id, :title
            json.photoUrl url_for(album.photo)
        end
    end
end
