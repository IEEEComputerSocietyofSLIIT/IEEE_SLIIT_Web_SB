import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import heroimg from "./images/event-cover.jpg";

import iaspire1 from "../../images/events/iaspire/IASpire-1.jpg"
import iaspire2 from "../../images/events/iaspire/IASpire-2.jpg"

import intern24Images from "../../images/events/intern24"



import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin, Users, ArrowLeft } from "lucide-react";

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
    capacity: 50,
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
    capacity: 100,
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
        <div className="flex items-center text-blue-600">
          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm font-medium">{new Date(event.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center text-blue-600">
          <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm font-medium">{event.time}</span>
        </div>
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
          src={event.images[0]}
          alt={event.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-4">{event.name}</h1>
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
              {event.tags.map((tag, index) => (
                <span key={index} className="bg-blue-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-4">{event.name}</h1>
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
            {event.tags.map((tag, index) => (
              <span key={index} className="bg-blue-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
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
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Event Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {event.images.slice(1).map((image, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden">
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
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">About This Event</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{event.fullDescription}</p>
          </div>
          {event.speakers.legth > 0 &&
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Speakers</h2>
            <ul className="space-y-2">
              {event.speakers.map((speaker, index) => (
                <li key={index} className="text-gray-700 text-sm sm:text-base">• {speaker}</li>
              ))}
            </ul>
          </div> }

          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Agenda</h2>
            <div className="space-y-2 sm:space-y-3">
              {event.agenda.map((item, index) => (
                <div key={index} className="bg-gray-50 p-2 sm:p-3 rounded-lg">
                  <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 order-1 lg:order-2">
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg lg:sticky lg:top-4">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Event Details</h3>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Date</p>
                  <p className="text-gray-600 text-xs sm:text-sm">{new Date(event.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Time</p>
                  <p className="text-gray-600 text-xs sm:text-sm">{event.time}</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Location</p>
                  <p className="text-gray-600 text-xs sm:text-sm">{event.location}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Capacity</p>
                  <p className="text-gray-600 text-xs sm:text-sm">{event.capacity} participants</p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-sm sm:text-base">Organizer</p>
                <p className="text-gray-600 text-xs sm:text-sm">{event.organizer}</p>
              </div>
            </div>

            {/* Register Button */}
            {new Date(event.date) > new Date() && (
              <div className="mt-4 sm:mt-6">
                <button
                  className={`w-full py-2 px-4 sm:py-3 sm:px-6 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                    event.linkStatus
                      ? "bg-gradient-to-r from-green-400 to-blue-500 text-white hover:shadow-lg hover:from-green-500 hover:to-blue-600"
                      : "bg-gray-400 text-gray-700 cursor-not-allowed"
                  }`}
                  onClick={() => {
                    if (event.linkStatus && event.googleFormLink) {
                      window.open(event.googleFormLink, '_blank');
                    }
                  }}
                >
                  {event.linkStatus ? "Register Now" : "Registration Closed"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const News = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const currentDate = new Date().toISOString();
  const upcomingRef = useRef(null);
  const pastRef = useRef(null);

  const upcomingEvents = eventsData.filter(
    (event) => new Date(event.date) > new Date(currentDate)
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
                {pastEvents.map((event) => (
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