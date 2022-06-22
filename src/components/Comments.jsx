import React, { useState } from 'react'
import SingleComment from './SingleComment';
import { useDispatch, useSelector } from 'react-redux';
import { commentCreate } from '../redux/actions';
import uniqid from 'uniqid'


function Comments() {

    const dispatch = useDispatch()

    const comments = useSelector(state=>{
        const {commentsReducer:{comments}} = state
        return comments
    })

    const [textComment,setTextComment] = useState('')

    const handleInput = (e)=> {
        setTextComment(e.target.value)
    }


    const handleSubmit = (e)=> {
        e.preventDefault()
        const id = uniqid()
        dispatch(commentCreate(textComment,id))
    }

    return (
        <div className='card-comments'>
            <form onSubmit={handleSubmit} className='comment-items-create'>
                <input type="text" value={textComment} onChange={handleInput}/>
                <input type="submit" hidden />
            </form>
            {
                !!comments.length && comments.map(item =>{
                    return <SingleComment key={item.id} data={item}/>
                })
            }
        </div>
    )
}

export default Comments