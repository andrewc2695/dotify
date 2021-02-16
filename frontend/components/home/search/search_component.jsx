import React from "react"

class SearchComponent extends React.Component{

    componentDidMount(){
        this.props.search(this.props.match.params.searchTerm)
    }

    render(){
        // debugger
        if(this.props.searchRes === undefined) return null
        const {searchRes} = this.props.searchRes
        return(
            <div className="main_content_window" id="search_main_window">
                <div className="main_search_window">
                    <div className="index_object_div" id="song_search_div">
                        <div className="search_result_title">
                            <div>
                                Songs
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default SearchComponent;