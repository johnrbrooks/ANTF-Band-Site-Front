import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './Components/Main/HomePage/Home'
import About from './Components/Main/About'
import Shows from './Components/Main/Shows'
import SongList from './Components/Main/SongList'
import Contact from './Components/Main/Contact'
import ScrollToTop from './Components/Utilities/ScrollToTop'
import AdminLogin from './Components/Admin/AdminLogin/AdminLogin'
import AdminHome from './Components/Admin/AdminForms/AdminHome'

export const BASE_URL = `https://antf-band-site-back-production.up.railway.app/api/`

function App() {

  return (
    <div className='App'>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/home" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/shows" element={<Shows />}/>
        <Route exact path="/songs" element={<SongList />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route path="/*" element={<h1>404: Page Not Found</h1>}/>
        <Route exact path="/adminlogin" element={<AdminLogin />}/>
        <Route exact path="/adminhome" element={<AdminHome />}/>
      </Routes>
    </div>
  )
}

export default App
