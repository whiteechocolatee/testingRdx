import React from 'react';
import {ThreeDots} from 'react-loader-spinner';
import { useSelector } from 'react-redux';


function Spinner() {

   const loading = useSelector(state=>{
        const {loaderReducer:{loading}} = state;
        return loading
    })

    console.log(loading);

  return (
    <div className='spinner'>
        <ThreeDots
            color='#44D560'
            height="80"
            width="40"
            visible={loading}
        />
    </div>
  )
}

export default Spinner