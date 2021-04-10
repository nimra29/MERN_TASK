import React,{useState} from 'react';
import Data from '../../data'
import { Select } from 'antd';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { InputGroup,FormControl,Dropdown,DropdownButton,Card,Button,Nav,Navbar } from 'react-bootstrap';
const { Option } = Select;
function App(props) {
  const [result,setResult]=useState([]) ;
    const [ApiData,setApiData]=useState();
    const[name,setName]=useState();
    const[sort,setSort]=useState("none");
  const onConfirm=()=>{
    console.log(sort)
    var result ;
    //console.log(result)
      
     handleSearching() 
     
    
   
     
        
    
  }
  const onSearch=()=>{
    setName('')
    setSort("none")
    Data.getdata().then(data=>{
     props.setData(data)
    })
  }

  const handleSearching=()=>{
    

    console.log("sec here")
    console.log(name)  
      
    Data.getdata().then(data=>{
      if(name!==undefined && sort==="none"){
      data= data.filter(word => word.name.toUpperCase().includes(name.toUpperCase()));
      }
      else if(name!==undefined && sort==="Ranking"){
        data=data.filter(word => word.name.toUpperCase().includes(name.toUpperCase()));
        data.sort(function (a, b) {
          return a.ranking - b.ranking;
        });
      }
      else if(name!==undefined && sort==="Release Date"){
        data= data.filter(word => word.name.toUpperCase().includes(name.toUpperCase()));
        data.sort(function (a, b) {
          return a.first_release_date - b.first_release_date;
        });
      }
      else if(name!==undefined && sort==="Name"){
        data= data.filter(word => word.name.toUpperCase().includes(name.toUpperCase()));
        data.sort(function(a, b) {
            var nameA = a.name.toUpperCase(); 
            var nameB = b.name.toUpperCase(); 
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
        
            return 0;
          });
      }
      else if(name===undefined && sort==="Ranking"){
        data.sort(function (a, b) {
          return a.rating - b.rating;
        });
       
      }
      else if(name===undefined && sort==="Release Date"){
       
        data.sort(function (a, b) {
          return a.first_release_date - b.first_release_date;
        });
      
      }
      else if(name===undefined && sort==="Name"){
       
        data.sort(function(a, b) {
            var nameA = a.name.toUpperCase(); 
            var nameB = b.name.toUpperCase(); 
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
        
            return 0;
          });
         
      }
      // console.log(result)
       
        props.setData(data)
     
       
     })

  }
  function handleChange(value) {
    setSort(value)
  }
    const onChange = e =>{
        setName(e.target.value);
    }
 
  return (
    
   
  <div className="sidebar" >
    <Card className="sidebarcard"style={{backgroundColor:"#0e1a2b"}} >
    <div className="form-group">
   <h3 style={{color:'white'}}>Filter Results</h3>
   <br/>
      <label htmlFor="formGroupExampleInput" className="orderlabel" >Name [Contains]</label>
      <input onChange={onChange}
       style={{backgroundColor:'#182c47',borderBlockColor:'#182c47',height:'3rem',borderColor:'#182c47', width:'16rem'}}
        type="text"
        value={name}
        name="name"
        className="form-control"
        id="formGroupExampleInput"
        placeholder="text string"
      />
    </div>
    {/* <div className="form-group">
      <label htmlFor="formGroupExampleInput">Minimum Score</label>
      <input
      style={{backgroundColor:'#182c47',borderBlockColor:'#182c47',borderColor:'#182c47'}}
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        placeholder="1-10" 
      />
    </div> */}
   

    <label htmlFor="formGroupExampleInput" >Order by:</label>
  <Select value={sort} onChange={handleChange} style={{fontSize:'17px',height:'3rem', borderRadius:'0rem',color :'white', padding:'0.25rem',paddingTop:'1rem',margin:'0rem',  width: 260, textAlign: 'center',backgroundColor:'#182c47',borderColor:'#182c47'}} bordered={false} defaultValue="Name">
    <Option  value="Name">Name</Option>
    <Option  value="Ranking">Ranking</Option>
    <Option  value="Release Date">Release Date</Option>
  </Select>
  <div>
  <Button as="input" type="button" style={{float:'left',marginTop:'7rem'}} value="Apply Filters" onClick={onConfirm}/> 

 <Button as="input" className={"btntab"} type="button" style={{marginTop:'7rem',float:'right',marginRight:'4rem'}} value="Reset Filter" onClick={onSearch}/>
</div>
 </Card> 
 </div>    
);
}

export default App;
