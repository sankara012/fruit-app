import React from "react";

import "./styles/NotFoundPage.css"

function NotFoundPage() {

    return(
        <div className="not-found-page-container">
            <h1>404 Not Found</h1>
            <div>
                <span>Try the following links:</span>
            </div>
            <a href="/">Home</a>
        </div>
    )
}


export default NotFoundPage;