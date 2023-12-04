import React,{useState} from 'react'
import Contacts from './Contacts'

function Product() {
     
  return (
    <>
    <div>
    <div  className="container-fluid" style={{width: "100%;"}}>
      <div  className="carousel slide" data-bs-ride="carousel " >

       
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>
        
        
        <div className="carousel-inner mt-5 vh-100 ">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1557167668-6eb71e76b603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3VjY2l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Los Angeles" class="d-block" style={{width:"1350px", height:"100% "}}/>
          </div>
          <div className="carousel-item">
            <img src="https://www.balharbourshops.com/wp-content/uploads/2017/04/Gucci-Spring-2021-Ad.jpg" alt="Chicago" class="d-block" style={{width:"1350px", height: "100%"}}/>
          </div>
          <div className="carousel-item">
            <img src="https://admin.showstudio.com/images/OqZnbBJBfkfYhFKqSLgiwKXjDcQ=/381940/width-2400/ss20-womenswear-panels-gucci-website_4Oc7Q21.jpg" alt="New York" class="d-block" style={{width:"1350px", height:"100% "}}/>
          </div>
        </div>
        
        
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div> 

    <div className='product'>
        <div className='details'>
            <img src="https://images.unsplash.com/photo-1624796037770-c57cb79a567a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGd1Y2NpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className='product1' alt=""/>
            <a className="heart"  href="#"><i  className="fa fa-heart-o" style={{fontsize:"24px"}}></i></a>
            
        </div>
        <div className='details'>
            <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3VjY2l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className='product2' alt=""/>
            <a className="heart"  href="#"><i className="fa fa-heart-o" style={{fontsize:"24px"}}></i></a>
        </div>
        <div className='details'>
            <img src="https://images.unsplash.com/photo-1458538977777-0549b2370168?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGd1Y2NpJTIwcGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className='product3' alt=""/>
            <a className="heart"  href="#"><i className="fa fa-heart-o" style={{fontsize:"24px"}}></i></a>
        </div>
        </div>
        <div className='product2'>
        <div className='detail'>
            <img src="https://st5.depositphotos.com/48795276/63596/i/450/depositphotos_635965944-stock-photo-ukraine-khmelnitsky-2022-yellow-jar.jpg" className='product4' alt="img"/>
            <a className="heart"  href="#"><i  className="fa fa-heart-o" style={{fontsize:"24px"}}></i></a>
        </div>
        <div className='detail'>

            <img src="https://st2.depositphotos.com/33288624/46449/i/450/depositphotos_464494006-stock-photo-venice-italy-jun8-2019-black.jpg" className='product5' alt="img"/>
            <a className="heart"  href="#"><i  className="fa fa-heart-o" style={{fontsize:"24px"}}></i></a>
        </div>
        <div className='detail'>

           <img src="https://images.pexels.com/photos/12901704/pexels-photo-12901704.jpeg?auto=compress&cs=tinysrgb&w=600" className='product6' alt="img"/>
           <a className="heart"  href="#"><i  className="fa fa-heart-o" style={{fontsize:"24px"}}></i></a>
       </div>
       
       
       
    </div>
    <div style={{marginTop:"150px"}}>
       <Contacts/>
    </div>
    </div>
    </> 
  )
}

export default Product