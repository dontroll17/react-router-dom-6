import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from "react";

function SinglePage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [album, setAlbum] = useState(null);
    
    const goBack = () => navigate(-1);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
            .then(res => res.json())
            .then(data => setAlbum(data))
    }, [id]);

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

export default SinglePage