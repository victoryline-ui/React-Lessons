import React from 'react'

const UserItem = ({user,dltUser}) => {

  return (
    <div>
         <li key={user.id}>{user.name} {user.email}  {" "}
              <button  onClick={() => dltUser(user.id) }>Delete</button>  
            </li>

    </div>
  )
}

export default UserItem