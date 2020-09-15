import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const PostDetails = () => { 
    const {postid}=useParams();
    
    return (
        <div>
            <h1>this is a post details: {postid}</h1>
            <h1>this is a post details</h1>
            <h1>this is a post details</h1>
        </div>
    );
};

export default PostDetails;