import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ user, dltUser }) => {
  return (
    <li>
      <Link to={`/users/${user.id}`}>{user.name}</Link> {user.email}{" "}
      <button onClick={() => dltUser(user.id)}>Delete</button>
    </li>
  )
}

export default UserItem