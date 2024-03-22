import './App.css'
import { BrowserRouter ,Routes, Route, } from "react-router-dom";
import Register from './Components/Register'
import Hello from './Components/Hello'
import Login from './Components/Login'
import Blog from'./Components/Blog'
import BlogContent from './Components/BlogContent';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ReadBlog from './Components/ReadBlog';

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
      <Route path="/Hello" element={<Hello/>}/>
      <Route path="/ReadBlog" element={<ReadBlog/>}/>
      </Routes>
    
    </BrowserRouter>
       </div>
  )
}

export default App
