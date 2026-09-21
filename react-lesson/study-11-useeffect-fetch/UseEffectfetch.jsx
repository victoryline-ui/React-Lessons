import React from 'react'
import { useState,useEffect } from 'react'
const UseEffectfetch = () => {
    const [datas,setdData] = useState(null)
    const [loading,setLoading] = useState(true)
  
    useEffect(()=>{
    const fApi =  async () =>{
         try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
            const data = await response.json()
            
           setdData(data)
         }catch(error){
          console.log("Error", error)
         }finally {
        setLoading(false); 
      }
    }

    fApi();
    },[])

    
  return (
    <div>
 {loading ? (
        <h3>⏳ Loading user data...</h3>
      ) : !datas ? (
        <h3>⚠️ Walang nahanap na data o may error sa network.</h3>
      ) : (
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <h3>Name: {datas.name}</h3>
          <p><strong>Email:</strong> {datas.email}</p>
          <p><strong>Phone:</strong> {datas.phone}</p>
          <p><strong>Company:</strong> {datas.company?.name}</p>
        </div>
      )}

    </div>
  )
}

export default UseEffectfetch