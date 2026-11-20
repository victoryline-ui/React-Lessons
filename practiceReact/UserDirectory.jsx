import React from 'react'
import { useState,useEffect } from 'react'

const UserDirectory = () => {
const [users,setUser] = useState ([]);
const [loading,setLoading] = useState(true);
const [error, setError] = useState(null);
const [search ,setSearch] = useState ("");
const [newName,setNewName] = useState ("");
const [newEmail,setNewEmail] = useState ("");

useEffect (() => {
    const list = async () =>{
      try{
      const res = await fetch ("https://jsonplaceholder.typicode.com/users?_limit=10");
if (!res.ok) throw new Error("Failed to load users.");
      const data = await res.json();
      setUser(data)
      
    }catch(err){
setError(err.message)
  }finally{
    setLoading(false)
  }
  
}
 list()
},[])

const addUser = async (e) =>{
   e.preventDefault();
   if(!newName.trim() || !newEmail.trim()) return;
   
   const res = await fetch ("https://jsonplaceholder.typicode.com/users",
    {
    method : "POST",
    headers : {"Content-Type": "application/json"},
    body : JSON.stringify({name: newName , email : newEmail})
})
   const data = await res.json();
   setUser([data,...users])
   setNewEmail("")
   setNewName("");
}

const dltUser = async (selectedId) =>{
    const dlt = await fetch (`https://jsonplaceholder.typicode.com/users/${selectedId}`,{
        method : "DELETE"
    }) 
   setUser(users.filter((item) => item.id !== selectedId))
   
}

const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))

if(loading) return<p>Relaoding User</p>
if (error) return <p>Error: {error}</p>;

  return (
    <div>
        <form onSubmit={addUser}>
            <>
              <input type="text" placeholder='Add New Name:'  value={newName} onChange={(e) => setNewName(e.target.value)}/>
              <input type="text" placeholder='Add new Email:' value={newEmail}  onChange={(e) => setNewEmail(e.target.value)}/>
              <button type='submit'>Add</button>
            </>
        </form>
        <input type="text" placeholder='Search Users:'  value={search} onChange={(e) => setSearch(e.target.value)}/>
        
  {filteredUsers.length === 0 && <p>no user found</p>}
       
     <ul>
        {filteredUsers.map((user) => (
            <li key={user.id}>{user.name} {user.email}  {" "}
              <button  onClick={() => dltUser(user.id) }>Delete</button>
                
            </li>
        ))}
     </ul>
 
    </div>
  )
}

export default UserDirectory
