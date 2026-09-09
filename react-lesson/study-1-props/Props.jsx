import React from 'react'

function Props(props) {
  return (
    <div>
          <h1>Name: {props.name}</h1>
      <h1>Price: ₱{props.price}</h1>
      <h1>Available? {props.isAvailable ? "Yes" : "No"}</h1>
    </div>
    
  )
}

export default Props