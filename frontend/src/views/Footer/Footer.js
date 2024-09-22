import React from "react";
import "./footer.css"; // Create a CSS file for styling
import IEEE from '../../images/logos/IEEEWhite.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={IEEE} alt="logo"></img>
      </div>
      <br></br>
      <div className="footer-columns">
        <div className="footer-column">
          <h4 className="footer-h4">QUICK LINKS</h4>
          <ul className="footer-ul">
            <li className="footer-li">Past Events</li>
            <li className="footer-li">Community Details</li>
            <li className="footer-li">Gallery</li>
            <li className="footer-li">Home</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-h4">NEWS FEED</h4>
          <ul className="footer-ul">
            <li className="footer-li">Achievements</li>
            <li className="footer-li">Upcoming Events</li>
            <li className="footer-li">Freshers</li>
            <li className="footer-li">Tech Updates</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-h4">COMPUTING RESOURCES</h4>
          <ul className="footer-ul">
            <li className="footer-li">Career Center</li>
            <li className="footer-li">Webinars</li>
            <li className="footer-li">Podcasts</li>
            <li className="footer-li">Courses & Certifications</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-h4">CONTACT US</h4>

          <ul className="footer-ul">
            <li className="footer-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-phone-call"
              >
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>&nbsp;
              012 3 456 789
            </li>
            <li className="footer-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                fill="white"
                height="25"
                viewBox="0 0 30 30"
              >
                <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
              </svg>{" "}
              &nbsp; Whatsapp
            </li>
            <li className="footer-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                fill="white"
                width="25"
                height="25"
                viewBox="0 0 30 30"
              >
                <path d="M 15 3 A 2 2 0 0 0 14.599609 3.0429688 L 14.597656 3.0410156 L 4.6289062 5.0351562 L 4.6269531 5.0371094 A 2 2 0 0 0 3 7 L 3 23 A 2 2 0 0 0 4.6289062 24.964844 L 14.597656 26.958984 A 2 2 0 0 0 15 27 A 2 2 0 0 0 17 25 L 17 5 A 2 2 0 0 0 15 3 z M 19 5 L 19 9.3417969 L 21 10.771484 L 26.9375 6.5292969 C 26.7255 5.6532969 25.942 5 25 5 L 19 5 z M 27 8.9433594 L 21.580078 12.814453 C 21.406078 12.938453 21.204 13 21 13 C 20.796 13 20.593922 12.938453 20.419922 12.814453 L 19 11.800781 L 19 18.34375 C 19.995 16.92875 21.638 16 23.5 16 C 24.83 16 26.049 16.472813 27 17.257812 L 27 8.9433594 z M 9.5820312 10 C 10.601031 10 11.427641 10.452469 12.056641 11.355469 C 12.684641 12.259469 13 13.450688 13 14.929688 C 13 16.449688 12.673484 17.672516 12.021484 18.603516 C 11.367484 19.533516 10.515797 20 9.4667969 20 C 8.4447969 20 7.6107969 19.550437 6.9667969 18.648438 C 6.3237969 17.747438 6 16.572 6 15.125 C 6 13.596 6.3274219 12.360016 6.9824219 11.416016 C 7.6374219 10.473016 8.5020312 10 9.5820312 10 z M 9.53125 11.996094 C 9.06225 11.996094 8.6900625 12.272266 8.4140625 12.822266 C 8.1380625 13.373266 8 14.102766 8 15.009766 C 8 15.929766 8.1380625 16.656359 8.4140625 17.193359 C 8.6900625 17.728359 9.0510469 17.996094 9.4980469 17.996094 C 9.9580469 17.996094 10.32375 17.737797 10.59375 17.216797 C 10.86475 16.696797 11 15.973828 11 15.048828 C 11 14.085828 10.868469 13.336781 10.605469 12.800781 C 10.344469 12.263781 9.98625 11.996094 9.53125 11.996094 z M 23.5 18 C 21.57 18 20 19.57 20 21.5 C 20 23.43 21.57 25 23.5 25 C 25.43 25 27 23.43 27 21.5 C 27 19.57 25.43 18 23.5 18 z M 23 19 L 24 19 L 24 21 L 26 21 L 26 22 L 24 22 L 23 22 L 23 21 L 23 19 z"></path>
              </svg>{" "}
              &nbsp; ieeecs@outlook.com
            </li>
            <li className="footer-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                fill="white"
                height="25"
                viewBox="0 0 50 50"
              >
                <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M25,28c-0.462,0-0.895-0.113-1.286-0.3 l-6.007,6.007C17.512,33.902,17.256,34,17,34s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l6.007-6.007 C22.113,25.895,22,25.462,22,25c0-1.304,0.837-2.403,2-2.816V8c0-0.553,0.447-1,1-1s1,0.447,1,1v14.184c1.163,0.413,2,1.512,2,2.816 C28,26.657,26.657,28,25,28z"></path>
              </svg>{" "}
              &nbsp; Open to talk
            </li>
          </ul>
        </div>
      </div>
      {/* <hr className="footer-hr" /> */}
      <div className="FooterDown">
      <div className="footer-social-icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          fill="white"
          height="30"
          viewBox="0 0 50 50"
          cursor="pointer"
        >
          <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
        </svg>
        &nbsp;&nbsp;&nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          fill="white"
          viewBox="0 0 50 50"
          cursor="pointer"
        >
          <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
        </svg>
        &nbsp;&nbsp;&nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          fill="white"
          width="30"
          height="30"
          viewBox="0 0 50 50"
          cursor="pointer"
        >
          <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
        </svg>
      </div>
      <p className="footer-text">
        © 2023 Computer Society<br></br>
        New Kandy Rd, Malabe, Sri Lanka
      </p>
      <p className="footer-text">
        IEEE is the world’s largest professional association advancing
        innovation and technological excellence for the benefit of humanity.
        IEEE and its members inspire a global community to innovate for a better
        tomorrow through its highly cited publications, conferences, technology
        standards, and professional and educational activities. IEEE is the
        trusted “voice” for engineering, computing and technology information
        around the globe.
      </p>
      <p className="footer-text">
        ©IEEECS — All rights reserved. Developed by IEEE Computer Society of SLIIT Web development team.
      </p>
      </div>
    </footer>
  );
};

export default Footer;
