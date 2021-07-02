import React from 'react';
import { useGlobalContext } from "./context";

const SearchForm = ()=>{
    const {query,searchQuery,sortItems,loading} = useGlobalContext();
    return(
        <div className="search-form">
        <form onSubmit={(e)=> e.preventDefault()} >
            <h2>Got some topic? try here</h2>
            <input type="text" value={query} onChange={(e) =>searchQuery(e.target.value)}/>
        </form>
        <button className="sort-btn" onClick={sortItems} disabled={loading}>Sort</button>
        </div>
    )
}

export default SearchForm;