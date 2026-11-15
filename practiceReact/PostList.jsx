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


// 📌 Notes (11-15-2026): Paano mag-POST (magdagdag) ng data sa API
    
// 1. method: "POST"
//    -> Sinasabi nito sa API/server na magdadagdag o magpapasa tayo ng bagong data (hindi lang nagbabasa).

// 2. headers: { "Content-Type": "application/json" }
//    -> Ito ang "label sa sobre" na nagsasabi sa server kung anong klase o format ng data ang ipinapasa natin (JSON format, hindi plain text o image).

// 3. body: JSON.stringify({ title: newtitle, userId: 1 })
//    -> Kino-convert nito ang JavaScript object natin papuntang JSON string format bago ipadala sa internet/API.

// 4. const data = await response.json()
//    -> Pagbalik ng sagot/resibo ng server (na naka-JSON string din), kino-convert ulit natin ito pabalik sa JavaScript object para mabasa at magamit na ng React state natin (hal. setPost([data, ...post])). 
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



 const filteredPosts = post.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));   

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
