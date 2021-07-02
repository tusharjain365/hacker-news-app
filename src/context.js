import React, { useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import { SET_LOADING, HANDLE_PAGES, HANDLE_SEARCH, SET_STORIES, REMOVE_STORY, HANDLE_SORT } from './action';

const api = "https://hn.algolia.com/api/v1/search?";
const AppContext = React.createContext();

const initialState = {
    loading:true,
    hits:[],
    query:'test',
    page:0,
    nbPages:0,
    sort:false,
};
const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const fetchStories = async (api)=>{
        dispatch({type:SET_LOADING});
        try {
            const res = await fetch(api);
            const data = await res.json();
            dispatch({type:SET_STORIES, payload:{hits:data.hits, nbPages:data.nbPages},})
        } catch (error) {
            console.log(error);
        }
    }
    const remove = (objectID) =>{
        dispatch({type:REMOVE_STORY, payload:{objectID}})
    }

    const searchQuery = (query) =>{
        dispatch({type:HANDLE_SEARCH , payload:query});
    }
    const sortItems = ()=>{
        dispatch({type:HANDLE_SORT});
    }
    const changePage = (val)=> {
        dispatch({type:HANDLE_PAGES, payload:val});
    }

    useEffect(()=>{
        fetchStories(`${api}query=${state.query}&page=${state.page}`);
    },[state.query,state.page]);

    return <AppContext.Provider value={{...state, remove, searchQuery,sortItems,changePage}}>{children}</AppContext.Provider>
}
export const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider};
