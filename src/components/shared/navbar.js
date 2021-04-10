import React from 'react';
import { Nav,Navbar } from 'react-bootstrap';

import '../../App.css';

function App() {
 
  return (
    

    <div className="nav" >
           
        
           <Navbar style={{backgroundColor:'#081221',color:'white',height:'10rem' }}>
          
           <Nav className="mr-auto">
           <div className="nvs">
           <Nav.Link className="nv1" style={{color:'white',marginLeft:'6rem',fontSize:'35px',marginRight:'4rem' }} href="/">Video Games</Nav.Link>
           <Nav.Link className="nv2" style={{color:'white',marginLeft:'6rem',fontSize:'35px',marginRight:'4rem'}} href="/contact">Contact</Nav.Link>
           </div>
           </Nav>
           </Navbar>
           
            </div> 
  
    
  );
}

export default App;
