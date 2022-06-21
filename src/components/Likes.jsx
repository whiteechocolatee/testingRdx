import React from 'react'
import { connect } from 'react-redux';
import './Likes.css'
import { decrementLikes, incrementLikes } from '../redux/actions';

function Likes(props){    
   /* Destructuring the props object. */
    let {likes,onIncrement,onDecrement} = props;

    return(
        <div className="btn-controls">
            <button onClick={onIncrement}>
                &#10084; {likes}
            </button>
            <button onClick={onDecrement}>
                Dislike
            </button>
        </div>
    )
}

/**
 * This function takes the state of the store and returns an object that will be passed as props to
 * the component.
 * @returns The likes property of the state object.
 */
function mapStateToProps(state){
    const {likesReducer} = state
    return {
        // likes:state.likes
        likes:likesReducer.likes
    }
}


/**
 * MapDispatchToProps is a function that returns an object with functions that dispatch actions.
 * @returns An object with a function that dispatches an action.
 */
function mapDispatchToProps(dispatch){
    return{
        onIncrement:()=> dispatch(incrementLikes()),
        onDecrement:()=> dispatch(decrementLikes())

    }
}

/* Exporting the component `Likes` and connecting it to the store. */
export default connect(mapStateToProps,mapDispatchToProps)(Likes)