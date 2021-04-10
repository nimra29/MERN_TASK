import React,{useState,useEffect} from 'react';
import '../App.css';
import Sidebar from '../components/video-screen/sidebar'
import Data from '../data';
import Main from '../components/video-screen/Mainarea'
import NavBar from '../components/shared/navbar'
function App() {
  const [Apidata,setData]=useState([]);
  const [loading,setLoading]=useState(true);
  
  const updateData=(dataobt)=>{
    if(dataobt===undefined ){
      //isloading(true)
      console.log("idhr gy")
     Data.getdata().then(data=>{
       setData(data);
       setLoading(false)    
     })
     }      
 else{
   setLoading(true);
   setData(dataobt);
   setLoading(false);
   console.log("g done")
 }
       
   }
   useEffect(() => {
     
       updateData();
   }, []);
 
  return (
    
   <div class="container">
    <NavBar/>
   {loading? <h1>Loading...</h1>:<Main data={Apidata}/> }
<Sidebar setData={updateData}/>
  
  
</div>


    
  );
}

export default App;
