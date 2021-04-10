import React,{useState} from 'react';
import Data from '../data'
import { Select } from 'antd';
import NavBar from '../components/shared/navbar'
import '../App.css';
import {Button,Card,Form,Col } from 'react-bootstrap';
const { Option } = Select;
function App(props) {

    const [ApiData,setApiData]=useState();
    const[name,setName]=useState();
  const onConfirm=()=>{
    
    setName(name.toUpperCase())
    console.log("helo clear")
    Data.getdata().then(data=>{
      var result = data.filter(word => word.name.toUpperCase().includes(name));
      console.log("hehre is t")
       console.log(result)
       props.setData(result)
     })
     
        
    
  }
  const onSearch=()=>{
    
    Data.getdata().then(data=>{

      // data.sort(function(a, b) {
      //   var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      //   var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      //   if (nameA < nameB) {
      //     return -1;
      //   }
      //   if (nameA > nameB) {
      //     return 1;
      //   }
      
      //   // names must be equal
      //   return 0;
      // });

      data.sort(function (a, b) {
        return a.first_release_date - b.first_release_date;
      });
      console.log(data);
     props.setData(data)
    })
  }
const handleChange=()=>{

}
    const onChange = e =>{
        setName(e.target.value);
    }
 
  return (
    <>
   <NavBar/>
    <h2 className="headtag">Get In Touch</h2>
    <p className="contactcontent">If you would like to find out more about how we can help you, please give us a call or drop us an email.

We welcome your comments and suggestions about this website and/or any other issues that you wish to raise.If you would like to find out more about how we can help you, please give us a call or drop us an email.

We welcome your comments and suggestions about this website and/or any other issues that you wish to raise. </p>
    <Card className="contactcard" >
    <div className="form-group">
    <Form>
    <h4 style={{color:'white'}}>Contact Form</h4>
    <div className="ivs">
    <div className="iv1">
    <Form.Group controlId="name">
      <Form.Label style={{fontSize:"17px"}}>Name*</Form.Label>
      <Form.Control style={{color:'white',backgroundColor:'#182c47',borderBlockColor:'#182c47',borderColor:'#182c47'}} required/>
      </Form.Group>
      </div>
      <div className="iv2">
      <Form.Group controlId="email">
      <Form.Label style={{fontSize:"17px"}}>Email*</Form.Label>
      <Form.Control style={{color:'white',backgroundColor:'#182c47',borderBlockColor:'#182c47',borderColor:'#182c47'}} type="email" required/>
      </Form.Group>
      </div>
      </div>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label style={{fontSize:"17px"}}>Message*</Form.Label>
    <Form.Control as="textarea" style={{color:'white',backgroundColor:'#182c47',borderBlockColor:'#182c47',borderColor:'#182c47'}} rows={3} required/>
  </Form.Group>
  <Button type="submit" style={{float:'right'}}>Send</Button>
  </Form>
  </div>
 </Card> 

  
  


</>
    
  );
}

export default App;
