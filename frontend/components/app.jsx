import React from "react"
import { Link, Redirect, Route, Switch } from "react-router-dom"
import homeComponentContainer from "./home/home_compnent_container"
import signUpContainer from "./session/sign_up_container";
import logInContainer from "./session/log_in_container"
import { AuthRoute, ProtcRoute } from "../util/route_util"
import HomeMainContainer from "./home/logged_in/home_main_container";
import ArtistIndexContainer from "./home/music/artists/artists_index_container"
import ArtistShowContainer from "./home/music/artists/artist_show_container"
import AlbumShowContainer from "./home/music/albums/album_show_container"
import SearchContainer from "./home/search/search_container";
import SearchShowMore from "./home/search/search_show_more_container"
import PlaylistShowContainer from "./home/music/playlists/playlist_show_container"
import SearchAllContainer from "./home/search/search_all_container";

const App = () => {
    return (
    <div id="root_div">
            <HomeMainContainer />
            <Switch >
                <AuthRoute exact path="/signup" component={signUpContainer} />
                <AuthRoute exact path="/login" component={logInContainer} />
                <ProtcRoute path="/home/" component={ArtistIndexContainer} />
                <ProtcRoute path="/playlists/:playlistId" component={PlaylistShowContainer}/>
                <ProtcRoute path="/artists/:artistId" component={ArtistShowContainer} />
                <ProtcRoute path="/albums/:albumId" component={AlbumShowContainer}/>
                <ProtcRoute path="/searches_all" component={SearchContainer} />
                <ProtcRoute path="/searches/:searchTerm/:type" component={SearchShowMore} />
                <ProtcRoute path="/searches/:searchTerm" component={SearchContainer}/>
                <Route exact path="/" component={homeComponentContainer} />
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
    </div>
    )
}

export default App;

<HomeMainContainer />