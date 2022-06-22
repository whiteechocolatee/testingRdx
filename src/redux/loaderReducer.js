import { LOADER_OFF,LOADER_ON } from './types';

const initialState = {
    loading:false
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
        default:
            return state
    }
}