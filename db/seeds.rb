# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
require 'faker'

##########Captialize Al Words#############

Artist.destroy_all
User.destroy_all
Album.destroy_all
Song.destroy_all
Playlist.destroy_all
SongsOnPlaylist.destroy_all
AudioFile.destroy_all


demo = User.create!({username: "Demo", password: "123456"})

tim = Artist.create!({name: 'the great poet time'})
lwc = Artist.create!({name: 'ludwig von candlestick'})
skully = Artist.create!({name: 'skully'})
sk8tr = Artist.create!({name: 'sk8tr girl'}) 
fly = Artist.create!({name: 'prettyfly butterfly'})

#artist_pictures
timPic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/tim.jpg')
lwcPic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/pexels-stephan-mu%CC%88ller-1473215.jpg')
skullyPic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/pexels-sinitta-leunen-5380115.jpg')
sk8trPic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/pexels-isabella-mariana-1988681.jpg')
flyPic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/pexels-gabriela-moraes-4610513.jpg')

#attaching pics
tim.photo.attach(io: timPic, filename: "tim.jpg")
lwc.photo.attach(io: lwcPic, filename: "pexels-stephan-müller-1473215.jpg")
skully.photo.attach(io: skullyPic, filename: "pexels-sinitta-leunen-5380115.jpg")
fly.photo.attach(io: sk8trPic, filename: "pexels-isabella-mariana-1988681.jpg")
sk8tr.photo.attach(io: flyPic, filename: "pexels-gabriela-moraes-4610513.jpg")

#albums
album1 = Album.create!({title: "album1", year: 2021, artist_id: tim.id})
album2 = Album.create!({title: "album2", year: 2021, artist_id: tim.id})
album3 = Album.create!({title: "album3", year: 2021, artist_id: lwc.id})
album4 = Album.create!({title: "album4", year: 2021, artist_id: lwc.id})
album5 = Album.create!({title: "album5", year: 2021, artist_id: skully.id})
album6 = Album.create!({title: "album6", year: 2021, artist_id: skully.id})
album7 = Album.create!({title: "album7", year: 2021, artist_id: sk8tr.id})
album8 = Album.create!({title: "album8", year: 2021, artist_id: sk8tr.id})
album9 = Album.create!({title: "album9", year: 2021, artist_id: fly.id})
album10 = Album.create!({title: "album10", year: 2021, artist_id: fly.id})

#album pictures
album_pic1 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/album_pic1.jpg')
album_pic2 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/album_pic2.jpg')
album_pic3 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/album_pic3.jpg')
album_pic4 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/album_pic4.jpg')
album_pic5 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/album_pic5.jpg')
album_pic6 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/album_pic6.jpg')
album_pic7 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/album_pic7.jpg')
album_pic8 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/album_pic8.jpg')
album_pic9 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/album_pic9.jpg')
album_pic10 = open("https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/album_pic10.jpg")

#attaching_album_pics
album1.photo.attach(io: album_pic1, filename: "album_pic1.jpg")
album2.photo.attach(io: album_pic2, filename: "album_pic2.jpg") 
album3.photo.attach(io: album_pic3, filename: "album_pic3.jpg") 
album4.photo.attach(io: album_pic4, filename: "album_pic4.jpg") 
album5.photo.attach(io: album_pic5, filename: "album_pic5.jpg") 
album6.photo.attach(io: album_pic6, filename: "album_pic6.jpg") 
album7.photo.attach(io: album_pic7, filename: "album_pic7.jpg") 
album8.photo.attach(io: album_pic8, filename: "album_pic8.jpg") 
album9.photo.attach(io: album_pic9, filename: "album_pic9.jpg") 
album10.photo.attach(io: album_pic10, filename: "album_pic10.jpg")

#audio_file
af = AudioFile.create!({name: "the_song"})

#audio
audio1 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/song1.mp3')

af.audio.attach(io: audio1, filename: "song1.mp3")

#songs
song1 = Song.create!({title: "song1", album_id: album1.id, ORD: 1, audio_id: af.id})
song2 = Song.create!({title: "song2", album_id: album1.id, ORD: 2, audio_id: af.id})
song3 = Song.create!({title: "song3", album_id: album1.id, ORD: 3, audio_id: af.id})
song4 = Song.create!({title: "song4", album_id: album1.id, ORD: 4, audio_id: af.id})
song5 = Song.create!({title: "song5", album_id: album1.id, ORD: 5, audio_id: af.id})
song6 = Song.create!({title: "song6", album_id: album2.id, ORD: 1, audio_id: af.id})
song7 = Song.create!({title: "song7", album_id: album2.id, ORD: 2, audio_id: af.id})
song8 = Song.create!({title: "song8", album_id: album2.id, ORD: 3, audio_id: af.id})
song9 = Song.create!({title: "song9", album_id: album2.id, ORD: 4, audio_id: af.id})
song10 = Song.create!({title: "song10", album_id: album2.id, ORD: 5, audio_id: af.id})

song11 = Song.create!({title: "song1", album_id: album3.id, ORD: 1, audio_id: af.id})
song12 = Song.create!({title: "song2", album_id: album3.id, ORD: 2, audio_id: af.id})
song13 = Song.create!({title: "song3", album_id: album3.id, ORD: 3, audio_id: af.id})
song14 = Song.create!({title: "song4", album_id: album3.id, ORD: 4, audio_id: af.id})
song15 = Song.create!({title: "song5", album_id: album3.id, ORD: 5, audio_id: af.id})
song16 = Song.create!({title: "song6", album_id: album4.id, ORD: 1, audio_id: af.id})
song17 = Song.create!({title: "song7", album_id: album4.id, ORD: 2, audio_id: af.id})
song18 = Song.create!({title: "song8", album_id: album4.id, ORD: 3, audio_id: af.id})
song19 = Song.create!({title: "song9", album_id: album4.id, ORD: 4, audio_id: af.id})
song20 = Song.create!({title: "song10", album_id: album4.id, ORD: 5, audio_id: af.id})

song21 = Song.create!({title: "song1", album_id: album5.id, ORD: 1, audio_id: af.id})
song22 = Song.create!({title: "song2", album_id: album5.id, ORD: 2, audio_id: af.id})
song23 = Song.create!({title: "song3", album_id: album5.id, ORD: 3, audio_id: af.id})
song24 = Song.create!({title: "song4", album_id: album5.id, ORD: 4, audio_id: af.id})
song25 = Song.create!({title: "song5", album_id: album5.id, ORD: 5, audio_id: af.id})
song26 = Song.create!({title: "song6", album_id: album6.id, ORD: 1, audio_id: af.id})
song27 = Song.create!({title: "song7", album_id: album6.id, ORD: 2, audio_id: af.id})
song28 = Song.create!({title: "song8", album_id: album6.id, ORD: 3, audio_id: af.id})
song29 = Song.create!({title: "song9", album_id: album6.id, ORD: 4, audio_id: af.id})
song30 = Song.create!({title: "song10", album_id: album6.id, ORD: 5, audio_id: af.id})

song31 = Song.create!({title: "song1", album_id: album7.id, ORD: 1, audio_id: af.id})
song32 = Song.create!({title: "song2", album_id: album7.id, ORD: 2, audio_id: af.id})
song33 = Song.create!({title: "song3", album_id: album7.id, ORD: 3, audio_id: af.id})
song34 = Song.create!({title: "song4", album_id: album7.id, ORD: 4, audio_id: af.id})
song35 = Song.create!({title: "song5", album_id: album7.id, ORD: 5, audio_id: af.id})
song36 = Song.create!({title: "song6", album_id: album8.id, ORD: 1, audio_id: af.id})
song37 = Song.create!({title: "song7", album_id: album8.id, ORD: 2, audio_id: af.id})
song38 = Song.create!({title: "song8", album_id: album8.id, ORD: 3, audio_id: af.id})
song39 = Song.create!({title: "song9", album_id: album8.id, ORD: 4, audio_id: af.id})
song40 = Song.create!({title: "song10", album_id: album8.id, ORD: 5, audio_id: af.id})

song41 = Song.create!({title: "song1", album_id: album9.id, ORD: 1, audio_id: af.id})
song42 = Song.create!({title: "song2", album_id: album9.id, ORD: 2, audio_id: af.id})
song43 = Song.create!({title: "song3", album_id: album9.id, ORD: 3, audio_id: af.id})
song44 = Song.create!({title: "song4", album_id: album9.id, ORD: 4, audio_id: af.id})
song45 = Song.create!({title: "song5", album_id: album9.id, ORD: 5, audio_id: af.id})
song46 = Song.create!({title: "song6", album_id: album10.id, ORD: 1, audio_id: af.id})
song47 = Song.create!({title: "song7", album_id: album10.id, ORD: 2, audio_id: af.id})
song48 = Song.create!({title: "song8", album_id: album10.id, ORD: 3, audio_id: af.id})
song49 = Song.create!({title: "song9", album_id: album10.id, ORD: 4, audio_id: af.id})
song50 = Song.create!({title: "song10", album_id: album10.id, ORD: 5, audio_id: af.id})


#playlists
playlist1 = Playlist.create!({user_id: demo.id, title: "my first playlist"})
playlist2 = Playlist.create!({user_id: demo.id, title: "chill stuff"})
playlist3 = Playlist.create!({user_id: demo.id, title: "=("})
playlist4 = Playlist.create!({user_id: demo.id, title: "woqipqwdopqwnd"})
playlist5 = Playlist.create!({user_id: demo.id, title: "turnip"})
playlist6 = Playlist.create!({user_id: demo.id, title: "playlist6"})

#songs_on_playlist
sop1 = SongsOnPlaylist.create!({playlist_id: playlist1.id, song_id: song1.id})
sop2 = SongsOnPlaylist.create!({playlist_id: playlist1.id, song_id: song6.id})
sop3 = SongsOnPlaylist.create!({playlist_id: playlist1.id, song_id: song11.id})
sop4 = SongsOnPlaylist.create!({playlist_id: playlist1.id, song_id: song16.id})

sop5 = SongsOnPlaylist.create!({playlist_id: playlist2.id, song_id: song2.id})
sop6 = SongsOnPlaylist.create!({playlist_id: playlist2.id, song_id: song7.id})
sop7 = SongsOnPlaylist.create!({playlist_id: playlist2.id, song_id: song12.id})
sop8 = SongsOnPlaylist.create!({playlist_id: playlist2.id, song_id: song17.id})

sop9 = SongsOnPlaylist.create!({playlist_id: playlist3.id, song_id: song3.id})
sop10 = SongsOnPlaylist.create!({playlist_id: playlist3.id, song_id: song8.id})
sop11 = SongsOnPlaylist.create!({playlist_id: playlist3.id, song_id: song13.id})
sop12 = SongsOnPlaylist.create!({playlist_id: playlist3.id, song_id: song18.id})

sop13 = SongsOnPlaylist.create!({playlist_id: playlist4.id, song_id: song35.id})
sop14 = SongsOnPlaylist.create!({playlist_id: playlist4.id, song_id: song40.id})
sop15 = SongsOnPlaylist.create!({playlist_id: playlist4.id, song_id: song45.id})
sop16 = SongsOnPlaylist.create!({playlist_id: playlist4.id, song_id: song50.id})

sop17 = SongsOnPlaylist.create!({playlist_id: playlist5.id, song_id: song23.id})
sop18 = SongsOnPlaylist.create!({playlist_id: playlist5.id, song_id: song34.id})

sop19 = SongsOnPlaylist.create!({playlist_id: playlist1.id, song_id: song41.id})
sop20 = SongsOnPlaylist.create!({playlist_id: playlist1.id, song_id: song5.id})








