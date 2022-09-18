import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from "react";

function SinglePage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [album, setAlbum] = useState(null);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
            .then(res => res.json())
            .then(data => setAlbum(data))
    }, [id]);

    return (
        <div>
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