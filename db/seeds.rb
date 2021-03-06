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

art1 = Artist.create!({name: Faker::Music.unique.band.downcase})
art2 = Artist.create!({name: Faker::Music.unique.band.downcase})
art3 = Artist.create!({name: Faker::Music.unique.band.downcase})
art4 = Artist.create!({name: Faker::Music.unique.band.downcase})
art5 = Artist.create!({name: Faker::Music.unique.band.downcase})


art7 = Artist.create!({name: Faker::Music.unique.band.downcase})
art8 = Artist.create!({name: Faker::Music.unique.band.downcase})
art9 = Artist.create!({name: Faker::Music.unique.band.downcase})


tim = Artist.create!({name: 'the great poet tim'})
lwc = Artist.create!({name: 'ludwig von candlestick'})
skully = Artist.create!({name: 'skully'})
sk8tr = Artist.create!({name: 'sk8tr girl'}) 
fly = Artist.create!({name: 'prettyfly butterfly'})

#artist_pictures

art1pic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/artist1.jpg')
art2pic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/artist2.jpg')
art3pic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/artist3.jpg')
art4pic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/artist4.jpg')
art5pic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/artist5.jpg')

art7pic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/artist7.jpg')
art8pic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/artist8.jpg')
art9pic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/artist9.jpg')

timPic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/tim.jpg')
lwcPic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/pexels-stephan-mu%CC%88ller-1473215.jpg')
skullyPic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/pexels-sinitta-leunen-5380115.jpg')
sk8trPic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/pexels-isabella-mariana-1988681.jpg')
flyPic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/pexels-gabriela-moraes-4610513.jpg')

#attaching pics

art1.photo.attach(io: art1pic, filename: "art1pic")
art2.photo.attach(io: art2pic, filename: "art2pic")
art3.photo.attach(io: art3pic, filename: "art3pic")
art4.photo.attach(io: art4pic, filename: "art4pic")
art5.photo.attach(io: art5pic, filename: "art5pic")


art7.photo.attach(io: art7pic, filename: "art7pic")
art8.photo.attach(io: art8pic, filename: "art8pic")
art9.photo.attach(io: art9pic, filename: "art9pic")



tim.photo.attach(io: timPic, filename: "tim.jpg")
lwc.photo.attach(io: lwcPic, filename: "pexels-stephan-müller-1473215.jpg")
skully.photo.attach(io: skullyPic, filename: "pexels-sinitta-leunen-5380115.jpg")
fly.photo.attach(io: sk8trPic, filename: "pexels-isabella-mariana-1988681.jpg")
sk8tr.photo.attach(io: flyPic, filename: "pexels-gabriela-moraes-4610513.jpg")

#albums
album1 = Album.create!({title: Faker::Music.album.downcase, year: 2021, artist_id: tim.id})
album2 = Album.create!({title: Faker::Music.album.downcase, year: 2021, artist_id: tim.id})
album3 = Album.create!({title: Faker::Music.album.downcase, year: 2021, artist_id: lwc.id})
album4 = Album.create!({title: Faker::Music.album.downcase, year: 2021, artist_id: lwc.id})
album5 = Album.create!({title: Faker::Music.album.downcase, year: 2021, artist_id: skully.id})
album6 = Album.create!({title: Faker::Music.album.downcase, year: 2021, artist_id: skully.id})
album7 = Album.create!({title: Faker::Music.album.downcase, year: 2021, artist_id: sk8tr.id})
album8 = Album.create!({title: Faker::Music.album.downcase, year: 2021, artist_id: sk8tr.id})
album9 = Album.create!({title: Faker::Music.album.downcase, year: 2021, artist_id: fly.id})
album10 = Album.create!({title: Faker::Music.album.downcase, year: 2021, artist_id: fly.id})

album11 = Album.create!({title: Faker::Music.album.downcase, year: 2021, artist_id: art1.id})
album12 = Album.create!({title: Faker::Music.album.downcase, year: 2021, artist_id: art2.id})
album13 = Album.create!({title: Faker::Music.album.downcase, year: 2021, artist_id: art3.id})
album14 = Album.create!({title: Faker::Music.album.downcase, year: 2021, artist_id: art4.id})
album15 = Album.create!({title: Faker::Music.album.downcase, year: 2021, artist_id: art5.id})
album16 = Album.create!({title: Faker::Music.album.downcase, year: 2021, artist_id: art5.id})
album17 = Album.create!({title: Faker::Music.album.downcase, year: 2021, artist_id: art7.id})
album18 = Album.create!({title: Faker::Music.album.downcase, year: 2021, artist_id: art8.id})
album19 = Album.create!({title: Faker::Music.album.downcase, year: 2021, artist_id: art9.id})
album20 = Album.create!({title: Faker::Music.album.downcase, year: 2021, artist_id: art1.id})


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


album_pic11 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/album_pic11.jpg')
album_pic12 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/album_pic12.jpg')
album_pic13 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/album_pic13.jpg')
album_pic14 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/album_pic14.jpg')
album_pic15 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/album_pic15.jpg')
album_pic16 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/album_pic16.jpg')
album_pic17 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/album_pic17.jpg')
album_pic18 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/album_pic18.jpg')
album_pic19 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/album_pic19.jpg')
album_pic20 = open("https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/album_pic_20.jpg")


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

album11.photo.attach(io: album_pic11, filename: "album_pic11.jpg")
album12.photo.attach(io: album_pic12, filename: "album_pic12.jpg") 
album13.photo.attach(io: album_pic13, filename: "album_pic13.jpg") 
album14.photo.attach(io: album_pic14, filename: "album_pic14.jpg") 
album15.photo.attach(io: album_pic15, filename: "album_pic15.jpg") 
album16.photo.attach(io: album_pic16, filename: "album_pic16.jpg") 
album17.photo.attach(io: album_pic17, filename: "album_pic17.jpg") 
album18.photo.attach(io: album_pic18, filename: "album_pic18.jpg") 
album19.photo.attach(io: album_pic19, filename: "album_pic19.jpg") 
album20.photo.attach(io: album_pic20, filename: "album_pic20.jpg")


#audio_file
af1 = AudioFile.create!({name: "the_song1"})
af2 = AudioFile.create!({name: "the_song2"})
af3 = AudioFile.create!({name: "the_song3"})
af4 = AudioFile.create!({name: "the_song4"})
af5 = AudioFile.create!({name: "the_song5"})
af6 = AudioFile.create!({name: "the_song6"})
af7 = AudioFile.create!({name: "the_song7"})
af8 = AudioFile.create!({name: "the_song8"})
af9 = AudioFile.create!({name: "the_song9"})
af10 = AudioFile.create!({name: "the_song10"})
af11 = AudioFile.create!({name: "the_song11"})


#audio
audio1 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/song1.mp3')
audio2 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/song2.mp3')
audio3 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/song3.mp3')
audio4 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/song4.mp3')
audio5 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/song5.mp3')
audio6 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/song6.mp3')
audio7 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/song7.mp3')
audio8 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/song8.mp3')
audio9 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/song9.mp3')
audio10 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/song10.mp3')
audio11 = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/song11.mp3')


af1.audio.attach(io: audio1, filename: "song1.mp3")
af2.audio.attach(io: audio2, filename: "song2.mp3")
af3.audio.attach(io: audio3, filename: "song3.mp3")
af4.audio.attach(io: audio4, filename: "song4.mp3")
af5.audio.attach(io: audio5, filename: "song5.mp3")
af6.audio.attach(io: audio6, filename: "song6.mp3")
af7.audio.attach(io: audio7, filename: "song7.mp3")
af8.audio.attach(io: audio8, filename: "song8.mp3")
af9.audio.attach(io: audio9, filename: "song9.mp3")
af10.audio.attach(io: audio10, filename: "song10.mp3")
af11.audio.attach(io: audio11, filename: "song11.mp3")


#songs
song1 = Song.create!({title: Faker::Music.album.downcase, album_id: album1.id, ORD: 1, audio_id: af1.id})
song2 = Song.create!({title: Faker::Music.album.downcase, album_id: album1.id, ORD: 2, audio_id: af2.id})
song3 = Song.create!({title: Faker::Music.album.downcase, album_id: album1.id, ORD: 3, audio_id: af3.id})
song4 = Song.create!({title: Faker::Music.album.downcase, album_id: album1.id, ORD: 4, audio_id: af4.id})
song5 = Song.create!({title: Faker::Music.album.downcase, album_id: album1.id, ORD: 5, audio_id: af5.id})
song6 = Song.create!({title: Faker::Music.album.downcase, album_id: album2.id, ORD: 1, audio_id: af6.id})
song7 = Song.create!({title: Faker::Music.album.downcase, album_id: album2.id, ORD: 2, audio_id: af7.id})
song8 = Song.create!({title: Faker::Music.album.downcase, album_id: album2.id, ORD: 3, audio_id: af8.id})
song9 = Song.create!({title: Faker::Music.album.downcase, album_id: album2.id, ORD: 4, audio_id: af9.id})
song10 = Song.create!({title: Faker::Music.album.downcase, album_id: album2.id, ORD: 5, audio_id: af10.id})

song11 = Song.create!({title: Faker::Music.album.downcase, album_id: album3.id, ORD: 1, audio_id: af11.id})
song12 = Song.create!({title: Faker::Music.album.downcase, album_id: album3.id, ORD: 2, audio_id: af1.id})
song13 = Song.create!({title: Faker::Music.album.downcase, album_id: album3.id, ORD: 3, audio_id: af2.id})
song14 = Song.create!({title: Faker::Music.album.downcase, album_id: album3.id, ORD: 4, audio_id: af3.id})
song15 = Song.create!({title: Faker::Music.album.downcase, album_id: album3.id, ORD: 5, audio_id: af4.id})
song16 = Song.create!({title: Faker::Music.album.downcase, album_id: album4.id, ORD: 1, audio_id: af5.id})
song17 = Song.create!({title: Faker::Music.album.downcase, album_id: album4.id, ORD: 2, audio_id: af6.id})
song18 = Song.create!({title: Faker::Music.album.downcase, album_id: album4.id, ORD: 3, audio_id: af7.id})
song19 = Song.create!({title: Faker::Music.album.downcase, album_id: album4.id, ORD: 4, audio_id: af8.id})
song20 = Song.create!({title: Faker::Music.album.downcase, album_id: album4.id, ORD: 5, audio_id: af9.id})

song21 = Song.create!({title: Faker::Music.album.downcase, album_id: album5.id, ORD: 1, audio_id: af10.id})
song22 = Song.create!({title: Faker::Music.album.downcase, album_id: album5.id, ORD: 2, audio_id: af11.id})
song23 = Song.create!({title: Faker::Music.album.downcase, album_id: album5.id, ORD: 3, audio_id: af1.id})
song24 = Song.create!({title: Faker::Music.album.downcase, album_id: album5.id, ORD: 4, audio_id: af2.id})
song25 = Song.create!({title: Faker::Music.album.downcase, album_id: album5.id, ORD: 5, audio_id: af3.id})
song26 = Song.create!({title: Faker::Music.album.downcase, album_id: album6.id, ORD: 1, audio_id: af4.id})
song27 = Song.create!({title: Faker::Music.album.downcase, album_id: album6.id, ORD: 2, audio_id: af5.id})
song28 = Song.create!({title: Faker::Music.album.downcase, album_id: album6.id, ORD: 3, audio_id: af6.id})
song29 = Song.create!({title: Faker::Music.album.downcase, album_id: album6.id, ORD: 4, audio_id: af7.id})
song30 = Song.create!({title: Faker::Music.album.downcase, album_id: album6.id, ORD: 5, audio_id: af8.id})

song31 = Song.create!({title: Faker::Music.album.downcase, album_id: album7.id, ORD: 1, audio_id: af9.id})
song32 = Song.create!({title: Faker::Music.album.downcase, album_id: album7.id, ORD: 2, audio_id: af10.id})
song33 = Song.create!({title: Faker::Music.album.downcase, album_id: album7.id, ORD: 3, audio_id: af11.id})
song34 = Song.create!({title: Faker::Music.album.downcase, album_id: album7.id, ORD: 4, audio_id: af1.id})
song35 = Song.create!({title: Faker::Music.album.downcase, album_id: album7.id, ORD: 5, audio_id: af2.id})
song36 = Song.create!({title: Faker::Music.album.downcase, album_id: album8.id, ORD: 1, audio_id: af3.id})
song37 = Song.create!({title: Faker::Music.album.downcase, album_id: album8.id, ORD: 2, audio_id: af4.id})
song38 = Song.create!({title: Faker::Music.album.downcase, album_id: album8.id, ORD: 3, audio_id: af5.id})
song39 = Song.create!({title: Faker::Music.album.downcase, album_id: album8.id, ORD: 4, audio_id: af6.id})
song40 = Song.create!({title: Faker::Music.album.downcase, album_id: album8.id, ORD: 5, audio_id: af7.id})

song41 = Song.create!({title: Faker::Music.album.downcase, album_id: album9.id, ORD: 1, audio_id: af8.id})
song42 = Song.create!({title: Faker::Music.album.downcase, album_id: album9.id, ORD: 2, audio_id: af9.id})
song43 = Song.create!({title: Faker::Music.album.downcase, album_id: album9.id, ORD: 3, audio_id: af10.id})
song44 = Song.create!({title: Faker::Music.album.downcase, album_id: album9.id, ORD: 4, audio_id: af11.id})
song45 = Song.create!({title: Faker::Music.album.downcase, album_id: album9.id, ORD: 5, audio_id: af1.id})
song46 = Song.create!({title: Faker::Music.album.downcase, album_id: album10.id, ORD: 1, audio_id: af2.id})
song47 = Song.create!({title: Faker::Music.album.downcase, album_id: album10.id, ORD: 2, audio_id: af3.id})
song48 = Song.create!({title: Faker::Music.album.downcase, album_id: album10.id, ORD: 3, audio_id: af4.id})
song49 = Song.create!({title: Faker::Music.album.downcase, album_id: album10.id, ORD: 4, audio_id: af5.id})
song50 = Song.create!({title: Faker::Music.album.downcase, album_id: album10.id, ORD: 5, audio_id: af6.id})

song51 = Song.create!({title: Faker::Music.album.downcase, album_id: album11.id, ORD: 1, audio_id: af7.id})
song52 = Song.create!({title: Faker::Music.album.downcase, album_id: album11.id, ORD: 2, audio_id: af8.id})
song53 = Song.create!({title: Faker::Music.album.downcase, album_id: album11.id, ORD: 3, audio_id: af9.id})
song54 = Song.create!({title: Faker::Music.album.downcase, album_id: album11.id, ORD: 4, audio_id: af10.id})
song55 = Song.create!({title: Faker::Music.album.downcase, album_id: album11.id, ORD: 5, audio_id: af11.id})
song56 = Song.create!({title: Faker::Music.album.downcase, album_id: album12.id, ORD: 1, audio_id: af1.id})
song57 = Song.create!({title: Faker::Music.album.downcase, album_id: album12.id, ORD: 2, audio_id: af2.id})
song58 = Song.create!({title: Faker::Music.album.downcase, album_id: album12.id, ORD: 3, audio_id: af3.id})
song59 = Song.create!({title: Faker::Music.album.downcase, album_id: album12.id, ORD: 4, audio_id: af4.id})
song60 = Song.create!({title: Faker::Music.album.downcase, album_id: album12.id, ORD: 5, audio_id: af5.id})

song71 = Song.create!({title: Faker::Music.album.downcase, album_id: album13.id, ORD: 1, audio_id: af6.id})
song72 = Song.create!({title: Faker::Music.album.downcase, album_id: album13.id, ORD: 2, audio_id: af7.id})
song73 = Song.create!({title: Faker::Music.album.downcase, album_id: album13.id, ORD: 3, audio_id: af8.id})
song74 = Song.create!({title: Faker::Music.album.downcase, album_id: album13.id, ORD: 4, audio_id: af9.id})
song75 = Song.create!({title: Faker::Music.album.downcase, album_id: album13.id, ORD: 5, audio_id: af10.id})
song76 = Song.create!({title: Faker::Music.album.downcase, album_id: album14.id, ORD: 1, audio_id: af11.id})
song77 = Song.create!({title: Faker::Music.album.downcase, album_id: album14.id, ORD: 2, audio_id: af1.id})
song78 = Song.create!({title: Faker::Music.album.downcase, album_id: album14.id, ORD: 3, audio_id: af2.id})
song79 = Song.create!({title: Faker::Music.album.downcase, album_id: album14.id, ORD: 4, audio_id: af3.id})
song80 = Song.create!({title: Faker::Music.album.downcase, album_id: album14.id, ORD: 5, audio_id: af4.id})

song81 = Song.create!({title: Faker::Music.album.downcase, album_id: album15.id, ORD: 1, audio_id: af5.id})
song82 = Song.create!({title: Faker::Music.album.downcase, album_id: album15.id, ORD: 2, audio_id: af6.id})
song83 = Song.create!({title: Faker::Music.album.downcase, album_id: album15.id, ORD: 3, audio_id: af7.id})
song84 = Song.create!({title: Faker::Music.album.downcase, album_id: album15.id, ORD: 4, audio_id: af8.id})
song85 = Song.create!({title: Faker::Music.album.downcase, album_id: album15.id, ORD: 5, audio_id: af9.id})
song86 = Song.create!({title: Faker::Music.album.downcase, album_id: album16.id, ORD: 1, audio_id: af10.id})
song87 = Song.create!({title: Faker::Music.album.downcase, album_id: album16.id, ORD: 2, audio_id: af11.id})
song88 = Song.create!({title: Faker::Music.album.downcase, album_id: album16.id, ORD: 3, audio_id: af1.id})
song89 = Song.create!({title: Faker::Music.album.downcase, album_id: album16.id, ORD: 4, audio_id: af2.id})
song90 = Song.create!({title: Faker::Music.album.downcase, album_id: album16.id, ORD: 5, audio_id: af3.id})

song91 = Song.create!({title: Faker::Music.album.downcase, album_id: album17.id, ORD: 1, audio_id: af4.id})
song92 = Song.create!({title: Faker::Music.album.downcase, album_id: album17.id, ORD: 2, audio_id: af5.id})
song93 = Song.create!({title: Faker::Music.album.downcase, album_id: album17.id, ORD: 3, audio_id: af6.id})
song94 = Song.create!({title: Faker::Music.album.downcase, album_id: album17.id, ORD: 4, audio_id: af7.id})
song95 = Song.create!({title: Faker::Music.album.downcase, album_id: album17.id, ORD: 5, audio_id: af8.id})
song96 = Song.create!({title: Faker::Music.album.downcase, album_id: album18.id, ORD: 1, audio_id: af9.id})
song97 = Song.create!({title: Faker::Music.album.downcase, album_id: album18.id, ORD: 2, audio_id: af10.id})
song98 = Song.create!({title: Faker::Music.album.downcase, album_id: album18.id, ORD: 3, audio_id: af11.id})
song99 = Song.create!({title: Faker::Music.album.downcase, album_id: album18.id, ORD: 4, audio_id: af1.id})
song100 = Song.create!({title: Faker::Music.album.downcase, album_id: album18.id, ORD: 5, audio_id: af2.id})

song101 = Song.create!({title: Faker::Music.album.downcase, album_id: album19.id, ORD: 1, audio_id: af3.id})
song102 = Song.create!({title: Faker::Music.album.downcase, album_id: album19.id, ORD: 2, audio_id: af4.id})
song103 = Song.create!({title: Faker::Music.album.downcase, album_id: album19.id, ORD: 3, audio_id: af5.id})
song104 = Song.create!({title: Faker::Music.album.downcase, album_id: album19.id, ORD: 4, audio_id: af6.id})
song105 = Song.create!({title: Faker::Music.album.downcase, album_id: album19.id, ORD: 5, audio_id: af7.id})
song106 = Song.create!({title: Faker::Music.album.downcase, album_id: album20.id, ORD: 1, audio_id: af8.id})
song107 = Song.create!({title: Faker::Music.album.downcase, album_id: album20.id, ORD: 2, audio_id: af9.id})
song108 = Song.create!({title: Faker::Music.album.downcase, album_id: album20.id, ORD: 3, audio_id: af10.id})
song109 = Song.create!({title: Faker::Music.album.downcase, album_id: album20.id, ORD: 4, audio_id: af11.id})
song110 = Song.create!({title: Faker::Music.album.downcase, album_id: album20.id, ORD: 5, audio_id: af1.id})


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
sop6 = SongsOnPlaylist.create!({playlist_id: playlist2.id, song_id: song74.id})
sop7 = SongsOnPlaylist.create!({playlist_id: playlist2.id, song_id: song52.id})
sop8 = SongsOnPlaylist.create!({playlist_id: playlist2.id, song_id: song47.id})

sop9 = SongsOnPlaylist.create!({playlist_id: playlist3.id, song_id: song3.id})
sop10 = SongsOnPlaylist.create!({playlist_id: playlist3.id, song_id: song83.id})
sop11 = SongsOnPlaylist.create!({playlist_id: playlist3.id, song_id: song73.id})
sop12 = SongsOnPlaylist.create!({playlist_id: playlist3.id, song_id: song18.id})

sop13 = SongsOnPlaylist.create!({playlist_id: playlist4.id, song_id: song35.id})
sop14 = SongsOnPlaylist.create!({playlist_id: playlist4.id, song_id: song110.id})
sop15 = SongsOnPlaylist.create!({playlist_id: playlist4.id, song_id: song100.id})
sop16 = SongsOnPlaylist.create!({playlist_id: playlist4.id, song_id: song95.id})

sop17 = SongsOnPlaylist.create!({playlist_id: playlist5.id, song_id: song92.id})
sop18 = SongsOnPlaylist.create!({playlist_id: playlist5.id, song_id: song34.id})

sop19 = SongsOnPlaylist.create!({playlist_id: playlist1.id, song_id: song41.id})
sop20 = SongsOnPlaylist.create!({playlist_id: playlist1.id, song_id: song5.id})








