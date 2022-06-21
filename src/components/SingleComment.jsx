import React, { useEffect, useState } from 'react'
import './Comment.css'


function SingleComment({data}) {
  const [commentText,setCommentText] = useState('')
  const {text,id} = data

  useEffect(()=>{
    if(text){
      setCommentText(text)
    }
  },[text])

  const handleInput = (e) =>{
    setCommentText(e.target.value)
  }

  return (
    <form className='comments-item'>
        <div className="text-container">
          <div className="comment-item-delete">&times;</div>
          <input type="text" defaultValue={commentText} onChange={handleInput} />
        </div>
        <input type="submit" hidden />
    </form>
  )
}

export default SingleComment