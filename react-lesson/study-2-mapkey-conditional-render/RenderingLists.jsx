import React from 'react'

export const RenderingLists = () => {
    const student = [
        {id : 1, name : "vic" , grade : 89},
        {id : 2, name : "Vl" , grade : 90},
        {id : 3, name : "Angel" , grade : 95}
    ];

  return (
    <div>
   
      {student.map((item) =>(
        <div key={item.id} className='product-item'>

            <h2>Name{item.name}</h2>
            <h2>Grade :{item.grade}</h2>
             <h3>{item.grade >= 75 ? "passed" : "failed"}</h3>           
             {item.grade >= 90 && <p>⭐ Top Student</p>}
        </div>
      ))}
     
    </div>
  )
}
export default RenderingLists