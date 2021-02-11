import React from "react"
import SideBarTop from "./sidebar_top"

class SideBarMain extends React.Component{
    

    render(){
        return(
            <div className="sidebar_comp">
                <div  id="sidebar_top">
                    <SideBarTop />
                </div>
                <div  id="sidebar_bottom">

                </div>
            </div>
        )
    }
}

export default SideBarMain