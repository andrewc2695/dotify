import React from "react"
import SidebarBottom from "./sidebar_bottom"
import SideBarTop from "./sidebar_top"

class SideBarMain extends React.Component{
    

    render(){
        const { playlists } = this.props
        return(
            <div className="sidebar_comp">
                <div  id="sidebar_top">
                    <SideBarTop />
                </div>
                <div  id="sidebar_bottom">
                    <SidebarBottom playlists={playlists}/>
                </div>
            </div>
        )
    }
}

export default SideBarMain