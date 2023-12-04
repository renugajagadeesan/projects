import React,{useState} from 'react'



function Footer1() {
    const[country,setCountry]=useState(" ");
  const[email,setEmail]=useState(" ");
  function change(event){
      setCountry(event.target.value);
  }
  function chngs(event){
    setEmail(event.target.value);
}

  return (
    <div>
    <div className='foot_wrapper'>
        <div>
           <h6>MAYWEHELPYOU?</h6>
           <a className="foots"  href='#'><p>Contact us</p></a>
           <a className="foots"  href='#'><p>MyOrder</p></a>
           <a className="foots"  href='#'><p>FAQ</p></a>
           <a className="foots"  href='#'><p>Email unsubscribe</p></a>
           <a className="foots"  href='#'><p>siteMap</p></a>
        </div>
        <div>
            <h6>MY COMPANY</h6>
            <a className="foots" href='#'><p>About Gucci</p></a>
            <a className="foots" href='#'><p>Gucci Equilibrium</p></a>
            <a className="foots" href='#'><p>Code of Ethics</p></a>
            <a className="foots"href='#'><p>Careers</p></a>
            <a className="foots" href='#'><p>Legal</p></a>
            <a className="foots" href='#'><p>Privacy&Cookie Policy</p></a>
            <a className="foots" href='#'><p>Cookies Setting</p></a>
            <a className="foots" href='#'><p>Corparate Information</p></a>
        </div>
        <div>
            <h6>STORELOCATOR</h6><br/>
            <h5>Location</h5>
            <input className='footer' type="text" value={country} onChange={change}/><br/><br/>
            <h6>SIGN UP FOR GUCCI UPDATES</h6>
            <p>By entering your email address below, you consent to receiving <br/>our newsletter with access to our latest  collections, events <br/> and initiatives. More details on this are provided in our Privacy Policy</p>
            <h5>Email</h5>
            <input className='footer' type="text"  value={email} onChange={chngs}/>
        </div>
        </div>
        
        
        
    </div>
  )
}

export default Footer1