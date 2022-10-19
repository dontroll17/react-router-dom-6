import { useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError();
        
    return (
        <div>
            <h2>
                {error.status}
            </h2>
            <h3>
                {error.statusText || 'Error'}
            </h3>
        </div>
    )
}

export default Error;