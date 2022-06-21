import { COMMENT_CREATE, COMMENT_UPDATE } from './types';

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
        case COMMENT_UPDATE:
            const {data} = action
            const {comments} = state
            console.log('here u will see action.data >>>', data);
            console.log('here u will see state.commetns >>>', comments);
            let itemIndex = comments.findIndex(res=> res.id === data.id)

            const nextComments = [
                ...comments.slice(0,itemIndex),
                data,
                ...comments.slice(itemIndex+1)
            ]

            return {
                ...state,
                comments : nextComments 
            }
            
        default:
            return state
    }
}