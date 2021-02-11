import React from "react"

class homeMainComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="main_div">
                <div className="main_and_side_div">
                    <ResizePanel direction="e">
                        <div className="side_component">
                            <div id="handle">

                            </div>

                        </div>
                    </ResizePanel>
                    <div className="main_component">

                    </div>
                </div>
                <div className="playbar_component">

                </div>
            </div>
        )
    }
}

export default homeMainComponent