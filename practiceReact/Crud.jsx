import React, { useState, useEffect } from 'react'

const Crud = () => {
  const [users, setuser] = useState([])
  const [newName, setNewname] = useState("")
  const [editId, seteditId] = useState(null)
  const [edittext, seteditText] = useState("")

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()
      setuser(data)
    }
    fetchUsers()
  }, [])

  const addname = (e) => {
    e.preventDefault()
    if (!newName.trim()) return

    const nameObject = {
      id: Date.now(),
      name: newName
    }

    setuser([...users, nameObject])
    setNewname("")
  }

  const deleteUser = (DeleteId) => {
    setuser(users.filter((user) => user.id !== DeleteId))
  }

  const saveEdit = (idToUpdate) => {
    // 1. Ayos na: users.map() sa halip na setuser.map()
    const updateUser = users.map((user) => {
      if (user.id === idToUpdate) {
        return { ...user, name: edittext }
      }
      return user
    })

    
    setuser(updateUser)
    seteditId(null)
    seteditText("")
  }

  return (
    <div>
      <h2>UserList "CRUD"</h2>
      <form onSubmit={addname}>
        <input 
          type="text" 
          placeholder='New Input Name:' 
          value={newName} 
          onChange={(e) => setNewname(e.target.value)} 
        />
        <button type='submit'>+</button>
      </form>
      
      <ul>      
        {users.map((user) => (
          <li key={user.id}>
            {editId === user.id ? (
              <>
                <input 
                  type="text" 
                  value={edittext} 
                  onChange={(e) => seteditText(e.target.value)} 
                />
                <button onClick={() => saveEdit(user.id)}>Save</button>
              </>
            ) : (
              
              <>
                {user.name} {" "}
                <button onClick={() => {
                  seteditId(user.id)
                  seteditText(user.name)
                }}>
                  Edit
                </button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Crud
