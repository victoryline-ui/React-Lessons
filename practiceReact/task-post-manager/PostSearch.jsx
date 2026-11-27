import React from 'react'

const PostSearch = ({search,setSearch}) => {
  return (
    <div>
    <input type="text" placeholder='Search Title : ' value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default PostSearch