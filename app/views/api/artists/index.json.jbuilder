@artists.each do |artist|
    json.set! artist.id do
        json.extract! artist, :id, :photo
    end
end