json.playlist do 
    @playlists.each do |playlist|
        songs = playlist.songs_on_playlist
        json.set! playlist.id do
            json.extract! playlist, :title, :id
            json.songs do 
                songs.each do |song|
                    # artist = song.song.artist.name
                    # album = song.song.album.title
                    title = song.song.title.titleize
                    json.set! song.id  do
                        json.extract! song.song, :artist, :album
                        json.title title
                        json.photoUrl url_for(song.song.album.photo)
                        json.audioUrl url_for(song.song.audio.audio)
                    end
                end
            end
        end
    end
end