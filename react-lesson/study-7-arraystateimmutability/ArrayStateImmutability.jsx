import React, { useState } from 'react'

const ArrayStateImmutability = () => {
 const [todos,settodos] = useState(
[
  { id: 1, text: "Key Board"},
  { id: 2, text: "Graphic Card"}
])


const [inputtext,newInput] = useState("");

const addItem = (e) =>{
  e.preventDefault();

    if(inputtext.trim() === ""){
      alert("empty WishList")
      return
    }
   
    const newtodos = {
      id: Date.now(), 
      text: inputtext
    }

    settodos([...todos, newtodos]);

   newInput("")
}

const dltbtn = (selectedId) =>{
  const check = todos.filter(item => item.id !== selectedId)
  settodos(check);
}

  return (
    <div>
    <h2>Lesson 8: Todo List (Array State)</h2>

    <form onSubmit={addItem}>
      
      <input type="text"  placeholder='WishList Idea...' value={inputtext}
      onChange={(e) =>newInput(e.target.value)} />
   <button type="submit">Add Item</button>

    <ul>{todos.map((todo) => (
      <li key={todo.id}>
        {todo.text}
        <button onClick={() => dltbtn(todo.id)}>delete</button>
      </li>
    ))}

    </ul>
    </form>
    </div>
  )
}

export default ArrayStateImmutability