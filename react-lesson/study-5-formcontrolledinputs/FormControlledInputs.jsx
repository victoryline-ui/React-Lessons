import React from 'react'
import { useState } from 'react';

export const FormControlledInputs = () => {
   const [student,setStudent] = useState ("")

   const reset = () => {
    setStudent("")
   }
  

  return (
    <div>
       <h2>name : {student}</h2>

       <input type="text" value={student} onChange={(e) => setStudent(e.target.value)} />   
       
       <button onClick={reset}>reset</button>

    </div>
  )
}

export default FormControlledInputs;