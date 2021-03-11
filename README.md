# a spotify clone named dotify!

## Overfiew

Dotify is a clone of spotify. Here you can make an account, create, rename, delete palylists. Add and remove songs to playlists. And stream songs. 
music: https://www.bensound.com

## Technologies Used

### Javascript, React.js, and Redux.js for the front end.

### Ruby on Rails for the backend.

## Code Snippet

### Updating Playbar

Creating the scrolling playbar when a song is playing was an interesting challenge to do. My solution for this was to have a `state.time` variable and when a song started playing a `setInterval` was created for 100ms. this `setInterval` would add 100 to the `state.time` variable causong a rerender of the page. In the `render` method I had would divide the `state.time` by the `audio.duration` to figure out what percent the song was at. I would then multiply this percent by the pixel width of the playbars parent div to figure out how many pixels long the playbar should be. This was saved as a variable and used with inline styling to create the updating playabr.

```js
//playbar_component.jsx

this.state = { playing: true, time: 0};

//...

setInterval(() => {
    this.setState({ time: this.state.time + 100});
    if(this.state.time % 1000 === 0){
        this.time += 1;
    }
//...
}, 100);

//...

const timePercent = (this.state.time/(this.duration * 1000));
let widthPercent = 0;
if(timePercent > 0){
    widthPercent = (575 * timePercent);
};

const myStyle = {
    width: widthPercent,
}

//...

<div className="progress" style={myStyle}></div>
```

### Search Bar

In order to create the search bar I had to create a custom rails route that would bing the databse for the search term that the user inputed. The search routes searches artists, albums and songs all in one search preventing the need for additional requests sent to the database.

```ruby
    # routes.rb
    get '/searches/:search', to: 'searches#search', as: 'search_term'

    #searches_controller.rb
    def search
        search_term = params[:search].downcase
        @songs = Song.where("title LIKE ?", "%#{search_term}%")
        @albums = Album.where("title LIKE ?", "%#{search_term}%")
        @artists = Artist.where("name LIKE ?", "%#{search_term}%")
    end

```

