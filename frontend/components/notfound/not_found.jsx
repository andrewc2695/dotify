import React from "react"

class NotFoundPage extends React.Component{

    render(){
        return(
            <div>
                <header>
                    <div className="logo_div">
                        <Link to="/" className="dotify_logo">Dotify</Link>
                    </div>
                </header>
                <div>
                     404 page not found
                </div>
            </div>
        )
    }
}

export default NotFoundPage;