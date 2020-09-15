import React, { useEffect, useState } from 'react';
import style from './PostWrap.css';
import AsideBar from '../AsideBar/AsideBar';
import img from '../../sidebarImg.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Post from '../Post/Post';

import PostDetails from '../PostDetails/PostDetails'



const PostWrap = () => {
    //data load
    const [posts, setPosts]=useState([]);
    useEffect(()=>{
      const url='https://jsonplaceholder.typicode.com/posts';
      fetch(url)
      .then(res=>res.json())
      .then(data=>setPosts(data))
    },[])
    
    // style handle
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,          
        },       
      }));
      const classes = useStyles(); 

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2}>
          <Paper>
              <AsideBar></AsideBar>
          </Paper>
        </Grid>
        <Grid className='post' item xs={12} sm={8}>
          <Paper className={classes.paper}>               
                  {
                    posts.map(post=><Post  singlePost={post}></Post>)
                  }                
          </Paper>
        </Grid>
        <Grid className='side-bar-right'  item xs={12} sm={2}>
          <Paper className={classes.paper}>
              <img width='100%' height='610px' src={img} alt=""/ >
          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}
    

export default PostWrap;
