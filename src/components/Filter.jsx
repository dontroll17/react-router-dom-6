import React, { useState } from 'react';

function Filter({ query, latest, setSearchParams }) {
    const [search, setSearch] = useState(query);
    const [check, setCheck] = useState(latest);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const fieldQuery = form.search.value;
        const isLatest = form.latest.checked;

        const params = {};

        if(fieldQuery.length) {
            params.product = fieldQuery;
        }
        if(isLatest) {
            params.latest = true;
        }

        setSearchParams(params);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" name='search' value={search} onChange={e => setSearch(e.target.value)}/>
                <label style={{ padding: '0 1rem'}}>
                    <input type='checkbox' name='latest' checked={check} onChange={e => setCheck(e.target.checked)}/>New only
                </label>
            <input type='submit' value="Search" />
        </form>
    )
}

export default Filter