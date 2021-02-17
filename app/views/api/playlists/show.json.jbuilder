
        json.extract! @playlist, :id, :title
        json.songs do 
            @songs.each do |song|
                artist = song.artist.name
                json.set! song.id do
                    json.extract! song, :id, :title, :album_id, :artist
                    json.photoUrl url_for(song.album.photo)
                end
            end
        end
