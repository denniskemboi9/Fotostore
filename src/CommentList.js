import React from 'react'
import Comment from './Comment';


const CommentList = (props) => {
    const comments = props.comments
    const idd = props.idd
      
    return ( 
        <div className="blog-list-landscape">
        {comments.filter(blog => blog.pub===idd).map(blog=> (
          <Comment key={blog.id} blog={blog}/>
          
        ))}</div>
     );
}
 
export default CommentList;