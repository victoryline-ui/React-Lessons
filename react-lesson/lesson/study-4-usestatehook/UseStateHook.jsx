import React from 'react'
import { useState } from 'react'


const UseStateHook = () => {
    const [count ,setCount] = useState(0)
 
    const addbtn = () =>{
        setCount(count + 1)
    }
    const minusbtn = () =>{
       
        if(count > 0 ){
            setCount(count - 1)
        }
    }

  return (
    <div>
      
      <h1 >count : {count}</h1>
     <button className='add' onClick={addbtn}>+</button>
     <button className='minus' onClick={minusbtn}>-</button>


    </div>
  )
}

export default UseStateHook