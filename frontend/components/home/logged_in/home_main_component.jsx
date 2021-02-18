import React from "react"
import HeaderComponent from "../header/header_component";
import PlaybarContainer from "../playbar/playbar_container";
import SideBarMain from "../sidebar/sidebar_main_component";

class HomeMainComponent extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        
    }

    render(){
        console.log("home_main_comp")
        if(this.props.currentUser === undefined){
            return null;
        }
        const { playlists, createPlaylist, currentUser, fetchPlaylists } = this.props;
        return(
            <div className="main_div">
                <div className="playbar_component">
                    <PlaybarContainer />
                </div>
                <div className="main_and_side_div">
                    <div className="side_component">
                        <SideBarMain createPlaylist={createPlaylist} playlists={playlists}
                            currentUser={currentUser} history={this.props.history}
                            fetchPlaylists={fetchPlaylists}/>
                    </div>
                    <div className="main_component">
            
                    </div>
                    <div className="header_component">
                        <HeaderComponent currentUser={this.props.currentUser.username} 
                            logout={this.props.logout} search={this.props.search}
                            history={this.props.history} removeSearch={this.props.removeSearch}
                            resetState={this.props.resetState} currentSong={this.props.currentSong}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeMainComponent