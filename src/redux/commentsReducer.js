import { COMMENT_CREATE } from './types';

const initialState = {
    comments : []
}


export const commentsReducer = (state = initialState,action) =>{
    
    switch(action.type){
        case COMMENT_CREATE:
            return {
                ...state,
                comments : [...state.comments,action.data] 
            }
        default:
            return state
    }
}