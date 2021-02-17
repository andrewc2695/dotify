import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

class PlaybarComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="playbar_main">
                <div className="playbar_left">

                </div>
                <div className="playbar_mid">
                    <div className="playbar_top_buttons">
                        <button className="playbar_play_button">
                            <FontAwesomeIcon id="playbar_play" icon={faPlay} />
                        </button>
                        <div className="the_playbar">
                                
                        </div>
                    </div>
                </div>
                <div className="playbar_right">

                </div>

            </div>
        )
    }
}

export default PlaybarComponent;