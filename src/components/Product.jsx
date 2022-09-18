import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Product = () => {
    const [albums, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    return (
        <div>
            <h1>Prod</h1>
            {
                albums.map(album => 
                    <Link key={album.id} to={`/product/${album.id}`}>
                        <li>{album.title}</li>
                    </Link>
                )
            }
        </div>
    )
}

export {Product};