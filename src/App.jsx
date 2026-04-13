import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Main/HomePage/Home';
import About from './Components/Main/About';
import Shows from './Components/Main/Shows';
import SongList from './Components/Main/SongList';
import Contact from './Components/Main/Contact';
import ScrollToTop from './Components/Utilities/ScrollToTop';
import AdminLogin from './Components/Admin/AdminLogin/AdminLogin';
import AdminHome from './Components/Admin/AdminForms/AdminHome';
import PrivacyPolicy from './Components/Main/Extras/PrivacyPolicy';
import TermsOfService from './Components/Main/Extras/TermsOfService';

function App() {
    return (
        <div className="App">
            <ScrollToTop />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/shows" element={<Shows />} />
                <Route exact path="/songs" element={<SongList />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route
                    exact
                    path="extras/privacy"
                    element={<PrivacyPolicy />}
                />
                <Route
                    exact
                    path="/extras/terms"
                    element={<TermsOfService />}
                />
                <Route path="/*" element={<h1>404: Page Not Found</h1>} />
                <Route exact path="/adminlogin" element={<AdminLogin />} />
                <Route exact path="/adminhome" element={<AdminHome />} />
            </Routes>
        </div>
    );
}

export default App;
