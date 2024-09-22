import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SBCommittee from './views/committee/SBCommittee';
import Navbar from './views/navbar/navbar';
import Contactus from './views/contactus/contactus';
import { About } from './views/Aboutus/About';
import { AboutNew } from './views/Aboutus/AboutNew';
import { Eventform } from './views/Events/Eventform';
import { News } from './views/Events/News';
import { Join } from './views/Joinus/Join';
import Home from './views/home/home'
import HomeNew from './views/home/homeNew';
import Footer from './views/Footer/Footer'

function App() {
  return (
    <Router>
      
      <Navbar home = "/" aboutus = "/about" communityDetails = "/committee" events = "/" contactUs = "/contact-us" gallery = "/" login = "/" news="/news" upcomingEvents="/" pastEvents="/"  />
      
      <Routes>
        <Route path="/" element={<HomeNew />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path='/join' element={<Join />} />
        <Route path='/about' element={<AboutNew />} />
        <Route path="/committee" element={<SBCommittee />} />
        <Route path="/news" element={<News />} />
      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
