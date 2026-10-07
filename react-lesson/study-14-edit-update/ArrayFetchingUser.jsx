import React, { useState, useEffect } from 'react'

const ArrayFetchingUser = () => {

  const [users, setUsers] = useState([]) 
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [newName , setNewName] = useState ("");

  const [editingId,setEditingId] = useState(null)
  const [editText,setEditText] = useState("")


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


     const startEditing =(user) =>{
      setEditingId(user.id)
      setEditText(user.name)
     }

    const saveEdit = (idToupdate) =>{
    const updatedUser  = users.map((user) =>{
      if(user.id ===  idToupdate){
        return {...user,name: editText}
      }
      return user
    })
        setUsers(updatedUser)
       setEditingId(null)

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
  filteredUsers.map((user) => {
    const isEditing =user.id === editingId
  return (
            <div key={user.id} >
              {isEditing ? (
              
                <>
                  <input 
                    type="text" 
                    value={editText} 
                    onChange={(e) => setEditText(e.target.value)} 
                  />
                  <button onClick={() => saveEdit(user.id)}>💾 Save</button>
                  <button onClick={() => setEditingId(null)}>❌ Cancel</button>
                </>
              ) : (
                
                <>
                  <span>{user.name}</span>
                  <button onClick={() => startEditing(user)}>✏️ Edit</button>
                  <button onClick={() => deleteTodos(user.id)}>🗑️ Delete</button>
                </>
              )}
            </div>
          )
  }

  
        
      ))}
    </div>
  )
}

export default ArrayFetchingUser