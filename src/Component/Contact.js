import React,{useState} from 'react'
import Demo from './Demo';
import Solos from './Solos';
import Contacts from './Contacts';
import Project from './Project'

function Contact() {
  function createCard(Demo){
    return(
    <Solos
          img={Demo.img}
          head={Demo.para}
          details={Demo.desc}
          />
    )
} 
  const[name,setName]=useState(" ");
  const[pass,setPass]=useState(" ");
  function change(event){
      setName(event.target.value);
  }
  function chg(event){
    setPass(event.target.value);
}
function click(){
  if( name ===" "||pass === " "){
   alert("Please enter the value")
  }else{
    alert("Thank you for Visiting ")
  }
}   

  return (
    <div className='full' style={{backgroundImage:('https://media.istockphoto.com/id/658822836/photo/paper-texture-background.jpg?s=612x612&w=0&k=20&c=dPnhRVq2fcdRFEte3iedDxYBpAzDgLMgQgTVHMoyANY=')}}>
      <hr/>
        
      
       <h1 className='contact'>Contact Avenue</h1>
      <div className='formdata'>
      <div class="forms">
      <h1 style={{marginLeft:"150px"}}>Feel Free to Contact us we are there to support you</h1>
              <h4 style={{marginLeft:"120px"}}>One of the deep secrets of life is that all that is really worth doing is what we do for others</h4>
        <form>
              
                 <br/>
                <label>User Name :</label><br/><br/>
                <input style={{paddingRight:"200px",paddingTop:"5px"}} type='text' placeholder='Enter Name...' value={name} onChange={change}/><br/><br/>
                <label>Password :</label><br/><br/>
                <input style={{paddingRight:"200px",paddingTop:"5px"}} type='password' placeholder='Enter pass...'value={pass} onChange={chg}/><br/><br/><br/>
                <button style={{paddingLeft:"50px",paddingRight:"50px"}} classname="click" onClick={click}>submit</button>
                
        </form>
       </div>
           
      
        <Project/>
      </div>
      <div className='tomo'>
        {Demo.map(createCard)}
      
      </div>
      <Contacts/>
    </div>
    
      
  )
}

export default Contact