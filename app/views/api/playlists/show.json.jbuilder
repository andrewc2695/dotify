json.extract! @playlist, :id, :title
json.songs do 
    @songs.each do |song|
        title = song.title.titleize
        json.set! song.id do
            json.extract! song, :id, :album_id, :artist
            json.title title
            json.photoUrl url_for(song.album.photo)
            json.audioUrl url_for(song.audio.audio)
        end
    end
end
