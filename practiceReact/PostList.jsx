import React from 'react'
import { useState ,useEffect} from 'react'


const PostList = () => {
    const [post,setPost] = useState ([]);
    const [loading,setLoading] = useState (true);
    const [search,setSearch] = useState ("");
    const [newtitle,setNewtitle] = useState("");

useEffect(() =>{
        const List = async () =>{
    
       const response = await fetch ("https://jsonplaceholder.typicode.com/posts?_limit=10")
       const data =await response.json()
       setPost(data)
       setLoading(false)
        }
        List()
    },[])



    const addPost = async (e) =>{
    e.preventDefault();
    if(!newtitle.trim()) return;

   const res =  await fetch("https://jsonplaceholder.typicode.com/posts",
        {method: "POST", 
        headers: { "Content-Type": "application/json" } , 
        body: JSON.stringify({ title: newtitle, userId: 1 })
})
  
const data = await res.json();

setPost([data,...post])
setNewtitle("")

    }

    const deletePost  = async (selectedId) =>{
     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${selectedId}`, 
        {method: "DELETE"})
     setPost(post.filter(list => list.id !== selectedId));

    }


 const filteredPosts = post.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));   

if(loading) return <p>Loading posts...</p>
  return (
    <div>
         <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />

        <form onSubmit={addPost} >
            <>
            <input type="text" placeholder='Add List!' value={newtitle}
            onChange={(e) => setNewtitle(e.target.value)} />
            <button type='submit'>Add</button>
           
            </>
        </form>
          
    <ul>
        {filteredPosts.map((item) => (
            <li key={item.id}>{item.title} {" "}
            <button onClick={() => deletePost(item.id)}>delete</button>
            </li>
            
        ))}
    </ul>

    </div>
  )
}

export default PostList