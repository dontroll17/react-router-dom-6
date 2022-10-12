import { useLoaderData, useNavigate } from 'react-router-dom'

function SinglePage() {
    const album = useLoaderData();
    const navigate = useNavigate();
    
    const goBack = () => navigate(-1);

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            {album && (
                <>
                    <h1>{album.title}</h1>
                    <p>{album.userId}</p>
                </>
            )}
        </div>
    )
}

export const singleLoader = async ({params}) => {
    const id = params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
    return res.json();
}

export default SinglePage