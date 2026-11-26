import React from 'react'
import { useParams, Link ,} from 'react-router-dom'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const {id} = useParams();
    const [user,setUser] = useState (null);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
    const fetchDetail = async () =>{
        try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`) 
        if(!res.ok) throw new Error ("Failed to load users.") 
        const data = await res.json();

        setUser(data)
    }catch(err){
   setError(err.message)
    }finally{
         setLoading(false)
    }}
fetchDetail();

},[id])


const navigate = useNavigate();
const handleBack = () =>{
navigate('/users')
}

if (loading) return <p>Loading profile...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div>
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
          <h1>{user.phone}</h1>
          <h1>{user.company.name}</h1>
       <button onClick={handleBack}>back to Users</button>
    </div>
  )
}

export default UserDetails