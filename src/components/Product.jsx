import React from "react";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Filter from "./Filter";

const Product = () => {
    const [albums, setData] = useState([]);
    const [ searchParams, setSearchPrams ] = useSearchParams();

    const query = searchParams.get('product') || '';
    const latest = searchParams.has('latest');
    const startsFrom = latest ? 80 : 1;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    return (
        <div>
            <h1>Prod</h1>
            <Filter query={query} latest={latest} setSearchParams={setSearchPrams}/>
            <Link to="/product/new">Add new Product</Link>
            {
                albums
                    .filter(album => album.title.includes(query) && album.id >= startsFrom)
                    .map(album => 
                        <Link key={album.id} to={`/product/${album.id}`}>
                            <li>{album.title}</li>
                        </Link>
                )
            }
        </div>
    )
}

export default Product;