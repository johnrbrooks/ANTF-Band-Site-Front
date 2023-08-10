import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Main/HomePage/Home'
import About from './Components/Main/About'
import Shows from './Components/Main/Shows'
import SongList from './Components/Main/SongList'
import Contact from './Components/Main/Contact'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/home" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/shows" element={<Shows />}/>
        <Route exact path="/songs" element={<SongList />}/>
        <Route path="/*" element={<h1>404: Page Not Found</h1>}/>
      </Routes>
    </div>
  )
}

export default App
