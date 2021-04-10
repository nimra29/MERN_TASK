import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './App.css';
import Video from './screens/video'
import Contact from './screens/contact'
const App=()=>{


  return (
    <Router>     
    <Route exact path="/" component={Video}/>
    <Route path="/contact" component={Contact}/>
    </Router>

    
  );
}

export default App;
