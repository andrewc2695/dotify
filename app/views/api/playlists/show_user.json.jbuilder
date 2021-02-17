json.playlist do 
    @playlists.each do |playlist|
        songs = playlist.songs.limit(4)
        json.set! playlist.id do
            json.extract! playlist, :title, :id
            json.songs do 
                songs.each do |song|
                    artist = song.artist.name
                    album = song.album.title
                    json.set! song.id  do
                        json.extract! song, :artist, :album
                        json.photoUrl url_for(song.album.photo)
                    end
                end
            end
        end
    end
end