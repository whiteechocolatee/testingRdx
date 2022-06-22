import {
    INCREMENT, 
    DECREMENT, 
    INPUT_TEXT, 
    COMMENT_CREATE, 
    COMMENT_UPDATE, 
    COMMENT_DELETE, 
    COMMENT_LOAD,
    LOADER_ON,
    LOADER_OFF,
    ERROR_OFF,
    ERROR_ON,
} from './types';

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

export function commentDelete(id){
    return {
    type: COMMENT_DELETE,
    data:{id}
    }
}

export function loaderOn(){
    return {
        type: LOADER_ON,
    }
}

export function loaderOff(){
    return {
        type: LOADER_OFF,
    }
}

export function errorOn(text){
    return dispatch =>{
        dispatch({
            type:ERROR_ON,
            text
        });
        setTimeout(()=>{
            dispatch(errorOff())
            dispatch(loaderOff())
        },3000)
    }
}

export function errorOff(){
    return {
        type: ERROR_OFF,
    }
}

export function commentLoad(){
    return async fetchingData =>{
        try{
            fetchingData(loaderOn())
            let response = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=20`)
            let dataJson = await response.json()

            setTimeout(()=>{
                fetchingData ({
                    type: COMMENT_LOAD,
                    data: dataJson
                })
                fetchingData(loaderOff())
            },3000)
        }catch(err){
            fetchingData(errorOn('Ошибка API'))
        }
    }
}
