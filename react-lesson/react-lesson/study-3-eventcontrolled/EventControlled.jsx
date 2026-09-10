import React from 'react'

const EventControlled = () => {
   const handleClick = (e) =>{
          e.target.textContent ="Ouch"
       }

  const handleInputChange = (e) =>{
        console.log("Typing:", e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Pinipigilan nito ang pag-reload ng page!
    alert("Form Submitted!");
  }
  
  const nameTracker = (e) =>{
   console.log("inputname :"  + e.target.name +"| value:" + e.target.value)
  }

    return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Type something: </label>
        <input 
          type="text" 
          onChange={handleInputChange}
          placeholder="Type here..."
        />

        <input type="text"
         name="email" 
         placeholder='Enter Email' onChange={nameTracker}/>
        
        <button type="button" onClick={(e) =>handleClick(e)}>CLICK</button>
        <button type="submit">SUBMIT FORM</button>
      </form>
      
    </div>
  )
}

export default EventControlled