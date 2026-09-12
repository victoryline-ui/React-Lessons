import React, { useState } from 'react'


const FormswithMultipleInputs = () => {
    const [data,setdata] = useState ({
        name : "",
        email : "",
        role: "Student",
    })

    const handleChange = (e) =>{
        const {name ,value } = e.target;

        setdata({
            ...data,
            [name] :value 
        })
    }

     const handleSubmit = (e) => {
    e.preventDefault(); 
    
   if(data.name === "" || data.email === "" ||data.role.trim() === ""){
    alert("Empty")
    return;
   }
    console.log("Form Data to be sent:", data);
    alert(`Welcome, ${data.name}! Registered as ${data.role}.`);
  };


  return (

        <form onSubmit={handleSubmit}>

      <h2>Preview: {data.name} | {data.email} | {data.role}</h2>

    <input type="text"  placeholder="Name" name='name' value={data.name} onChange={handleChange}/>

    <input type="text"  placeholder="Email" name='email' value={data.email} onChange={handleChange}/>

 <select name="role" value={data.role} 
        onChange={handleChange} >
    <option value="Student">Student</option>
    <option value="Teacher">Teacher</option>
 </select>

 <button type="submit">Submit Form</button>
 
</form>
    
  )
}

export default FormswithMultipleInputs