import React from "react"
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

                    </div>
                </div>
            </div>
        )
    }
}

export default HomeMainComponent