import React from "react"
import HeaderComponent from "../header/header_component";
import ArtistIndexComponent from "../music/artist_index_component";
import SideBarMain from "../sidebar/sidebar_main_component";

class HomeMainComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="main_div">
                <div className="playbar_component">

                </div>
                <div className="main_and_side_div">
                    <div className="side_component">
                        <SideBarMain />
                    </div>
                    <div className="main_component">

                        <ArtistIndexComponent />
                    </div>
                    <div className="header_component">
                        <HeaderComponent currentUser={this.props.currentUser.username} 
                            logout={this.props.logout}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeMainComponent