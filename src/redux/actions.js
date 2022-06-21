import { INCREMENT, DECREMENT, INPUT_TEXT,  COMMENT_CREATE ,COMMENT_UPDATE} from './types';

export function incrementLikes(){
    return {
        type: INCREMENT
    }
}

/**
 * It returns an object with a type property
 * @returns An object with a type property.
 */
export function decrementLikes(){
    return {
        type: DECREMENT
    }
}


export function inputText(text){
    return {
    type: INPUT_TEXT,
    text
    }
}

export function commentCreate(text,id){
    return {
    type: COMMENT_CREATE,
    data:{ text, id}
    }
}

export function commentUpdate(text,id){
    return {
    type: COMMENT_UPDATE,
    data:{ text, id}
    }
}
