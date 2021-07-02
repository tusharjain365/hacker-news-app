import { SET_LOADING, SET_STORIES, HANDLE_PAGES, HANDLE_SEARCH, REMOVE_STORY, HANDLE_SORT } from './action';

const reducer = (state, action)=>{
    switch (action.type) {
        case SET_LOADING:
            return{...state, loading:true}
        case SET_STORIES:
            return{...state, 
                loading:false,
                hits:action.payload.hits,
                nbPages:action.payload.nbPages,
            }
        case REMOVE_STORY:
            return {...state,
            hits:state.hits.filter((story) => story.objectID !== action.payload.objectID
            )}
        case HANDLE_SEARCH:
            return {...state,
                query: action.payload, 
            }
        case HANDLE_SORT:
            return {...state,
            sort:!state.sort
            }
        case HANDLE_PAGES:
            let newPage = state.page + action.payload
            if(newPage > state.nbPages - 1){
                newPage = 0;
            }
            else if(newPage < 0) {
                newPage = state.nbPages-1;
            }
            return{...state, page:newPage}
        default:
            throw new Error("No matching action");
    }
}


export default reducer;