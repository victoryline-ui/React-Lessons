import React from 'react'
import { useState } from 'react'


const GroceryList = () => {
const [product,setproduct] = useState ([
    {id : 1 , item : "bigas (1kg)"},
    {id : 2 , item : "itlog (1 tray)" }
    ])

const [addItem,setAdditem] = useState ("")
const [itemId,setItemId] = useState (null)
const [itemEdit,setItemEdit] = useState ("")

const addItems = (e) =>{
   e.preventDefault()

   if(!addItem.trim()) return;

   const newitem = {
    id : Date.now(),
    item : addItem
   }

   setproduct([...product,newitem])
     
   setAdditem("") 
}

const dlt = (selectId) => {
setproduct(product.filter((item) => item.id !== selectId))
}

    const saveEdit = (selectId) =>{
      const updateItem = product.map((items) =>{
        if (items.id === selectId){
        return {...items, item :itemEdit}
        }
    return items
      })
    setproduct(updateItem)
      setItemId(null)
      setItemEdit("")
    }



  return (
    <div>

        <form onSubmit={addItems}>
            <input type="text" placeholder='Add Item' 
            value={addItem} onChange={(e) => setAdditem(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>


      <ul>
        {product.map((prod) => (
          <li key={prod.id}>
            {itemId === prod.id ? (
              <>
                <input
                  type="text"
                  placeholder="edit Task"
                  value={itemEdit}
                  onChange={(e) => setItemEdit(e.target.value)}
                />
                <button onClick={() => saveEdit(prod.id)}>Save</button>
              </>
            ) : (
              <>
                {prod.item}{" "}
                <button
                  onClick={() => {
                    setItemId(prod.id);
                    setItemEdit(prod.item);
                  }}
                >
                  edit
                </button>
                <button onClick={() => dlt(prod.id)}>delete</button>
              </>
            )}
          </li>
        ))}
      </ul>


      
    </div>
  )
}

export default GroceryList