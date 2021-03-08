    @artists.each do |artist|
        name = artist.name.titleize
        json.set! artist.id do
            json.extract! artist, :id
            json.name name
            json.photoUrl url_for(artist.photo)
        end
    end



