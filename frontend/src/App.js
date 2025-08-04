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
  let  embedx={
  "id": 14,
  "name": "EMBED X - Robotics Workshop",
  "description": "EMBED X - Robotics Workshop : A Hands-On Robotics Workshop by IEEE RAS, SLIIT",
  "date": "",
  "upcoming":true,
  "time": "8:30 AM onwards",
  "location": "Engineering Auditorium 2 (EA2)",
  "images": [],
  "linkStatus": true,
  "stayUpdatedLink":"https://linktr.ee/ieee_ras_sliit",
  "googleFormLink": "https://docs.google.com/forms/d/e/1FAIpQLSf6VhqjZZMPLTitmftkXt-hgukgloEcV1r0tK_SRyr9HWcwQQ/viewform",
  "organizer": "IEEE Robotics and Automation Society Chapter of SLIIT",
  "organizerWebsite":"https://ras.ieeesliit.com",
  "capacity": "100 only",
  "type":"Physical",
  "tags": ['Robotics'],
  "fullDescription": `
    EMBED X is a practical robotics workshop designed to introduce students to the fundamentals of embedded systems and robotics, with a special focus on microcontroller programming using the ESP32.
    \n ‎ \n
    In this session, participants will gain hands on experience working with the ESP32 development board, guided by expert instructors from our Knowledge & Hardware Partner - Gavesha Labs. Students will learn to control the ESP32 using MicroPython, with interactive tasks can be completed through their own mobile devices.
    \n‎\n
    🔧 What’s Inside:
      \n
      \t 🟢 Introduction to embedded systems and robotics\n
      \t 🟢 Programming ESP32 with MicroPython\n
      \t 🟢 Real-time hands-on activities\n
      \t 🟢 Expert guidance from Gavesha Labs instructors\n
      \n‎\n
      This event is co-chaired by Senethmi Wickramanayake and Sanjeevsaran Jeyanthan, and is supervised under the leadership of RAS Chapter Chairperson Pasan Ranjuka.
      \n
      
Whether you're a beginner or looking to sharpen your embedded systems skills, EMBED X is the perfect platform to dive into real-world robotics with practical exposure.      
    `,
  "speakers": [],
  "agenda": []
}
  return (
    <Router>
      
      <Navbar home = "/" aboutus = "/about" communityDetails = "/committee" events = "/" contactUs = "/contact-us" gallery = "/" login = "/" news="/events" upcomingEvents="/" pastEvents="/"  />
      
      <Routes>
        <Route path="/" element={<HomeNew />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path='/join' element={<Join />} />
        <Route path='/about' element={<AboutNew />} />
        <Route path="/committee" element={<SBCommittee />} />
        <Route path="/events" element={<News />} />
        <Route path="/events/embedx" element={<News selectedevent={embedx} />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
