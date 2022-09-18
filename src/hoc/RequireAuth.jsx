import React from 'react'
import { useLocation, Navigation } from 'react-router-dom';

function RequireAuth({ children }) {
    const location = useLocation();
    const auth = false;
    
    if(!auth) {
        return <Navigation to="/login" state={{from: location}}/>;
    }

    return (
        <div>children</div>
    )
}

export default RequireAuth