import { LOADER_OFF,LOADER_ON,ERROR_OFF,ERROR_ON } from './types';

const initialState = {
    loading:false,
    error:null,
}


export const loaderReducer = (state = initialState,action) =>{
    console.log('loader type >>>>',action.type);
    switch(action.type){
        case LOADER_ON:
            return {
                ...state,
                loading: true
            }
        case LOADER_OFF:
            return {
                ...state,
                loading: false
            }
        case ERROR_OFF:
            return {
                ...state,
                error: null
            }
        case ERROR_ON:
            return {
                ...state,
                error: action.text
            }
        default:
            return state
    }
}