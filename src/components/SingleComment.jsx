import React, { useEffect, useState } from 'react'
import { commentDelete, commentUpdate } from '../redux/actions';
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

  const handleDelete = (e)=>{
    console.log('click >>',id);
    dispatch(commentDelete(id))
  }

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
          <div onClick={handleDelete} className="comment-item-delete">&times;</div>
          <input type="text" defaultValue={commentText} onChange={handleInput} />
        </div>
        <input type="submit" hidden />
    </form>
  )
}

export default SingleComment