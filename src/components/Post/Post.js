import React from 'react';
import Button from '@material-ui/core/Button';
import style from './Post.css';
import { Link } from 'react-router-dom';



const Post = (props) => {
       const {title,body,id}=props.singlePost;
    
    return (
        <div className='post-container'>
            <h4 className='highlight'>{title}</h4>
            <p>{body}</p>
            
            <div className="main-btn ">             
            <Button variant="outlined" color="primary">
            Like
            </Button>           
                 
            <Link to={`/post/${id}`}>
            <Button className='seeMoreBtn' variant="contained" color="primary" href="#outlined-buttons">
            <b className='btn-text'>See More</b>
            </Button> 
            </Link> 
                             
            </div>
        </div>
    );
};

export default Post;