import React, { Suspense } from "react";
import { Link, useLoaderData, useSearchParams, defer, Await } from "react-router-dom";
import Filter from "./Filter";

const Product = () => {
    const {albums} = useLoaderData();
    const [ searchParams, setSearchPrams ] = useSearchParams();

    const query = searchParams.get('product') || '';
    const latest = searchParams.has('latest');
    const startsFrom = latest ? 80 : 1;

    return (
        <div>
            <h1>Prod</h1>
            <Filter query={query} latest={latest} setSearchParams={setSearchPrams}/>
            <Link to="/product/new">Add new Product</Link>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={albums}>
                    {
                        (resolvedAlbums) => (
                            <>
                                {
                                    resolvedAlbums
                                        .filter(album => album.title.includes(query) && album.id >= startsFrom)
                                        .map(album => 
                                            <Link key={album.id} to={`/product/${album.id}`}>
                                                <li>{album.title}</li>
                                            </Link>
                                    )
                                }
                            </>
                        )
                    }
                </Await>
            </Suspense>
        </div>
    )
}

const getAlbums = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    return res.json()
}

export const loader = async () => {
    return defer({
        albums: getAlbums()
    })
}

export default Product;