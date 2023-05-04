import React from 'react'
import axios from 'axios';


function Comment( {blog}) {
     const handleClick = () => {
          axios.delete(`https://fotostore.onrender.com/comments/${blog.comments.id}`)
            .then(() => {
             // history.push('/');
            })
            .catch(err => {
             // setError(err.message);
            })
        }
  return (
     <div className="blog-preview" key={blog.id} >
     <p>{ blog.comment }</p>
     <button onClick={handleClick}>delete</button>
   

 </div>
  )
}

export default Comment