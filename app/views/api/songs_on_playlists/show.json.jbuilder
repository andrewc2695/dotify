json.extract! @playlist, :id, :title
json.songs do 
    @songs.each do |song|
        title = song.song.title.titleize
        json.set! song.id do
            json.extract! song.song, :id, :album_id, :artist
            json.sapId song.id
            json.title title
            json.photoUrl url_for(song.song.album.photo)
            json.audioUrl url_for(song.song.audio.audio)
        end
    end
end