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
import embedxImages from './images/events/embedx25'
import cellspell from './images/events/cellspell';

function App() {
  let  embedx={
  "id": 14,
  "name": "EMBED X - Robotics Workshop",
  "description": "EMBED X - Robotics Workshop : A Hands-On Robotics Workshop by IEEE RAS, SLIIT",
  "date": "",
  "upcoming":true,
  "time": "8:30 AM onwards",
  "location": "Engineering Auditorium 2 (EA2)",
  "images": [embedxImages.image1],
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
let Cellspell ={
  "id": 15,
  "name": "CellSpell",
  "description": "CellSpell, an upcoming academic initiative by the IEEE EMBS Student Branch Chapter of SLIIT,is designed to take your scientific understanding beyond the classroom",
  "date": "",
  "upcoming":true,
  "time": "",
  "location": "",
  "images": [cellspell.image1,],
  "banner":[cellspell.image2],
  "linkStatus": true,
  "googleFormLink": "https://forms.gle/QgFQQTSUxb6t3CoG6",
  "organizer": "IEEE EMBS Student Branch Chapter of SLIIT",
   "type":"Virtual",
  "capacity": "100+",
  "comingsoon":false,
  "stayUpdatedLink":"https://drive.google.com/file/d/12JTiWMzs_NcGYEWjCP4htINmQp1DTlYG/view?usp=drivesdk",
  "stayupdatedtext":"Get to know about CellSpell",
  "tags": [],
  "fullDescription": 
  ` CellSpell, an upcoming academic initiative by the IEEE EMBS Student Branch Chapter of SLIIT, is designed to take your scientific understanding beyond the classroom.This unique experience features two insightful virtual workshops and two exclusive industrial visits, curated to give you both the theoretical foundation and the real-world exposure needed to thrive in the life sciences field. \n\n
  From genome analysis to hands-on molecular diagnostics, CellSpell will introduce you to the tools, techniques, and applications shaping today’s biomedical innovations. Whether you're passionate about computational biology or eager to explore career paths in biotechnology, this program will guide you through it all.\n\n
  The program is co-chaired by Shalini Kularatne and Mithila Samarawickrama, and operatesunder the leadership of Executive Committee, IEEE EMBS Student Branch Chapter of SLIIT.
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
        <Route path="/events/cellspell" element={<News selectedevent={Cellspell} />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
