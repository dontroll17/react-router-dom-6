import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const fromPage = location.state?.from?.pathname || '/';
    return (
        <>
            <div>LoginPage</div>
            {fromPage}
        </>
        
    )
}

export default LoginPage