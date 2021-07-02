import React from 'react';
import { useGlobalContext } from "./context";
const Buttons = ()=>{
    const {page, nbPages,loading,changePage} = useGlobalContext();
    return(
        <div className="btn-container">
            <button className="page-btn" disabled={loading} onClick={()=>changePage(-1)}>prev</button>
            <p>{`${page+1} out of ${nbPages}`}</p>
            <button className="page-btn" disabled={loading} onClick={()=>changePage(1)}>next</button>
        </div>
    )
}

export default Buttons;