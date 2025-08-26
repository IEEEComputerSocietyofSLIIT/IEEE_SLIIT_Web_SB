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
import merch from './images/events/merch';
import joyBots2 from './images/events/joybots2.0';

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
  `<b>CellSpell</b>, an upcoming academic initiative by the IEEE EMBS Student Branch Chapter of SLIIT, is designed to take your scientific understanding beyond the classroom. This unique experience features <b>two insightful virtual workshops</b> and <b>two exclusive industrial visits</b>, curated to give you both the <b>theoretical foundation</b> and the <b>real-world exposure</b> needed to thrive in the life sciences field.
   \n ‎
  <b>The CellSpell Sessions:</b>
  <b>Webinar I</b> – Bioinformatics: The Engineer's Toolkit
  <b>Webinar II</b> – Molecular Biology in Motion: Techniques & Real-World Impact \n ‎ \n
  
  Following these engaging webinars, participants will take part in upcoming industrial visits to leading biomedical and molecular biology facilities, offering a rare behind the scenes perspective into industry practices and innovations. \n ‎ \n
  The program is co-chaired by <b>Shalini Kularatne</b> and <b>Mithila Samarawickrama</b>, and operates under the leadership of <b>Executive Committee, IEEE EMBS Student Branch Chapter of SLIIT.</b>

`,
  "speakers": [],
  "agenda": []
}

let merchandise ={
  "id": 16,
  "name": "Get your merchandise",
  "description": "Gear up in style with the Official IEEE SLIIT Merch!",
  "date": "",
  "upcoming":true,
  "time": "",
  "location": "",
  "images": [merch.image1],
  "banner":[merch.image1],
  "linkStatus": false,
  "noreg":true,
  "googleFormLink": "",
  "organizer": "IEEE Student Branch Chapter of SLIIT",
  "type":"Virtual",
  "capacity": "",
  "comingsoon":false,
  "stayUpdatedLink":"https://forms.gle/HnnB4aS1TNB9pnhcA",
  "stayupdatedtext":"Pre Order Now",
  "tags": [],
  "fullDescription": 
  `<b>🎉 Gear up in style with the Official IEEE SLIIT Merch! </b>\n
  Upgrade your style with the Official IEEE SLIIT Merch! Our all-new exclusive polo T-shirts are crafted from premium Dark Ash Crocodile (PK 220) fabric, offering unmatched comfort, durability, and a sleek, modern look.
  \n
   Perfect for both casual and semi-formal occasions, these polos let you represent IEEE SLIIT in style.\n
🛒 ᴘʀᴇ-ᴏʀᴅᴇʀ ɴᴏᴡ ғᴏʀ ᴊᴜsᴛ ʀs. 2000\n
ɪᴇᴇᴇ ᴍᴇᴍʙᴇʀs ɢᴇᴛ ɪᴛ ғᴏʀ ʀs. 1750 \n
📦 ʟɪᴍɪᴛᴇᴅ sᴛᴏᴄᴋs ᴀᴠᴀɪʟᴀʙʟᴇ!\n


Stocks are limited, so grab yours before they run out and make a statement wherever you go!
`,
  "speakers": [],
  "agenda": []
}

let joybots2={
  "id": 17,
  "name": "JOYBOTS 2.0",
  "description": "Joybots 2.0, the second edition of our very own online magazine by the IEEE Robotics and Automation Society of SLIIT.",
  "date": "",
  "upcoming":true,
  "time": "",
  "location": "",
  "images": [joyBots2.image1],
  "banner":[joyBots2.image1],
  "linkStatus": false,
  "noreg":true,
  "googleFormLink": "",
  "organizer": "IEEE Robotics and Automation Society Chapter, SLIIT",
  "type":"Virtual",
  "capacity": "",
  "comingsoon":false,
  "stayUpdatedLink":"https://tinyurl.com/mr2ek62z",
  "stayupdatedtext":"Read Now",
  "tags": [],
  "fullDescription": 
  `<b>The wait is finally over!</b>\n
Joybots 2.0, the second edition of our very own online magazine by the IEEE Robotics and Automation Society of SLIIT.
\n
  Bringing you a collection of exciting student projects, insightful industry-related content, highlights from our events, and a sneak peek into our future projects.\n
And here’s something for you too — if you’ve got a project or idea you’d love to showcase, we’d be happy to feature it in our upcoming issues!\n
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
        <Route path="/events/merchandise" element={<News selectedevent={merchandise} />} />
        <Route path="/events/joybots2" element={<News selectedevent={joybots2} />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
