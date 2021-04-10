import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

import { InputGroup,FormControl,Dropdown,DropdownButton,Card,Button,Nav,Navbar } from 'react-bootstrap';

const Video = (props) => {
    const carddata=props.data
    useEffect(()=>{
       console.log("helo from video")
   },[]);
    return (
        
        <div class="main" >
        {carddata.map(input=>{
           
            return <>
          <div class="maincard" >
            <Card style={{backgroundColor:"#0e1a2b"}}>
            
  <Card.Body>
  
    <Card.Title style={{color:'#ffffff' }}>{input.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Release Date:{input.first_release_date}</Card.Subtitle>
    <Card.Text>
      [Summary] {input.summary}
    </Card.Text>
    
   
  </Card.Body>
 
</Card> 
</div>
</>
})}
        
           
    </div>
    )
}
export default Video;