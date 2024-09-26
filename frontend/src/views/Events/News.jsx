import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import heroimg from "./images/event-cover.jpg";

export const News = () => {
  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date().toISOString());
  const upcomingRef = useRef(null); // Ref for upcoming events slider
  const pastRef = useRef(null); // Ref for past events slider

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/get/events/IEEESB") // Common endpoint for all events
      .then((response) => {
        setData(response.data); // Events are already sorted by createdAt from the backend
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  const upcomingEvents = data.filter(
    (event) => new Date(event.date) > new Date(currentDate)
  );
  const pastEvents = data.filter(
    (event) => new Date(event.date) <= new Date(currentDate)
  );

  const baseURL = "http://localhost:3000"; // Define your base URL
  const getFullImageUrl = (imagePath) => {
    return `${baseURL}/${imagePath.replace(/^\/+/, "")}`; // Remove leading slashes from the image path
  };

  const scrollLeft = (ref) => {
    ref.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="flex h-screen w-full bg-cover bg-center justify-center items-center"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <div className="text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold">Our Events</h1>
          <button
            className="mt-6 bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-700 transition"
            onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
          >
            Explore
          </button>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <section className="mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative py-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-center">Upcoming Events</h2>

        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-4 rounded-full z-10 hidden md:block" // Positioned outside of the slider
          onClick={() => scrollLeft(upcomingRef)}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-blue-600" />
        </button>

        {/* Slider */}
        <div className="mt-8 overflow-x-auto flex space-x-8" ref={upcomingRef}>
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden group flex-none w-80">
              <div className="relative h-96 w-full overflow-hidden">
                <img
                  src={getFullImageUrl(event.image)} // Construct full image URL
                  alt={event.name}
                  className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl text-center font-bold">{event.name}</h3>
                <p className="text-gray-600 mt-2">{event.description}</p>
                <p className="mt-4 text-blue-600">
                  {new Date(event.date).toLocaleDateString()} 
                </p>

                {/* Apply Now Button */}
                <div className="mt-6 flex justify-center">
                  <a
                    href={event.linkStatus ? event.googleFormLink : "#"}
                    className={`inline-block py-3 px-10 rounded-full font-semibold shadow-md transition-all duration-300 ${
                      event.linkStatus
                        ? "bg-gradient-to-r from-green-400 to-blue-500 text-white hover:shadow-lg hover:from-green-500 hover:to-blue-600"
                        : "bg-gray-400 text-gray-700 cursor-not-allowed"
                    }`}
                    style={{ minWidth: "200px", textAlign: "center" }}
                    onClick={(e) => {
                      if (!event.linkStatus) e.preventDefault(); // Prevent click if linkStatus is false
                    }}
                  >
                    {event.linkStatus ? "Apply Now" : "Applications closed"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-4 rounded-full z-10 hidden md:block" // Positioned outside of the slider
          onClick={() => scrollRight(upcomingRef)}
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-blue-600" />
        </button>
      </section>

      {/* Past Events Section */}
      <section className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 relative py-10 my-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-center">Past Events</h2>

        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-4 rounded-full z-10 hidden md:block" // Positioned outside of the slider
          onClick={() => scrollLeft(pastRef)}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-blue-600" />
        </button>

        {/* Slider */}
        <div className="mt-8 overflow-x-auto flex space-x-8" ref={pastRef}>
          {pastEvents.map((event, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden group flex-none w-80">
              <div className="relative h-96 w-full overflow-hidden">
                <img
                  src={getFullImageUrl(event.image)} // Construct full image URL
                  alt={event.name}
                  className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl text-center font-bold">{event.name}</h3>
                <p className="text-gray-600 mt-2">{event.description}</p>
                <p className="mt-4 text-blue-600">
                  {new Date(event.date).toLocaleDateString()} 
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-4 rounded-full z-10 hidden md:block" // Positioned outside of the slider
          onClick={() => scrollRight(pastRef)}
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-blue-600" />
        </button>
      </section>
    </div>
  );
};

function convertTo12HourFormat(dateTime) {
  const date = new Date(dateTime);
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;
  return `${hours12}:${minutes} ${period}`;
}
