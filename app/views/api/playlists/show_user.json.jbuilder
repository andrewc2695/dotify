json.playlist do 
    @playlists.each do |playlist|
        songs = playlist.songs.limit(4)
        json.set! playlist.id do
            json.extract! playlist, :title, :id
            json.songs do 
                songs.each do |song|
                    json.set! song.id  do
                        json.photoUrl url_for(song.album.photo)
                    end
                end
            end
        end
    end
end