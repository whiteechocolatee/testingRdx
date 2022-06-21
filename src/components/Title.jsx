import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { inputText } from '../redux/actions';
import './Title.css'


function Title() {
    const title = useSelector(state=>{
        const {inputReducer:{text}} = state
        return text
    })
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(inputText(e.target.value))
    }

    return (
        <div className='card-title'>
            <div className="card-title-top">
                <input className='title-input' type="text" onChange={handleChange} />
            </div>
            <p>Title : {title}</p>
        </div>
    )
}

export default Title

