import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useSelector } from'react-redux'

const Home = React.lazy(() => import("./pages/Home"))
const Login = React.lazy(() => import("./pages/Login"))
const Signup = React.lazy(() => import("./pages/Signup"))
const Job = React.lazy(() => import("./pages/Job"))
const Profile = React.lazy(() => import("./pages/Profile"))
const Message = React.lazy(() => import("./pages/Message"))
const Freelance = React.lazy(() => import("./pages/Freelance"))
const Work = React.lazy(() => import("./pages/Work"))
const Notfound = React.lazy(() => import("./pages/Notfound"))
const Faq = React.lazy(() => import("./pages/Faq"))
const Post = React.lazy(() => import("./pages/Post"))

function App() {

  // const login = useSelector((state) => state.user.login)

  useEffect(() => {
     
    AOS.init({
      
      offset: 200, 
      delay: 0,
      duration: 1000, 
      easing: 'ease',
      once: false,
      mirror: false, 
    });
  }, []);

  return (
    <React.Suspense fallback={<div style={{position:"absolute", top:"50%", left:"43%"}}>
      <img className='loading_img' src={("./../freelance_logo-removebg-preview (1).png")} alt="" />
  </div>}>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/job" element={<Job />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/freelance" element={<Freelance />} />
          <Route path="/work" element={<Work />} />
          <Route path="/post" element={<Post />} />
          <Route path="/message" element={<Message />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </React.Suspense>

  )
}

export default App