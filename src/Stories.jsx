import React from 'react';
import { useGlobalContext } from './context';

const Stories = ()=>{
    const {loading,hits,remove,sort} = useGlobalContext();
    if(loading) {
        return <h1 className="loading">Fetching content for you buddy :)</h1>
    }
    if(hits.length === 0) {
        return <h1 className="loading">Sorry buddy looks like you got something new to find :(</h1>
    }
    const myhits = [].concat(hits)
    .sort((a, b)=> a.num_comments< b.num_comments?1:-1) 
    return(
        <section className="card">
            {sort ? myhits.map((hit)=>{
                const {author,title,url,objectID,num_comments} = hit;
                return <div key={objectID} className="story">
                    <h2>{title}</h2>
                    <p>By {author} | <span>{num_comments} comments</span></p>
                    <div className="links">
                    <a href={url} target="_name" rel="noopener noreferrer">Interested</a>
                    <button className="remove" onClick={()=>remove(objectID)}>Remove</button>
                    </div>
                </div>
            }): hits.map((hit)=>{
                const {author,title,url,objectID,num_comments} = hit;
                return <div key={objectID} className="story">
                    <h2>{title}</h2>
                    <p>By {author} | <span>{num_comments} comments</span></p>
                    <div className="links">
                    <a href={url} target="_name" rel="noopener noreferrer">Interested</a>
                    <button className="remove" onClick={()=>remove(objectID)}>Remove</button>
                    </div>
                </div>
            })}
        </section>
    )
};

export default Stories;