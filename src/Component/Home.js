import React from 'react'
import Footer1 from './Footer1';
import Contacts from './Contacts';
import Setters from './Setters';
import Practice from './Practice';

function Home() {
  return (
    <div className='home'>
    <div>
    <img className='images1' src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="img"/>
    
    </div>

<div className='cubes'>
    <div className='holas'>
      <h1>PERFUMES</h1>
      <h3>Slide the poster to explore something new !</h3>
    
    </div>

</div>

<div className='com'>
<img-comparison-slider>
  <img style={{width:"1000px"}} slot="first" src="https://media.gucci.com/content/DiaryArticleDouble_Standard_1400x894/1564658103/DiaryArticleDouble_Memoire-campaign-1_001_Default.jpg" />
  <img style={{width:"1000px"}} slot="second" src="https://media.gucci.com/content/DiaryArticleDouble_Standard_1400x894/1564658103/DiaryArticleDouble_Memoire-campaign-2_001_Default.jpg" />
</img-comparison-slider>
</div>
<div>
  <Setters/>
  </div>
<div className='loader'>
    <h1>Quality is remembered long after price is forgotten</h1>
    <p>Founded in Florence, Italy, in 1921, Gucci is one of the world’s leading luxury brands. Following the House’s centenary, Gucci forges ahead continuing to redefine luxury while celebrating creativity, Italian craftsmanship, and innovation.

    is part of the global luxury group Kering, which manages renowned Houses in fashion, leather goods, jewelry, and eyewear.</p>
        <a href="#">GUCCI GO</a>
 </div> 
 <div className='page'>
  <div>
  <img className='pag1' src="https://i.pinimg.com/originals/f2/a8/79/f2a8796f961d5997f39cd537f2655896.jpg" alt="img"></img>
  <br/><a className='topic' href="#"> click here learn more<span className='topics'><i className="fa-solid fa-arrow-right fa-sm" style={{color: "white"}}></i></span></a>
  </div>
  <div>
  <img className='pag1' src="https://c4.wallpaperflare.com/wallpaper/1011/374/434/group-of-people-men-men-outdoors-fashion-photography-wallpaper-preview.jpg" alt="img"></img>
  <br/><a className='topic' href="#">click here learn more<span className='topics'><i className="fa-solid fa-arrow-right fa-sm" style={{color: "white"}}></i></span></a>
  </div>
  <div>
  <img className='pag1' src="https://e0.pxfuel.com/wallpapers/977/266/desktop-wallpaper-expensive-perfume.jpg" alt="img"></img>
  <br/><a className='topic' href="#">click here learn more<span className='topics'><i className="fa-solid fa-arrow-right fa-sm" style={{color: "white"}}></i></span></a>
  </div>
  
  </div>
  <Practice/>
  <Footer1/>
  <Contacts/>
  </div>

  );
}

export default Home