# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
Artist.destroy_all
User.destroy_all

demo = User.create!({username: "Demo", password: "123456"})

tim = Artist.create!({name: 'The Great Poet Tim'})
lwc = Artist.create!({name: 'Ludwig Von Candlestick'})
skully = Artist.create!({name: 'Skully'})
sk8tr = Artist.create!({name: 'Sk8tr Girl'}) 
fly = Artist.create!({name: 'Prettyfly Butterfly'})

#pictures
timPic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/tim.jpg')
lwcPic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/pexels-stephan-mu%CC%88ller-1473215.jpg')
skullyPic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/pexels-sinitta-leunen-5380115.jpg')
sk8trPic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/pexels-isabella-mariana-1988681.jpg')
flyPic = open('https://ac-dotify-seeds.s3-us-west-1.amazonaws.com/pexels-gabriela-moraes-4610513.jpg')

#attaching pics
tim.photo.attach(io: timPic, filename: "tim.jpg")
lwc.photo.attach(io: lwcPic, filename: "pexels-stephan-müller-1473215.jpg")
skully.photo.attach(io: skullyPic, filename: "pexels-sinitta-leunen-5380115.jpg")
sk8tr.photo.attach(io: sk8trPic, filename: "pexels-isabella-mariana-1988681.jpg")
fly.photo.attach(io: flyPic, filename: "pexels-gabriela-moraes-4610513.jpg")

