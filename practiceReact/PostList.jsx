import React from 'react'
import { useState ,useEffect} from 'react'


const PostList = () => {
    const [post,setPost] = useState ([]);
    const [loading,setLoading] = useState (true);

useEffect(() =>{
        const List = async () =>{
    
       const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
       const data =await response.json()
       setPost(data.slice(0, 10))
       setLoading(false)
        }
        List()
    },[])

if(loading) return <p>Loading posts...</p>
  return (
    <div>
          
    <ul>
        {post.map((item) => (
            <li key={item.id}>{item.title}</li>
        ))}
    </ul>

    </div>
  )
}

export default PostList