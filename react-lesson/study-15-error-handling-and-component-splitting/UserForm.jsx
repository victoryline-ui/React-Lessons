import React from 'react'

const UserForm = ({ addUser, newName, setNewName, newEmail, setNewEmail }) => {
  return (
    <div>
         <form onSubmit={addUser}>
            <>
              <input type="text" placeholder='Add New Name:'  value={newName} onChange={(e) => setNewName(e.target.value)}/>
              <input type="text" placeholder='Add new Email:' value={newEmail}  onChange={(e) => setNewEmail(e.target.value)}/>
              <button type='submit'>Add</button>
            </>
        </form>
    </div>
  )
}

export default UserForm