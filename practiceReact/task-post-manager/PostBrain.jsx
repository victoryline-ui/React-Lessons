import  {useState,useEffect} from 'react'
import PostSearch from './PostSearch';
import PostForm from './PostForm'

const PostBrain = () => {
const [post,setPost] = useState ([]);
const [loading,setLoading] = useState (true)
const [error,setError] = useState (null);
const [search,setSearch] = useState ("");  

const [addTitle,setAddTitle] = useState ("");
const [addBody,setAddBody] = useState ("");


useEffect(() =>{
    const list = async () =>{
     try {
       const res = await fetch ("https://jsonplaceholder.typicode.com/posts?_limit=10")
       if(!res.ok) throw new Error ("Failed to fetch posts")
       const data = await res.json()
       
       setPost(data)

}catch(err){
 setError(err.message)
}finally{
setLoading(false)
}}
list()
},[])

const filtered = post.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))

//ito ang na dagdag una ang search Filter ito pangalawa 
const addPost = async (e) =>{
  e.preventDefault()
  if(!addBody.trim() || !addTitle.trim()) return;

   const res = await fetch ("https://jsonplaceholder.typicode.com/posts",{
    method : "POST",
   headers : {"Content-Type" : "application/json"},
   body : JSON.stringify({title : addTitle,body : addBody ,userId: 1})
   })

   const data = await res.json();

   setPost([data,...post])
   setAddTitle("");
   setAddBody("");

}


if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <PostSearch search={search} setSearch={setSearch}/>
      <PostForm addBody={addBody} setAddBody={setAddBody} addTitle={addTitle} setAddTitle={setAddTitle} addPost={addPost} />
    <ul>
        {filtered.map((user) =>(
            <li key={user.id}>
              {user.title}
            </li>
        ))}
    </ul>

    </div>
  )
}

export default PostBrain
