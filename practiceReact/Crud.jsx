import React from 'react'
import { useState ,useEffect} from 'react'
const Crud = () => {
 const [users,setuser] = useState([])
 const [newName,setNewname] = useState ("")

 useEffect(() => {
      const fetchUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json();
      setuser(data)
      }
      fetchUsers()
     },[])

     const addname = (e) =>{
      e.preventDefault()

      if(!newName.trim()) return;

      const nameObject  ={
        id : Date.now(),
        name : newName
      }

      setuser([...users,nameObject])

      setNewname("")
 
     }

 
    //third day to recap react lesson i add a delete function  
     const deleteUser = (DeleteId) =>{
         setuser(users.filter((user)=> user.id !== DeleteId))
     }

  return (
    <div>
       <h2>UserList  "CRUD"</h2>
        <form onSubmit={addname}>
          <input type="text" placeholder='New Input Name:' value={newName} onChange={(e) => setNewname(e.target.value)} />
          <button type='submit'>+</button>
        </form>
        <ul>      
        {users.map((user) => (
        <li key={user.id}>{user.name}<button onClick={() => deleteUser(user.id)}>Delete</button></li>
        
        ))}
        </ul>
    </div>
  )
}

export default Crud;
