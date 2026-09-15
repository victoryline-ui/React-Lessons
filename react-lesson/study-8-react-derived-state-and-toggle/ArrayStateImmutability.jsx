import React, { useState } from 'react'

const ArrayStateImmutability = () => {
 const [todos,settodos] = useState(
[
  { id: 1, text: "Key Board" ,completed: false},
  { id: 2, text: "Graphic Card" , completed: false}
])


const [inputtext,newInput] = useState("");

const totalItem = todos.length;
const completeItem = todos.filter(todo => todo.completed).length

const addItem = (e) =>{
  e.preventDefault();
if(inputtext.trim() === ""){
  return
}

  const newItem = {
    id : Date.now(),
    text : inputtext,
    completed: false
  }

  settodos([...todos,newItem])
     
  newInput("");
}

const  dltItem = (selectId) =>{
const dlt = todos.filter(item => item.id !== selectId)
settodos(dlt)

}

const handleToggleTodo = (selectId)=>{
   settodos(
    todos.map((todo) =>{
      if(todo.id === selectId){
        return {...todo ,  completed : !todo.completed}
      }
      return todo;
    })
   )
}

  return (
    <div>
       <form onSubmit={addItem}>
          <input type="text" placeholder='WishIdea' value={inputtext}
          onChange={(e) => newInput(e.target.value)} />
          <button type='submit'>Add Item</button>  

      <ul>
        {todos.map((todo) =>(
          <li key={todo.id}>
            {todo.text}           
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => handleToggleTodo(todo.id)} 
              />
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', marginLeft: '8px', marginRight: '8px' }}>
                {todo.text}
              </span>
            <button onClick={() => dltItem(todo.id)}>delete</button> 
          </li>
          
        ))}
      </ul>

       </form>
    </div>
  )
}

export default ArrayStateImmutability