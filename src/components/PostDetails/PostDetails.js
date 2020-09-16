import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import photo1 from '../../sidebarImg.jpg'
import photo2 from '../../Boss.jpg'
import photo3 from '../../nasim.jpg'
import photo4 from '../../hyder.png'
import photo5 from '../../ayman.jpg'
import photo6 from '../../stack.jpeg'

import './PostDetails.css'
import FakeData from '../../fakeData/index'
import Comments from '../Comments/Comments';
import { Grid, Paper } from '@material-ui/core';
import img from '../../sidebarImg.jpg';



const PostDetails = () => { 
    const {postid}=useParams();
    console.log(postid)
    const [post, setPost]=useState({})
    console.log(post)
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${postid}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[])

    const [comment, setComment]=useState(FakeData);
    return (
        <div className='post-details-wrap'>
           <Grid container>
                <Grid item xs={10}>
                    <Paper>
                        <h1>Post Name: {post.title}</h1>
                        <h4><big>Description:</big> {post.body} </h4>
                        <h6>Post Number: {post.id} </h6>
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper>
                        <img width='100%' height='250px' src={photo2} alt=""/>
                        
                    </Paper>
                </Grid>
                <Grid item xs={10}>
                    <Paper>
                        <h1>Comments..............</h1>
                        <div className="comment-wrap">
                        {
                             comment.map(comment=><Comments comment={comment}></Comments>)
                         }
                        </div>
                        </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper>
                        <img width='100%' height='250px' src={photo3} alt=""/>
                        <img width='100%' height='250px' src={photo4} alt=""/>
                        <img width='100%' height='250px' src={photo5} alt=""/>
                        <img width='100%' height='200px' src={photo6} alt=""/>
                        
                    </Paper>
                </Grid>
           </Grid>
        </div>
    );
};



export default PostDetails;