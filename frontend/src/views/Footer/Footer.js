import React from "react";
import "./footer.css"; // Create a CSS file for styling
import IEEE from '../../images/logos/IEEEWhite.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={IEEE} alt="logo" clas></img>
      </div>
      <br></br>
      <div className="footer-columns ">
      <p className="text-justify mb-10">
        IEEE is the world’s largest professional association advancing
        innovation and technological excellence for the benefit of humanity.
        IEEE and its members inspire a global community to innovate for a better
        tomorrow through its highly cited publications, conferences, technology
        standards, and professional and educational activities. IEEE is the
        trusted “voice” for engineering, computing and technology information
        around the globe.
      </p>
        <div className="footer-column">
          <h4 className="footer-h4">QUICK LINKS</h4>
          <ul className="footer-ul">
            <a href="/"><li className="footer-li">Home</li></a>
            <a href="/committee"><li className="footer-li">Community Details</li></a>
            <a href="/about"><li className="footer-li">About Us</li></a>
            <a href="/contact-us"><li className="footer-li">Contact Us</li></a>
            <a href="/news"><li className="footer-li">Events</li></a>
          </ul>
        </div>

        <iframe
                        className="rounded-xl w-full  h-full"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126745.6272212363!2d79.829906!3d6.9143985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1721225834362!5m2!1sen!2slk"
                        width="400"
                        height="150"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
        
        {/* <div className="footer-column">
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
        </div> */}
      </div>
      {/* <hr className="footer-hr" /> */}
      <div className="FooterDown">
      <div className="flex gap-4 mx-auto justify-center text-white my-10">
        <a href="http://bit.ly/IEEESLIITFB"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="white"><path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path></svg></a>
        <a href="http://bit.ly/IEEESLIITINSTA">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="white"><path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"></path></svg></a>
        <a href="http://bit.ly/IEEESLIITLINKEDIN">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="white"><path d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fill-rule="evenodd"></path></svg></a>
      </div>
      <p className="footer-text">
        © 2023 Computer Society<br></br>
        New Kandy Rd, Malabe, Sri Lanka
      </p>
      
      <p className="footer-text">
        ©IEEECS — All rights reserved. Developed by IEEE Computer Society of SLIIT Web development team.
      </p>
      </div>
    </footer>
  );
};

export default Footer;
