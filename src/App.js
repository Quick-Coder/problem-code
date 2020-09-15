import React from 'react';
import Header from './components/Header/Header'
import PostWrap from './components/PostWrap/PostWrap';
import WrongPath from './components/WrongPath/WrongPath'
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import PostDetails from './components/PostDetails/PostDetails';


function App() {
  return (
    <div>
     <Header></Header>
     
      <Router>
        <Switch>
          <Route path='/posts'>
            <PostWrap></PostWrap>            
          </Route>
          <Route exact path='/'>
            <PostWrap></PostWrap>
          </Route>
          <Route path='/post/:postid'>
              <PostDetails></PostDetails>
          </Route>
          <Route path='*'>
              <WrongPath></WrongPath>
          </Route>
        </Switch>
      </Router>
         
    </div>
    
  )
}

export default App;
