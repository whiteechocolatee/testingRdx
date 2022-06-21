import React, { useEffect, useState } from 'react'
import { commentUpdate } from '../redux/actions';
import './Comment.css'
import { useDispatch } from 'react-redux';


function SingleComment({data}) {
  const [commentText,setCommentText] = useState('')
  const {text,id} = data

  const dispatch = useDispatch()

  useEffect(()=>{
    if(text){
      setCommentText(text)
    }
  },[text])

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(commentUpdate(commentText,id))
  }

  const handleInput = (e) =>{
    setCommentText(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className='comments-item'>
        <div className="text-container">
          <div className="comment-item-delete">&times;</div>
          <input type="text" defaultValue={commentText} onChange={handleInput} />
        </div>
        <input type="submit" hidden />
    </form>
  )
}

export default SingleComment