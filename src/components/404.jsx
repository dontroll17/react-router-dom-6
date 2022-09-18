import React from "react";
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>404 Go to <Link to="/">Home</Link></h1>
        </div>
    )
}

export  {NotFound};