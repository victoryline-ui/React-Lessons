import React, { use } from 'react'
import { useState } from 'react'
const TodoList1 = () => {

  const [data,setData] = useState ([{id : 1, 
                   task: "mag aral ng coding",
                   },
                 {id : 2, 
                    task : "mag laro"
                 }])
const [newTodo, setNewTodo] = useState("")
const [editId, setEditId] = useState(null)
const [editText, setEditText] = useState("")

   

          const add = (e) => {
    e.preventDefault()
    if (!newTodo.trim()) return;

    const nameObject = {
      id: Date.now(),
      task: newTodo 
    }
    
    setData([...data, nameObject])
    setNewTodo("") 
  }
          const dlt = (selectId) =>{
           setData(data.filter((user) => user.id !== selectId))            
          }
          
       const saveEdit = (selectId) => {
    
    const updatedData = data.map((item) => {
      if (item.id === selectId) {
        return { ...item, task: editText }
      }
      return item
    })

    setData(updatedData)
    setEditId(null)    
    setEditText("")   
  }
        
  return (
    <div>

         <form onSubmit={add}>
          <input type="text" placeholder='Add Todo list'  
          value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
          <button type='submit'>Add</button>
         </form>

         <ul>
          {data.map(todo =>
            <li key={todo.id}> 
             {editId === todo.id ? (
              <>
              <input type="text" placeholder='Edit your task' />
                <button onClick={() => saveEdit(todo.id)} >Save</button>              
              </>
             ) : (
              <>
            {todo.task}{" "}
              <button onClick={() => {
               setEditId(todo.id)
                  setEditText(todo.task) }}>edit</button>

              <button onClick={() => dlt(todo.id)}>DeleteUser</button>
              </>
              
             )}
              
          
            </li>
          )}
         </ul>
   
          

    </div>
  )
}

export default TodoList1