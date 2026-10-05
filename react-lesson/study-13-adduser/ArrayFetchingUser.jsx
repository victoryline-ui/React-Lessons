import React, { useState, useEffect } from 'react'

const ArrayFetchingUser = () => {

  const [users, setUsers] = useState([]) 
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [newName , setNewName] = useState ("");


  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        
        
        setUsers(data)

      } catch (error) {
        console.log("Error fetching users:", error)
      } finally {
        
     setLoading(false)
      }
    }

    getUsers()
  },[]) 


  if (loading) {
    return <h3>⏳ Loading users...</h3>
  }

  if (users.length === 0) {
    return <h3>⚠️ Walang nahanap na users.</h3>
  }

  const deleteTodos = (idDelete) => {
    const newtodos = users.filter((todo) => todo.id !== idDelete)
    setUsers(newtodos)
  }


    const filteredUsers= users.filter((user) =>
       user.name.toLowerCase().includes(searchTerm.toLowerCase())
     )


     const addUser =(e) => {
      e.preventDefault();

      if(!newName.trim()) return;

      const newUser = {
        id : Date.now(),
        name : newName
      }
      setUsers([...users,newUser])

      setNewName("")
     }

  return (
    <div>
      <h2>User List</h2>
    <input type="text" placeholder="Search by name..."
     value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
     
     <form onSubmit={addUser}> <input type="text" placeholder='Add New Name'
      value={newName}
       onChange={(e) => setNewName(e.target.value)}/>;
       <button type="submit">➕ Add User</button>
     </form>

      {filteredUsers.length === 0 ?(
    <p>no match found</p>
  ) :(
  filteredUsers.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>

          <button onClick={() => deleteTodos(user.id)}>delete</button>
        </div>
  )
        
      ))}
    </div>
  )
}

export default ArrayFetchingUser