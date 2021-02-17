import React from "react"
import HeaderComponent from "../header/header_component";
import PlaybarComponent from "../playbar/playbar_component";
import SideBarMain from "../sidebar/sidebar_main_component";

class HomeMainComponent extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchPlaylists(this.props.currentUser.id)
    }

    render(){
        if(this.props.currentUser === undefined){
            return null;
        }
        const { playlists } = this.props;
        return(
            <div className="main_div">
                <div className="playbar_component">
                    <PlaybarComponent />
                </div>
                <div className="main_and_side_div">
                    <div className="side_component">
                        <SideBarMain playlists={playlists}/>
                    </div>
                    <div className="main_component">
            
                    </div>
                    <div className="header_component">
                        <HeaderComponent currentUser={this.props.currentUser.username} 
                            logout={this.props.logout} search={this.props.search}
                            history={this.props.history} removeSearch={this.props.removeSearch}
                            resetState={this.props.resetState}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeMainComponent