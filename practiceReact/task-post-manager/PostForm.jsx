import React from 'react'

const PostForm = ({addPost,setAddTitle,setAddBody,addTitle,addBody}) => {
  return (
    <div>
        
         <form onSubmit={addPost}>
            <input type="text" placeholder='Add Title' value={addTitle} onChange={(e) => setAddTitle(e.target.value)}/>
            <input type="text" placeholder='Add Body' value={addBody} onChange={(e) => setAddBody(e.target.value)}/>

            <button type='submit'>Add</button>
         </form>

    </div>
  )
}

export default PostForm