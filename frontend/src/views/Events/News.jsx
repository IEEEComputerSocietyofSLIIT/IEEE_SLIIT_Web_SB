import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import heroimg from "./images/event-cover.jpg";

import iaspire1 from "../../images/events/iaspire/IASpire-1.jpg"
import iaspire2 from "../../images/events/iaspire/IASpire-2.jpg"
import placeholder from "../../images/events/placeholder.png"

import intern24Images from "../../images/events/intern24"
import perpetual4Images from "../../images/events/perpetual4"
import aureas24Images from "../../images/events/aureas24"
import sliitxtremeImages from "../../images/events/sliitxtreme"
import webwrap1Images from "../../images/events/webwrap1"
import pixel1Images from "../../images/events/pixel1"
import ieeeday24Images from "../../images/events/ieeeday24"
import intellect1Images from "../../images/events/intellect1"
import launchpad24Images from "../../images/events/launchpad24"
import ieeesynergy25Images from "../../images/events/ieeesynergy25"
import venturify24Images from "../../images/events/venturify24"
import merch from "../../images/events/merch"




import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin, Users, ArrowLeft } from "lucide-react";
import embedxImages from "../../images/events/embedx25";
import cellspell from "../../images/events/cellspell";

// Hardcoded event data
const eventsData = [
  {
    id: 1,
    name: "IASpire",
    description: "IASpire is a strategic initiative aimed at bridging the gap between academic knowledge and industry requirements.",
    date: "2025-07-15",
    time: "10:00 AM",
    location: "Main Auditorium, Building A",
    images: [iaspire1,iaspire2],
    linkStatus: false,
    googleFormLink: "",
    organizer: "IEEE Student Branch of SLIIT",
    capacity:" ",
    tags: [],
    fullDescription: `IASpire is a strategic initiative aimed at bridging the gap between academic knowledge and industry requirements. Through a structured approach, the program unfolded across two phases, each serving a specific purpose in enhancing participants' understanding in areas such as Industry 4.0, automation, and PLC technologies. 
The sessions shed light on what undergraduates study in a university setting and also emphasized the practical skills essential for applying theoretical knowledge. It bridged the gap between academic learning and the hands-on skills required in the industry. 
The event was held in 2 phases: A webinar session and a physical workshop. IASpire’s initial stage of execution was an online webinar focusing on the challenges and opportunities of smart technology for sustainable automation. In the physical workshop held on the 20th of April 2024, undergraduates got the opportunity to explore how Programmable Logic Controllers(PLC) work. A hands-on experience on using the software Siemens for PLC and using the PLC boards was an experience the undergraduates gained during the session.`,
    speakers: [],
    agenda: [
      "10:00 AM - Registration and Welcome",
      "10:30 AM - Introduction to React",
      "12:00 PM - Lunch Break",
      "1:00 PM - Node.js Backend Development",
      "3:00 PM - MongoDB Integration",
      "4:30 PM - Project Presentation"
    ]
  },
  {
    id: 2,
    name: "Path to Internship ‘24",
    description: "The event was organized to raise awareness among undergraduates on the value of hands-on experience through internship opportunities.",
    date: "2024-08-20",
    time: "2:00 PM",
    location: "Conference Hall, Building B",
    images: [intern24Images.intern24_1,intern24Images.intern24_1,intern24Images.intern24_3,intern24Images.intern24_4,intern24Images.intern24_5],
    linkStatus: true,
    googleFormLink: "https://forms.google.com/sample2",
    organizer: "IEEE Student Branch of SLIIT",
    capacity: "",
    tags: ["Seminar", "AI", "Machine Learning"],
    fullDescription: `Path to Internship ‘24 was organized as a collaborative effort between the IAS Chapter of SLIIT 
    and the IEEE Student Branch of SLIIT. The event was organized to raise awareness among undergraduates on the value of hands-on
    experience through internship opportunities. The program encouraged networking with industry professionals, connecting with mentors, and developing practical skills through workshops. It also assisted students in creating effective resumes (Curriculum Vitaes), offered interview tips, and promoted self-reflection for better internship-seeking strategies.
Undergraduates often face challenges in securing internships due to a lack of awareness about the importance of hands-on experience, insufficient networking opportunities with industry professionals, and limited guidance on creating effective resumes and preparing for interviews.`,
    speakers: ["", ""],
    agenda: [
      "2:00 PM - Welcome and Introduction",
      "2:30 PM - Current State of AI",
      "3:30 PM - Machine Learning Applications",
      "4:30 PM - Future of AI",
      "5:00 PM - Q&A Session"
    ]
  },
  {
  "id": 3,
  "name": "Perpetual 4.0",
  "description": "A charity-based program aimed at addressing educational needs and celebrating cultural heritage in a rural school, reflecting IEEE's values of diversity and social responsibility.",
  "date": "2024-04-28",
  "time": "",
  "location": "CP/MA/Dodamdeniya Viduhala, Matale Division",
  "images": [perpetual4Images.image1,perpetual4Images.image2,perpetual4Images.image3],
  "linkStatus": false,
  "googleFormLink": "",
  "organizer": "IEEE Student Branch of SLIIT",
  "capacity": "",
  "tags": ["Charity", "Community", "Education", "Cultural"],
  "fullDescription": "Perpetual 4.0 is a charity-based program that exemplifies the alignment of IEEE's values with the goals of diversity, empowering individuals through technology, addressing societal challenges, and promoting a sense of community responsibility. Held at CP/MA/Dodamdeniya Viduhala, a rural school in the Matale Division, the event was designed to address the educational needs of underprivileged students by providing essential stationery and celebrating cultural heritage through a special \"Awurudu Festival.\" The event was branded as \"අත්වැල,\" reflecting its focus on charity and humanitarian activities. On April 28, 2024, Perpetual 4.0 was executed with a focus on delivering a meaningful and joyful experience for the students.",
  "speakers": ["", ""],
  "agenda": []
},
{
  "id": 4,
  "name": "Aureus ‘24",
  "description": "A hands-on electronic design workshop aimed at first and second-year undergraduates, organized by the IEEE PES Chapter of SLIIT.",
  "date": "2024-05-04",
  "time": "",
  "location": "",
  "images": [aureas24Images.image1],
  "linkStatus": false,
  "googleFormLink": "",
  "organizer": "IEEE Power and Energy Society Chapter, SLIIT",
  "capacity": 100,
  "tags": ["Workshop", "Electronics", "Engineering"],
  "fullDescription": "Aureus ‘24, organized by the Power and Energy Society Chapter of the IEEE Student Branch of SLIIT, was held on the 4th of May 2024, with over 100 participants. The event focused on providing hands-on experience and practical expertise in electronic design for undergraduate students. It especially targeted tech enthusiasts in their early academic years and included workshops and interactive sessions covering tools, resources, and career paths related to electronic design.",
  "speakers": ["", ""],
  "agenda": []
},
{
  "id": 5,
  "name": "INIZIO",
  "description": "A technical webinar focused on IoT and smart device connectivity, organized by the IEEE RAS Chapter of SLIIT.",
  "date": "2024-05-12",
  "time": "",
  "location": "",
  "images": [placeholder],
  "linkStatus": false,
  "googleFormLink": "",
  "organizer": "IEEE Robotics and Automation Society Chapter, SLIIT",
  "capacity": "",
  "tags": ["Webinar", "IoT", "Technology"],
  "fullDescription": "INIZIO, a technical webinar organized by the Robotics and Automation Society Chapter of the IEEE Student Branch at SLIIT, was held on 12th May 2024. Featuring Mr. Anjana Vishvanath as the guest speaker, the session explored advancements in the Internet of Things (IoT) and smart device connectivity, highlighting their transformative impact on technology and daily life.",
  "speakers": ["Mr. Anjana Vishvanath"],
  "agenda": []
},
{
  "id": 6,
  "name": "WebWrap 1.0",
  "description": "A multi-session event focused on frontend and backend web development, GitHub, and web monetization.",
  "date": "2024-06-26",
  "time": "",
  "location": "",
  "images": [webwrap1Images.image1,webwrap1Images.image2],
  "linkStatus": false,
  "googleFormLink": "",
  "organizer": "IEEE Computer Society Chapter, SLIIT & CSNE Student Community",
  "capacity": "",
  "tags": ["Web Development", "Workshop", "GitHub", "Entrepreneurship"],
  "fullDescription": "WebWrap 1.0, organized by the Computer Society Chapter of the IEEE Student Branch of SLIIT and CSNE Student Community 2024/25, took place from 26th June to 6th July 2024. The event offered sessions on frontend and backend development, GitHub usage, and monetizing websites. Sessions featured notable speakers including Mr. Pasindu Dinal, Mr. Ranula Gihara, Mr. Ashen Wijesinghe, and others. The final session included networking, IEEE benefits, and career guidance.",
  "speakers": ["Mr. Pasindu Dinal", "Mr. Ranula Gihara", "Mr. Ashen Wijesinghe", "Mr. Pawan Senpura", "Mr. Jathurshan Manistar", "Prof. Anuradha Jayakody", "Ms. Shashika Lokuliyana", "Ms. Pipuni Wijesiri", "Ms. Thamali Munasinghe"],
  "agenda": []
},
{
  "id": 7,
  "name": "Pixel+ 1.0",
  "description": "A UI/UX design workshop featuring sessions for beginners and advanced learners, organized by IEEE CS Chapter of SLIIT.",
  "date": "2024-08-26",
  "time": "",
  "location": "",
  "images": [pixel1Images.image1],
  "linkStatus": false,
  "googleFormLink": "",
  "organizer": "IEEE Computer Society Chapter, SLIIT",
  "capacity": "",
  "tags": ["UI/UX", "Design", "Workshop"],
  "fullDescription": "Pixel+ 1.0, organized by the IEEE CS Chapter of SLIIT, was aimed at training participants in user-centered design. Two sessions were conducted: one on 26th August 2024 titled 'UI/UX Essentials for Beginners' by Ms. Supun Shashini, and another on 29th August 2024 titled 'Turning Design Concepts into Functional Realities' by Mr. Eishan Weerasinghe. The event helped students grasp essential design principles and apply them practically.",
  "speakers": ["Ms. Supun Shashini", "Mr. Eishan Weerasinghe"],
  "agenda": []
},
{
  "id": 8,
  "name": "SLIITXtreme 3.0",
  "description": "A hackathon to prepare students for the IEEEXtreme 18.0 competition, with technical sessions and an award ceremony.",
  "date": "2024-09-28",
  "time": "",
  "location": "",
  "images": [sliitxtremeImages.image1,sliitxtremeImages.image2,sliitxtremeImages.image3,sliitxtremeImages.image4,sliitxtremeImages.image5,sliitxtremeImages.image6],
  "linkStatus": false,
  "googleFormLink": "",
  "organizer": "IEEE CS Chapter & SESC, SLIIT",
  "capacity": "",
  "tags": ["Hackathon", "Coding", "Competitive Programming"],
  "fullDescription": "SLIITXtreme 3.0 was a nine-hour hackathon organized by the IEEE CS Chapter and Software Engineering Student Community of SLIIT. Held across multiple dates in September and October 2024, it featured sessions from IEEE leaders and competitive programming experts. The event ended with an award ceremony sponsored by Unilever, offering certificates, cash prizes, and free IEEE memberships.",
  "speakers": ["Mr. Eranga Kodithuwakku", "Mr. Heshan Kodithuwakku", "Mr. Vishan Jayasinghearachchi", "Mr. Apiram Rajamohan"],
  "agenda": []
},
{
  "id": 9,
  "name": "IEEE Day 2024",
  "description": "A celebration of IEEE’s global legacy featuring chapter showcases, games, and beginner sessions.",
  "date": "2024-10-10",
  "time": "",
  "location": "",
  "images": [ieeeday24Images.image1,ieeeday24Images.image2,ieeeday24Images.image3],
  "linkStatus": false,
  "googleFormLink": "",
  "organizer": "IEEE Student Branch of SLIIT",
  "capacity": "",
  "tags": ["Community", "Celebration", "Non-Technical"],
  "fullDescription": "IEEE Day 2024 was a non-technical event organized by the IEEE Student Branch of SLIIT to celebrate the global legacy of IEEE. The event showcased the work of various chapters including WIE, CS, PES, RAS, and IAS. It featured games, quizzes, and a session titled 'IEEE for Dummies' by Mr. Sachintha Wickramasinghe. A session by Mr. Heshan Kodithuwakku raised awareness about IEEEXtreme, making the event fun, informative, and impactful.",
  "speakers": ["Mr. Sachintha Wickramasinghe", "Mr. Heshan Kodithuwakku"],
  "agenda": []
},
{
  "id": 10,
  "name": "Intellect 1.0",
  "description": "A platform for innovative solutions in the power and energy sector aimed at improving system reliability and addressing infrastructure challenges.",
  "date": "2024-08-26",
  "time": "",
  "location": "",
  "images": [intellect1Images.image1,intellect1Images.image2],
  "linkStatus": false,
  "googleFormLink": "",
  "organizer": "IEEE Student Branch of SLIIT",
  "capacity": "",
  "tags": ["Energy", "Innovation", "Power Systems"],
  "fullDescription": "The power and energy sectors face significant challenges that demand immediate and innovative solutions. Intellect 1.0 was launched as a response to these pressing challenges, with a mission to inspire innovative thinking and bring forth practical solutions. The event serves as a platform for students, researchers, and young professionals to engage in critical discussions, explore new ideas, and propose implementable strategies to improve power system reliability, reduce inefficiencies, and enhance the resilience of power networks.",
  "speakers": ["", ""],
  "agenda": []
},
{
  "id": 11,
  "name": "Launchpad ‘24",
  "description": "A webinar series focused on content creation, featuring two leading Sri Lankan YouTubers to inspire digital storytelling.",
  "date": "2024-12-20",
  "time": "",
  "location": "",
  "images": [launchpad24Images.image1],
  "linkStatus": false,
  "googleFormLink": "",
  "organizer": "IEEE WIE Affinity Group, SLIIT",
  "capacity": "",
  "tags": ["Webinar", "Content Creation", "Digital Media"],
  "fullDescription": "Launchpad ‘24, organized by the WIE Affinity Group of SLIIT, was a non-technical webinar series aimed at aspiring digital creators. The first session on 20th December 2024 was conducted by Mr. Malinda Alahakoon (TechTrack), who spoke on developing a creative voice. The second session on 21st December 2024 featured Mr. Pasindu Jayasinghe (SL Geek), who guided attendees on monetization and branding. The event successfully motivated students to explore careers in digital media.",
  "speakers": ["Mr. Malinda Alahakoon", "Mr. Pasindu Jayasinghe"],
  "agenda": []
},
{
  "id": 12,
  "name": "Venturify 2024",
  "description": "An entrepreneurship series focused on startup development, funding, and innovation, ending with a physical workshop.",
  "date": "2024-12-22",
  "time": "7:00 PM",
  "location": "Curtin University Colombo",
  "images": [venturify24Images.image1,venturify24Images.image2,venturify24Images.image3],
  "linkStatus": false,
  "googleFormLink": "",
  "organizer": "IEEE Student Branch of SLIIT",
  "capacity": "",
  "tags": ["Entrepreneurship", "Startups", "Innovation"],
  "fullDescription": "Venturify 2024 was a multi-phase entrepreneurship event with two online workshops and a final physical session on February 2nd. The first session focused on developing business ideas and was held on 22nd December 2024. The second addressed startup foundations like funding and customer acquisition. The final in-person event at Curtin University Colombo featured a keynote by Peter D’Almeida, interactive workshops, and awards for innovative startup strategies.",
  "speakers": ["Peter D’Almeida"],
  "agenda": []
},
{
  "id": 13,
  "name": "Synergy Springs 2025",
  "description": "A full-day leadership and soft skills training program organized for IEEE members to build communication, collaboration, and public speaking abilities.",
  "date": "2025-03-02",
  "time": "",
  "location": "",
  "images": [ieeesynergy25Images.image1],
  "linkStatus": false,
  "googleFormLink": "",
  "organizer": "IEEE IAS Chapter, SLIIT",
  "capacity": "",
  "tags": ["Leadership", "Soft Skills", "Teamwork"],
  "fullDescription": "Synergy Springs 2025, organized by the IEEE IAS Chapter of SLIIT, was held on March 2nd, 2025. The event featured seminars, games, workshops, and interactive activities focused on leadership, teamwork, and communication. Highlights included an IEEE session by Mr. Yohan Joseph, a balloon tower challenge, Pictionary, a tunnel relay game, and the 'Secret Train.' A public speaking and debate session by Mr. Ranuka Perera helped boost communication skills. The day ended with an Iftar ceremony, celebrating unity and collaboration.",
  "speakers": ["Mr. Yohan Joseph", "Mr. Ranuka Perera", "Chathumina Kalatuwage"],
  "agenda": []
},
{
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
  "organizer": "IEEE RAS Chapter, SLIIT",
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
},
{
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
},
{
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
},
];
const scrollToTopWithFallback = () => {
  if ('scrollBehavior' in document.documentElement.style) {
    // Modern browsers
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  } else {
    // Fallback for older browsers
    window.scrollTo(0, 0);
  }
};

const EventCard = ({ event, onClick }) => (
  <div 
    className="bg-white shadow-lg rounded-lg overflow-hidden group flex-shrink-0 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-64 sm:w-72 md:w-80 lg:w-72 xl:w-80"
    onClick={() => onClick(event)}
  >
    <div className="relative h-48 sm:h-52 md:h-56 lg:h-48 xl:h-52 w-full overflow-hidden">
      <img
        src={event.images[0]}
        alt={event.name}
        className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="p-4 sm:p-5 lg:p-4 xl:p-5">
      <h3 className="text-lg sm:text-xl md:text-xl lg:text-lg xl:text-xl text-center font-bold text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
        {event.name}
      </h3>
      <p className="text-gray-600 mt-2 text-sm sm:text-base lg:text-sm xl:text-base line-clamp-3 min-h-[4.5rem]">
        {event.description}
      </p>
      <div className="mt-4 space-y-2">
        {event.date &&

          <div className="flex items-center text-blue-600">
          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm font-medium">{new Date(event.date).toLocaleDateString()}</span>
        </div>
        }
      {event.time &&
        <div className="flex items-center text-blue-600">
          <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm font-medium">{event.time}</span>
        </div>
      }
      </div>
      

      {/* Apply Now Button - only for upcoming events */}
      {new Date(event.date) > new Date() && (
        <div className="mt-6 flex justify-center">
          <button
            className={`w-full py-3 px-4 rounded-full font-semibold shadow-md transition-all duration-300 text-sm ${
              event.linkStatus
                ? "bg-gradient-to-r from-green-400 to-blue-500 text-white hover:shadow-lg hover:from-green-500 hover:to-blue-600 transform hover:-translate-y-0.5"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              if (event.linkStatus && event.googleFormLink) {
                window.open(event.googleFormLink, '_blank');
              }
            }}
          >
            {event.linkStatus ? "Apply Now" : "Applications Closed"}
          </button>
        </div>
      )}
    </div>
  </div>
);
const parseFormattedText = (text) => {
  // Regular expression to match <b>, <i>, <u>, <strong>, <em> tags
  const tagRegex = /(<\/?(?:b|i|u|strong|em)>)/g;
  const parts = text.split(tagRegex);
  
  const result = [];
  let currentTags = [];
  
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    
    if (part.match(/^<(b|strong)>$/)) {
      currentTags.push('bold');
    } else if (part.match(/^<\/(b|strong)>$/)) {
      currentTags = currentTags.filter(tag => tag !== 'bold');
    } else if (part.match(/^<(i|em)>$/)) {
      currentTags.push('italic');
    } else if (part.match(/^<\/(i|em)>$/)) {
      currentTags = currentTags.filter(tag => tag !== 'italic');
    } else if (part.match(/^<u>$/)) {
      currentTags.push('underline');
    } else if (part.match(/^<\/u>$/)) {
      currentTags = currentTags.filter(tag => tag !== 'underline');
    } else if (part && !part.match(/^<\/?/)) {
      // This is actual text content
      let element = part;
      
      if (currentTags.includes('bold')) {
        element = <strong key={`${i}-bold`}>{element}</strong>;
      }
      if (currentTags.includes('italic')) {
        element = <em key={`${i}-italic`}>{element}</em>;
      }
      if (currentTags.includes('underline')) {
        element = <u key={`${i}-underline`}>{element}</u>;
      }
      
      result.push(element);
    }
  }
  
  return result;
};


const EventDetailPage = ({ event, onBack }) => (
  <div className="bg-white min-h-screen">
    {/* Back Button */}
    <div className="bg-gray-50 p-3 sm:p-4">
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
        <span className="text-sm sm:text-base">Back to Events</span>
      </button>
    </div>

    {/* Hero Section */}
    {event.images && event.images.length > 0 ? (
      <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
        <img
          src={event.banner ? event.banner : event.images[0]}
          alt={event.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-4">
              {event.name}
            </h1>
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
              {event.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-12 sm:py-16 md:py-20">
        <div className="text-center text-white p-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-4">
            {event.name}
          </h1>
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
            {event.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    )}

    {/* Event Details */}
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 order-2 lg:order-1">
          {/* Event Images Gallery - Only show if there are multiple images */}
          {event.images && event.images.length > 1 && (
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Event Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {event.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`${event.name} - Image ${index + 2}`}
                      className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              About This Event
            </h2>
            {event.fullDescription.split("\n").map((paragraph, index) => (
              <p key={index} className={index > 0 ? "mt-2" : ""}>
                {parseFormattedText(paragraph)}
              </p>
            ))}
          </div>
          {event.speakers.legth > 0 && (
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Speakers
              </h2>
              <ul className="space-y-2">
                {event.speakers.map((speaker, index) => (
                  <li
                    key={index}
                    className="text-gray-700 text-sm sm:text-base"
                  >
                    • {speaker}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {event.agenda.legth > 0 && (
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Agenda
              </h2>
              <div className="space-y-2 sm:space-y-3">
                {event.agenda.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-2 sm:p-3 rounded-lg">
                    <span className="text-gray-700 text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 order-1 lg:order-2">
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg lg:sticky lg:top-4">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Event Details
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {event.date && (
                <div className="flex items-start">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Date</p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              )}
              {event.time && (
                <div className="flex items-start">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Time</p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {event.time}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Location</p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {event.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">
                    Event Type
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {event.type || "N/A"}
                  </p>
                </div>
              </div>
              {event.capacity && (
                <div className="flex items-start">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      Capacity
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {event.capacity || "N/A"}
                    </p>
                  </div>
                </div>
              )}

              <div>
                <p className="font-semibold text-sm sm:text-base">Organizer</p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {event.organizer}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            {true && (
              <div className="mt-4 sm:mt-6 space-y-3">
                {
                  !event.noreg &&
               
                <button
                  className={`w-full py-2 px-4 sm:py-3 sm:px-6 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                    event.linkStatus
                      ? "bg-[#00629b] text-white hover:shadow-lg hover:from-green-500 hover:to-blue-600"
                      : "bg-gray-400 text-gray-700 cursor-not-allowed"
                  }`}
                  onClick={() => {
                    if (event.linkStatus && event.googleFormLink) {
                      window.open(event.googleFormLink, "_blank");
                    }
                  }}
                >
                  {event.linkStatus
                    ? "Register Now"
                    : event.comingsoon
                    ? "Coming soon"
                    : "Registration Closed"}
                </button>
 }
                <button
                  className={`w-full py-2 px-4 sm:py-3 sm:px-6 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                    event.stayUpdatedLink
                      ? "bg-[#00629b] text-white hover:shadow-lg hover:from-purple-500 hover:to-pink-600"
                      : "bg-gray-400 text-gray-700 cursor-not-allowed"
                  }`}
                  onClick={() => {
                    if (event.stayUpdatedLink) {
                      window.open(event.stayUpdatedLink, "_blank");
                    }
                  }}
                >
                  {event.stayUpdatedLink
                    ? event.stayupdatedtext
                      ? event.stayupdatedtext
                      : "Stay Updated"
                    : "Updates Unavailable"}
                </button>

                {/* Organizer Website Button */}
                {event.organizerWebsite && (
                  <button
                    className="w-full py-2 px-4 sm:py-3 sm:px-6 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base bg-[#00629b] text-white hover:shadow-lg hover:bg-blue-700"
                    onClick={() =>
                      window.open(event.organizerWebsite, "_blank")
                    }
                  >
                    Visit Organizer Website
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const News = ({selectedevent = null}) => {
  const [selectedEvent, setSelectedEvent] = useState(selectedevent);
  const currentDate = new Date().toISOString();
  const upcomingRef = useRef(null);
  const pastRef = useRef(null);

  const upcomingEvents = eventsData.filter((event) => {
    if(new Date(event.date) > new Date(currentDate) || event.upcoming){
      return event
    }
  }
  );
  const pastEvents = eventsData.filter(
    (event) => new Date(event.date) <= new Date(currentDate)
  );

  const scrollLeft = (ref) => {
    ref.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleEventClick = (event) => {
    scrollToTopWithFallback();
    setSelectedEvent(event);
  };

  const handleBackClick = () => {
    setSelectedEvent(null);
  };

  // If an event is selected, show the detail page
  if (selectedEvent) {
    return <EventDetailPage event={selectedEvent} onBack={handleBackClick} />;
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="flex h-screen w-full bg-cover bg-center justify-center items-center relative"
        style={{ 
          backgroundImage: `url(${heroimg})`,
        }}
      >
         <div className="text-center text-white p-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Events</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Discover amazing events, workshops, and conferences that will inspire and educate you
          </p>
          <button
            className="bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-700 transition transform hover:scale-105"
            onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
          >
            Explore Events
          </button>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <section className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't miss out on these exciting upcoming events and opportunities
          </p>
        </div>

        {upcomingEvents.length > 0 ? (
          <div className="relative">
            {/* Left Arrow */}
            <button
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 hidden lg:flex items-center justify-center hover:bg-gray-50 transition"
              onClick={() => scrollLeft(upcomingRef)}
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>

            {/* Slider Container */}
            <div className="overflow-hidden">
              <div 
                className="flex space-x-6 pb-4 overflow-x-auto scrollbar-hide px-4 sm:px-0" 
                ref={upcomingRef}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {upcomingEvents.map((event) => (
                  <EventCard 
                    key={event.id} 
                    event={event} 
                    onClick={handleEventClick}
                  />
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 hidden lg:flex items-center justify-center hover:bg-gray-50 transition"
              onClick={() => scrollRight(upcomingRef)}
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No upcoming events at the moment.</p>
            <p className="text-gray-400 text-sm mt-2">Check back soon for new events!</p>
          </div>
        )}
      </section>

      {/* Past Events Section */}
      <section className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Past Events</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Take a look at our successful past events and what we've accomplished together
          </p>
        </div>

        {pastEvents.length > 0 ? (
          <div className="relative">
            {/* Left Arrow */}
            <button
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 hidden lg:flex items-center justify-center hover:bg-gray-50 transition"
              onClick={() => scrollLeft(pastRef)}
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>

            {/* Slider Container */}
            <div className="overflow-hidden">
              <div 
                className="flex space-x-6 pb-4 overflow-x-auto scrollbar-hide px-4 sm:px-0" 
                ref={pastRef}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {pastEvents.slice().reverse().map((event) => (
                  <EventCard 
                    key={event.id} 
                    event={event} 
                    onClick={handleEventClick}
                  />
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 hidden lg:flex items-center justify-center hover:bg-gray-50 transition"
              onClick={() => scrollRight(pastRef)}
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No past events to display.</p>
          </div>
        )}
      </section>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};