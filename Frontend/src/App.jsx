import './App.css'
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Register from './Components/Register'
import Login from './Components/Login'
import Blog from'./Components/Blog'
import BlogContent from './Components/BlogContent';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ReadBlog from './Components/ReadBlog';
import AboutUs from './Components/AboutUs';
import FullBlog from './Components/FullBlog';


function App() {
 
 return (
    
      <div>
     <BrowserRouter>
     <Navbar/>
     <Footer/>
      <Routes>
      <Route path="/" element={<Register />}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/blogcontent" element={<BlogContent/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/ReadBlog" element={<ReadBlog/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/blog/:id" element={<FullBlog/>}/>
      </Routes>
    </BrowserRouter>
       </div>
  )
}

export default App
