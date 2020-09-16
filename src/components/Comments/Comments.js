import { Box } from '@material-ui/core';
import React from 'react';
import './Comments.css'



const Comments = (props) => {
    const {img,name,comment}=props.comment;
    return (
        <div>
           <Box display='flex' className='comment-container'>
           <div className="person-img">
                <img  width='100px' height='100px' src={img} alt=""/>
            </div>
            <div className="comments-wrap">
                <h3> {name} </h3>
                <h5> {comment} </h5>
            </div>
           </Box>
        </div>
    );
};

export default Comments;
