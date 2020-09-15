import React from 'react';
import style from './AsideBar.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import EventIcon from '@material-ui/icons/Event';
import PagesIcon from '@material-ui/icons/Pages';
import GroupIcon from '@material-ui/icons/Group';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import CloudIcon from '@material-ui/icons/Cloud';
import WorkIcon from '@material-ui/icons/Work';
import { Box } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import BusinessIcon from '@material-ui/icons/Business';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';


const AsideBar = () => {    
    return (
        <div className='side-bar'> 
           <Box justifyContent="center"  p={2}>
           <p><FacebookIcon/> Welcome</p>
                <p><EventIcon/> Events</p>
                <p><PagesIcon/>Pages</p>
                <p><GroupIcon/>Group</p>
                <p><LiveTvIcon/>Live</p>
                <p><CloudIcon/>Weather</p>
                <p><WorkIcon/>Jobs</p>
                <p><SportsEsportsIcon/>Games</p>
                <p><AddAPhotoIcon/>Photo</p>
                <p><AddShoppingCartIcon/>Shopping</p>
                <p><AssignmentIndIcon/>Assigment</p>
                <p><BusinessIcon/>Business</p>
                <p><ChatBubbleIcon/>Chat</p>
                              
           </Box>
        </div>
    );
};

export default AsideBar;