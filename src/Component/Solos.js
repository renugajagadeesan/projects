import React from 'react'

function Solos(props) {
  return (
    <div style={{backgroundcolor:"bisque"}}>
    <div className='contact_wrapper'>
        <a className='bojo' href="#">
                <img className='contact_details' src={props.img} alt="img"/>
           
                <p className='contact_details1'>{props.head}</p>
           
                <h4 className='contact_details2'>{props.details}</h4></a>
            
    </div>
    </div>
  )
}

export default Solos