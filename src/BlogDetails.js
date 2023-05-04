import { useHistory, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import CommentList from "./CommentList";
import axios from 'axios';

const BlogDetails = () => {
  const [comment, setComment] = useState('')
  const { id } = useParams();
  const pub = Number(id)
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [isPending1, setIsPending1] = useState(true);
  const history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:8000/blogs/${id}`)
      .then(res => {
        setBlog(res.data);
        setIsPending(false);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      })
  }, [id]);

  useEffect(() => {
    axios.get(`http://localhost:8000/comments?pub=${pub}`)
      .then(res => {
        setComments(res.data);
        setIsPending1(false);
      })
      .catch(err => {
        setIsPending1(false);
        setError(err.message);
      })
  }, [pub]);

  const handleClick = () => {
    axios.delete(`http://localhost:8000/blogs/${blog.id}`)
      .then(() => {
        history.push('/');
      })
      .catch(err => {
        setError(err.message);
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const c = { comment, pub };

    axios.post('http://localhost:8000/comments', c)
      .then(() => {
        window.location.reload();
      })
      .catch(err => {
        setError(err.message);
      })
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <h6>Photo by { blog.author }</h6>
          <img src={blog.image} alt="imgsa" style={{ width: '300px' } } /><br/><br/><br/>
          <h6> Description : {blog.body}</h6><br/>
          <h6> Category : {blog.category}</h6><br/><br/><br/>
        </article>
      )}
      <div >
        <h6>Comments : </h6>
        { error && <div>{ error }</div> }
        { isPending1 && <div>Loading...</div> }
        { comments && <CommentList idd={pub} comments={comments}/> }
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Comment </label>
          <input 
            type="text" 
            required 
            onChange={(e) => setComment(e.target.value)}
          /><br/><br/>
          <button>submit</button>
        </form>
      </div>
      <div>
        <button onClick={handleClick}>delete</button>
      </div>
    </div>
  );
}
 
export default BlogDetails;
