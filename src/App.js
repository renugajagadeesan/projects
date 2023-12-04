import logo from './logo.svg';
import './App.css';
import { Routes,Route,Link} from 'react-router-dom';
import Home from './Component/Home';
import Product from'./Component/Product';
import Blog from'./Component/Blog';
import Service from'./Component/Service';
import Contact from'./Component/Contact';
import Solos from './Component/Solos';
import Demo from './Component/Demo';





function App() {
     
     
  return (
   
       <>
            <div>
                 <div className='nav-wrapper'>
                       <div className='ul-icons'>
                             <li className='intro'><Link className='main' to="/">Home</Link></li>
                             <li className='intro'><Link className='main' to="/Product">Product</Link></li>
                             <li className='intro'><Link className='main' to="/Blog">Blog</Link></li>
                             <li className='intro'><Link className='main' to="/Contact">Contact</Link></li>
                             
                       </div>
                       </div>
                        <div className='logo2'>
                         <h1>GUCCI</h1>
                         
                        </div>
                      <Routes>
                       <Route path="/" element={<Home/>}></Route>
                       <Route path="/Product" element={<Product/>}></Route>
                       <Route path="/Blog" element={<Blog/>}></Route>
                       <Route path="/Contact" element={<Contact/>}></Route>
                 </Routes>
                
            </div>
           
          
       
       </>
  
  
  );
}


export default App;
